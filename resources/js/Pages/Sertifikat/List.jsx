"use client";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Link, usePage, Head } from "@inertiajs/react";
import moment from "moment";
import Pagination from "@/Components/Page/Pagination";
import parse from "html-react-parser";
import { useForm } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef } from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

{
    //   console.log("sitekey:", import.meta.env.VITE_RECAPTCHA_SITE_KEY);
    // console.log("Site key:", import.meta.env.RECAPTCHA_SITE_KEY);
}

export default function List({ sertifikat, searchQuery, error }) {
    const captchaRef = useRef(null);
    const { data, setData, post, processing } = useForm({
        search: searchQuery || "",
        recaptcha: "",
    });

    const { props } = usePage();
    const flashMessage = props?.flashMessage ?? {};
    const attempts = props?.flash?.attempts ?? 0; // ambil dari controller

    useEffect(() => {
        if (flashMessage?.message) {
            if (flashMessage.type === "error")
                toast.error(flashMessage.message);
            else if (flashMessage.type === "warning")
                toast.warning(flashMessage.message);
            else if (flashMessage.type === "success")
                toast.success(flashMessage.message);
            else toast.info(flashMessage.message);
        }

        // 🔔 Peringatan mendekati limit
        if (attempts > 2) {
            toast.warning(
                `⚠️ Anda sudah ${attempts}x mencari dalam 5 menit. Hindari spam ya~`,
            );
        }
    }, [flashMessage, attempts]);

    const [lastSearchTime, setLastSearchTime] = useState(0);

    const handleCaptchaChange = (value) => {
        setData("recaptcha", value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const now = Date.now();
        if (now - lastSearchTime < 5000) {
            toast.warning("⏳ Tunggu 5 detik sebelum mencari lagi!");
            return;
        }
        setLastSearchTime(now);

        if (!data.recaptcha) {
            toast.error("⚠️ Silakan verifikasi captcha terlebih dahulu!");
            return;
        }

        post(route("frontsertifikat.search"), {
            preserveScroll: true,
            onSuccess: (page) => {
                const hasil = page?.props?.sertifikat || [];
                if (hasil.length > 0)
                    toast.success("✅ Data sertifikat ditemukan!");
                else toast.warning("⚠️ Sertifikat tidak ditemukan.");
            },
            onError: () =>
                toast.error("❌ Terjadi kesalahan. Coba lagi nanti."),
            onFinish: () => {
                setData("search", "");
                setData("recaptcha", ""); // hapus token lama
                captchaRef.current?.reset(); // ⚡ re-render captcha agar bisa dicentang lagi
            },
        });
    };

    return (
        <FrontendLayout>
            <Head>
                <title>
                    Sertifikat Asosiasi Pengajar Hukum Adat (APHA) Indonesia
                </title>
            </Head>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                theme="colored"
            />

            <div className="Container text-center">
                <h1 className="">Sertifikat</h1>
                <h2>Asosiasi Pengajar Hukum Adat</h2>
            </div>

            <div className="album py-5 bg-light">
                <div className="container mt-4">
                    <h2 className="mb-4">🔍 Cari Sertifikat Seminar</h2>
                    <form onSubmit={handleSubmit} className="mb-4">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Masukkan No Sertifikat"
                                value={data.search}
                                onChange={(e) =>
                                    setData("search", e.target.value)
                                }
                            />
                            <button
                                className="btn btn-primary"
                                type="submit"
                                disabled={processing}
                            >
                                Cari
                            </button>
                        </div>
                    </form>

                    <div className="d-flex justify-content-center">
                        <ReCAPTCHA
                            ref={captchaRef}
                            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                            onChange={(value) => setData("recaptcha", value)}
                        />
                    </div>
                    {sertifikat && sertifikat.length > 0 ? (
                        <div className="table-responsive">
                            {sertifikat.map((s) => (
                                <div
                                    className="card shadow border-0 mb-3"
                                    key={s.id}
                                >
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h5 className="fw-bold mb-1">
                                                    {s.nama}
                                                </h5>

                                                <span className="badge bg-success">
                                                    Sertifikat Terdaftar
                                                </span>
                                            </div>

                                            <div>
                                                <Link
                                                    href={`/sertifikat/${s.no}`}
                                                    className="btn btn-success"
                                                >
                                                    Verifikasi
                                                </Link>
                                            </div>
                                        </div>

                                        <hr />

                                        <p>
                                            <strong>No Sertifikat:</strong>{" "}
                                            {s.no}
                                        </p>

                                        <p>
                                            <strong>Acara:</strong> {s.judul}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : searchQuery ? (
                        <div className="alert alert-warning">
                            ⚠️ Sertifikat tidak ditemukan untuk:{" "}
                            <strong>{searchQuery}</strong>. Harap masukkan No
                            Sertifikat.
                        </div>
                    ) : null}
                </div>
            </div>
        </FrontendLayout>
    );
}
