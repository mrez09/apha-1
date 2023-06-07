import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DataTable from "datatables.net-dt";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import NavLink from "@/Components/NavLink";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import { Link, useForm } from "@inertiajs/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];

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
            <Head title="Tambah Pengurus" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Tambah Pengurus</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <a
                            type="button"
                            href="/dashboard/news"
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
                            <div className="col-sm-12">
                                <label className="form-label">
                                    Nama Pengurus
                                </label>

                                <input
                                    type="text"
                                    name="nama"
                                    placeholder="Masukan Nama Pengurus"
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
                                <label className="form-label">
                                    NIP Pengurus
                                </label>

                                <input
                                    type="text"
                                    name="nip"
                                    placeholder="Masukan Nama Pengurus"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="nip"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.nip}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">
                                    NIK Pengurus
                                </label>

                                <input
                                    type="text"
                                    name="nik"
                                    placeholder="Masukan NIK Pengurus"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="nip"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.nik}
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
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.img}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label">Email</label>

                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Masukan Email Pengurus"
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

                            <div className="col-sm-12">
                                <label className="form-label">
                                    Nomor Telpon Pengurus
                                </label>

                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Masukan Nomor Telpon Pengurus"
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
                            <div className="col-md-4">
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
                                    {/*subdivisi.map((subdivisi) => (
                                        //<option value={subdivisi.id}>
                                       //     {subdivisi.namadivisi}
                                        </option>
                                    ))*/}
                                </select>
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.id_divisi}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">
                                    Nama Sub Divisi
                                </label>
                                <select
                                    className="form-control form-select block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="id_divisi"
                                    name="id_divisi"
                                    onChange={onHandleChange}
                                    required
                                >
                                    <option value="">Choose...</option>
                                    {/*subdivisi.map((subdivisi) => (
                                        //<option value={subdivisi.id}>
                                       //     {subdivisi.namadivisi}
                                        </option>
                                    ))*/}
                                </select>
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.id_divisi}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">
                                    Nama Jabatan
                                </label>
                                <select
                                    className="form-control form-select block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="id_divisi"
                                    name="id_divisi"
                                    onChange={onHandleChange}
                                    required
                                >
                                    <option value="">Choose...</option>
                                    {/*subdivisi.map((subdivisi) => (
                                        //<option value={subdivisi.id}>
                                       //     {subdivisi.namadivisi}
                                        </option>
                                    ))*/}
                                </select>
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.id_divisi}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Periode</label>
                                <select
                                    className="form-control form-select block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="id_divisi"
                                    name="id_divisi"
                                    onChange={onHandleChange}
                                    required
                                >
                                    <option value="">Choose...</option>
                                    {/*subdivisi.map((subdivisi) => (
                                        //<option value={subdivisi.id}>
                                       //     {subdivisi.namadivisi}
                                        </option>
                                    ))*/}
                                </select>
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.id_divisi}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div class="mb-3">
                                <label for="category" class="form-label">
                                    Category
                                </label>
                                <select
                                    class="form-control"
                                    name=""
                                    id="category"
                                >
                                    <option hidden>Choose Category</option>

                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>

                            <div class="mb-3">
                                <label for="course" class="form-label">
                                    Course
                                </label>
                                <select
                                    class="form-control"
                                    name="course"
                                    id="course"
                                ></select>
                            </div>

                            <hr className="my-4"></hr>

                            <div className="col-sm-12">
                                <label className="form-label">Deskripsi</label>
                                {/*<input
                                    type="text"
                                    name="konten"
                                    placeholder="Masukan Judul"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="judul"
                                    onChange={onHandleChange}
                                    />*/}
                                <CKEditor
                                    editor={ClassicEditor}
                                    name="konten"
                                    data=""
                                    onReady={(editor) => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log(
                                            "Editor is ready to use!",
                                            editor
                                        );
                                    }}
                                    onChange={(event, editor, e) => {
                                        const data = editor.getData();
                                        setData("konten", data);

                                        console.log({ event, editor, data });
                                    }}
                                    onBlur={(event, editor) => {
                                        console.log("Blur.", editor);
                                    }}
                                    onFocus={(event, editor) => {
                                        console.log("Focus.", editor);
                                    }}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.konten}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label">Pendidikan</label>
                                {/*<input
                                    type="text"
                                    name="konten"
                                    placeholder="Masukan Judul"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="judul"
                                    onChange={onHandleChange}
                                    />*/}
                                <CKEditor
                                    editor={ClassicEditor}
                                    name="pendidikan"
                                    data=""
                                    onReady={(editor) => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log(
                                            "Pendidikan is ready to use!",
                                            editor
                                        );
                                    }}
                                    onChange={(event, editor, e) => {
                                        const data = editor.getData();
                                        setData("pendidikan", data);

                                        console.log({ event, editor, data });
                                    }}
                                    onBlur={(event, editor) => {
                                        console.log("Blur.", editor);
                                    }}
                                    onFocus={(event, editor) => {
                                        console.log("Focus.", editor);
                                    }}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.pendidikan}
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
