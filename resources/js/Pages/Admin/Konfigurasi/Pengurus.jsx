import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DataTable from "datatables.net-dt";
import { Head } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import React, { useState } from "react";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import { Link, useForm, router } from "@inertiajs/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import FlashMessage from "@/Components/FlashMessage";

export default function List(props) {
    const [startDate, setStartDate] = useState(new Date());
    //const changeDate = (e) => setDate(e.target.value);

    let table = new DataTable("#myTable", {
        // options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    const { data, setData, processing, errors } = useForm({
        ...props.konfigurasi,
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

        if (data.img == props.konfigurasi.img) {
            delete data.img;
        }

        if (data.fav == props.konfigurasi.fav) {
            delete data.fav;
        }

        router.post(
            route(
                "admin.dashboard.konfigurasi.updatepengurus",
                props.konfigurasi.id,
            ),
            {
                _method: "PUT",
                ...data,
            },
        );
    };
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Update Berita" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">
                    Pengaturan Pengurus yang tampil diHalaman Dewan Pembina dan
                    Dewan Pengurus {props.konfigurasi.namawebsite}
                </h1>

                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <a
                            type="button"
                            href={route("admin.dashboard.commitee.index")}
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Kembali
                        </a>
                    </div>
                </div>
            </div>
            {/*End Dashboard Title*/}

            {props.flashMessage?.message && (
                <FlashMessage message={props.flashMessage.message} />
            )}

            <div className="container">
                <div className="row">
                    <h4 className="mb-3"></h4>
                    <form onSubmit={submit}>
                        <div className="row g-3">
                            <div className="col-md-12">
                                <label className="form-label">Pengurus</label>
                                <select
                                    className="form-control form-select block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="pengurus"
                                    name="pengurus"
                                    onChange={onHandleChange}
                                    required
                                >
                                    <option value="">Choose...</option>

                                    {props.periode.map((periode) => {
                                        if (
                                            props.periodeget.pengurus ==
                                            periode.id
                                        ) {
                                            return (
                                                <option
                                                    value={periode.id}
                                                    selected
                                                >
                                                    {periode.namaperiode}
                                                </option>
                                            );
                                        }

                                        return (
                                            <option value={periode.id}>
                                                {periode.namaperiode}
                                            </option>
                                        );
                                    })}
                                </select>
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.pengurus}
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
