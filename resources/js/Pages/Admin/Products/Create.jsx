import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        description: "",
        price: "",
        type: "",
        start_date: "",
        end_date: "",
        is_active: true,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.products.store"));
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800">
                    Tambah Product
                </h2>
            }
        >
            <Head title="Tambah Product" />

            <div className="container py-4">
                <div className="card shadow-sm">
                    <div className="card-header fw-bold">Tambah Product</div>

                    <div className="card-body">
                        <form onSubmit={submit}>
                            {/* Nama */}
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

                            {/* Description */}
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

                            {/* Harga */}
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

                            {/* Type */}
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

                                {errors.type && (
                                    <small className="text-danger">
                                        {errors.type}
                                    </small>
                                )}
                            </div>

                            {/* Periode */}
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

                            {/* Status */}
                            <div className="mb-3">
                                <label className="form-label">Status</label>

                                <select
                                    className="form-select"
                                    value={data.is_active}
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
                                    Simpan
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
