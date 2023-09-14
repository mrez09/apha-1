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

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

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

        post(route("frontkeanggotaan.store"));
        //e.target.reset();
    };
    return (
        <FrontendLayout>
            <Head title="FORMULIR PENDAFTARAN ANGGOTA" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">
                    Formulir Pendaftaran Anggota {props.max_id}
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
            {props.flashMessage?.message && (
                <div>
                    <p>Silahkan Login Sekarang</p>
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
                <div className="row">
                    <h4 className="mb-3"></h4>
                    <form onSubmit={submit}>
                        <div className="row g-3">
                            <br />
                            <h3>Data Diri</h3>
                            <hr />
                            <div className="col-sm-12">
                                <label className="form-label">
                                    Nama Lengkap (Dengan Gelar)
                                </label>

                                <input
                                    type="text"
                                    name="nama"
                                    placeholder="Masukan Nama Lengakap (Dengan Gelar)"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="nama"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.nama}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">NIDN/NIDK</label>

                                <input
                                    type="text"
                                    name="kode"
                                    placeholder="Masukan NIDN/NIDK"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="kode"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.kode}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">Nomer HP</label>

                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Masukan Nomor Telepon"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="phone"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.phone}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label">
                                    Alamat Rumah
                                </label>

                                <input
                                    type="text"
                                    name="alamat"
                                    placeholder="Masukan Alamat"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="alamat"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.alamat}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">
                                    Jenis Kelamin
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
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.status}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">
                                    Photo Pengurus
                                </label>
                                <input
                                    type="file"
                                    name="img"
                                    placeholder="Masukan Judul"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    onChange={onHandleChange}
                                />
                                <div>
                                    <InputError
                                        message={errors.img}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <br />
                            <h3>Instansi</h3>
                            <hr />

                            <div className="col-sm-6">
                                <label className="form-label">
                                    Universitas
                                </label>

                                <input
                                    type="text"
                                    name="universitas"
                                    placeholder="Masukan Nama Universitas"
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

                            <div className="col-sm-6">
                                <label className="form-label">Fakultas</label>

                                <input
                                    type="text"
                                    name="fakultas"
                                    placeholder="Masukan Nama Fakultas"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="fakultas"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.fakultas}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">
                                    Alamat Fakultas
                                </label>

                                <input
                                    type="text"
                                    name="alamatf"
                                    placeholder="Masukan Alamat Fakultas"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="alamatf"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.alamatf}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">
                                    Mata Kuliah Yang di Ampu
                                </label>

                                <input
                                    type="text"
                                    name="mk"
                                    placeholder="Masukan Mata Kuliah yang diampu"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="mk"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.mk}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12">
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
                                <div className="">
                                    <InputError
                                        message={errors.scholar}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label">Id Scopus</label>

                                <input
                                    type="text"
                                    name="scopus"
                                    placeholder="Masukan Id Scopus"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="scopus"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.scopus}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label">ID Sinta</label>

                                <input
                                    type="text"
                                    name="sinta"
                                    placeholder="Masukan Id Sinta"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="scholar"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.scholar}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <hr className="my-4"></hr>

                            <br />
                            <h3>Informasi Akun APHA</h3>
                            <hr className="my-4"></hr>

                            <div className="col-sm-12">
                                <label className="form-label">Email</label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Masukan email"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="email"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">Password</label>

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Masukan Alamat Email"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="password"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="label">Ulangi Password</label>

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

                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>

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
        </FrontendLayout>
    );
}
