import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FlashMessage from "@/Components/FlashMessage";
import DataTable from "datatables.net-dt";
import { Head, useForm } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";

export default function List({ invoices, auth, errors, flashMessage, props }) {
    const { delete: destroy } = useForm();
    let table = new DataTable("#myTable", {
        // options
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
                    List Data Photo
                </h2>
            }
        >
            <Head title="Invoice" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">List Invoices</h1>

                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link
                            type="button"
                            href={route("admin.dashboard.invoices.create")}
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Tambah
                        </Link>
                    </div>
                </div>
            </div>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}

            <div className="container">
                <div className="row">
                    <table id="myTable" className="table table-striped">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Invoice Number</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Urutan</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoices.map((invoice, index) => (
                                <tr key={invoice.id}>
                                    <td>{index + 1}</td>
                                    <td>{invoice.user?.name ?? "-"}</td>
                                    <td>
                                        <span className="badge bg-info">
                                            {invoice.invoice_number}
                                        </span>
                                    </td>
                                    <td>{invoice.total_amount}</td>
                                    <td>
                                        {(() => {
                                            if (invoice.status == "Belum") {
                                                return (
                                                    <span className="text-warning fw-bold">
                                                        {(
                                                            invoice?.status ??
                                                            "-"
                                                        ).toUpperCase()}
                                                    </span>
                                                );
                                            } else {
                                                return (
                                                    <span className="text-info fw-bold">
                                                        {(
                                                            invoice?.status ??
                                                            "-"
                                                        ).toUpperCase()}
                                                    </span>
                                                );
                                            }
                                        })()}
                                    </td>
                                    <td>
                                        {[
                                            invoice.method,
                                            invoice.gateway,
                                            invoice.payment_type,
                                        ]
                                            .filter(Boolean)
                                            .map((item, index) => (
                                                <span
                                                    key={index}
                                                    className="badge bg-primary text-uppercase me-1"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                    </td>

                                    <td>
                                        <Link
                                            href={route(
                                                "admin.dashboard.invoices.show",
                                                invoice.id,
                                            )}
                                            className="btn btn-sm btn-info"
                                        >
                                            Detail
                                        </Link>

                                        <Link
                                            href={route(
                                                "admin.dashboard.guide.edit",
                                                invoice.id,
                                            )}
                                        >
                                            <button className="btn btn-warning my-2">
                                                Edit
                                            </button>
                                        </Link>
                                        <div
                                            onClick={() => {
                                                destroy(
                                                    route(
                                                        "admin.dashboard.invoices.destroy",
                                                        invoice.id,
                                                    ),
                                                    {
                                                        onSuccess: () => {
                                                            window.location.reload();
                                                        },
                                                    },
                                                );
                                            }}
                                        >
                                            <button className="btn btn-danger my-2">
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
