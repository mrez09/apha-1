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

export default function List({
    member,
    auth,
    serti,
    qrcode,
    flashMessage,
    flash,
}) {
    //export default function List(props, flashMessage, qrcode) {
    let table = new DataTable("#myTable", {
        // options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    return (
        <AuthenticatedLayout
            auth={auth}
            //errors={errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    View Data Sertifikat Asosiasi Pengajar Hukum Adat (APHA)
                </h2>
            }
        >
            <Head title="Update Anggota" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">
                    Profile Member : <p className="mb-0">{serti.nama}</p>
                </h1>

                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <a
                            href={route("admin.dashboard.sertifikat.index")}
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Kembali
                        </a>
                    </div>
                </div>
            </div>

            {/* Profile Container */}
            <div className="container">
                <div className="card border-0 shadow-sm mb-4">
                    <div className="card-body text-center py-4">
                        <h2 className="fw-bold mb-1">
                            Sertifikat APHA Indonesia
                        </h2>

                        <p className="text-muted mb-0">
                            Asosiasi Pengajar Hukum Adat Indonesia
                        </p>
                    </div>
                </div>

                <div className="card shadow-sm border-0">
                    <div className="card-body text-center">
                        <img
                            src={qrcode}
                            alt="QR Sertifikat"
                            className="img-fluid mb-3"
                            style={{ maxWidth: "200px" }}
                        />

                        <h6 className="text-muted">Token Verifikasi</h6>

                        <div className="fw-bold">{serti.serti_token}</div>
                    </div>
                </div>

                <div className="card shadow-sm border-0 mt-3">
                    <div className="card-body">
                        <h4 className="fw-bold">{serti.nama}</h4>

                        <hr />

                        <div className="mb-2">
                            <small className="text-muted">
                                Nomor Sertifikat
                            </small>

                            <div>{serti.no}</div>
                        </div>

                        <div className="mb-2">
                            <small className="text-muted">Kategori</small>

                            <div>{serti.category}</div>
                        </div>

                        <div className="mb-2">
                            <small className="text-muted">Judul</small>

                            <div>{serti.judul}</div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="card text-center">
                            <div className="card-body">
                                <h4>{serti.view}</h4>
                                <small>Total View</small>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center">
                            <div className="card-body">
                                <h4>
                                    {moment(serti.publish_at).format(
                                        "DD MMM YYYY",
                                    )}
                                </h4>
                                <small>Diterbitkan</small>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center">
                            <div className="card-body">
                                <h4>
                                    {serti.expired_date
                                        ? moment(serti.expired_date).format(
                                              "DD MMM YYYY",
                                          )
                                        : "∞"}
                                </h4>
                                <small>Masa Berlaku</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card shadow-sm border-0">
                    <div className="card-header bg-white">
                        <h5 className="mb-0">Preview Sertifikat</h5>
                    </div>

                    <div className="card-body text-center">
                        {serti.img ? (
                            <img
                                src={serti.img}
                                alt={serti.no}
                                className="img-fluid rounded shadow"
                                style={{
                                    maxHeight: "500px",
                                    objectFit: "contain",
                                }}
                            />
                        ) : serti.link ? (
                            <iframe
                                src={serti.link}
                                width="100%"
                                height="500"
                                title="Sertifikat"
                                className="border rounded"
                            />
                        ) : (
                            <div className="alert alert-warning">
                                Belum ada file sertifikat
                            </div>
                        )}
                    </div>
                </div>

                <div className="d-flex gap-2 mt-3 justify-content-center">
                    <Link
                        href={`/sertifikat/${serti.no}`}
                        className="btn btn-primary"
                    >
                        Lihat Publik
                    </Link>

                    <button
                        className="btn btn-success"
                        onClick={() =>
                            navigator.clipboard.writeText(serti.serti_token)
                        }
                    >
                        Copy Token
                    </button>

                    <Link
                        href={route(
                            "admin.dashboard.sertifikat.edit",
                            serti.id,
                        )}
                        className="btn btn-warning"
                    >
                        Edit
                    </Link>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
