import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Create({ auth, users, products }) {
    const { data, setData, post, processing, errors } = useForm({
        user_id: "",
        product_id: "",
        notes: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.invoices.store"));
    };

    return (
        <AuthenticatedLayout auth={auth} header={<h2>Buat Invoice</h2>}>
            <Head title="Create Invoice" />

            <div className="container py-4">
                <div className="card">
                    <div className="card-header">Buat Invoice Baru</div>

                    <div className="card-body">
                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <label className="form-label">Anggota</label>

                                <select
                                    className="form-select"
                                    value={data.user_id}
                                    onChange={(e) =>
                                        setData("user_id", e.target.value)
                                    }
                                >
                                    <option value="">Pilih Anggota</option>

                                    {users.map((user) => (
                                        <option key={user.id} value={user.id}>
                                            {user.name}
                                            {" - "}
                                            {user.email}
                                        </option>
                                    ))}
                                </select>
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
                                        <option
                                            key={product.id}
                                            value={product.id}
                                        >
                                            {product.name}
                                            {" - "}
                                            Rp{" "}
                                            {product.price.toLocaleString(
                                                "id-ID",
                                            )}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Catatan</label>

                                <textarea
                                    className="form-control"
                                    value={data.notes}
                                    onChange={(e) =>
                                        setData("notes", e.target.value)
                                    }
                                />
                            </div>

                            <button
                                className="btn btn-primary"
                                disabled={processing}
                            >
                                Buat Invoice
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
