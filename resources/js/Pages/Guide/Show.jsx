import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, Link } from "@inertiajs/react";

export default function Show({ guide, related }) {
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
        <FrontendLayout>
            <Head title={guide.title} />

            <div className="container py-5">
                <nav className="mb-4">
                    <Link href="/">Home</Link>
                    {" / "}
                    <Link href={route("fronthelp.index")}>Help Center</Link>
                    {" / "}
                    {guide.category}
                </nav>

                <div className="row">
                    {/* Content */}
                    <div className="col-lg-8">
                        <h2 className="fw-bold mb-4">{guide.title}</h2>

                        <div className="ratio ratio-16x9 mb-4">
                            <iframe
                                src={getYoutubeEmbed(guide.youtube_url)}
                                allowFullScreen
                            />
                        </div>

                        <div
                            dangerouslySetInnerHTML={{
                                __html: guide.description,
                            }}
                        />
                    </div>

                    <div className="col-lg-4">
                        <div className="card shadow-sm">
                            <div className="card-header">Tutorial Lainnya</div>

                            <ul className="list-group list-group-flush">
                                {!nextGuide && nextCategoryGuide && (
                                    <div className="mt-3">
                                        <Link
                                            href={route(
                                                "fronthelp.show",
                                                nextCategoryGuide.slug,
                                            )}
                                            className="btn btn-warning"
                                        >
                                            Lanjut ke kategori
                                            {` ${nextCategoryGuide.category}`} →
                                        </Link>
                                    </div>
                                )}
                                {!nextGuide && (
                                    <div className="alert alert-success mt-4">
                                        <h6 className="mb-2">🎉 Selamat!</h6>

                                        <p className="mb-0">
                                            Anda telah menyelesaikan semua
                                            tutorial pada kategori
                                            <strong>
                                                {" "}
                                                {selectedGuide.category}
                                            </strong>
                                            .
                                        </p>
                                    </div>
                                )}
                                console.log("nextguide",nextGuide);
                                console.log(nextCategoryGuide);
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
