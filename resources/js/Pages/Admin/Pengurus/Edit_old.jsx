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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
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
    const [startDate, setStartDate] = useState(new Date());
    //const changeDate = (e) => setDate(e.target.value);

    let table = new DataTable("#myTable", {
        // options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    const { data, setData, processing, errors } = useForm({
        ...props.pengurus,
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

        router.post(
            route("admin.dashboard.pengurus.update", props.pengurus.id),
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
                    Update Pengurus : <p>{props.pengurus.nama}</p>
                </h1>

                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link
                            type="button"
                            href={route("dashboard")}
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Kembali
                        </Link>
                    </div>
                </div>
            </div>
            {/*End Dashboard Title*/}

            <div className="container">
                <div className="row">
                    <h4 className="mb-3"></h4>
                    <form onSubmit={submit}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="col-sm-12">
                                    <label className="form-label">
                                        Nama Pengurus
                                    </label>
                                    <input
                                        type="text"
                                        name="nama"
                                        defaultValue={props.pengurus.nama}
                                        placeholder="Masukan Judul"
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

                                <div className="col-sm-6">
                                    <label className="form-label">File</label>
                                    <img
                                        src={`/storage/${props.pengurus.img}`}
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
                                    {props.listdivisi.map((subdivisi) => (
                                        <option value={subdivisi.id}>
                                            {
                                                //subdivisi.namadivisi
                                            }
                                        </option>
                                    ))}
                                </select>
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.id_divisi}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <label className="form-label">
                                    Nama Divisi
                                </label>
                                <input
                                    type="text"
                                    name="namasubdivisi"
                                    //defaultValue={props.subdivisi.namasubdivisi}
                                    placeholder="Masukan Nama Sub Divisi"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="namasubdivisi"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        //message={errors.namasubdivisi}
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
