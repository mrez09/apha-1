import { Head, Link, useForm } from "@inertiajs/react";
import AuthLayout from "@/Layouts/AuthLayout";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <AuthLayout
            title="Lupa Password"
            heading="Lupa Password?"
            description="Masukkan alamat email yang terdaftar. Kami akan mengirimkan tautan untuk mengatur ulang password Anda."
        >
            <Head title="Forgot Password" />

            {/* Success Alert */}

            {status && (
                <div className="alert alert-success mb-4">
                    <i className="fas fa-circle-check me-2"></i>
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                {/* Email */}

                <div className="mb-4">
                    <label className="form-label">Email</label>

                    <input
                        type="email"
                        className={`form-control ${
                            errors.email ? "is-invalid" : ""
                        }`}
                        placeholder="Masukkan email Anda"
                        value={data.email}
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                    )}
                </div>

                {/* Button */}

                <button
                    type="submit"
                    className="btn btn-warning auth-btn w-100"
                    disabled={processing}
                >
                    {processing ? (
                        <>
                            <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                            ></span>
                            Mengirim...
                        </>
                    ) : (
                        <>
                            <i className="fas fa-paper-plane me-2"></i>
                            Kirim Link Reset Password
                        </>
                    )}
                </button>

                {/* Back */}

                <div className="text-center mt-4">
                    <Link href={route("login")} className="auth-link">
                        <i className="fas fa-arrow-left me-2"></i>
                        Kembali ke Login
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
}
