import AuthenticatedLayout from "@/Layouts/AnggotaLayout";
import { Head } from "@inertiajs/react";
import FlashMessage from "@/Components/FlashMessage";

import React, { useState } from "react";
import InputError from "@/Components/InputError";
import { Link, useForm, router } from "@inertiajs/react";

export default function Profile(props) {
    /*Props Profile ID*/
    const { data, setData, processing, errors } = useForm({
        ...props.anggota,
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

        if (data.img == props.anggota.img) {
            delete data.img;
        }

        router.post(
            route("anggota.dashboard.updateemail", props.anggota.anggota_id),
            {
                _method: "PUT",
                ...data,
            },
        );
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Ubah Biodata Anda
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">
                    <i className="fas ic fa-person"></i>Informasi Account{" "}
                    <p>{props.anggota.no_kta}</p>
                    <p>
                        {
                            //props.anggota.anggota_id
                        }
                    </p>
                    <p>
                        {
                            //props.anggota.user_id
                        }
                    </p>
                </h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <a
                            type="button"
                            href={route("anggota.dashboard.index")}
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Kembali
                        </a>
                    </div>
                </div>{" "}
            </div>
            {/*End Dashboard Title*/}
            <div className="container">
                <div className="row">
                    {props.flashMessage?.message && (
                        <FlashMessage message={props.flashMessage.message} />
                    )}
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="container">
                                <div
                                    className="container px-4 py-5"
                                    id="icon-grid"
                                >
                                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                                        <div className="col d-flex align-items-start">
                                            <i className="fa-solid fa-envelope bi text-muted flex-shrink-0 me-3 fa-2xl"></i>
                                            <div className="item-config">
                                                <Link
                                                    href={route(
                                                        "anggota.dashboard.account.email",
                                                    )}
                                                >
                                                    <h4 className="fw-bold mb-0">
                                                        Email Address
                                                    </h4>
                                                    <p>
                                                        Konfigurasi Email
                                                        Address
                                                    </p>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="col d-flex align-items-start">
                                            <i className="fa-solid fa-key bi text-muted flex-shrink-0 me-3 fa-2xl"></i>
                                            <div className="item-config">
                                                <Link
                                                    href={route(
                                                        "anggota.dashboard.account.password",
                                                    )}
                                                >
                                                    <h4 className="fw-bold mb-0">
                                                        Ganti Password
                                                    </h4>
                                                    <p>Konfigurasi Password</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
