import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DataTable from "datatables.net-dt";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import NavLink from "@/Components/NavLink";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import { Link, useForm } from "@inertiajs/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
//import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export default function Create(props) {
    const [startDate, setStartDate] = useState(new Date());
    const current = new Date();
    const date = `${current.getDate()}${
        current.getMonth() + 1
    }${current.getFullYear()}`;
    //const changeDate = (e) => setDate(e.target.value);
    let table = new DataTable("#myTable", {
        // options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    const { setData, post, processing, errors } = useForm({
        id_user: "",
        no_invoice: "",
        judul: "",
        subjudul: "",
        slug_judul: "",
        img: "",
        status: "",
        konten: "",
        message: "",
        is_featured: false,
        tanggal_bayar: "",
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

        post(route("anggota.dashboard.payment.store"));
    };
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Tambah Payment" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h5 className="mb-4">Form Bukti Pembayaran</h5>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <a
                            type="button"
                            href={route("admin.dashboard.payment.index")}
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Kembali
                        </a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <form onSubmit={submit}>
                        <div className="row g-3">
                            {/* User */}
                            <div className="col-sm-6">
                                <label className="form-label">
                                    Jumlah Bayar
                                </label>
                                <input
                                    type="number"
                                    name="amount"
                                    placeholder="Masukan jumlah (Rp)"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    onChange={onHandleChange}
                                />
                                <InputError
                                    message={errors.amount}
                                    className="text-danger mt-1"
                                />
                            </div>

                            {/* Amount */}
                            <div className="col-sm-6">
                                <label className="form-label">
                                    Jenis Pembayaran
                                </label>
                                <select
                                    name="type"
                                    className="form-select block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    onChange={onHandleChange}
                                >
                                    <option value="">-- Pilih --</option>
                                    <option value="seminar">Seminar</option>
                                    <option value="tahunan">
                                        Iuran Tahunan
                                    </option>
                                    <option value="lainnya">Lainnya</option>
                                </select>
                                <InputError
                                    message={errors.type}
                                    className="text-danger mt-1"
                                />
                            </div>

                            {/* Method */}
                            <div className="col-sm-6">
                                <label className="form-label">
                                    Bukti Transfer
                                </label>
                                <input
                                    type="file"
                                    name="proof"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    onChange={onHandleChange}
                                />
                                <InputError
                                    message={errors.proof}
                                    className="text-danger mt-1"
                                />
                            </div>

                            {/* Keterangan / Message */}
                            <div className="col-sm-12">
                                <label className="form-label">Catatan</label>
                                <textarea
                                    name="message"
                                    rows="3"
                                    className="form-control"
                                    placeholder="Contoh: Pembayaran seminar nasional"
                                    onChange={onHandleChange}
                                />
                                <InputError
                                    message={errors.message}
                                    className="text-danger mt-1"
                                />
                            </div>

                            <hr className="my-4" />

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
