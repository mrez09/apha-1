import AnggotaLayout from "@/Layouts/AnggotaLayout";
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

    const { data, setData, post, processing, errors } = useForm({
        invoice_id: props.invoice.id,
        title: props.invoice.description ?? "",
        transfer_date: moment().format("YYYY-MM-DD"),
        proof_file: null,
        message: "",
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

        post(route("anggota.dashboard.paymentproof.store"));
    };
    return (
        <AnggotaLayout auth={props.auth} errors={props.errors}>
            <Head title="Upload Payment Proof" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Upload Payment Proof</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <a
                            type="button"
                            href={route("anggota.dashboard.paymentproof.index")}
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
                            <h3>Invoice Information</h3>
                            <p className="form-label">
                                Invoice Number : {props.invoice.invoice_number}
                            </p>
                            <p>
                                Product :
                                {props.invoice.items
                                    .map((item) => item.item_name)
                                    .join(", ")}
                            </p>

                            <p>
                                Amount : Rp{" "}
                                {Number(
                                    props.invoice.total_amount,
                                ).toLocaleString("id-ID")}
                            </p>
                            <p> Status : Waiting Payment</p>
                        </div>
                        <div className="row g-3">
                            <div className="mb-3">
                                <label className="form-label">
                                    Payment Invoice
                                </label>

                                <div className="form-control bg-light">
                                    {props.invoice.description ??
                                        props.invoice.items
                                            .map((item) => item.item_name)
                                            .join(", ")}
                                </div>
                            </div>

                            <div>
                                <label className="form-label">Date</label>
                                <input
                                    type="date"
                                    name="transfer_date"
                                    value={data.transfer_date}
                                    onChange={onHandleChange}
                                    className="form-control"
                                />
                                <div className="">
                                    <InputError
                                        message={errors.transfer_date}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">
                                    File Pendukung
                                </label>
                                <input
                                    type="file"
                                    name="proof_file"
                                    accept=".jpg,.jpeg,.png,.pdf"
                                    onChange={onHandleChange}
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                />
                                <div className="">
                                    <InputError
                                        message={errors.proof_file}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label">Message</label>

                                <textarea
                                    rows="5"
                                    name="message"
                                    value={data.message}
                                    onChange={onHandleChange}
                                    className="form-control"
                                    placeholder="Contoh: Transfer menggunakan rekening BCA atas nama Budi."
                                ></textarea>
                                <div className="">
                                    <InputError
                                        message={errors.message}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <hr className="my-4"></hr>

                            <div className="mt-4 text-end">
                                <Link
                                    href={route(
                                        "anggota.dashboard.member.invoices.index",
                                    )}
                                    className="btn btn-secondary me-2"
                                >
                                    Cancel
                                </Link>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={processing}
                                >
                                    Upload Payment Proof
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AnggotaLayout>
    );
}
