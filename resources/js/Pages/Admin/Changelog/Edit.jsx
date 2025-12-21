import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Create({ auth, releaseNote, errors, nextVersion }) {
    //const { releaseNote } = props;
    const { data, setData, put, processing } = useForm({
        version: releaseNote.version,
        title: releaseNote.title,
        description: releaseNote.description,
        status: releaseNote.status,
    });

    const submit = (e) => {
        e.preventDefault();

        put(route("admin.dashboard.changelog.update", releaseNote.id));
    };

    return (
        <AuthenticatedLayout auth={auth} errors={errors}>
            <Head title="Tambah Guide Pengguna" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Tambah Release Note </h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <a
                            type="button"
                            href={route("admin.dashboard.changelog.index")}
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
                            <div className="col-md-8 mb-3">
                                <label className="form-label">Judul</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    placeholder="Masukan Judul"
                                />

                                <InputError message={errors.title} />
                            </div>

                            <div className="col-md-8 mb-3">
                                <label className="form-label">Version</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={data.version}
                                    onChange={(e) =>
                                        setData("version", e.target.value)
                                    }
                                    placeholder="v2.1.0"
                                />

                                <InputError message={errors.version} />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Status</label>

                                <select
                                    className="form-select form-control"
                                    value={data.status}
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                >
                                    <option value={1}>Published</option>
                                    <option value={0}>Draft</option>
                                </select>
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.sort_order}
                                        className="mt-2"
                                    />
                                    <InputError message={errors.sort_order} />
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label">
                                    Deskripsi Guide
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
