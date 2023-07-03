import GuestLayout from "@/Layouts/GuestLayout";
import FrontendLayout from "@/Layouts/FrontendLayout";
import NavbarGuest from "@/Pages/layouts/frontend/NavbarApha";
import { Link, Head } from "@inertiajs/react";
import ListNews from "@/Components/News/ListNews";
import moment from "moment";

export default function List({ featuredBuku, dokumen, props }) {
    return (
        <FrontendLayout>
            <Head>
                <title>
                    Dokumen Asosiasi Pengajar Hukum Adat (APHA) Indonesia
                </title>
            </Head>

            <div className="Container text-center">
                <h1 className="">Dokumen</h1>
                <h2>Asosiasi Pengajar Hukum Adat</h2>
            </div>

            {/*News */}
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {/*loop*/}

                        <table id="myTable" className="table ">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Judul</th>
                                    <th>Deskripsi</th>

                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dokumen.map((dokumen, index) => (
                                    <tr key={dokumen.id}>
                                        <td>{++index}</td>

                                        <td>{dokumen.title}</td>
                                        <td>{dokumen.deskripsi}</td>

                                        <td>
                                            <a
                                                href={`/storage/${dokumen.file}`}
                                            >
                                                <button
                                                    alt={dokumen.title}
                                                    download={dokumen.title}
                                                    className="btn btn-info mx-2"
                                                >
                                                    Download
                                                </button>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
