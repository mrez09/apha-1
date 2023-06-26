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

export default function List({ featuredBuku, contact, props }) {
    const [startDate, setStartDate] = useState(new Date());
    //const changeDate = (e) => setDate(e.target.value);
    let table = new DataTable("#myTable", {
        // options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    const { setData, post, processing, errors } = useForm({
        judul: "",
        slug: "",
        category: "",
        tag: "",
        img: "",
        konten: "",
        view: 0,
        is_featured: false,
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

        post(route("admin.dashboard.news.store"));
    };
    return (
        <AuthenticatedLayout>
            <Head title="Tambah Berita" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Detail Pesan</h1>

                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <a
                            type="button"
                            href={route("admin.dashboard.contact.index")}
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
                    <div class="my-3 p-3 bg-body rounded shadow-sm">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h6 class="border-bottom pb-2 mb-0">
                                ID Pesan : {contact.id}
                            </h6>

                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group me-2">
                                    {
                                        contact.read === 0 ? ( // if has image
                                            <button
                                                type="button"
                                                href="/dashboard/news"
                                                disabled
                                                className="btn btn-success "
                                            >
                                                Belum dibaca
                                            </button>
                                        ) : (
                                            // return My image tag
                                            <button
                                                type="button"
                                                href="/dashboard/news"
                                                disabled
                                                className="btn btn-secondary "
                                            >
                                                Sudah dibaca
                                            </button>
                                        ) // otherwise return other element
                                    }
                                    &nbsp;
                                    <button
                                        type="button"
                                        href="/dashboard/news"
                                        disabled
                                        className="btn btn-secondary "
                                    >
                                        Sudah dibalas
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/*Table*/}
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td width={75}>Nama Depan </td>
                                    <td width={5}>:</td>
                                    <td width={350}>{contact.firstname}</td>
                                </tr>
                                <tr>
                                    <td>Nama Belakang</td>
                                    <td>:</td>
                                    <td>{contact.lastname}</td>
                                </tr>
                                <tr>
                                    <td>Nama Lengkap</td>
                                    <td>:</td>
                                    <td>
                                        {contact.firstname} {contact.lastname}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>:</td>
                                    <td>{contact.email}</td>
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                    <td>:</td>
                                    <td>{contact.phone}</td>
                                </tr>
                                <tr>
                                    <td>Message</td>
                                    <td>:</td>
                                    <td>{contact.message}</td>
                                </tr>
                            </tbody>
                        </table>

                        <small class="d-block text-end mt-3">
                            <a href="#">Tandai Sudah Dibaca</a>
                        </small>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
