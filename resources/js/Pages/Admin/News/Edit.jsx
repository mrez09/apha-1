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
    //const changeDate = (e) => setDate(e.target.value);

    let table = new DataTable("#myTable", {
        // options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    const { data, setData, processing, errors } = useForm({
        ...props.news,
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

        if (data.img == props.news.img) {
            delete data.img;
        }

        router.post(route("admin.dashboard.news.update", props.news.id), {
            _method: "PUT",
            ...data,
        });
    };
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Update Berita" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">
                    Update Berita : <p>{props.news.judul}</p>
                </h1>

                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <a
                            type="button"
                            href={route("admin.dashboard.news.index")}
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
                                    defaultValue={props.news.judul}
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

                            <div className="col-md-6">
                                <label className="form-label">Category</label>
                                <select
                                    className="form-control form-select block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="category"
                                    name="category"
                                    value={data.category}
                                    onChange={onHandleChange}
                                    required
                                >
                                    <option value="">Choose...</option>

                                    {props.newscategory.map((newscategory) => (
                                        <option
                                            key={newscategory.id}
                                            value={newscategory.id}
                                        >
                                            {newscategory.namakategori}
                                        </option>
                                    ))}
                                </select>
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.category}
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
                                    defaultValue={props.news.tag}
                                    className="editor form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="tag"
                                    onChange={onHandleChange}
                                />
                                <div className="invalid-feedback">
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
                                    src={`/storage/${props.news.img}`}
                                    alt=""
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
                                    Tanggal Upload
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
                                    Ditampilkan Sebagai Ticker
                                </label>
                                <select
                                    className="form-control form-select block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="ticker"
                                    name="ticker"
                                    value={data.ticker}
                                    onChange={onHandleChange}
                                    required
                                >
                                    <option value="">Choose...</option>
                                    <option value="0">Tidak Aktif</option>
                                    <option value="1">Aktif</option>
                                </select>
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.ticker}
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
                                    <option value="Draft">Draft</option>
                                    <option value="Publish">Publish</option>
                                </select>
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.status}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            {
                                //featured
                                /*<div className="col-sm-12">
                                <label className="form-label">Feature</label>
                                <div className="form-check">
                                    <input
                                        name="is_featured"
                                        type="checkbox"
                                        onChange={(e) =>
                                            setData(
                                                "is_featured",
                                                e.target.checked
                                            )
                                        }
                                        className="form-check-input"
                                        checked={props.news.is_featured}
                                    />
                                    <label className="form-check-label">
                                        Berita Ditampilkan sebagai
                                        fitur/rekomendasi
                                    </label>
                                    <div className="invalid-feedback">
                                        <InputError
                                            message={errors.is_featured}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                            </div>
                            */
                            }

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
                                    name="konten"
                                    data={props.news.konten}
                                    onChange={(event, editor, e) => {
                                        const data = editor.getData();
                                        setData("konten", data);

                                        //console.log({ event, editor, data });
                                    }}
                                    //onReady={(editor) => {
                                    // You can store the "editor" and use when it is needed.
                                    //  console.log(
                                    // "Editor is ready to use!",
                                    //    editor,
                                    //);
                                    //}}

                                    //onBlur={(event, editor) => {
                                    //console.log("Blur.", editor);
                                    //}}
                                    //onFocus={(event, editor) => {
                                    //console.log("Focus.", editor);
                                    //}}
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
