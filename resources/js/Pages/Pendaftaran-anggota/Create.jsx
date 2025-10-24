import FrontendLayout from "@/Layouts/FrontendLayout";
import FlashMessage from "@/Components/FlashMessage";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export default function List(props) {
    //
    //const [startDate, setStartDate] = useState(new Date());
    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
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
                    {props.flash?.message && (
                        <FlashMessage
                            message={props.flash.message}
                            type={props.flash.type}
                        />
                    )}
                    <form onSubmit={submit}>
                        <div className="row">
                            <br />
                            <h3>Data Diri</h3>
                            {Object.keys(errors).length > 0 && (
                                <div className="validation-alert mb-4">
                                    <div className="d-flex align-items-start">
                                        <div className="validation-icon me-3">
                                            <i className="fas fa-circle-exclamation"></i>
                                        </div>

                                        <div className="flex-grow-1">
                                            <div className="fw-bold mb-1">
                                                Data belum lengkap
                                            </div>

                                            <p className="mb-2 text-muted small">
                                                Mohon periksa kembali data
                                                berikut sebelum melanjutkan.
                                            </p>

                                            <ul className="mb-0 ps-3">
                                                {Object.values(errors)
                                                    .slice(0, 2)
                                                    .map((error, index) => (
                                                        <li key={index}>
                                                            {error}
                                                        </li>
                                                    ))}
                                            </ul>

                                            {Object.keys(errors).length > 2 && (
                                                <div className="mt-2 small fw-semibold">
                                                    dan{" "}
                                                    {Object.keys(errors)
                                                        .length - 2}{" "}
                                                    error lainnya...
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}{" "}
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

                                    <InputError message={errors.nama} />
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
                                    <InputError message={errors.kode} />
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
                                    <InputError message={errors.phone} />
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

                                    <InputError message={errors.alamat} />
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

                                    <InputError message={errors.jk} />
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
                                    <InputError message={errors.img} />
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
                                    <InputError message={errors.universitas} />
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
                                    <InputError message={errors.fakultas} />
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

                                    <InputError message={errors.alamatf} />
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

                                    <InputError message={errors.mk} />
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
                                        className={`block form-control text-sm py-3 px-4 rounded-lg w-full border outline-none ${
                                            errors.email ? "is-invalid" : ""
                                        }`}
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
                                <div className="form-group password-wrapper">
                                    <label className="form-label">
                                        Password
                                        <span className="text-danger">*</span>
                                    </label>

                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        name="password"
                                        placeholder="Masukan Alamat Password"
                                        className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        value={data.password}
                                        autoComplete="current-password"
                                        onChange={onHandleChange}
                                    />
                                    <button
                                        type="button"
                                        className="password-daftar"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    >
                                        <i
                                            className={`fas ${
                                                showPassword
                                                    ? "fa-eye-slash"
                                                    : "fa-eye"
                                            }`}
                                        ></i>
                                    </button>
                                </div>
                                <div className="text-danger">
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group password-wrapper">
                                    <label className="label">
                                        Ulangi Password
                                        <span className="text-danger">*</span>
                                    </label>

                                    <input
                                        id="password_confirmation"
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        name="password_confirmation"
                                        //value={data.password_confirmation}
                                        placeholder="Repeat Password"
                                        className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        autoComplete="new-password"
                                        onChange={onHandleChange}
                                    />
                                    <button
                                        type="button"
                                        className="password-daftar "
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword,
                                            )
                                        }
                                    >
                                        <i
                                            className={`fas ${
                                                showConfirmPassword
                                                    ? "fa-eye-slash"
                                                    : "fa-eye"
                                            }`}
                                        ></i>
                                    </button>
                                </div>
                                <div className="text-danger">
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            {/*end Of FOrm */}
                        </div>

                        <div className="row">
                            <div className="col-md-4 mt-2">
                                <button
                                    className="btn btn-apha btn-lg"
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
