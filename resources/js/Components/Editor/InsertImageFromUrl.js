import { Plugin, ButtonView } from "ckeditor5";

export default class InsertImageFromUrl extends Plugin {
    static get pluginName() {
        return "InsertImageFromUrl";
    }

    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add("insertImageFromUrl", (locale) => {
            const button = new ButtonView(locale);

            button.set({
                label: "Insert image from URL",
                tooltip: true,
                withText: true,
            });

            button.on("execute", async () => {
                const url = window.prompt("Masukkan URL gambar:", "https://");

                if (!url || url === "https://") {
                    return;
                }

                try {
                    const response = await fetch(
                        "/dashboard/ckeditor/upload-from-url",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json",
                                "X-CSRF-TOKEN": document
                                    .querySelector('meta[name="csrf-token"]')
                                    ?.getAttribute("content"),
                            },
                            body: JSON.stringify({
                                url,
                                folder: "ckeditor/news",
                            }),
                        },
                    );

                    const result = await response.json();

                    if (!response.ok || !result.url) {
                        throw new Error(
                            result?.error?.message ||
                                "Gagal mengupload gambar.",
                        );
                    }

                    editor.model.change((writer) => {
                        const imageElement = writer.createElement(
                            "imageBlock",
                            {
                                src: result.url,
                            },
                        );

                        editor.model.insertContent(
                            imageElement,
                            editor.model.document.selection,
                        );

                        writer.setSelection(imageElement, "on");
                    });
                } catch (error) {
                    console.error("Insert image from URL error:", error);

                    window.alert(
                        error.message || "Gagal mengambil gambar dari URL.",
                    );
                }
            });

            return button;
        });
    }
}
