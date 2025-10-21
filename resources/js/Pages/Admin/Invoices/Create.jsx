import { useForm } from "@inertiajs/react";

export default function Create({ users, products }) {
    const { data, setData, post, processing } = useForm({
        user_id: "",
        product_id: "",
        gateway: "midtrans",
        due_date: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.invoices.store"));
    };

    return (
        <div className="container">
            <h3>Buat Invoice</h3>

            <form onSubmit={submit}>
                <div className="mb-3">
                    <label>Member</label>

                    <select
                        className="form-control"
                        value={data.user_id}
                        onChange={(e) => setData("user_id", e.target.value)}
                    >
                        <option value="">Pilih Member</option>

                        {users.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label>Produk</label>

                    <select
                        className="form-control"
                        value={data.product_id}
                        onChange={(e) => setData("product_id", e.target.value)}
                    >
                        <option value="">Pilih Produk</option>

                        {products.map((product) => (
                            <option key={product.id} value={product.id}>
                                {product.name}
                                {" - "}
                                Rp {product.price}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label>Metode Pembayaran</label>

                    <select
                        className="form-control"
                        value={data.gateway}
                        onChange={(e) => setData("gateway", e.target.value)}
                    >
                        <option value="midtrans">Midtrans</option>

                        <option value="manual">Transfer Bank</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label>Jatuh Tempo</label>

                    <input
                        type="date"
                        className="form-control"
                        value={data.due_date}
                        onChange={(e) => setData("due_date", e.target.value)}
                    />
                </div>

                <button className="btn btn-primary" disabled={processing}>
                    Simpan Invoice
                </button>
            </form>
        </div>
    );
}
