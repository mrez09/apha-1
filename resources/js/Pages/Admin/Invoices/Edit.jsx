import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/react";

export default function Edit({ auth, invoice, products }) {
    const { data, setData, put, processing, errors } = useForm({
        product_id: invoice.product_id ?? "",
        notes: invoice.notes ?? "",
        due_date: invoice.due_date ?? "",
    });

    const submit = (e) => {
        e.preventDefault();

        put(route("admin.dashboard.invoices.update", invoice.id));
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800">
                    Edit Invoice
                </h2>
            }
        >
            <Head title="Edit Invoice" />

            <div className="container py-4">
                <div className="card shadow-sm">
                    <div className="card-header fw-bold">
                        Edit Invoice #{invoice.invoice_number}
                    </div>

                    <div className="card-body">
                        <div className="mb-3">
                            <label className="form-label">Nama Anggota</label>

                            <input
                                type="text"
                                className="form-control"
                                value={invoice.user?.name ?? "-"}
                                disabled
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Invoice Number</label>

                            <input
                                type="text"
                                className="form-control"
                                value={invoice.invoice_number}
                                disabled
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Produk</label>
                            <select
                                className="form-select"
                                value={data.product_id}
                                onChange={(e) =>
                                    setData("product_id", e.target.value)
                                }
                            >
                                <option value="">Pilih Produk</option>

                                {products.map((product) => (
                                    <option key={product.id} value={product.id}>
                                        {product.name}
                                        {" - "}
                                        Rp{" "}
                                        {product.price.toLocaleString("id-ID")}
                                    </option>
                                ))}
                            </select>

                            {errors.product_id && (
                                <small className="text-danger">
                                    {errors.product_id}
                                </small>
                            )}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Catatan</label>

                            <textarea
                                className="form-control"
                                rows="4"
                                value={data.notes}
                                onChange={(e) =>
                                    setData("notes", e.target.value)
                                }
                            />

                            {errors.notes && (
                                <small className="text-danger">
                                    {errors.notes}
                                </small>
                            )}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Due Date</label>

                            <input
                                type="date"
                                className="form-control"
                                value={data.due_date}
                                onChange={(e) =>
                                    setData("due_date", e.target.value)
                                }
                            />

                            {errors.due_date && (
                                <small className="text-danger">
                                    {errors.due_date}
                                </small>
                            )}
                        </div>

                        <div className="d-flex gap-2">
                            <button
                                className="btn btn-primary"
                                disabled={processing}
                                onClick={submit}
                            >
                                Simpan
                            </button>

                            <Link
                                href={route(
                                    "admin.dashboard.invoices.show",
                                    invoice.id,
                                )}
                                className="btn btn-secondary"
                            >
                                Kembali
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
