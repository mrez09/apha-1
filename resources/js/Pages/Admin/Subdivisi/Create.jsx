import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DataTable from "datatables.net-dt";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import NavLink from "@/Components/NavLink";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import { Link, useForm } from "@inertiajs/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export default function List({ props, subdivisi }) {
    const [startDate, setStartDate] = useState(new Date());
    //const changeDate = (e) => setDate(e.target.value);
    let table = new DataTable("#myTable", {
        // options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    const { setData, post, processing, errors } = useForm({
        namasubdivisi: "",
        id_divisi: "",
        status: "",
        publish_at: "",
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

        post(route("admin.dashboard.subdivisi.store"));
    };
    return (
        <AuthenticatedLayout>
            <Head title="Tambah Berita" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Tambah Sub Divisi</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <a
                            type="button"
                            href={route("admin.dashboard.subdivisi.index")}
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
                            <div className="col-md-6">
                                <label className="form-label">
                                    Nama Divisi
                                </label>
                                <select
                                    className="form-control form-select block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="id_divisi"
                                    name="id_divisi"
                                    onChange={onHandleChange}
                                    required
                                >
                                    <option value="">Choose...</option>
                                    {subdivisi.map((subdivisi) => (
                                        <option value={subdivisi.id}>
                                            {subdivisi.namadivisi}
                                        </option>
                                    ))}
                                </select>
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.id_divisi}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label">
                                    Nama Sub Divisi
                                </label>

                                <input
                                    type="text"
                                    name="namasubdivisi"
                                    placeholder="Masukan Nama Sub Divisi"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="namadivisi"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.namasubdivisi}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Tampilkan di Halaman Pengurus
                                </label>
                                <select
                                    className="form-control form-select block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="status"
                                    name="status"
                                    onChange={onHandleChange}
                                    required
                                >
                                    <option value="">Choose...</option>
                                    <option value="0">Tidak Aktif</option>
                                    <option value="1">Aktif</option>
                                </select>
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.status}
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
