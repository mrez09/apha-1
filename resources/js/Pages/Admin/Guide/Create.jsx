import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useState } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { toast } from "react-toastify";
import axios from "axios";

export default function Create(props) {
    const { roles } = props;
    const [imageUrl, setImageUrl] = useState("");

    const { data, setData, post, processing, errors } = useForm({
        title: "",
        slug: "",
        category: "",
        visibility: "",
        youtube_url: "",
        thumbnail: "",
        description: "",
        sort_order: 0,
        status: 1,
        roles: [],
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value,
        );
    };

    const handleUpload = async (e) => {
        const file = e.target.files[0];

        if (!file) return;

        let formData = new FormData();
        formData.append("file", file);

        try {
            const res = await axios.post(
                //"/dashboard/guide/upload_guide",
                route("admin.dashboard.guide.upload"),
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                },
            );

            console.log(res.data);

            const uploadedThumbnail = res.data.thumbnail;

            setImageUrl(uploadedThumbnail);
            setData("thumbnail", uploadedThumbnail);

            toast.success("Upload berhasil!");
        } catch (err) {
            toast.error("Upload gagal, coba lagi!");
            console.error("Upload gagal:", err);
        }
    };

    const submit = async (e) => {
        e.preventDefault();
        console.log("Final data sebelum submit:", data);
        if (!data.youtube_url.trim()) {
            toast.warning("Link YouTube wajib diisi!");
            return;
        }

        post(route("admin.dashboard.guide.store"), {
            onSuccess: () => {
                console.log("Guides berhasil disimpan");
                toast.success("Guides berhasil disimpan!");
            },
            onError: (errors) => {
                // looping error laravel
                console.log("Error submit:", errors);
                Object.values(errors).forEach((msg) => toast.error(msg));
            },
        });
    };

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Tambah Guide Pengguna" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Tambah Guide Pengguna</h1>
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
                            <div className="mb-3">
                                <label className="form-label">Judul</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={data.title}
                                    placeholder="Masukan Judul Guides"
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                />

                                <InputError message={errors.roles} />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Icon</label>

                                <input
                                    type="text"
                                    name="icon"
                                    value={data.icon}
                                    onChange={onHandleChange}
                                    className="form-control"
                                    placeholder="fa-solid fa-book"
                                />

                                <small className="text-muted">
                                    Contoh: fa-solid fa-book
                                </small>
                            </div>

                            <div className=" col-md-4 mb-4">
                                <label className="form-label">Kategori</label>
                                <select
                                    className="form-select form-control"
                                    value={data.category}
                                    onChange={(e) =>
                                        setData("category", e.target.value)
                                    }
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
                                <InputError message={errors.roles} />
                            </div>

                            <div className="mb-3 col-md-4">
                                <label className="form-label">Role</label>

                                {roles.map((role) => (
                                    <div className="form-check" key={role.id}>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={`role-${role.id}`}
                                            value={role.id}
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

                                        <label
                                            className="form-check-label"
                                            htmlFor={`role-${role.id}`}
                                        >
                                            {role.name}
                                        </label>
                                    </div>
                                ))}

                                <InputError message={errors.roles} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Link YouTube
                                </label>

                                <input
                                    type="url"
                                    className="form-control"
                                    placeholder="Masukan Link YouTube"
                                    value={data.youtube_url}
                                    onChange={(e) =>
                                        setData("youtube_url", e.target.value)
                                    }
                                />
                                <InputError message={errors.youtube_url} />
                            </div>

                            <div className="col-sm-4">
                                <label className="form-label">
                                    Thumbnail Guide
                                </label>

                                <input
                                    type="file"
                                    name="thumbnail"
                                    placeholder="Masukan Thumbnail Guide"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    //onChange={onHandleChange}
                                    onChange={handleUpload}
                                />

                                <InputError message={errors.thumbnail} />
                                <div>
                                    {imageUrl && (
                                        <img
                                            src={imageUrl}
                                            alt="Preview Thumbnail"
                                            width="300"
                                        />
                                    )}
                                </div>
                                {errors.thumbnail && (
                                    <div className="text-danger">
                                        {errors.thumbnail}
                                    </div>
                                )}
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Sort Order</label>

                                <input
                                    type="number"
                                    className="form-control"
                                    value={data.sort_order}
                                    onChange={(e) =>
                                        setData("sort_order", e.target.value)
                                    }
                                />
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.sort_order}
                                        className="mt-2"
                                    />
                                    <InputError message={errors.sort_order} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Visibility</label>

                                <select
                                    name="visibility"
                                    value={data.visibility}
                                    onChange={onHandleChange}
                                    className="form-select form-control"
                                >
                                    <option value="private">Private</option>
                                    <option value="public">Public</option>
                                </select>
                                <InputError message={errors.visibility} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Status</label>

                                <select
                                    className="form-select form-control"
                                    value={data.status}
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                >
                                    <option value={1}>Aktif</option>
                                    <option value={0}>Nonaktif</option>
                                </select>
                                <InputError message={errors.status} />
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label">
                                    Deskripsi Guide
                                </label>
                                {/*<input
                                    type="text"
                                    name="konten"
                                    placeholder="Masukan Judul"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="judul"
                                    onChange={onHandleChange}
                                    />*/}
                                <CKEditor
                                    editor={ClassicEditor}
                                    name="description"
                                    data=""
                                    onReady={(editor) => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log(
                                            "Editor is ready to use!",
                                            editor,
                                        );
                                    }}
                                    onChange={(event, editor, e) => {
                                        const data = editor.getData();
                                        setData("description", data);

                                        console.log({ event, editor, data });
                                    }}
                                    onBlur={(event, editor) => {
                                        console.log("Blur.", editor);
                                    }}
                                    onFocus={(event, editor) => {
                                        console.log("Focus.", editor);
                                    }}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.description}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <hr className="my-4"></hr>

                            <button
                                className="w-100 btn btn-primary btn-lg"
                                type="submit"
                                processing={processing}
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
