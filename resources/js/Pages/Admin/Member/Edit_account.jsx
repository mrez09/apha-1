import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DataTable from "datatables.net-dt";
import { Head } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import { Link, useForm, router } from "@inertiajs/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
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
    let table = new DataTable("#myTable", {
        // options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    //const { data, setData, processing, errors } = useForm({
    //...props.member,
    //  ...props.anggota,
    //});

    const { data, setData, processing, errors, put } = useForm({
        user_id: props.anggota.user_id,
        anggota_id: props.anggota.anggota_id,
        com_id: props.anggota.com_id,

        password: "",
        password_confirmation: "",
        img: props.member.img ?? null,
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

        put(route("admin.dashboard.update_account", props.member.id));
    };
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Update Anggota" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">
                    Update Account Member : <p>{props.member.nama}</p>
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
                            <div className="col-md-12">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Masukan Password Baru"
                                    className="editor form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                                <div>
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <label className="form-label">
                                    Ulangi Password
                                </label>
                                <input
                                    type="password"
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    placeholder="Masukan Ulang Password Anda"
                                    className="editor form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value,
                                        )
                                    }
                                />
                                <div>
                                    <InputError
                                        message={errors.password_confirmation}
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
