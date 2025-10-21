import React, { useState } from "react";
import { router } from "@inertiajs/react";

export default function Create({ members }) {
    const [memberId, setMemberId] = useState("");
    const [items, setItems] = useState([{ name: "", price: "", quantity: 1 }]);
    const [description, setDescription] = useState("");

    const addItem = () => {
        setItems([...items, { name: "", price: "", quantity: 1 }]);
    };

    const handleChange = (index, field, value) => {
        const updated = [...items];
        updated[index][field] = value;
        setItems(updated);
    };

    const submit = (e) => {
        e.preventDefault();
        router.post(route("invoices.store"), {
            member_id: memberId,
            items,
            description,
        });
    };

    return (
        <div className="container mt-4">
            <h4>Buat Invoice Baru</h4>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label>Nama Anggota</label>
                    <select
                        className="form-select"
                        value={memberId}
                        onChange={(e) => setMemberId(e.target.value)}
                    >
                        <option value="">-- Pilih Anggota --</option>
                        {members.map((m) => (
                            <option key={m.id} value={m.id}>
                                {m.nama}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label>Deskripsi</label>
                    <textarea
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <h5>Daftar Item</h5>
                {items.map((item, i) => (
                    <div key={i} className="row mb-2">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nama Item"
                                value={item.name}
                                onChange={(e) =>
                                    handleChange(i, "name", e.target.value)
                                }
                            />
                        </div>
                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Harga"
                                value={item.price}
                                onChange={(e) =>
                                    handleChange(i, "price", e.target.value)
                                }
                            />
                        </div>
                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Qty"
                                value={item.quantity}
                                onChange={(e) =>
                                    handleChange(i, "quantity", e.target.value)
                                }
                            />
                        </div>
                    </div>
                ))}

                <button
                    type="button"
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={addItem}
                >
                    + Tambah Item
                </button>

                <button type="submit" className="btn btn-success">
                    Simpan Invoice
                </button>
            </form>
        </div>
    );
}
