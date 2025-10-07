import FrontendLayout from "@/Layouts/FrontendLayout";
import FlashMessage from "@/Components/FlashMessage";
import DataTable from "datatables.net-dt";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import NavLink from "@/Components/NavLink";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import { Link, useForm } from "@inertiajs/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
//import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Select from "react-select";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

export default function List(props) {
    //
    const [startDate, setStartDate] = useState(new Date());
    //const changeDate = (e) => setDate(e.target.value);
    let table = new DataTable("#myTable", {
        // options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    const { data, setData, post, processing, errors } = useForm({
        nama: "",
        kode: "",
        phone: "",
        alamat: "",
        img: "",

        universitas: "",
        fakultas: "",
        alamatf: "",
        mk: "",
        scholar: "",
        scopus: "",
        sinta: "",

        email: "",
        password: "",
        password_confirmation: "",
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

        post(route("frontkeanggotaan.store"));
        //e.target.reset();
    };
    return (
        <FrontendLayout>
            <Head title="FORMULIR PENDAFTARAN ANGGOTA" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"></div>
            {/*End Dashboard Title*/}
            {props.flashMessage?.message && (
                <FlashMessage message={props.flashMessage.message} />
            )}
            {props.flashMessage?.message && (
                <div>
                    <p>Anda Sudah Bisa Login Sekarang</p>
                    <a
                        className="btn btn-success btn-lg"
                        aria-current="page"
                        href="/login"
                    >
                        Login
                    </a>
                </div>
            )}

            <div className="container">
                <header className="header">
                    <h1 id="title" className="text-center">
                        Formulir Pendaftaran Anggota
                    </h1>
                    <p id="description" className="text-center">
                        Silahkan Isi Form Pendaftaran Dibawah
                    </p>
                </header>
                <div className="form-wrap">
                    <form onSubmit={submit}>
                        <div className="row">
                            <br />
                            <h3>Data Diri</h3>
                            <hr />
                            <span className="text-danger">
                                Kolom dengan tanda bintang (*) wajib diisi
                            </span>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="form-label">
                                        Nama Lengkap (Dengan Gelar){" "}
                                        <span className="text-danger">*</span>
                                    </label>

                                    <input
                                        type="text"
                                        name="nama"
                                        placeholder="Masukan Nama Lengkap (Dengan Gelar)"
                                        className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        autoComplete="nama"
                                        onChange={onHandleChange}
                                    />

                                    {(() => {
                                        if (errors.nama) {
                                            return (
                                                <div className="text-danger">
                                                    <InputError
                                                        message="Nama Lengkap Wajib Diisi"
                                                        className="mt-2"
                                                    />
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div className="text-danger">
                                                    &nbsp;
                                                </div>
                                            );
                                        }
                                    })()}
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label className="form-label">
                                        NIDN/NIDK
                                        <span className="text-danger">*</span>
                                    </label>

                                    <input
                                        type="text"
                                        name="kode"
                                        value={data.kode}
                                        placeholder="Masukan NIDN/NIDK"
                                        className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        autoComplete="kode"
                                        onChange={onHandleChange}
                                    />
                                    {(() => {
                                        if (errors.kode) {
                                            return (
                                                <div className="text-danger">
                                                    <InputError
                                                        message="Silahkan Isi NIDN atau NIDK anda"
                                                        className="mt-2"
                                                    />
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div className="text-danger">
                                                    &nbsp;
                                                </div>
                                            );
                                        }
                                    })()}
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label className="form-label">
                                        Nomer HP
                                        <span className="text-danger">*</span>
                                    </label>

                                    <input
                                        type="text"
                                        name="phone"
                                        value={data.phone}
                                        placeholder="Masukan Nomor Telepon"
                                        className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        autoComplete="phone"
                                        onChange={onHandleChange}
                                    />

                                    {(() => {
                                        if (errors.phone) {
                                            return (
                                                <div className="text-danger">
                                                    <InputError
                                                        message="Harap Isi Nomor Telepon yang belum digunakan"
                                                        className="mt-2"
                                                    />
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div className="text-danger">
                                                    &nbsp;
                                                </div>
                                            );
                                        }
                                    })()}
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="form-label">
                                        Alamat Rumah
                                        <span className="text-danger">*</span>
                                    </label>

                                    <input
                                        type="text"
                                        name="alamat"
                                        value={data.alamat}
                                        placeholder="Masukan Alamat"
                                        className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        autoComplete="alamat"
                                        onChange={onHandleChange}
                                    />

                                    {(() => {
                                        if (errors.alamat) {
                                            return (
                                                <div className="text-danger">
                                                    <InputError
                                                        message="Alamat Anda Wajib Diisi"
                                                        className="mt-2"
                                                    />
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div className="text-danger">
                                                    &nbsp;
                                                </div>
                                            );
                                        }
                                    })()}
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label className="form-label">
                                        Jenis Kelamin
                                        <span className="text-danger">*</span>
                                    </label>
                                    <select
                                        className="form-control form-select block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        id="jk"
                                        name="jk"
                                        onChange={onHandleChange}
                                    >
                                        <option value="">Choose...</option>
                                        <option value="lk">Laki-Laki</option>
                                        <option value="pr">Perempuan</option>
                                    </select>

                                    {(() => {
                                        if (errors.jk) {
                                            return (
                                                <div className="text-danger">
                                                    <InputError
                                                        message="Harap Pilih Jenis Kelamin Anda"
                                                        className="mt-2"
                                                    />
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div className="text-danger">
                                                    &nbsp;
                                                </div>
                                            );
                                        }
                                    })()}
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label className="form-label">
                                        Photo Anggota
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="file"
                                        name="img"
                                        placeholder="Masukan Judul"
                                        className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        onChange={onHandleChange}
                                    />
                                    {(() => {
                                        if (errors.img) {
                                            return (
                                                <div className="text-danger">
                                                    <InputError
                                                        message={errors.img}
                                                        className="mt-2"
                                                    />
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div className="text-danger">
                                                    &nbsp;
                                                </div>
                                            );
                                        }
                                    })()}
                                </div>
                            </div>

                            <br />
                            <h3>Instansi</h3>
                            <hr />

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label className="form-label">
                                        Universitas
                                        <span className="text-danger">*</span>
                                    </label>

                                    <input
                                        type="text"
                                        name="universitas"
                                        value={data.universitas}
                                        placeholder="Masukan Nama Universitas"
                                        className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        autoComplete="universitas"
                                        onChange={onHandleChange}
                                    />
                                    {(() => {
                                        if (errors.universitas) {
                                            return (
                                                <div className="text-danger">
                                                    <InputError
                                                        message="Harap Masukan Universitas Tempat Anda Mengabdi"
                                                        className="mt-2"
                                                    />
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div className="text-danger">
                                                    &nbsp;
                                                </div>
                                            );
                                        }
                                    })()}
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label className="form-label">
                                        Fakultas
                                        <span className="text-danger">*</span>
                                    </label>

                                    <input
                                        type="text"
                                        name="fakultas"
                                        value={data.fakultas}
                                        placeholder="Masukan Nama Fakultas"
                                        className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        autoComplete="fakultas"
                                        onChange={onHandleChange}
                                    />
                                    {(() => {
                                        if (errors.fakultas) {
                                            return (
                                                <div className="text-danger">
                                                    <InputError
                                                        message="Harap Masukan Fakultas Tempat Anda Mengabdi"
                                                        className="mt-2"
                                                    />
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div className="text-danger">
                                                    &nbsp;
                                                </div>
                                            );
                                        }
                                    })()}
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label className="form-label">
                                        Alamat Fakultas
                                        <span className="text-danger">*</span>
                                    </label>

                                    <input
                                        type="text"
                                        name="alamatf"
                                        value={data.alamatf}
                                        placeholder="Masukan Alamat Fakultas"
                                        className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        autoComplete="alamatf"
                                        onChange={onHandleChange}
                                    />

                                    {(() => {
                                        if (errors.alamatf) {
                                            return (
                                                <div className="text-danger">
                                                    <div className="text-danger">
                                                        <InputError
                                                            message="Alamat Fakultas Tempat Anda Mengabdi Wajib diisi"
                                                            className="mt-2"
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div className="text-danger">
                                                    &nbsp;
                                                </div>
                                            );
                                        }
                                    })()}
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label className="form-label">
                                        Mata Kuliah Yang di Ampu
                                        <span className="text-danger">*</span>
                                    </label>

                                    <input
                                        type="text"
                                        name="mk"
                                        value={data.mk}
                                        placeholder="Masukan Mata Kuliah yang diampu"
                                        className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        autoComplete="mk"
                                        onChange={onHandleChange}
                                    />

                                    {(() => {
                                        if (errors.mk) {
                                            return (
                                                <div className="text-danger">
                                                    <div className="text-danger">
                                                        <InputError
                                                            message="Mata Kuliah Wajib diisi | Jika Lebih dari satu harap gunakan tanda koma"
                                                            className="mt-2"
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div className="text-danger">
                                                    &nbsp;
                                                </div>
                                            );
                                        }
                                    })()}
                                </div>
                            </div>
                            {/*Publish*/}
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="form-label">
                                        Google Scholar
                                    </label>

                                    <input
                                        type="text"
                                        name="scholar"
                                        placeholder="Masukan Link Google Sholar"
                                        className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        autoComplete="scholar"
                                        onChange={onHandleChange}
                                    />
                                    {(() => {
                                        if (errors.scholar) {
                                            return (
                                                <div className="text-danger">
                                                    <InputError
                                                        message={errors.scholar}
                                                        className="mt-2"
                                                    />
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div className="text-danger">
                                                    &nbsp;
                                                </div>
                                            );
                                        }
                                    })()}
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="form-label">
                                        Id Scopus
                                    </label>

                                    <input
                                        type="text"
                                        name="scopus"
                                        placeholder="Masukan Id Scopus"
                                        className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        autoComplete="scopus"
                                        onChange={onHandleChange}
                                    />
                                    {(() => {
                                        if (errors.scopus) {
                                            return (
                                                <div className="text-danger">
                                                    <InputError
                                                        message={errors.scopus}
                                                        className="mt-2"
                                                    />
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div className="text-danger">
                                                    &nbsp;
                                                </div>
                                            );
                                        }
                                    })()}
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="form-label">
                                        ID Sinta
                                    </label>

                                    <input
                                        type="text"
                                        name="sinta"
                                        placeholder="Masukan Id Sinta"
                                        className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        autoComplete="sinta"
                                        onChange={onHandleChange}
                                    />

                                    {(() => {
                                        if (errors.sinta) {
                                            return (
                                                <div className="text-danger">
                                                    <InputError
                                                        message={errors.sinta}
                                                        className="mt-2"
                                                    />
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div className="text-danger">
                                                    &nbsp;
                                                </div>
                                            );
                                        }
                                    })()}
                                </div>
                            </div>
                            {/*Form Akun*/}
                            <br />
                            <h3>Informasi Akun APHA</h3>
                            <hr className="my-4"></hr>

                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="form-label">
                                        Email{" "}
                                        <span className="text-danger">*</span>
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Masukan email"
                                        className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        autoComplete="email"
                                        onChange={onHandleChange}
                                    />

                                    <div className="text-danger">
                                        <InputError
                                            message={errors.email}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label className="form-label">
                                        Password
                                        <span className="text-danger">*</span>
                                    </label>

                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Masukan Alamat Password"
                                        className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        autoComplete="password"
                                        onChange={onHandleChange}
                                    />
                                    <div className="text-danger">
                                        <InputError
                                            message={errors.password}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label className="label">
                                        Ulangi Password
                                        <span className="text-danger">*</span>
                                    </label>

                                    <input
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        placeholder="Repeat Password"
                                        className="block form-control text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        autoComplete="new-password"
                                        onChange={onHandleChange}
                                    />

                                    <div className="text-danger">
                                        <InputError
                                            message={
                                                errors.password_confirmation
                                            }
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/*end Of FOrm */}
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <button
                                    className="btn btn-primary btn-lg"
                                    type="submit"
                                    //processing={processing}
                                >
                                    Simpan
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </FrontendLayout>
    );
}
