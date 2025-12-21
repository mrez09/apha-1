import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DataTable from "datatables.net-dt";
import { Head } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import { Link, useForm, router } from "@inertiajs/react";

export default function List(props) {
    let table = new DataTable("#myTable", {
        // options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    const { data, setData, processing, errors } = useForm({
        ...props.video,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value,
        );
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.img == props.video.img) {
            delete data.img;
        }

        router.post(route("admin.dashboard.video.update", props.video.id), {
            _method: "PUT",
            ...data,
        });
    };
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Update Galeri Video" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">
                    Update Photo : <p>{props.video.name}</p>
                </h1>

                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link
                            type="button"
                            href={route("admin.dashboard.video.index")}
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Kembali
                        </Link>
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
                                <label className="form-label">Nama Photo</label>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={props.video.name}
                                    placeholder="Masukan Nama Photo"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="nama photo"
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
                                <label className="form-label">
                                    URL Eksternal
                                </label>
                                <input
                                    type="text"
                                    id="url"
                                    name="url"
                                    placeholder="Masukan URL Eksternal"
                                    defaultValue={props.video.url}
                                    className="editor form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
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
                                <img
                                    src={`/storage/${props.video.img}`}
                                    alt=""
                                />
                                <input
                                    type="file"
                                    name="img"
                                    placeholder="Masukan File"
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

                            <div className="col-md-4">
                                <label className="form-label">
                                    Status Video
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
                                        if (props.video.is_featured == 0) {
                                            return (
                                                <option value="0" selected>
                                                    Draft
                                                </option>
                                            );
                                        } else {
                                            return (
                                                <option value="0">Draft</option>
                                            );
                                        }
                                    })()}

                                    {(() => {
                                        if (props.video.is_featured == 1) {
                                            return (
                                                <option value="1" selected>
                                                    Publish
                                                </option>
                                            );
                                        } else {
                                            return (
                                                <option value="1">
                                                    Publish
                                                </option>
                                            );
                                        }
                                    })()}
                                </select>
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.category}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label">Isi</label>
                                <div className="">
                                    <InputError
                                        message={errors.konten}
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
