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
//import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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

const editorConfiguration = {
    codeBlock: {
        languages: [
            { language: "css", label: "CSS" },
            { language: "html", label: "HTML" },
        ],
    },
    //plugins: [Alignment],
    //alignment: {
    //  options: ["left", "right"],
    //},
    toolbar: [
        "sourceEditing",
        "undo",
        "redo",
        "heading",
        "style",
        "|",
        "fontFamily",
        "fontSize",
        "fontColor",
        "fontBackgroundColor",
        "bold",
        "italic",
        "underline",
        "link",
        "alignment",
        "|",
        "bulletedList",
        "numberedList",
        "outdent",
        "indent",
        "todoList",
        "pageBreak",
        "|",
        "imageUpload",
        "imageInsert",
        "mediaEmbed",
        "-",
        "code",
        "htmlEmbed",
        "codeBlock",
        "|",
        "insertTable",
        "blockQuote",
        "specialCharacters",
        "superscript",
        "subscript",
        "strikethrough",
        "horizontalLine",
        "|",
        "removeFormat",
        "findAndReplace",
        "selectAll",
    ],
    image: {
        toolbar: [
            "imageTextAlternative",
            "toggleImageCaption",
            "imageStyle:inline",
            "imageStyle:block",
            "imageStyle:side",
            "linkImage",
        ],
    },
};

