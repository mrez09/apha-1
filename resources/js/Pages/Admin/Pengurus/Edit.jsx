import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DataTable from "datatables.net-dt";
import { Head } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import React, { useState } from "react";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import { Link, useForm, router } from "@inertiajs/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

//import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
//import sourceEditing from "@ckeditor/ckeditor5-source-editing/src/sourceediting";
//import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
//import sourceEditing from "@ckeditor/ckeditor5-build-classic";
//import { SourceEditing } from "@ckeditor/ckeditor5-source-editing";
//import sourceEditing from "@ckeditor/ckeditor5-source-editing/src/sourceediting";
//import Alignment from "@ckeditor/ckeditor5-build-classic";
//import ClassicEditor from "../../../../../../../texteditor/src/ckeditor";
//import Alignment from "@ckeditor/ckeditor5-build-classic";
//import Markdown from "@ckeditor/ckeditor5-markdown-gfm/src/markdown";

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
        ...props.commitee,
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

        if (data.img == props.commitee.img) {
            delete data.img;
        }

        router.post(
            route("admin.dashboard.commitee.update", props.commitee.id),
            {
                _method: "PUT",
                ...data,
            }
        );
    };
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Update Berita" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">
                    Update Pengurus : <p>{props.commitee.nama} </p>
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
                                    defaultValue={props.commitee.nama}
                                    placeholder="Masukan Judul"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="nama"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.judul}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">File</label>
                                <img
                                    src={`/storage/${props.commitee.img}`}
                                    alt=""
                                />
                                <input
                                    type="file"
                                    name="img"
                                    placeholder="Masukan File"
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

                            <div className="col-md-4">
                                <label className="form-label">Periode</label>
                                <select
                                    className="form-control form-select block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="periode"
                                    name="periode"
                                    onChange={onHandleChange}
                                    required
                                >
                                    <option value="">Choose...</option>

                                    {props.periode.map((periode) => {
                                        if (
                                            props.pengurusget.namaperiode ==
                                            periode.namaperiode
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

                                    {/*
                                    {props.periode.map((periode) => (
                                        <option value={periode.id} selected>
                                            {periode.namaperiode}
                                        </option>
                                    ))}
                                        * */}
                                </select>
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.periode}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Divisi</label>
                                <select
                                    className="form-control form-select block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="divisi"
                                    name="divisi"
                                    onChange={onHandleChange}
                                    required
                                >
                                    <option value="">Choose...</option>
                                    {props.divisiall.map((periode) => {
                                        if (
                                            props.pengurusget.namadivisi ==
                                            periode.namadivisi
                                        ) {
                                            return (
                                                <option
                                                    value={periode.id}
                                                    selected
                                                >
                                                    {periode.namadivisi}
                                                </option>
                                            );
                                        }

                                        return (
                                            <option value={periode.id}>
                                                {periode.namadivisi}
                                            </option>
                                        );
                                    })}
                                </select>
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.periode}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Sub Divisi</label>
                                <select
                                    className="form-control form-select block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="subdivisi"
                                    name="subdivisi"
                                    onChange={onHandleChange}
                                    required
                                >
                                    <option value="">Choose...</option>

                                    {props.subdivisiall.map((periode) => {
                                        if (
                                            props.pengurusget.namasubdivisi ==
                                            periode.namasubdivisi
                                        ) {
                                            return (
                                                <option
                                                    value={periode.id}
                                                    selected
                                                >
                                                    {periode.namasubdivisi}
                                                </option>
                                            );
                                        }

                                        return (
                                            <option value={periode.id}>
                                                {periode.namasubdivisi}
                                            </option>
                                        );
                                    })}
                                </select>
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.periode}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Jabatan</label>
                                <select
                                    className="form-control form-select block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="jabatan"
                                    name="jabatan"
                                    onChange={onHandleChange}
                                    required
                                >
                                    <option value="">Choose...</option>

                                    {props.jabatanall.map((periode) => {
                                        if (
                                            props.pengurusget.namajabatan ==
                                            periode.namajabatan
                                        ) {
                                            return (
                                                <option
                                                    value={periode.id}
                                                    selected
                                                >
                                                    {periode.namajabatan}
                                                </option>
                                            );
                                        }

                                        return (
                                            <option value={periode.id}>
                                                {periode.namajabatan}
                                            </option>
                                        );
                                    })}
                                </select>
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.periode}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            {/* 

                            <div className="col-sm-6">
                                <label className="form-label">
                                    Tanggal Gabung
                                </label>
                                <div className="form-control">
                                    <DatePicker
                                        showIcon
                                        name="publish_at"
                                        selected={startDate}
                                        showTimeSelect={true}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        className="form-control"
                                        //onChange={(e) => setData("publish_at", date)}
                                        onChange={(date) => {
                                            setStartDate(date);
                                            setData("publish_at", date);
                                            console.log({ date });
                                        }}

                                        //onChange={(e) =>
                                        //  setData(
                                        //    "is_featured",
                                        //  e.target.checked
                                        //)
                                        //}
                                        //onChange={onHandleChange}
                                        //onSelect={(date, e) => setStartDate(date)}
                                    />
                                </div>
                            </div>
*/}

                            <div className="col-sm-12">
                                <label className="form-label">Deskripsi</label>
                                {/*<input
                                    type="text"
                                    name="konten"
                                    placeholder="Masukan Judul"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="judul"
                                    onChange={onHandleChange}
                                />
                                <div className="invalid-feedback"></div>*/}
                                <CKEditor
                                    className="konten"
                                    //config={editorConfiguration}
                                    editor={ClassicEditor}
                                    name="description"
                                    data={props.commitee.description}
                                    onReady={(editor) => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log(
                                            "Editor is ready to use!",
                                            editor
                                        );
                                    }}
                                    onChange={(event, editor, e) => {
                                        const data = editor.getData();
                                        setData("description", data);

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
