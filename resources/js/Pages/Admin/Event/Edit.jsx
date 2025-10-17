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

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

//import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
//import sourceEditing from "@ckeditor/ckeditor5-source-editing/src/sourceediting";

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

export default function Edit(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    //const changeDate = (e) => setDate(e.target.value);

    let table = new DataTable("#myTable", {
        // options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    const { data, setData, processing, errors } = useForm({
        ...props.acara,
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

        if (data.img == props.acara.img) {
            delete data.img;
        }

        router.post(route("admin.dashboard.event.update", props.acara.id), {
            _method: "PUT",
            ...data,
        });
    };
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Update Berita" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">
                    Update Event : <p>{props.acara.judul}</p>
                </h1>

                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <a
                            type="button"
                            href={route("admin.dashboard.event.index")}
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
                                <label className="form-label">Judul</label>
                                <input
                                    type="text"
                                    name="judul"
                                    defaultValue={props.acara.judul}
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

                            <div className="col-sm-12">
                                <label className="form-label">Sub Judul</label>
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
                                    name="subjudul"
                                    data={props.acara.subjudul}
                                    //onReady={(editor) => {
                                    // You can store the "editor" and use when it is needed.
                                    //    console.log(
                                    //        "Editor is ready to use!",
                                    //        editor,
                                    //    );
                                    //}}
                                    onChange={(event, editor, e) => {
                                        const data = editor.getData();
                                        setData("subjudul", data);

                                        //    console.log({ event, editor, data });
                                    }}
                                    //onBlur={(event, editor) => {
                                    //    console.log("Blur.", editor);
                                    //}}
                                    //onFocus={(event, editor) => {
                                    //    console.log("Focus.", editor);
                                    //}}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.subjudul}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Tag</label>
                                <input
                                    type="text"
                                    id="tag"
                                    name="tag"
                                    placeholder="Masukan Tag"
                                    defaultValue={props.acara.tag}
                                    className="editor form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="tag"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.tag}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">File</label>

                                <input
                                    type="file"
                                    name="img"
                                    placeholder="Masukan File"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    onChange={onHandleChange}
                                />
                                <img
                                    src={`/storage/${props.acara.img}`}
                                    className="thumb-adm"
                                    alt=""
                                />
                                <div className="">
                                    <InputError
                                        message={errors.img}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">
                                    Tanggal Mulai Event (Acara)
                                </label>
                                <div className="form-control">
                                    <DatePicker
                                        showIcon
                                        name="eventdate_at"
                                        selected={startDate}
                                        showTimeSelect={true}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        className="form-control"
                                        //onChange={(e) => setData("publish_at", date)}
                                        onChange={(date) => {
                                            setStartDate(date);
                                            setData("eventdate_at", date);
                                            //console.log({ date });
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
                                        message={errors.eventdate_at}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">
                                    Tanggal Selesai Event (Acara)
                                </label>
                                <div className="form-control">
                                    <DatePicker
                                        showIcon
                                        name="eventdate_at"
                                        selected={endDate}
                                        showTimeSelect={true}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        className="form-control"
                                        //onChange={(e) => setData("publish_at", date)}
                                        onChange={(date) => {
                                            setEndDate(date);
                                            setData("enddate_at", date);
                                            //console.log({ date });
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
                                        message={errors.enddate_at}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            {
                                //featured baru
                            }
                            <div className="col-md-4">
                                <label className="form-label">
                                    Ditampilkan Sebagai Rekomendasi (Feature)
                                </label>
                                <select
                                    className="form-control form-select block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="is_featured"
                                    name="is_featured"
                                    value={data.is_featured}
                                    onChange={onHandleChange}
                                    required
                                >
                                    <option value="">Choose...</option>
                                    <option value="0">Tidak Aktif</option>
                                    <option value="1">Aktif</option>
                                </select>
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.category}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">
                                    Status Berita
                                </label>
                                <select
                                    className="form-control form-select block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="status"
                                    name="status"
                                    value={data.status}
                                    onChange={onHandleChange}
                                    required
                                >
                                    <option value="">Choose...</option>
                                    <option value="DRAFT">Draft</option>
                                    <option value="PUBLISH">Publish</option>
                                </select>
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.status}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label">Isi</label>
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
                                    data={props.acara.description}
                                    //onReady={(editor) => {
                                    // You can store the "editor" and use when it is needed.
                                    //    console.log(
                                    //        "Editor is ready to use!",
                                    //        editor,
                                    //    );
                                    //}}
                                    onChange={(event, editor, e) => {
                                        const data = editor.getData();
                                        setData("description", data);

                                        //console.log({ event, editor, data });
                                    }}
                                    //onBlur={(event, editor) => {
                                    //    console.log("Blur.", editor);
                                    //}}
                                    //onFocus={(event, editor) => {
                                    //    console.log("Focus.", editor);
                                    //}}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.description}
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
