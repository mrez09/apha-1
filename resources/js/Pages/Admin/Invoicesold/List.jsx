import { Link } from "@inertiajs/react";

export default function List({ invoices }) {
    return (
        <div className="container">
            <h3>Invoice</h3>

            <Link
                href={route("admin.dashboard.invoices.create")}
                className="btn btn-primary"
            >
                Buat Invoice
            </Link>

            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Member</th>
                        <th>Invoice</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Gateway</th>
                        <th>Aksi</th>
                    </tr>
                </thead>

                <tbody>
                    {invoices.data.map((invoice, index) => (
                        <tr key={invoice.id}>
                            <td>{index + 1}</td>

                            <td>{invoice.user?.name ?? "-"}</td>

                            <td>{invoice.invoice_number}</td>

                            <td>{invoice.total_amount}</td>

                            <td>{invoice.status}</td>

                            <td>{invoice.gateway ?? "-"}</td>

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
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
