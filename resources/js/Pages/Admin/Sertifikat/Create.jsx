import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DataTable from "datatables.net-dt";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import NavLink from "@/Components/NavLink";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import { Link, useForm } from "@inertiajs/react";
//import { CKEditor } from "@ckeditor/ckeditor5-react";
//import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Select from "react-select";

//Tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function List(props) {
    const [users, setUsers] = useState();
    const [userId, setUserId] = useState();

    const option =
        props.newscategory &&
        props.newscategory.map((newscategory) => {
            return {
                label: newscategory.name,
                value: newscategory.id,
            };
        });

    const [startDate, setStartDate] = useState(new Date());
    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ];
    //const changeDate = (e) => setDate(e.target.value);
    let table = new DataTable("#myTable", {
        // options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    const { setData, post, processing, errors } = useForm({
        no: "",
        nama: "",
        nama: "",
        id_user: "",
        judul: "",
        status: "",
        img: "",
        link: "",
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

    const submit = async (e) => {
        e.preventDefault();

        let imageUrl = data.link;

        if (data.img instanceof File) {
            const formData = new FormData();
            formData.append("file", data.img);

            const uploadRes = await fetch("/upload-imagekit", {
                method: "POST",
                body: formData,
            });

            const result = await uploadRes.json();
            if (result.success) {
                imageUrl = result.url;
                setData("link", imageUrl);
            } else {
                alert("Upload gagal");
                return;
            }
        }

        post(route("admin.dashboard.sertifikat.store"));
    };

    /* old
    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.sertifikat.store"));
    };
    */

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Tambah Sertifikat" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Tambah Sertifikat</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <a
                            type="button"
                            href={route("admin.dashboard.document.index")}
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
                                    No Sertifikat
                                </label>
                                <input
                                    type="text"
                                    name="no"
                                    placeholder="Masukan Nomer Sertifikat"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="no"
                                    onChange={onHandleChange}
                                />
                                <div className="text-danger">
                                    <InputError
                                        message={errors.no}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Diberikan Kepada
                                </label>

                                {/* 
                                <Select
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="id_user"
                                    name="id_user"
                                    options={props.newscategory.map(
                                        (newscategory) => {
                                            return {
                                                value: newscategory.id,
                                                label: newscategory.name,
                                            };
                                        }
                                    )}
                                    onChange={(option) =>
                                        setUserId(option.value)
                                    }
                                />
                                */}

                                <Select
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="id_user"
                                    name="id_user"
                                    value={option.label}
                                    options={option}
                                    onChange={(option) => {
                                        setUserId(option.value);
                                        setData("id_user", option.value);
                                        console.log(option.value);
                                    }}
                                />

                                <div className="text-danger">
                                    <InputError
                                        message={errors.id_user}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label">
                                    Nama Pemilik
                                </label>
                                <input
                                    type="text"
                                    name="nama"
                                    placeholder="Masukan Nama Pemilik"
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
                            <div className="col-sm-12">
                                <label className="form-label">
                                    Judul Sertifikat
                                </label>
                                <input
                                    type="text"
                                    name="judul"
                                    placeholder="Masukan Judul Sertifikat"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="judul"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.judul}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">
                                    Status Sertifikat
                                </label>
                                <select
                                    className="form-control  mb-3form-select block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="status"
                                    name="status"
                                    onChange={onHandleChange}
                                    required
                                >
                                    <option value="">Choose...</option>
                                    <option value="0">Tidak Aktif</option>
                                    <option value="1">Aktif</option>
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
                                    Tanggal Acara
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
                                <div className="">
                                    <InputError
                                        message={errors.publish_at}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <hr />
                            <h3>File Sertifikat</h3>
                            <p>Harap Pilih Salah Satu</p>
                            <Tabs>
                                <TabList>
                                    <Tab>Upload Image</Tab>
                                    <Tab>Link Image</Tab>
                                </TabList>

                                <TabPanel>
                                    <div className="col-sm-6">
                                        <label className="form-label">
                                            File
                                        </label>
                                        <input
                                            type="file"
                                            name="img"
                                            placeholder="Masukan File Sertifikat"
                                            className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                            onChange={onHandleChange}
                                        />
                                        <div className="">
                                            <InputError
                                                message={errors.img}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="col-sm-12">
                                        <label className="form-label">
                                            Link Sertifikat
                                        </label>
                                        <input
                                            type="text"
                                            name="link"
                                            placeholder="Masukan Link Sertifikat"
                                            className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                            autoComplete="link"
                                            onChange={onHandleChange}
                                        />
                                        <div className="">
                                            <InputError
                                                message={errors.link}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                </TabPanel>
                            </Tabs>
                            {
                                //is featured new
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
        </AuthenticatedLayout>
    );
}
