import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DataTable from "datatables.net-dt";
import { Head } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import { Link, useForm, router } from "@inertiajs/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";

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

export default function MainBanner({ featuredBuku, galeri, props }) {
    let table = new DataTable("#myTable", {
        // options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    const { data, setData, processing, errors } = useForm({
        ...props.mainbanner,
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

        if (data.img == props.galeri.img) {
            delete data.img;
        }

        router.post(
            route("admin.dashboard.mainbanner.update", props.galeri.id),
            {
                _method: "PUT",
                ...data,
            }
        );
    };
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Update Galeri" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">
                    Update Photo : <p>{galeri.name}</p>
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
                            <div className="col-sm-12">
                                <label className="form-label">Nama Photo</label>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={props.mainbanner.name}
                                    placeholder="Masukan Nama Photo"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="nama photo"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    URL Eksternal
                                </label>
                                <input
                                    type="text"
                                    id="url"
                                    name="url"
                                    placeholder="Masukan URL Eksternal"
                                    defaultValue={props.mainbanner.url}
                                    className="editor form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="tag"
                                    onChange={onHandleChange}
                                />
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.url}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">File</label>
                                <img
                                    src={`/storage/${props.mainbanner.img}`}
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

                            <div className="col-sm-6">
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
                                        checked={props.mainbanner.is_featured}
                                    />
                                    <label className="form-check-label">
                                        Galeri Ditampilkan sebagai
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
                                    data={props.mainbanner.decription}
                                    onReady={(editor) => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log(
                                            "Editor is ready to use!",
                                            editor
                                        );
                                        console.log(data);
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
