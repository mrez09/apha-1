import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FlashMessage from "@/Components/FlashMessage";
import DataTable from "datatables.net-dt";
import { Head, useForm, router } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";

export default function List({ auth, errors, flashMessage, props, member }) {
    const { delete: destroy } = useForm();
    let table = new DataTable("#myTable", {
        //options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    List Data Anggota Asosiasi Pengajar Hukum Adat (APHA)
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">
                    List Data Anggota Asosiasi Pengajar Hukum Adat (APHA)
                </h1>

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="btn-group">
                        <button
                            type="button"
                            className="btn btn-danger d-flex align-items-center"
                            onClick={() => {
                                if (
                                    confirm(
                                        "Kirim reminder ke semua anggota yang belum bayar?",
                                    )
                                ) {
                                    router.post(
                                        route(
                                            "admin.dashboard.memberadmin.sendReminderBatch",
                                        ),
                                    );
                                }
                            }}
                        >
                            <i className="bi bi-envelope-fill me-2"></i>
                            Kirim Reminder Batch
                        </button>

                        <Link
                            href={route("admin.dashboard.member.create")}
                            className="btn btn-outline-secondary d-flex align-items-center"
                        >
                            <i className="bi bi-plus-lg me-2"></i>
                            Tambah Anggota
                        </Link>
                    </div>
                </div>
            </div>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}

            {/*End Dashboard Title*/}

            <div className="container">
                <div className="row">
                    <table
                        id="myTable"
                        className="table table-striped align-middle"
                    >
                        <thead className=" text-center">
                            <tr>
                                <th>No</th>
                                <th>No KTA</th>
                                <th>Foto</th>
                                <th>Nama</th>
                                <th>Status</th>
                                <th>Email</th>
                                <th>Universitas</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {member.map((member, index) => (
                                <tr key={member.id}>
                                    <td className="text-center">{index + 1}</td>
                                    <td className="text-center fw-semibold">
                                        {member.no_kta}
                                    </td>

                                    <td className="text-center">
                                        <img
                                            //src={`/storage/${member.img}`}
                                            src={member.img_url}
                                            alt={member.nama}
                                            className="rounded-circle border shadow-sm"
                                            style={{
                                                width: "60px",
                                                height: "60px",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </td>

                                    <td className="fw-semibold">
                                        {member.nama}
                                    </td>

                                    <td className="text-center">
                                        {member.status == 1 ? (
                                            <span className="badge bg-success">
                                                Aktif
                                            </span>
                                        ) : (
                                            <span className="badge bg-secondary">
                                                Tidak Aktif
                                            </span>
                                        )}
                                    </td>

                                    <td>{member.email}</td>
                                    <td>{member.universitas}</td>

                                    <td className="text-center">
                                        <div className="d-flex justify-content-center gap-2 flex-wrap">
                                            <Link
                                                href={route(
                                                    "admin.dashboard.memberadmin.view",
                                                    member.id,
                                                )}
                                            >
                                                <button className="btn btn-outline-primary btn-sm">
                                                    <i className="bi bi-eye"></i>{" "}
                                                    View
                                                </button>
                                            </Link>
                                            <Link
                                                href={route(
                                                    "admin.dashboard.memberadmin.edit",
                                                    member.id,
                                                )}
                                            >
                                                <button className="btn btn-outline-warning btn-sm">
                                                    <i className="bi bi-pencil-square"></i>{" "}
                                                    Edit
                                                </button>
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    destroy(
                                                        route(
                                                            "admin.dashboard.member.destroy",
                                                            member.id,
                                                        ),
                                                    )
                                                }
                                                className="btn btn-outline-danger btn-sm"
                                            >
                                                <i className="bi bi-trash"></i>{" "}
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
