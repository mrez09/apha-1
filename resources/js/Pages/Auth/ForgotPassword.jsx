import GuestLayout from "@/Layouts/GuestLayout";
import AuthLayout from "@/Layouts/AuthLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <AuthLayout>
            <Head title="Forgot Password" />

            <div className="auth-bg">
                <div className="container">
                    <div className="row justify-content-center align-items-center min-vh-100">
                        <div className="col-lg-5 col-md-7 col-sm-11">
                            <div className="card auth-card border-0">
                                <div className="card-body p-5">
                                    <div className="text-center mb-4">
                                        <div className="auth-icon">
                                            <i className="fas fa-key"></i>
                                        </div>

                                        <h2 className="fw-bold mt-3">
                                            Lupa Password
                                        </h2>

                                        <p className="text-muted">
                                            Masukkan email akun APHA Anda. Kami
                                            akan mengirimkan link untuk membuat
                                            password baru.
                                        </p>
                                    </div>

                                    {status && (
                                        <div className="alert alert-success">
                                            {status}
                                        </div>
                                    )}

                                    <form onSubmit={submit}>
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold">
                                                Email
                                            </label>

                                            <input
                                                type="email"
                                                className={`form-control ${
                                                    errors.email
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                placeholder="email@domain.com"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value,
                                                    )
                                                }
                                            />

                                            {errors.email && (
                                                <div className="invalid-feedback">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>

                                        <button
                                            className="btn btn-warning w-100 auth-btn"
                                            disabled={processing}
                                        >
                                            {processing
                                                ? "Mengirim..."
                                                : "Kirim Link Reset Password"}
                                        </button>
                                    </form>

                                    <div className="text-center mt-4">
                                        <Link
                                            href={route("login")}
                                            className="text-decoration-none"
                                        >
                                            ← Kembali ke Login
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}
