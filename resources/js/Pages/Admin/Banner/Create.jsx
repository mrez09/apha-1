import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DataTable from "datatables.net-dt";
import { Head } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import { Link, useForm } from "@inertiajs/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
//import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function List(props) {
    let table = new DataTable("#myTable", {
        // options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    const { setData, post, processing, errors } = useForm({
        name: "",
        slug: "",
        category: "Banner",
        url: "",
        img: "",
        decription: "",
        is_featured: false,
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

        post(route("admin.dashboard.banner.store"));
    };
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Tambah Banner Web" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Tambah Banner Web</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <a
                            type="button"
                            href={route("admin.dashboard.banner.index")}
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
                                    Judul Photo
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Masukan Judul Photo"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="photo"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Url</label>
                                <input
                                    type="text"
                                    id="url"
                                    name="url"
                                    placeholder="Masukan URL Photo"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="tag"
                                    onChange={onHandleChange}
                                />
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.url}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">File</label>
                                <input
                                    type="file"
                                    name="img"
                                    placeholder="Masukan Judul"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    onChange={onHandleChange}
                                />
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.img}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">Feature</label>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        onChange={(e) =>
                                            setData(
                                                "is_featured",
                                                e.target.checked
                                            )
                                        }
                                        className="form-check-input"
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

                            <div className="col-sm-12">
                                <label className="form-label">
                                    Deskripsi Photo
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
                                    name="decription"
                                    data=""
                                    onReady={(editor) => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log(
                                            "Editor is ready to use!",
                                            editor
                                        );
                                    }}
                                    onChange={(event, editor, e) => {
                                        const data = editor.getData();
                                        setData("decription", data);

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
                                        message={errors.decription}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

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
