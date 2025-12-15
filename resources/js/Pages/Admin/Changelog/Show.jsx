import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Show({ releaseNote, related }) {
    const getYoutubeEmbed = (url) => {
        if (!url) return "";

        let id = "";

        if (url.includes("watch?v=")) {
            id = url.split("watch?v=")[1].split("&")[0];
        } else if (url.includes("youtu.be/")) {
            id = url.split("youtu.be/")[1].split("?")[0];
        }

        return `https://www.youtube.com/embed/${id}`;
    };

    return (
        <AuthenticatedLayout>
            <Head title={releaseNote.title} />

            <div className="card shadow-sm">
                <div className="card-body p-4">
                    {/* Header */}
                    <div className="d-flex justify-content-between align-items-start mb-4">
                        <div>
                            <span
                                className="badge mb-2"
                                style={{
                                    backgroundColor: "#F08F4A",
                                    fontSize: "14px",
                                }}
                            >
                                {releaseNote.version}
                            </span>

                            <h2 className="mb-1">{releaseNote.title}</h2>

                            <small className="text-muted">
                                {new Date(
                                    releaseNote.created_at,
                                ).toLocaleDateString("id-ID", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </small>
                        </div>

                        <div>
                            {releaseNote.status == 1 ? (
                                <span className="badge bg-success">
                                    Published
                                </span>
                            ) : (
                                <span className="badge bg-secondary">
                                    Draft
                                </span>
                            )}
                        </div>
                    </div>

                    <hr />

                    {/* Release Note Content */}
                    <div
                        className="release-note-content"
                        dangerouslySetInnerHTML={{
                            __html: releaseNote.description,
                        }}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
