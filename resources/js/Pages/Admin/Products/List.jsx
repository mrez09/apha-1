import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ auth, products }) {
    const formatRupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(number);
    };

    const deleteProduct = (id) => {
        if (confirm("Yakin hapus product ini?")) {
            router.delete(route("admin.dashboard.products.destroy", id));
        }
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800">
                    Products
                </h2>
            }
        >
            <Head title="Products" />

            <div className="container py-4">
                <div className="card shadow-sm">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <strong>Daftar Product</strong>

                        <Link
                            href={route("admin.dashboard.products.create")}
                            className="btn btn-primary"
                        >
                            Tambah Product
                        </Link>
                    </div>

                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nama</th>
                                        <th>Type</th>
                                        <th>Harga</th>
                                        <th>Periode</th>
                                        <th>Status</th>
                                        <th width="180">Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {products.data.map((product, index) => (
                                        <tr key={product.id}>
                                            <td>{products.from + index}</td>

                                            <td>
                                                <strong>{product.name}</strong>

                                                <br />

                                                <small className="text-muted">
                                                    {product.description}
                                                </small>
                                            </td>

                                            <td>{product.type}</td>

                                            <td>
                                                {formatRupiah(product.price)}
                                            </td>

                                            <td>
                                                {product.start_date ?? "-"}
                                                <br />
                                                s/d
                                                <br />
                                                {product.end_date ?? "-"}
                                            </td>

                                            <td>
                                                {product.is_active ? (
                                                    <span className="badge bg-success">
                                                        Aktif
                                                    </span>
                                                ) : (
                                                    <span className="badge bg-secondary">
                                                        Nonaktif
                                                    </span>
                                                )}
                                            </td>

                                            <td>
                                                <Link
                                                    href={route(
                                                        "admin.dashboard.products.edit",
                                                        product.id,
                                                    )}
                                                    className="btn btn-sm btn-warning me-2"
                                                >
                                                    Edit
                                                </Link>

                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() =>
                                                        deleteProduct(
                                                            product.id,
                                                        )
                                                    }
                                                >
                                                    Hapus
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
