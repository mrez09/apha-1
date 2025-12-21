export default class CKEditorUploadAdapter {
    constructor(loader, uploadFolder = "ckeditor/news") {
        this.loader = loader;
        this.uploadFolder = uploadFolder;
        this.xhr = null;
    }

    upload() {
        return this.loader.file.then((file) => {
            return new Promise((resolve, reject) => {
                const formData = new FormData();

                formData.append("upload", file);
                formData.append("folder", this.uploadFolder);

                this.xhr = new XMLHttpRequest();

                this.xhr.open("POST", "/dashboard/ckeditor/upload", true);

                const csrfToken = document
                    .querySelector('meta[name="csrf-token"]')
                    ?.getAttribute("content");

                if (csrfToken) {
                    this.xhr.setRequestHeader("X-CSRF-TOKEN", csrfToken);
                }

                this.xhr.onload = () => {
                    if (this.xhr.status >= 200 && this.xhr.status < 300) {
                        try {
                            const response = JSON.parse(this.xhr.responseText);

                            if (response.url) {
                                resolve({
                                    default: response.url,
                                });
                            } else {
                                reject(
                                    response.error?.message ||
                                        "Upload gambar gagal.",
                                );
                            }
                        } catch {
                            reject("Response server tidak valid.");
                        }
                    } else {
                        try {
                            const response = JSON.parse(this.xhr.responseText);

                            reject(
                                response.error?.message ||
                                    "Upload gambar gagal.",
                            );
                        } catch {
                            reject(`Upload gagal. HTTP ${this.xhr.status}`);
                        }
                    }
                };

                this.xhr.onerror = () => {
                    reject("Terjadi kesalahan koneksi saat upload.");
                };

                this.xhr.onabort = () => {
                    reject("Upload dibatalkan.");
                };

                this.xhr.send(formData);
            });
        });
    }

    abort() {
        if (this.xhr) {
            this.xhr.abort();
        }
    }
}
