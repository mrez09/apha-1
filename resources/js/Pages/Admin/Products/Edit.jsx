import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, product }) {
    const { data, setData, put, processing, errors } = useForm({
        name: product.name ?? "",
        description: product.description ?? "",
        price: product.price ?? "",
        type: product.type ?? "",
        start_date: product.start_date ?? "",
        end_date: product.end_date ?? "",
        is_active: product.is_active ?? true,
    });

    const submit = (e) => {
        e.preventDefault();

        put(route("admin.dashboard.products.update", product.id));
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800">
                    Edit Product
                </h2>
            }
        >
            <Head title="Edit Product" />

            <div className="container py-4">
                <div className="card shadow-sm">
                    <div className="card-header fw-bold">Edit Product</div>

                    <div className="card-body">
                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <label className="form-label">
                                    Nama Product
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />

                                {errors.name && (
                                    <small className="text-danger">
                                        {errors.name}
                                    </small>
                                )}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Deskripsi</label>

                                <textarea
                                    className="form-control"
                                    rows="4"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Harga</label>

                                <input
                                    type="number"
                                    className="form-control"
                                    value={data.price}
                                    onChange={(e) =>
                                        setData("price", e.target.value)
                                    }
                                />

                                {errors.price && (
                                    <small className="text-danger">
                                        {errors.price}
                                    </small>
                                )}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Type</label>

                                <select
                                    className="form-select"
                                    value={data.type}
                                    onChange={(e) =>
                                        setData("type", e.target.value)
                                    }
                                >
                                    <option value="">Pilih Type</option>

                                    <option value="iuran">Iuran</option>
                                    <option value="seminar">Seminar</option>

                                    <option value="event">Event</option>

                                    <option value="lainnya">Lainnya</option>
                                </select>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        Start Date
                                    </label>

                                    <input
                                        type="date"
                                        className="form-control"
                                        value={data.start_date}
                                        onChange={(e) =>
                                            setData(
                                                "start_date",
                                                e.target.value,
                                            )
                                        }
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        End Date
                                    </label>

                                    <input
                                        type="date"
                                        className="form-control"
                                        value={data.end_date}
                                        onChange={(e) =>
                                            setData("end_date", e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Status</label>

                                <select
                                    className="form-select"
                                    value={data.is_active ? "1" : "0"}
                                    onChange={(e) =>
                                        setData(
                                            "is_active",
                                            e.target.value === "1",
                                        )
                                    }
                                >
                                    <option value="1">Aktif</option>

                                    <option value="0">Nonaktif</option>
                                </select>
                            </div>

                            <div className="d-flex gap-2">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={processing}
                                >
                                    Update
                                </button>

                                <Link
                                    href={route(
                                        "admin.dashboard.products.index",
                                    )}
                                    className="btn btn-secondary"
                                >
                                    Kembali
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
