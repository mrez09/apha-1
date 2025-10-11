import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DataTable from "datatables.net-dt";
import { Head } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import React, { useEffect, useState } from "react";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import { Link, useForm, router } from "@inertiajs/react";
//import { CKEditor } from "@ckeditor/ckeditor5-react";
//import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Select from "react-select";
import axios from "axios";
import { toast } from "react-toastify";

//Tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const editorConfiguration = {
    codeBlock: {
        languages: [
            { language: "css", label: "CSS" },
            { language: "html", label: "HTML" },
        ],
    },
    //plugins: [Alignment],
    //alignment: {
    //  options: ["left", "right"],
    //},
    toolbar: [
        "sourceEditing",
        "undo",
        "redo",
        "heading",
        "style",
        "|",
        "fontFamily",
        "fontSize",
        "fontColor",
        "fontBackgroundColor",
        "bold",
        "italic",
        "underline",
        "link",
        "alignment",
        "|",
        "bulletedList",
        "numberedList",
        "outdent",
        "indent",
        "todoList",
        "pageBreak",
        "|",
        "imageUpload",
        "imageInsert",
        "mediaEmbed",
        "-",
        "code",
        "htmlEmbed",
        "codeBlock",
        "|",
        "insertTable",
        "blockQuote",
        "specialCharacters",
        "superscript",
        "subscript",
        "strikethrough",
        "horizontalLine",
        "|",
        "removeFormat",
        "findAndReplace",
        "selectAll",
    ],
    image: {
        toolbar: [
            "imageTextAlternative",
            "toggleImageCaption",
            "imageStyle:inline",
            "imageStyle:block",
            "imageStyle:side",
            "linkImage",
        ],
    },
};

