import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DataTable from "datatables.net-dt";
import { Head } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import { Link, useForm, router } from "@inertiajs/react";
import FlashMessage from "@/Components/FlashMessage";
import moment from "moment";
import "moment/locale/id";

export default function List(props, flashMessage) {
    let table = new DataTable("#myTable", {
        // options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    const { data, setData, processing, errors } = useForm({
        ...props.member,
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

        router.post(route("admin.dashboard.member.update", props.member.id), {
            _method: "PUT",
            ...data,
        });
    };
    {
        flashMessage?.message && (
            <div className="alert alert-success mt-2">{flash.message}</div>
        );
    }

    {
        flashMessage?.error && (
            <div className="alert alert-danger mt-2">{flash.error}</div>
        );
    }
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    View Data Anggota Asosiasi Pengajar Hukum Adat (APHA)
                </h2>
            }
        >
            <Head title="Update Anggota" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">
                    Profile Member : <p className="mb-0">{props.member.nama}</p>
                </h1>

                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <a
                            href={route("admin.dashboard.member.index")}
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Kembali
                        </a>
                    </div>
                </div>
            </div>

            {/* Profile Container */}
            <div className="container">
                <div className="row g-4 mt-3">
                    {flashMessage?.message && (
                        <FlashMessage message={flashMessage.message} />
                    )}
                    <div className="col-md-4 text-center">
                        <img
                            //src={`/storage/${props.member.img}`}
                            src={props.member.img_url}
                            alt={props.member.nama}
                            className="img-fluid img-thumbnail rounded mb-3"
                            style={{ maxHeight: "300px", objectFit: "cover" }}
                        />
                        <h4 className="fw-bold">{props.member.nama}</h4>
                        <p className="text-muted mb-1">{props.member.no_kta}</p>

                        {/* Tombol Aksi + Status */}
                        {/* STATUS BADGE */}
                        <div className="text-center mb-3">
                            <span
                                className={`badge fs-6 px-3 py-2 ${
                                    props.member.status == 1
                                        ? "bg-success"
                                        : "bg-secondary"
                                }`}
                                style={{
                                    padding: "8px 20px",
                                    fontWeight: "600",
                                    fontSize: "15px",
                                    borderRadius: "8px",
                                    minWidth: "130px",
                                }}
                            >
                                {props.member.status == 1
                                    ? "Aktif"
                                    : "Tidak Aktif"}
                            </span>
                        </div>

                        {/* MASA KEANGGOTAAN */}
                        <div className="card border-0 bg-light mb-3">
                            <div className="card-body py-3">
                                <div className="row text-center">
                                    <div className="col-6 border-end">
                                        <small className="text-muted d-block">
                                            Tanggal Mulai
                                        </small>
                                        <strong>
                                            {props.member.start_date
                                                ? moment(
                                                      props.member.start_date,
                                                  ).format("DD MMM YYYY")
                                                : "-"}
                                        </strong>
                                    </div>

                                    <div className="col-6">
                                        <small className="text-muted d-block">
                                            Berlaku Sampai
                                        </small>
                                        <strong
                                            className={
                                                moment(
                                                    props.member.expired_date,
                                                ).isBefore(moment())
                                                    ? "text-danger"
                                                    : "text-success"
                                            }
                                        >
                                            {props.member.expired_date
                                                ? moment(
                                                      props.member.expired_date,
                                                  ).format("DD MMM YYYY")
                                                : "-"}
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mb-3">
                            <small className="text-muted">
                                Masa aktif tersisa{" "}
                                <strong>
                                    {moment(props.member.expired_date).diff(
                                        moment(),
                                        "days",
                                    ) > 0
                                        ? `${moment(
                                              props.member.expired_date,
                                          ).diff(moment(), "days")} hari`
                                        : "Expired"}
                                </strong>
                            </small>
                        </div>

                        {/* TOMBOL AKSI */}
                        <div className="d-flex justify-content-center gap-3 mb-3">
                            {/* Tombol Name Card */}
                            {props.member.no_kta ? (
                                <a
                                    href={route(
                                        "anggota.dashboard.namecard.show",
                                        props.member.slug_kta,
                                    )}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-success btn-sm"
                                    style={{
                                        padding: "8px 20px",
                                        minWidth: "150px",
                                        fontWeight: "500",
                                    }}
                                >
                                    Lihat Name Card
                                </a>
                            ) : (
                                <button
                                    className="btn btn-secondary btn-sm"
                                    disabled
                                    style={{
                                        padding: "8px 20px",
                                        minWidth: "150px",
                                        fontWeight: "500",
                                    }}
                                >
                                    Belum Terbit
                                </button>
                            )}

                            {/* Tombol KTA */}
                            {props.member.slug_kta ? (
                                <a
                                    href={route(
                                        "anggota.dashboard.nokta.show",
                                        props.member.slug_kta,
                                    )}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary btn-sm"
                                    style={{
                                        padding: "8px 20px",
                                        minWidth: "150px",
                                        fontWeight: "500",
                                    }}
                                >
                                    Lihat KTA
                                </a>
                            ) : (
                                <button
                                    className="btn btn-secondary btn-sm"
                                    disabled
                                    style={{
                                        padding: "8px 20px",
                                        minWidth: "150px",
                                        fontWeight: "500",
                                    }}
                                >
                                    Belum Terbit
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                            <h5 className="m-0">
                                Data Pribadi <br />#{props.member.id}
                            </h5>

                            <div className="d-flex gap-2">
                                {/* Tombol Edit */}
                                <Link
                                    href={route(
                                        "admin.dashboard.memberadmin.editaccount",
                                        props.member.id,
                                    )}
                                >
                                    <button className="btn btn-outline-info btn-sm">
                                        <i className="bi bi-pencil-square me-1"></i>{" "}
                                        Edit Account
                                    </button>
                                </Link>

                                {/* Tombol Edit Account */}
                                <Link
                                    href={route(
                                        "admin.dashboard.memberadmin.edit",
                                        props.member.id,
                                    )}
                                >
                                    <button className="btn btn-outline-warning btn-sm">
                                        <i className="bi bi-pencil-square me-1"></i>{" "}
                                        Edit
                                    </button>
                                </Link>

                                {/* Tombol Kirim Email */}
                                <button
                                    className="btn btn-info btn-sm"
                                    onClick={() => {
                                        if (
                                            confirm(
                                                "Kirim email pengingat ke anggota ini?",
                                            )
                                        ) {
                                            router.post(
                                                route(
                                                    "admin.dashboard.memberadmin.sendReminder",
                                                    props.member.id,
                                                ),
                                            );
                                        }
                                    }}
                                >
                                    <i className="bi bi-envelope me-1"></i>{" "}
                                    Kirim Email
                                </button>

                                {props.member.status === 0 ? (
                                    <a
                                        href={`https://wa.me/${
                                            props.member.no_wa
                                        }?text=${encodeURIComponent(
                                            `Halo ${props.member.nama},\n` +
                                                `Ini adalah pengingat untuk pembayaran iuran anggota *Asosiasi Pengajar Hukum Adat Indonesia (APHA)*.\n` +
                                                `Mohon konfirmasi bila Bapak/Ibu sudah melakukan pembayaran agar kami dapat memproses keanggotaan aktif.\n` +
                                                `Terima kasih atas perhatian dan kerja samanya.\n` +
                                                `Salam hangat,\nTim Sekretariat APHA Indonesia.`,
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-warning btn-sm"
                                    >
                                        <i className="bi bi-whatsapp me-1"></i>{" "}
                                        Kirim Pengingat
                                    </a>
                                ) : (
                                    <a
                                        href={`https://wa.me/${
                                            props.member.no_wa
                                        }?text=${encodeURIComponent(
                                            `Halo ${props.member.nama},\n` +
                                                `Terima kasih telah melakukan pembayaran iuran anggota *Asosiasi Pengajar Hukum Adat Indonesia (APHA)*.\n` +
                                                `Status keanggotaan Bapak/Ibu kini *aktif*.\n` +
                                                `Kami sangat mengapresiasi dukungan dan partisipasi Anda.\n` +
                                                `Salam hormat,\nTim Sekretariat APHA Indonesia.`,
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-success btn-sm"
                                    >
                                        <i className="bi bi-whatsapp me-1"></i>{" "}
                                        Kirim Ucapan Terima Kasih
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <strong>NIDN/NIDK:</strong>
                                <p>{props.member.kode || "-"}</p>
                            </div>
                            <div className="col-sm-6">
                                <strong>No HP:</strong>
                                <p>{props.member.phone || "-"}</p>
                            </div>
                            <div className="col-sm-12">
                                <strong>Alamat Rumah:</strong>
                                <p>{props.member.alamat || "-"}</p>
                            </div>
                            <div className="col-sm-6">
                                <strong>Jenis Kelamin:</strong>
                                <p>
                                    {props.member.jk === "lk"
                                        ? "Laki-Laki"
                                        : props.member.jk === "pr"
                                          ? "Perempuan"
                                          : "-"}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <strong>Email</strong>
                                <p>
                                    {props.member.email} &nbsp;
                                    {/* ✅ Status verifikasi email */}
                                    {props.anggota.email_verified_at ? (
                                        <span className="badge bg-success">
                                            <i className="bi bi-check-circle-fill me-1"></i>
                                            Terverifikasi{" "}
                                            {props.anggota.email_verified_at}
                                        </span>
                                    ) : (
                                        <Link
                                            href="/email/verify"
                                            className="badge bg-warning text-dark text-decoration-none"
                                        >
                                            <i className="bi bi-exclamation-triangle-fill me-1"></i>
                                            Belum diverifikasi
                                        </Link>
                                    )}
                                </p>
                            </div>
                        </div>

                        <h5 className="mt-4 mb-3 border-bottom pb-2">
                            Instansi
                        </h5>
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <strong>Universitas:</strong>
                                <p>{props.member.universitas || "-"}</p>
                            </div>
                            <div className="col-sm-6">
                                <strong>Fakultas:</strong>
                                <p>{props.member.fakultas || "-"}</p>
                            </div>
                            <div className="col-sm-6">
                                <strong>Alamat Fakultas:</strong>
                                <p>{props.member.alamatf || "-"}</p>
                            </div>
                            <div className="col-sm-6">
                                <strong>Mata Kuliah Diampu:</strong>
                                <p>{props.member.mk || "-"}</p>
                            </div>
                        </div>

                        <h5 className="mt-4 mb-3 border-bottom pb-2">
                            Link & ID Akademik
                        </h5>
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <strong>Google Scholar:</strong>
                                <p>
                                    {props.member.scholar ? (
                                        <a
                                            href={props.member.scholar}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {props.member.scholar}
                                        </a>
                                    ) : (
                                        "-"
                                    )}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <strong>ID Scopus:</strong>
                                <p>{props.member.scopus || "-"}</p>
                            </div>
                            <div className="col-sm-6">
                                <strong>ID Sinta:</strong>
                                <p>{props.member.sinta || "-"}</p>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center mt-4 mb-3 border-bottom pb-2">
                            <h5 className="mb-0">Deskripsi</h5>
                            {props.member.id_com}

                            {props.commitee && props.commitee.slug ? (
                                <Link
                                    href={route(
                                        "frontpengurus.commitee.show",
                                        props.commitee.slug,
                                    )}
                                    className="btn btn-outline-primary btn-sm"
                                >
                                    Lihat Biodata
                                </Link>
                            ) : (
                                <button
                                    className="btn btn-outline-secondary btn-sm"
                                    disabled
                                >
                                    Belum Ada Biodata
                                </button>
                            )}
                        </div>
                        <div
                            className="border rounded p-3"
                            dangerouslySetInnerHTML={{
                                __html: props.member.dec,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