export default function List(props) {
    const [startDate, setStartDate] = useState(
        props.member.start_date
            ? new Date(props.member.start_date)
            : new Date(),
    );
    const [expiredDate, setExpiredDate] = useState(
        props.member.expired_date
            ? new Date(props.member.expired_date)
            : new Date(),
    );
    let table = new DataTable("#myTable", {
        // options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    const { data, setData, processing, errors } = useForm({
        ...props.member,
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

        if (data.img == props.member.img) {
            delete data.img;
        }

        router.post(route("admin.dashboard.member.update", props.member.id), {
            _method: "PUT",
            ...data,
        });
    };
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Update Anggota" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">
                    Update Member : <p>{props.member.nama}</p>
                </h1>

                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <a
                            type="button"
                            href={route("admin.dashboard.member.index")}
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
                            <div className="col-sm-8">
                                <label className="form-label">No KTA</label>
                                <input
                                    type="text"
                                    name="no_kta"
                                    defaultValue={props.member.no_kta}
                                    placeholder="Masukan Nama Nomer Kartu Anggota"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="no_kta"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.no_kta}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-8">
                                <label className="form-label">
                                    Nama Lengkap (Dengan Gelar)
                                </label>
                                <input
                                    type="text"
                                    name="nama"
                                    defaultValue={props.member.nama}
                                    placeholder="Masukan Nama Lengkap"
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
                                    defaultValue={props.member.kode}
                                    placeholder="Masukan NIDN atau NIDK"
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
                                    defaultValue={props.member.phone}
                                    placeholder="Masukan NIDN atau NIDK"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="kode"
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
                                    defaultValue={props.member.alamat}
                                    placeholder="Masukan NIDN atau NIDK"
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

                            <div className="col-md-6">
                                <label className="form-label">
                                    Jenis Kelamin
                                </label>
                                <select
                                    className="form-control form-select block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="jk"
                                    name="jk"
                                    onChange={onHandleChange}
                                    required
                                >
                                    <option value="">Choose...</option>

                                    {(() => {
                                        if (props.member.jk == "lk") {
                                            return (
                                                <option value="lk" selected>
                                                    Laki-Laki
                                                </option>
                                            );
                                        } else {
                                            return (
                                                <option value="lk">
                                                    Laki-Laki
                                                </option>
                                            );
                                        }
                                    })()}

                                    {(() => {
                                        if (props.member.jk == "pr") {
                                            return (
                                                <option value="pr" selected>
                                                    Perempuan
                                                </option>
                                            );
                                        } else {
                                            return (
                                                <option value="pr">
                                                    Perempuan
                                                </option>
                                            );
                                        }
                                    })()}
                                </select>
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.jk}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">File</label>
                                {/*
                                
                                <img
                                    src={`/storage/${props.member.img}`}
                                    alt=""
                                    className="img-fluid img-thumbnail"
                                />

                                */}
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

                            <div className="col-sm-6">
                                <label className="form-label">
                                    Tanggal Mulai
                                </label>
                                <div className="form-control">
                                    <DatePicker
                                        showIcon
                                        name="start_date"
                                        selected={startDate}
                                        showTimeSelect={true}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        //onChange={(e) => setData("publish_at", date)}
                                        onChange={(date) => {
                                            setStartDate(date);
                                            setData("start_date", date);
                                            console.log({ date });
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
                                        showIcon
                                        name="expired_date"
                                        selected={expiredDate}
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

                            <div className="col-md-6">
                                <label className="form-label">Status</label>
                                <select
                                    className="form-control form-select block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="status"
                                    name="status"
                                    onChange={onHandleChange}
                                    required
                                >
                                    <option value="">Choose...</option>

                                    {(() => {
                                        if (props.member.status == 0) {
                                            return (
                                                <option value="0" selected>
                                                    Tidak aktif
                                                </option>
                                            );
                                        } else {
                                            return (
                                                <option value="0">
                                                    Tidak Aktif
                                                </option>
                                            );
                                        }
                                    })()}

                                    {(() => {
                                        if (props.member.status == "1") {
                                            return (
                                                <option value="1" selected>
                                                    Aktif
                                                </option>
                                            );
                                        } else {
                                            return (
                                                <option value="1">Aktif</option>
                                            );
                                        }
                                    })()}
                                </select>
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.jk}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <h1>Instansi</h1>
                            <hr />
                            <div className="col-sm-6">
                                <label className="form-label">
                                    Nama Universitas
                                </label>
                                <input
                                    type="text"
                                    name="universitas"
                                    defaultValue={props.member.universitas}
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

                            <div className="col-sm-6">
                                <label className="form-label">Fakultas</label>
                                <input
                                    type="text"
                                    name="fakultas"
                                    defaultValue={props.member.fakultas}
                                    placeholder="Masukan Namaa Fakultas"
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
                                    defaultValue={props.member.alamatf}
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
                                    Mata Kuliah Yang diampu
                                </label>
                                <input
                                    type="text"
                                    name="mk"
                                    defaultValue={props.member.mk}
                                    placeholder="Masukan Mata Kuliah Yang diampu"
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

                            <div className="col-sm-6">
                                <label className="form-label">
                                    Link Google Scholar
                                </label>
                                <input
                                    type="text"
                                    name="scholar"
                                    defaultValue={props.member.scholar}
                                    placeholder="Masukan Alamat Fakultas"
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

                            <div className="col-sm-6">
                                <label className="form-label">
                                    Masukan ID Scopus
                                </label>
                                <input
                                    type="text"
                                    name="scopus"
                                    defaultValue={props.member.scopus}
                                    placeholder="Masukan ID Scopus"
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

                            <div className="col-sm-6">
                                <label className="form-label">
                                    Masukan ID Sinta
                                </label>
                                <input
                                    type="text"
                                    name="sinta"
                                    defaultValue={props.member.sinta}
                                    placeholder="Masukan ID Sinta"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="sinta"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.sinta}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label">
                                    Description
                                </label>
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
                                    className="dec"
                                    //config={editorConfiguration}
                                    editor={ClassicEditor}
                                    name="dec"
                                    data={props.member.dec}
                                    //data={props.member.decription}

                                    onReady={(editor) => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log(
                                            "Editor is ready to use!",
                                            editor,
                                        );
                                    }}
                                    onChange={(event, editor, e) => {
                                        const data = editor.getData();
                                        setData("dec", data);

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
                                        message={errors.dec}
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
