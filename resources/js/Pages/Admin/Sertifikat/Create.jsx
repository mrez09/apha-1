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
import axios from "axios";
import { toast } from "react-toastify";

//Tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function List(props) {
    const [users, setUsers] = useState();
    const [userId, setUserId] = useState();
    const [imageUrl, setImageUrl] = useState("");

    const option =
        props.newscategory &&
        props.newscategory.map((newscategory) => {
            return {
                label: newscategory.name,
                value: newscategory.id,
            };
        });

    //const [startDate, setStartDate] = useState(new Date());

    const [startDate, setStartDate] = useState(
        props.newscategory.start_date
            ? new Date(props.newscategory.start_date)
            : new Date(),
    );
    const [expiredDate, setExpiredDate] = useState(null);

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

    const { data, setData, post, processing, errors, reset } = useForm({
        no: "",
        nama: "",
        id_user: "",
        judul: "",
        category: "",
        serti_token: "",
        status: "",
        img: "",
        link: "",
        publish_at: "",
        expired_date: "",
        konten: "",
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value,
        );
    };

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        let formData = new FormData();
        formData.append("file", file);

        try {
            const res = await axios.post(
                "/dashboard/sertifikat/upload-sertifikat",
                formData,
                { headers: { "Content-Type": "multipart/form-data" } },
            );

            const imageUrl = res.data.img;

            setImageUrl(imageUrl);
            setData("img", imageUrl);

            toast.success("Upload berhasil!");
        } catch (err) {
            toast.error("Upload gagal, coba lagi!");
            console.error("Upload gagal:", err);
        }
    };

    const submit = async (e) => {
        e.preventDefault();
        console.log("Final data sebelum submit:", data);
        if (
            (!data.img || data.img === "") &&
            (!data.link || data.link.trim() === "")
        ) {
            toast.warning("Harus upload gambar atau isi link eksternal!");
            console.log("tidak ada gambar atau link:", data);
            return;
        }

        post(route("admin.dashboard.sertifikat.store"), {
            onSuccess: () => {
                console.log("Sertifikat berhasil disimpan");
                toast.success("Sertifikat berhasil disimpan!");
            },
            onError: (errors) => {
                // looping error laravel
                console.log("Error submit:", errors);
                Object.values(errors).forEach((msg) => toast.error(msg));
            },
        });
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
                            href={route("admin.dashboard.sertifikat.index")}
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

                            <div className="col-md-4">
                                <label className="form-label">Category</label>
                                <select
                                    className="form-control  mb-3form-select block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    name="category"
                                    value={data.category}
                                    onChange={onHandleChange}
                                >
                                    <option value="">Pilih Kategori</option>

                                    <option value="Seminar">Seminar</option>

                                    <option value="Workshop">Workshop</option>

                                    <option value="Pelatihan">Pelatihan</option>

                                    <option value="Webinar">Webinar</option>

                                    <option value="Narasumber">
                                        Narasumber
                                    </option>

                                    <option value="Moderator">Moderator</option>

                                    <option value="Panitia">Panitia</option>

                                    <option value="Pemateri">Pemateri</option>

                                    <option value="Keanggotaan">
                                        Keanggotaan
                                    </option>

                                    <option value="Penghargaan">Awards</option>

                                    <option value="Lainnya">Lainnya</option>
                                </select>
                            </div>

                            {/*<div className="col-sm-6">
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
                            */}

                            <div className="col-sm-6">
                                <label className="form-label">
                                    Tanggal Mulai
                                </label>
                                <div className="form-control">
                                    <DatePicker
                                        selected={startDate}
                                        showTimeSelect
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        onChange={(date) => {
                                            setStartDate(date);
                                            setData("publish_at", date);
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">
                                    Expired Date
                                </label>
                                <div className="form-control">
                                    <DatePicker
                                        selected={expiredDate}
                                        isClearable
                                        placeholderText="Berlaku Permanen"
                                        showTimeSelect
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        onChange={(date) => {
                                            setExpiredDate(date);
                                            setData("expired_date", date);
                                        }}
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
                                            //onChange={onHandleChange}
                                            onChange={handleUpload}
                                        />

                                        <div className="">
                                            <InputError
                                                message={errors.img}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div>
                                            {imageUrl && (
                                                <img
                                                    src={imageUrl}
                                                    alt="Preview Sertifikat"
                                                    width="300"
                                                />
                                            )}
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