export default function Edit(props) {
    const [preview, setPreview] = useState(props.sertifikat?.img || "");
    const [previewlink, setPreviewlink] = useState(
        props.sertifikat?.link || "",
    );
    const [imgUrl, setImgUrl] = useState(props.sertifikat?.img || "");
    const [loading, setLoading] = useState(false);
    //const changeDate = (e) => setDate(e.target.value);

    let table = new DataTable("#myTable", {
        // options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    useEffect(() => {
        if (props.flash?.message) {
            toast[props.flash.type || "info"](props.flash.message);
        }
    }, [props.flash]);

    useEffect(() => {
        if (props.sertifikat?.id_user) {
            setData("id_user", props.sertifikat.id_user);
        }
    }, [props.sertifikat]);

    const optionuser =
        props.usercategory &&
        props.usercategory.map((usercategory) => {
            return {
                label: usercategory.name,
                value: usercategory.id,
            };
        });

    const { data, setData, processing, put, errors } = useForm({
        ...props.sertifikat,
        id_user: props.sertifikat?.id_user || "",
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value,
        );
    };

    const handlePreviewlink = (e) => {
        onHandleChange(e);

        // update preview saat user ngetik link
        setPreviewlink(e.target.value);
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Preview dulu
        setPreview(URL.createObjectURL(file));

        // Upload ke ImageKit
        const formData = new FormData();
        formData.append("file", file);

        setLoading(true);
        try {
            const res = await axios.post(
                "/dashboard/sertifikat/upload-sertifikat",
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                },
            );

            if (res.data.success) {
                setImgUrl(res.data.img);
                setData("img", res.data.img);
                toast.success("Gambar berhasil diupload 🚀");
            } else {
                toast.error("Upload gagal");
            }
        } catch (err) {
            console.error(err);
            toast.error("Terjadi error saat upload");
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteImage = async () => {
        try {
            // reset state biar UI kosong
            setPreview(null);
            setImgUrl(null);
            setData("file", null);

            // panggil API untuk hapus dari DB
            await axios.delete(
                `/dashboard/sertifikat/upload-sertifikat/${props.sertifikat.id}/delete-image`,
            );

            toast.success("Gambar berhasil dihapus!");
        } catch (error) {
            console.error("Error deleting image:", error);
            toast.error("Gagal menghapus gambar.");
        }
    };

    const submit = (e) => {
        e.preventDefault();

        if (loading) {
            toast.error("Tunggu dulu, gambar masih diupload 🚀");
            return;
        }

        if (!imgUrl && !data.link) {
            toast.error("Harap upload gambar atau isi link dulu!");
            return;
        }

        router.post(
            route("admin.dashboard.sertifikat.update", props.sertifikat.id),
            {
                _method: "PUT",
                ...data,
                img: imgUrl,
            },
            {
                onSuccess: () => toast.success("Sertifikat berhasil diupdate!"),
                onError: (errors) => {
                    // tampilkan semua error validasi di toast
                    Object.values(errors).forEach((msg) => {
                        toast.error(msg);
                    });
                },
            },
        );
    };
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Update Sertifikat Asosiasi Pengajar Hukum Adat Indonesia" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">
                    Update Sertifikat Asosiasi Pengajar Hukum Adat Indonesia :{" "}
                    <p>{props.sertifikat.no}</p>
                </h1>

                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <a
                            type="button"
                            href={route("admin.dashboard.sertifikat.index")}
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Kembali
                        </a>
                    </div>
                </div>
            </div>
            {/*End Dashboard Title*/}

            <div className="container">
                <div className="row">
                    <h4 className="mb-3"></h4>
                    <form onSubmit={submit}>
                        <div className="row g-3">
                            <div className="col-sm-12">
                                <label className="form-label">
                                    No Sertifikat
                                </label>
                                <input
                                    type="text"
                                    name="no"
                                    defaultValue={props.sertifikat.no}
                                    placeholder="Masukan No Sertifikat"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="judul"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.no}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Diberikan Kepada
                                </label>

                                <Select
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="id_user"
                                    name="id_user"
                                    // cari option yang sesuai dengan id_user sertifikat
                                    value={
                                        optionuser.find(
                                            (opt) =>
                                                String(opt.value) ===
                                                String(data.id_user),
                                        ) || null
                                    }
                                    options={optionuser}
                                    onChange={(selected) => {
                                        console.log("Before:", data.id_user);
                                        setData("id_user", selected.value);
                                        console.log("After:", selected.value);
                                    }}
                                />
                                <div className="text-danger">
                                    <InputError
                                        message={errors.id_user}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label">Token</label>
                                <input
                                    type="text"
                                    name="serti_token"
                                    defaultValue={props.sertifikat.serti_token}
                                    placeholder="Masukan Token Sertifikat"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="serti_token"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.serti_token}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label">
                                    Nama Pemilik
                                </label>
                                <input
                                    type="text"
                                    name="nama"
                                    placeholder="Masukan Nama Pemilik"
                                    defaultValue={props.sertifikat.nama}
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="nama"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.nama}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <label className="form-label">
                                    Judul Sertifikat
                                </label>
                                <input
                                    type="text"
                                    name="judul"
                                    defaultValue={props.sertifikat.judul}
                                    placeholder="Masukan Judul Sertifikat"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="judul"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.judul}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Status Sertifikat
                                </label>
                                <select
                                    className="form-control form-select block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="is_featured"
                                    name="status"
                                    onChange={onHandleChange}
                                    required
                                >
                                    <option value="">Choose...</option>

                                    {(() => {
                                        if (props.sertifikat.status == 0) {
                                            return (
                                                <option value="0" selected>
                                                    Tidak Aktif
                                                </option>
                                            );
                                        } else {
                                            return (
                                                <option value="0">
                                                    Tidak Aktif
                                                </option>
                                            );
                                        }
                                    })()}

                                    {(() => {
                                        if (props.sertifikat.status == 1) {
                                            return (
                                                <option value="1" selected>
                                                    Aktif
                                                </option>
                                            );
                                        } else {
                                            return (
                                                <option value="1">Aktif</option>
                                            );
                                        }
                                    })()}
                                </select>
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.status}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Category</label>
                                <select
                                    name="category"
                                    value={data.category}
                                    onChange={onHandleChange}
                                    className="form-control  mb-3form-select block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                >
                                    <option value="">Pilih Kategori</option>

                                    <option value="Seminar">Seminar</option>
                                    <option value="Workshop">Workshop</option>
                                    <option value="Pelatihan">Pelatihan</option>
                                    <option value="Webinar">Webinar</option>
                                    <option value="Narasumber">
                                        Narasumber
                                    </option>
                                    <option value="Moderator">Moderator</option>
                                    <option value="Panitia">Panitia</option>
                                    <option value="Pemateri">Pemateri</option>
                                    <option value="Keanggotaan">
                                        Keanggotaan
                                    </option>
                                    <option value="Penghargaan">Awards</option>
                                    <option value="Lainnya">Lainnya</option>
                                </select>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">
                                    Tanggal Sertifikat
                                </label>
                                <div className="form-control">
                                    <DatePicker
                                        showIcon
                                        name="publish_at"
                                        selected={startDate}
                                        showTimeSelect={true}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        //onChange={(e) => setData("publish_at", date)}
                                        onChange={(date) => {
                                            setStartDate(date);
                                            setData("publish_at", date);
                                            console.log({ date });
                                        }}
                                    />
                                </div>
                                <div className="">
                                    <InputError
                                        message={errors.publish_at}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">
                                    Tanggal Expired
                                </label>
                                <div className="form-control">
                                    <DatePicker
                                        isClearable
                                        placeholderText="Berlaku Permanen"
                                        className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        selected={expiredDate}
                                        showTimeSelect
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        onChange={(date) => {
                                            setExpiredDate(date);
                                            setData("expired_date", date);
                                        }}
                                    />
                                </div>
                                <div className="">
                                    <InputError
                                        message={errors.publish_at}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <hr />
                            <h3>File Sertifikat</h3>
                            <p>Harap Pilih Salah Satu</p>

                            <Tabs>
                                <TabList>
                                    <Tab>Upload Image</Tab>
                                    <Tab>Link Image</Tab>
                                </TabList>

                                <TabPanel>
                                    <div className="col-sm-6">
                                        <label className="form-label">
                                            File
                                        </label>

                                        <input
                                            type="file"
                                            name="file"
                                            placeholder="Masukan File"
                                            className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                            onChange={handleFileChange}
                                        />

                                        {/* Icon trash */}
                                        <div className="img-preview-serti">
                                            <p className="text-muted">
                                                Preview:
                                            </p>
                                            {preview && (
                                                <img
                                                    src={preview}
                                                    alt="preview"
                                                    className="mt-3"
                                                    width="200"
                                                />
                                            )}
                                            {/* Preview gambar */}
                                            {preview && (
                                                <button
                                                    type="button"
                                                    onClick={handleDeleteImage}
                                                    className="btn btn-danger btn-sm btn-delimg"
                                                >
                                                    🗑 delete
                                                </button>
                                            )}
                                            {loading && <p>Uploading...</p>}
                                        </div>

                                        <div className="invalid-feedback">
                                            <InputError
                                                message={errors.file}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="col-sm-12">
                                        <label className="form-label">
                                            Link Sertifikat
                                        </label>
                                        <input
                                            type="text"
                                            name="link"
                                            defaultValue={props.sertifikat.link}
                                            placeholder="Masukan Link Sertifikat"
                                            className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                            autoComplete="link"
                                            onChange={handlePreviewlink}
                                        />
                                        {/** validasi sederhana */}

                                        <div className="">
                                            <InputError
                                                message={errors.link}
                                                className="mt-2"
                                            />
                                        </div>

                                        {/* preview image */}
                                        {previewlink && (
                                            <div className="mt-3">
                                                <p className="text-muted">
                                                    Preview:
                                                </p>
                                                <img
                                                    src={previewlink}
                                                    alt="Preview Sertifikat"
                                                    className="mt-3"
                                                    width="200"
                                                    onError={(e) => {
                                                        // kalo link bukan gambar valid
                                                        e.target.style.display =
                                                            "none";
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </TabPanel>
                            </Tabs>

                            <hr className="my-4"></hr>

                            <button
                                className="w-100 btn btn-primary btn-lg"
                                type="submit"
                            >
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
