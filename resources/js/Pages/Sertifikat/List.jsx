import GuestLayout from "@/Layouts/GuestLayout";
import FrontendLayout from "@/Layouts/FrontendLayout";
import NavbarGuest from "@/Pages/layouts/frontend/NavbarApha";
import { Link, usePage, Head } from "@inertiajs/react";
import ListNews from "@/Components/News/ListNews";
import moment from "moment";
import Pagination from "@/Components/Page/Pagination";
import parse from "html-react-parser";
import { useForm } from "@inertiajs/react";

export default function List({ sertifikat, searchQuery }) {
    //const { newsp } = usePage().props;

    const { data, setData, post, processing } = useForm({
        search: searchQuery || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("frontsertifikat.search"));
    };

    return (
        <FrontendLayout>
            <Head>
                <title>
                    Sertifikat Asosiasi Pengajar Hukum Adat (APHA) Indonesia
                </title>
            </Head>

            <div className="Container text-center">
                <h1 className="">Sertifikat</h1>
                <h2>Asosiasi Pengajar Hukum Adat</h2>
            </div>

            {/*News */}
            <div className="album py-5 bg-light">
                <div className="container mt-4">
                    <h2 className="mb-4">🔍 Cari Sertifikat Seminar</h2>
                    <form onSubmit={handleSubmit} className="mb-4">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Masukkan No Sertifikat"
                                value={data.search}
                                onChange={(e) =>
                                    setData("search", e.target.value)
                                }
                            />
                            <button
                                className="btn btn-primary"
                                type="submit"
                                disabled={processing}
                            >
                                Cari
                            </button>
                        </div>
                    </form>

                    {sertifikat && sertifikat.length > 0 ? (
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>No Sertifikat</th>
                                        <th>Nama</th>
                                        <th>Acara</th>
                                        <th>File</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sertifikat.map((s) => (
                                        <tr key={s.id}>
                                            <td>{s.no}</td>
                                            <td>{s.nama}</td>
                                            <td>
                                                {s.judul} - {s.img}
                                            </td>
                                            <td>
                                                {/* tombol lihat dari img */}
                                                {s.img && (
                                                    <>
                                                        <a
                                                            href={s.img}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="btn btn-sm btn-success mb-1"
                                                        >
                                                            Lihat Sertifikat
                                                            (Gambar)
                                                        </a>
                                                        <br />
                                                    </>
                                                )}

                                                {/* tombol lihat dari link */}
                                                {s.link && (
                                                    <a
                                                        href={s.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-sm btn-success"
                                                    >
                                                        Lihat Sertifikat (Link)
                                                    </a>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : searchQuery ? (
                        <div className="alert alert-warning">
                            ⚠️ Sertifikat tidak ditemukan untuk:{" "}
                            <strong>{searchQuery}</strong> Harap masukan No
                            Sertifikat
                        </div>
                    ) : null}
                </div>
            </div>
        </FrontendLayout>
    );
}
