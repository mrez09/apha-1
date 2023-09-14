import AuthenticatedLayout from "@/Layouts/AnggotaLayout";
import { Head } from "@inertiajs/react";
import FlashMessage from "@/Components/FlashMessage";

import React, { useState } from "react";
import InputError from "@/Components/InputError";
import { Link, useForm, router } from "@inertiajs/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";

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
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.img == props.anggota.img) {
            delete data.img;
        }

        router.post(
            route("anggota.dashboard.updateinstansi", props.anggota.anggota_id),
            {
                _method: "PUT",
                ...data,
            }
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
                    <i className="fas ic fa-person"></i>Edit Institusi{" "}
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
                                {/*File Awal
                                <div className="row g-5 mt-2">
                                    <div className="col-md-6 img-center">
                                        <img
                                            src={`/storage/${props.anggota.img}`}
                                            className="rounded img-fluid img-thumb book-thumbnail img-thumbnail mb-5"
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-md-6 mt-5   ">
                                        <article className="blog-post ">
                                            <table className="tb-progota">
                                                <tbody>
                                                    <tr>
                                                        <td className="tb-iprofile">
                                                            No. Kta
                                                        </td>
                                                        <td className="tb-profile">
                                                            :{" "}
                                                            {(() => {
                                                                if (
                                                                    props
                                                                        .anggota
                                                                        .no_kta ==
                                                                        null ||
                                                                    props
                                                                        .anggota
                                                                        .no_kta ==
                                                                        ""
                                                                ) {
                                                                    return (
                                                                        <span>
                                                                            Belum
                                                                            Terbit
                                                                        </span>
                                                                    );
                                                                } else {
                                                                    return (
                                                                        <span>
                                                                            {
                                                                                props
                                                                                    .anggota
                                                                                    .no_kta
                                                                            }
                                                                        </span>
                                                                    );
                                                                }
                                                            })()}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Nama</td>
                                                        <td>
                                                            :{" "}
                                                            {props.anggota.name}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>NIDN/NIDK</td>
                                                        <td>
                                                            :{" "}
                                                            {props.anggota.kode}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jenis Kelamin</td>
                                                        {(() => {
                                                            if (
                                                                props.anggota
                                                                    .jk == "lk"
                                                            ) {
                                                                return (
                                                                    <td>
                                                                        : Laki
                                                                        Laki
                                                                    </td>
                                                                );
                                                            } else if (
                                                                props.anggota
                                                                    .jk == "pr"
                                                            ) {
                                                                return (
                                                                    <td>
                                                                        Perempuan
                                                                    </td>
                                                                );
                                                            }
                                                        })()}
                                                    </tr>
                                                    <tr>
                                                        <td>Alamat</td>
                                                        <td>
                                                            :{" "}
                                                            {
                                                                props.anggota
                                                                    .alamat
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>No Telpon</td>
                                                        <td>
                                                            :{" "}
                                                            {
                                                                props.anggota
                                                                    .phone
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Email</td>
                                                        <td>
                                                            :{" "}
                                                            {
                                                                props.anggota
                                                                    .email
                                                            }
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <h4>Institusi</h4>
                                            <table className="tb-progota">
                                                <tr>
                                                    <td className="tb-iprofile">
                                                        Universitas
                                                    </td>
                                                    <td className="tb-profile">
                                                        :{" "}
                                                        {
                                                            props.anggota
                                                                .universitas
                                                        }
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Fakultas</td>
                                                    <td>
                                                        :{" "}
                                                        {props.anggota.fakultas}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Alamat Fakultas</td>
                                                    <td>
                                                        :{" "}
                                                        {props.anggota.alamatf}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Mata Kuliah</td>
                                                    <td>
                                                        : {props.anggota.mk}
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>Link Google Scholar</td>
                                                    <td>
                                                        :{" "}
                                                        {props.anggota.scholar}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Id Scopus</td>
                                                    <td>
                                                        : {props.anggota.scopus}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Link Google Sinta</td>
                                                    <td>
                                                        : {props.anggota.sinta}
                                                    </td>
                                                </tr>
                                            </table>
                                            <hr />
                                        </article>
                                        <h5 className="card-title">
                                            Status Keanggotaan Anda
                                        </h5>
                                        <a href="#" className="btn btn-primary">
                                            {(() => {
                                                if (props.anggota.status == 0) {
                                                    return <h6>Belum Aktif</h6>;
                                                } else {
                                                    return <h6>Aktif</h6>;
                                                }
                                            })()}
                                        </a>
                                    </div>

                                    
                                </div>

                                */}

                                <form onSubmit={submit}>
                                    <div className="row g-3">
                                        <div className="col-sm-12">
                                            <input
                                                type="hidden"
                                                name="anggota_id"
                                                defaultValue={
                                                    props.anggota.anggota_id
                                                }
                                                placeholder="No KTA Belum Terbit"
                                                className="form-control not-allowed block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                                autoComplete="anggota_id"
                                                onChange={onHandleChange}
                                            />
                                            <div className="">
                                                <InputError
                                                    message={errors.anggota_id}
                                                    className="mt-2"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <input
                                                type="hidden"
                                                name="user_id"
                                                defaultValue={
                                                    props.anggota.user_id
                                                }
                                                placeholder="Masukan User ID"
                                                className="form-control not-allowed block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                                autoComplete="user_id"
                                                onChange={onHandleChange}
                                            />
                                            <div className="">
                                                <InputError
                                                    message={errors.user_id}
                                                    className="mt-2"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <input
                                                type="hidden"
                                                name="com_id"
                                                defaultValue={
                                                    props.anggota.com_id
                                                }
                                                placeholder="Masukan User ID"
                                                className="form-control not-allowed block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                                autoComplete="com_id"
                                                onChange={onHandleChange}
                                            />
                                            <div className="">
                                                <InputError
                                                    message={errors.com_id}
                                                    className="mt-2"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <label className="form-label">
                                                Nama Universitas
                                            </label>
                                            <input
                                                type="text"
                                                name="universitas"
                                                defaultValue={
                                                    props.anggota.universitas
                                                }
                                                placeholder="Masukan Universitas"
                                                className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                                autoComplete="universitas"
                                                onChange={onHandleChange}
                                            />
                                            <div className="">
                                                <InputError
                                                    message={errors.universitas}
                                                    className="mt-2"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">
                                                Nama Fakultas
                                            </label>
                                            <input
                                                type="text"
                                                id="fakultas"
                                                name="fakultas"
                                                placeholder="Masukan Nama Fakultas"
                                                defaultValue={
                                                    props.anggota.fakultas
                                                }
                                                className="editor form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                                autoComplete="fakultas"
                                                onChange={onHandleChange}
                                            />
                                            <div>
                                                <InputError
                                                    message={errors.fakultas}
                                                    className="mt-2"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <label className="form-label">
                                                Mata Kuliah
                                            </label>
                                            <input
                                                type="text"
                                                id="mk"
                                                name="mk"
                                                placeholder="Masukan Mata Kuliah"
                                                defaultValue={props.anggota.mk}
                                                className="editor form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                                autoComplete="mk"
                                                onChange={onHandleChange}
                                            />
                                            <div>
                                                <InputError
                                                    message={errors.mk}
                                                    className="mt-2"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <label className="form-label">
                                                Alamat Fakultas
                                            </label>
                                            <input
                                                type="text"
                                                id="alamat"
                                                name="alamatf"
                                                placeholder="Masukan Alamat Fakultas"
                                                defaultValue={
                                                    props.anggota.alamatf
                                                }
                                                className="editor form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                                autoComplete="alamatf"
                                                onChange={onHandleChange}
                                            />
                                            <div>
                                                <InputError
                                                    message={errors.alamatf}
                                                    className="mt-2"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <label className="form-label">
                                                Link Google Scholar
                                            </label>
                                            <input
                                                type="text"
                                                id="scholar"
                                                name="scholar"
                                                placeholder="Masukan Link Google Scholar"
                                                defaultValue={
                                                    props.anggota.scholar
                                                }
                                                className="editor form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                                autoComplete="scholar"
                                                onChange={onHandleChange}
                                            />
                                            <div>
                                                <InputError
                                                    message={errors.scholar}
                                                    className="mt-2"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <label className="form-label">
                                                ID Scopus
                                            </label>
                                            <input
                                                type="text"
                                                id="scopus"
                                                name="scopus"
                                                placeholder="Masukan ID scopus"
                                                defaultValue={
                                                    props.anggota.scopus
                                                }
                                                className="editor form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                                autoComplete="scopus"
                                                onChange={onHandleChange}
                                            />
                                            <div>
                                                <InputError
                                                    message={errors.scopus}
                                                    className="mt-2"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <label className="form-label">
                                                ID Sinta
                                            </label>
                                            <input
                                                type="text"
                                                id="sinta"
                                                name="sinta"
                                                placeholder="Masukan ID Sinta"
                                                defaultValue={
                                                    props.anggota.sinta
                                                }
                                                className="editor form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                                autoComplete="sinta"
                                                onChange={onHandleChange}
                                            />
                                            <div>
                                                <InputError
                                                    message={errors.sinta}
                                                    className="mt-2"
                                                />
                                            </div>
                                        </div>

                                        {
                                            //featured
                                            /*<div className="col-sm-12">
                                <label className="form-label">Feature</label>
                                <div className="form-check">
                                    <input
                                        name="is_featured"
                                        type="checkbox"
                                        onChange={(e) =>
                                            setData(
                                                "is_featured",
                                                e.target.checked
                                            )
                                        }
                                        className="form-check-input"
                                        checked={props.news.is_featured}
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
                            */
                                        }

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
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
