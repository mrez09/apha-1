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

//Tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

//import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
//import sourceEditing from "@ckeditor/ckeditor5-source-editing/src/sourceediting";

//import sourceEditing from "@ckeditor/ckeditor5-build-classic";
//import { SourceEditing } from "@ckeditor/ckeditor5-source-editing";
//import sourceEditing from "@ckeditor/ckeditor5-source-editing/src/sourceediting";
//import Alignment from "@ckeditor/ckeditor5-build-classic";
//import ClassicEditor from "../../../../../../../texteditor/src/ckeditor";
//import Alignment from "@ckeditor/ckeditor5-build-classic";
//import Markdown from "@ckeditor/ckeditor5-markdown-gfm/src/markdown";

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

export default function List(props) {
    const [startDate, setStartDate] = useState(new Date());
    //const changeDate = (e) => setDate(e.target.value);

    let table = new DataTable("#myTable", {
        // options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    useEffect(() => {
        if (props.sertifikat?.id_user) {
            setData("id_user", props.sertifikat.id_user);
        }
    }, [props.sertifikat]);

    const option =
        props.usercategory &&
        props.usercategory.map((usercategory) => {
            return {
                label: usercategory.name,
                value: usercategory.id,
            };
        });

    const { data, setData, processing, errors } = useForm({
        ...props.document,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.img == props.document.file) {
            delete data.img;
        }

        router.post(
            route("admin.dashboard.document.update", props.document.id),
            {
                _method: "PUT",
                ...data,
            }
        );
    };
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Update Sertifikat Asosiasi Pengajar Hukum Adat Indonesia" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">
                    Update Sertifikat Asosiasi Pengajar Hukum Adat Indonesia :{" "}
                    <p>{props.sertifikat.title}</p>
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
                                    name="title"
                                    defaultValue={props.sertifikat.no}
                                    placeholder="Masukan No Sertifikat"
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
                                    Diberikan Kepada
                                </label>

                                {/* 
                                <Select
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="id_user"
                                    name="id_user"
                                    options={props.newscategory.map(
                                        (newscategory) => {
                                            return {
                                                value: newscategory.id,
                                                label: newscategory.name,
                                            };
                                        }
                                    )}
                                    onChange={(option) =>
                                        setUserId(option.value)
                                    }
                                />
                                */}

                                <Select
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="id_user"
                                    name="id_user"
                                    // cari option yang sesuai dengan id_user sertifikat
                                    value={
                                        option.find(
                                            (opt) =>
                                                String(opt.value) ===
                                                String(
                                                    props.sertifikat?.id_user
                                                )
                                        ) || null
                                    }
                                    options={option}
                                    onChange={(selected) => {
                                        setUserId(selected.value);
                                        setData("id_user", selected.value);
                                        console.log(
                                            "Selected user:",
                                            selected.value
                                        );
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
                                    name="is_featured"
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
                                        className="form-control"
                                        //onChange={(e) => setData("publish_at", date)}
                                        onChange={(date) => {
                                            setStartDate(date);
                                            setData("publish_at", date);
                                            console.log({ date });
                                        }}

                                        //onChange={(e) =>
                                        //  setData(
                                        //    "is_featured",
                                        //  e.target.checked
                                        //)
                                        //}
                                        //onChange={onHandleChange}
                                        //onSelect={(date, e) => setStartDate(date)}
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
                                            onChange={onHandleChange}
                                        />
                                        {/* Preview gambar */}
                                        {props.sertifikat.img && (
                                            <div className="mt-3">
                                                <img
                                                    src={props.sertifikat.img}
                                                    alt="Preview"
                                                    className="max-h-48 rounded-lg shadow-md border"
                                                />
                                            </div>
                                        )}
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
                                            placeholder="Masukan Link Sertifikat"
                                            className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                            autoComplete="link"
                                            onChange={onHandleChange}
                                        />
                                        {/** validasi sederhana */}

                                        <div className="">
                                            <InputError
                                                message={errors.link}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                </TabPanel>
                            </Tabs>

                            {
                                //featured
                                /*<div className="col-sm-12">
                                <label className="form-label">Feature</label>
                                <div className="form-check">
                                    <input
                                        name="is_featured"
                                        type="checkbox"
                                        onChange={(e) =>
                                            setData(
                                                "is_featured",
                                                e.target.checked
                                            )
                                        }
                                        className="form-check-input"
                                        checked={props.news.is_featured}
                                    />
                                    <label className="form-check-label">
                                        Berita Ditampilkan sebagai
                                        fitur/rekomendasi
                                    </label>
                                    <div className="invalid-feedback">
                                        <InputError
                                            message={errors.is_featured}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                            </div>
                            */
                            }

                            <hr className="my-4"></hr>

                            <button
                                className="w-100 btn btn-primary btn-lg"
                                type="submit"
                                //processing={processing}
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
