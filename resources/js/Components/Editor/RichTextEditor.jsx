import React, { useRef } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import CKEditorUploadAdapter from "./CKEditorUploadAdapter";
import InsertImageFromUrl from "./InsertImageFromUrl";
import "../../../css/ckeditor.css";

import {
    ClassicEditor,
    Essentials,
    Paragraph,
    Heading,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Link,
    List,
    BlockQuote,
    Code,
    CodeBlock,
    HorizontalLine,
    SourceEditing,
    Alignment,
    Indent,
    Image,
    ImageToolbar,
    ImageCaption,
    ImageStyle,
    ImageResize,
    ImageInsert,
    LinkImage,
    Table,
    TableToolbar,
    TableProperties,
    TableCellProperties,
    Font,
    FontSize,
    FontColor,
    FontBackgroundColor,
    Highlight,
    Superscript,
    Subscript,
    MediaEmbed,
    SpecialCharacters,
    SpecialCharactersEssentials,
    FindAndReplace,
    RemoveFormat,
    WordCount,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

export default function RichTextEditor({
    value = "",
    onChange,
    disabled = false,
    uploadFolder = "ckeditor/news",
}) {
    const wordCountRef = useRef(null);

    function createUploadAdapterPlugin(uploadFolder) {
        return function uploadAdapterPlugin(editor) {
            editor.plugins.get("FileRepository").createUploadAdapter = (
                loader,
            ) => {
                return new CKEditorUploadAdapter(loader, uploadFolder);
            };
        };
    }
    return (
        <>
            <CKEditor
                editor={ClassicEditor}
                disabled={disabled}
                data={value}
                config={{
                    licenseKey: "GPL",

                    extraPlugins: [createUploadAdapterPlugin(uploadFolder)],

                    plugins: [
                        Essentials,
                        Paragraph,
                        Heading,
                        Bold,
                        Italic,
                        Underline,
                        Strikethrough,
                        Link,
                        List,
                        BlockQuote,
                        Code,
                        CodeBlock,
                        HorizontalLine,
                        SourceEditing,
                        Alignment,
                        Indent,

                        Image,
                        ImageToolbar,
                        ImageCaption,
                        ImageStyle,
                        ImageResize,
                        ImageInsert,
                        LinkImage,

                        InsertImageFromUrl,

                        Table,
                        TableToolbar,
                        TableProperties,
                        TableCellProperties,

                        Font,
                        FontSize,
                        FontColor,
                        FontBackgroundColor,
                        Highlight,
                        Superscript,
                        Subscript,

                        MediaEmbed,

                        SpecialCharacters,
                        SpecialCharactersEssentials,

                        FindAndReplace,
                        RemoveFormat,
                        WordCount,
                    ],

                    toolbar: [
                        "undo",
                        "redo",
                        "|",
                        "sourceEditing",
                        "findAndReplace",
                        "|",
                        "heading",
                        "|",
                        "bold",
                        "italic",
                        "underline",
                        "strikethrough",
                        "|",
                        "removeFormat",
                        "|",
                        "fontFamily",
                        "fontSize",
                        "fontColor",
                        "fontBackgroundColor",
                        "highlight",
                        "superscript",
                        "subscript",
                        "|",
                        "specialCharacters",
                        "|",
                        "link",
                        "insertImage",
                        "insertImageFromUrl",
                        "mediaEmbed",
                        "|",
                        "bulletedList",
                        "numberedList",
                        "|",
                        "insertTable",
                        "|",
                        "alignment",
                        "|",
                        "outdent",
                        "indent",
                        "|",
                        "blockQuote",
                        "code",
                        "codeBlock",
                        "horizontalLine",
                    ],

                    image: {
                        insert: {
                            integrations: ["upload", "url"],
                        },

                        resizeOptions: [
                            {
                                name: "resizeImage:original",
                                value: null,
                                label: "Original",
                            },
                            {
                                name: "resizeImage:25",
                                value: "25",
                                label: "25%",
                            },
                            {
                                name: "resizeImage:50",
                                value: "50",
                                label: "50%",
                            },
                            {
                                name: "resizeImage:75",
                                value: "75",
                                label: "75%",
                            },
                        ],

                        toolbar: [
                            "imageTextAlternative",
                            "toggleImageCaption",
                            "|",
                            "imageStyle:inline",
                            "imageStyle:block",
                            "imageStyle:side",
                            "|",
                            "resizeImage",
                            "|",
                            "linkImage",
                        ],
                    },

                    table: {
                        contentToolbar: [
                            "tableColumn",
                            "tableRow",
                            "mergeTableCells",
                            "|",
                            "tableProperties",
                            "tableCellProperties",
                        ],
                    },
                }}
                onReady={(editor) => {
                    const wordCountPlugin = editor.plugins.get("WordCount");

                    if (wordCountRef.current) {
                        wordCountRef.current.appendChild(
                            wordCountPlugin.wordCountContainer,
                        );
                    }
                }}
                onChange={(event, editor) => {
                    onChange?.(editor.getData());
                }}
            />
            <div ref={wordCountRef} className="ckeditor-word-count" />
        </>
    );
}
