import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DataTable from "datatables.net-dt";
import { Head } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import React, { useEffect, useState } from "react";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import { Link, useForm, router } from "@inertiajs/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Select from "react-select";
import axios from "axios";
import { toast } from "react-toastify";

//Tabs
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
    const { guide, roles } = props;
    const [preview, setPreview] = useState(props.guide?.thumbnail || "");
    const [thumbnail, setThumbnail] = useState(props.guide?.thumbnail || "");

    const [loading, setLoading] = useState(false);
    //const changeDate = (e) => setDate(e.target.value);

    useEffect(() => {
        if (props.flash?.message) {
            toast[props.flash.type || "info"](props.flash.message);
        }
    }, [props.flash]);

    useEffect(() => {
        if (props.guide?.id) {
            setData("id", props.guide.id);
        }
    }, [props.guide]);

    const { data, setData, processing, errors } = useForm({
        title: guide.title ?? "",
        slug: guide.slug ?? "",
        category: guide.category ?? "",
        youtube_url: guide.youtube_url ?? "",
        thumbnail: guide.thumbnail ?? "",
        description: guide.description ?? "",
        visibility: guide.visibility ?? "",
        sort_order: guide.sort_order ?? 0,
        status: guide.status ?? 1,

        roles: guide.roles ? guide.roles.map((role) => role.id) : [],
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value,
        );
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
                route("admin.dashboard.guide.upload"),
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                },
            );
            console.log(res.data);

            if (res.data.success) {
                setPreview(res.data.thumbnail);
                setData("thumbnail", res.data.thumbnail);
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
            await axios.delete(
                route("admin.dashboard.guide.delete-image", props.guide.id),
            );

            setPreview("");
            setData("thumbnail", "");

            toast.success("Thumbnail berhasil dihapus!");
        } catch (error) {
            console.error(error);
            toast.error("Gagal menghapus thumbnail.");
        }
    };

    const submit = (e) => {
        e.preventDefault();

        if (loading) {
            toast.error("Tunggu dulu, gambar masih diupload 🚀");
            return;
        }

        if (!data.thumbnail && !data.youtube_url) {
            toast.error("Harap upload thumbnail atau isi link YouTube!");
            return;
        }

        router.post(
            route("admin.dashboard.guide.update", props.guide.id),
            {
                _method: "PUT",
                ...data,
                thumbnail: data.thumbnail,
            },
            {
                onSuccess: () => toast.success("Guide berhasil diupdate!"),
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
            <Head title="Update Guide Asosiasi Pengajar Hukum Adat Indonesia" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">
                    Update Guide Asosiasi Pengajar Hukum Adat Indonesia :{" "}
                    <p>{props.guide.id}</p>
                </h1>

                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <a
                            type="button"
                            href={route("admin.dashboard.guide.index")}
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
                                    Judul Guide
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    defaultValue={props.guide.title}
                                    placeholder="Masukan Judul Guide"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="title"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.title}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Role</label>

                                {roles.map((role) => (
                                    <div className="form-check" key={role.id}>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            checked={data.roles.includes(
                                                role.id,
                                            )}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setData("roles", [
                                                        ...data.roles,
                                                        role.id,
                                                    ]);
                                                } else {
                                                    setData(
                                                        "roles",
                                                        data.roles.filter(
                                                            (id) =>
                                                                id !== role.id,
                                                        ),
                                                    );
                                                }
                                            }}
                                        />

                                        <label className="form-check-label">
                                            {role.name}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label">
                                    Link YouTube
                                </label>
                                <input
                                    type="text"
                                    name="serti_token"
                                    defaultValue={props.guide.youtube_url}
                                    placeholder="Masukan Link Youtube"
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

                            <div className="col-md-4">
                                <label className="form-label">
                                    Status Guide
                                </label>
                                <select
                                    name="status"
                                    value={data.status}
                                    onChange={onHandleChange}
                                    className="form-select"
                                >
                                    <option value={1}>Aktif</option>
                                    <option value={0}>Tidak Aktif</option>
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
                                    className="form-select"
                                >
                                    <option value="">Pilih Kategori</option>
                                    <option value="Introduction">
                                        Introduction
                                    </option>
                                    <option value="Account">Account</option>
                                    <option value="Membership">
                                        Membership
                                    </option>
                                    <option value="Payment">Payment</option>
                                    <option value="Certificate">
                                        Certificate
                                    </option>

                                    <option value="Dashboard">Dashboard</option>
                                    <option value="Member">Member</option>
                                    <option value="Sertifikat">
                                        Sertifikat
                                    </option>
                                    <option value="Event">Event</option>
                                    <option value="News">News</option>
                                    <option value="KTA">KTA</option>
                                    <option value="Kartu Nama">
                                        Kartu Nama
                                    </option>
                                    <option value="Buku">Buku</option>
                                    <option value="Galeri">Galeri</option>
                                    <option value="Committee">Committee</option>
                                    <option value="FAQ">FAQ</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Visibility</label>
                                <select
                                    name="visibility"
                                    value={data.visibility}
                                    onChange={onHandleChange}
                                    className="form-select"
                                >
                                    <option value="">Pilih Kategori</option>
                                    <option value="private">Private</option>
                                    <option value="public">Public</option>
                                </select>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">
                                    Thumbnail Guide
                                </label>

                                <input
                                    type="file"
                                    name="thumbnail"
                                    placeholder="Masukan File"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    onChange={handleFileChange}
                                />

                                {/* Icon trash */}
                                <div className="img-preview-serti">
                                    <p className="text-muted">Preview:</p>
                                    {preview ? (
                                        <img
                                            src={preview}
                                            width="200"
                                            className="mt-3"
                                        />
                                    ) : (
                                        props.guide.thumbnail && (
                                            <img
                                                src={props.guide.thumbnail}
                                                width="200"
                                                className="mt-3"
                                            />
                                        )
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
                                        message={errors.thumbnail}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Sort Order</label>

                                <input
                                    type="number"
                                    name="sort_order"
                                    value={data.sort_order}
                                    onChange={onHandleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label">
                                    Description
                                </label>
                                <div className="">
                                    <InputError
                                        message={errors.description}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <hr className="my-4"></hr>

                            <button
                                className="btn btn-primary btn-lg w-100"
                                disabled={processing}
                            >
                                {processing ? "Mengupdate..." : "Update Guide"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
