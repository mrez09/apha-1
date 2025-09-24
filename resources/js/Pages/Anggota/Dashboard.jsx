import AuthenticatedLayout from "@/Layouts/AnggotaLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">
                    <i className="fas fa-home me-2"></i> Dashboard
                </h1>
            </div>

            {/* Greeting */}
            <div className="mb-4">
                <h2 className="fw-bold">Selamat Datang 👋</h2>
                <h5 className="text-muted">{props.auth.user.name}</h5>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card shadow-lg border-0 rounded-3">
                            <div className="row g-4 p-4">
                                {/* Foto Profil */}
                                <div className="col-md-4 text-center">
                                    <img
                                        src={`/storage/${props.anggota.img}`}
                                        className="rounded-circle img-fluid border shadow-sm mb-3"
                                        alt="Foto Anggota"
                                        style={{ maxWidth: "250px" }}
                                    />
                                    <div className="mt-3">
                                        <a
                                            href="#"
                                            className={`btn btn-sm ${
                                                props.anggota.status == 0
                                                    ? "btn-outline-danger"
                                                    : "btn-outline-success"
                                            }`}
                                        >
                                            {props.anggota.status == 0
                                                ? "Belum Aktif"
                                                : "Aktif"}
                                        </a>
                                    </div>
                                </div>

                                {/* Data Profil */}
                                <div className="col-md-8">
                                    <article>
                                        <h4 className="mb-3">Profil Anggota</h4>
                                        <table className="table table-sm table-borderless">
                                            <tbody>
                                                <tr>
                                                    <th className="w-25">
                                                        No. KTA
                                                    </th>
                                                    <td>
                                                        {props.anggota.no_kta
                                                            ? props.anggota
                                                                  .no_kta
                                                            : "Belum Terbit"}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Nama</th>
                                                    <td>
                                                        {props.anggota.nama}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>NIDN/NIDK</th>
                                                    <td>
                                                        {props.anggota.kode}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Jenis Kelamin</th>
                                                    <td>
                                                        {props.anggota.jk ==
                                                        "lk"
                                                            ? "Laki-laki"
                                                            : "Perempuan"}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Alamat</th>
                                                    <td>
                                                        {props.anggota.alamat}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>No. Telp</th>
                                                    <td>
                                                        {props.anggota.phone}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Email</th>
                                                    <td className="d-flex align-items-center gap-2">
                                                        <span>
                                                            {
                                                                props.anggota
                                                                    .email
                                                            }
                                                        </span>

                                                        {/* ✅ Status verifikasi email */}
                                                        {props.anggota
                                                            .email_verified_at ? (
                                                            <span className="badge bg-success">
                                                                <i className="bi bi-check-circle-fill me-1"></i>{" "}
                                                                Terverifikasi
                                                            </span>
                                                        ) : (
                                                            <Link
                                                                href="/email/verify"
                                                                className="badge bg-warning text-dark text-decoration-none"
                                                            >
                                                                <i className="bi bi-exclamation-triangle-fill me-1"></i>
                                                                Belum
                                                                diverifikasi
                                                            </Link>
                                                        )}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <h4 className="mt-4 mb-3">Institusi</h4>
                                        <table className="table table-sm table-borderless">
                                            <tbody>
                                                <tr>
                                                    <th className="w-25">
                                                        Universitas
                                                    </th>
                                                    <td>
                                                        {
                                                            props.anggota
                                                                .universitas
                                                        }
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Fakultas</th>
                                                    <td>
                                                        {props.anggota.fakultas}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Alamat Fakultas</th>
                                                    <td>
                                                        {props.anggota.alamatf}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Mata Kuliah</th>
                                                    <td>{props.anggota.mk}</td>
                                                </tr>
                                                <tr>
                                                    <th>Google Scholar</th>
                                                    <td>
                                                        <a
                                                            href={
                                                                props.anggota
                                                                    .scholar
                                                            }
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            {
                                                                props.anggota
                                                                    .scholar
                                                            }
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Scopus ID</th>
                                                    <td>
                                                        {props.anggota.scopus}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Sinta</th>
                                                    <td>
                                                        <a
                                                            href={
                                                                props.anggota
                                                                    .sinta
                                                            }
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            {
                                                                props.anggota
                                                                    .sinta
                                                            }
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        {/* Tombol Aksi */}
                                        <div className="mt-4">
                                            {props.anggota.no_kta ? (
                                                <a
                                                    href={route(
                                                        "anggota.dashboard.namecard.show",
                                                        props.anggota.slug_kta
                                                    )}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn btn-success btn-sm me-2"
                                                >
                                                    Lihat Name Card
                                                </a>
                                            ) : (
                                                <button
                                                    className="btn btn-secondary btn-sm me-2"
                                                    disabled
                                                >
                                                    Belum Terbit
                                                </button>
                                            )}

                                            {props.anggota.slug_kta ? (
                                                <a
                                                    href={route(
                                                        "anggota.dashboard.nokta.show",
                                                        props.anggota.slug_kta
                                                    )}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn btn-primary btn-sm me-2"
                                                >
                                                    Lihat KTA
                                                </a>
                                            ) : (
                                                <button
                                                    className="btn btn-secondary btn-sm me-2me-2"
                                                    disabled
                                                >
                                                    Belum Terbit
                                                </button>
                                            )}

                                            {props.anggota.slug_biodata ? (
                                                <a
                                                    href={route(
                                                        "frontpengurus.commitee.show",
                                                        props.anggota
                                                            .slug_biodata
                                                    )}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn btn-outline-primary btn-sm me-2"
                                                >
                                                    Lihat Biodata
                                                </a>
                                            ) : (
                                                <button
                                                    className="btn btn-secondary btn-sm me-2me-2"
                                                    disabled
                                                >
                                                    Belum Terbit
                                                </button>
                                            )}
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
