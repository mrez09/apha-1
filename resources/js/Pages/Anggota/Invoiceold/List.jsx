import AnggotaLayout from "@/Layouts/AnggotaLayout";
import FlashMessage from "@/Components/FlashMessage";
import DataTable from "datatables.net-dt";
import { Head, useForm } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";
import moment from "moment";

export default function List({
    auth,
    errors,
    flashMessage,
    props,
    news,
    order,
}) {
    const { delete: destroy } = useForm();
    let table = new DataTable("#myTable", {
        // options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    return (
        <AnggotaLayout
            auth={auth}
            errors={errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    List Data Payment
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">List Payment</h1>
                {/*
                    <h1>{order}</h1>
                */}

                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        {/* sementara
                        <Link
                            type="button"
                            href={route("anggota.dashboard.payment.create")}
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Tambah.
                        </Link>
                        */}
                    </div>
                </div>
            </div>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}

            {/*End Dashboard Title*/}

            <div className="container">
                <div className="row">
                    <table id="myTable" className="table table-striped">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>No Invoice</th>
                                <th>Judul</th>
                                <th>Name</th>
                                <th>Metode Pembayaran</th>
                                <th>Status</th>
                                <th>Tanggal Pembayaran</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {news.map((invoice, index) => (
                                <tr key={invoice.link_id}>
                                    <td>{++index}</td>
                                    <td>{invoice.invoice_number}</td>
                                    <td>{invoice.amount}</td>
                                    <td>{invoice.name}</td>
                                    <td>{invoice.method}</td>
                                    <td>
                                        {(() => {
                                            if (invoice.status == "Belum") {
                                                return (
                                                    <span className="text-warning fw-bold">
                                                        {invoice.status}
                                                    </span>
                                                );
                                            } else {
                                                return (
                                                    <span className="text-info fw-bold">
                                                        {invoice.status}
                                                    </span>
                                                );
                                            }
                                        })()}
                                    </td>
                                    <td>
                                        {moment(invoice.paid_at).format(
                                            "dddd D MMMM YYYY"
                                        )}
                                    </td>

                                    <td>
                                        <a
                                            href={route(
                                                "anggota.dashboard.invoice.show",
                                                invoice.invoice_number
                                            )}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <button className="btn btn-warning my-2">
                                                Lihat
                                            </button>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AnggotaLayout>
    );
}
