import { useEffect } from "react";
import { useState } from "react";
import Checkbox from "@/Components/Checkbox";
import Input from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthLayout from "@/Layouts/AuthLayout";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const [showPassword, setShowPassword] = useState(false);

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value,
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <AuthLayout
            title="Login"
            heading="Selamat Datang"
            description="Masuk menggunakan akun APHA Anda."
        >
            <Head title="Log in" />
            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <form onSubmit={submit}>
                {/* EMAIL */}

                <div className="mb-3">
                    <label className="form-label">Email</label>

                    <input
                        type="email"
                        className={`form-control ${
                            errors.email ? "is-invalid" : ""
                        }`}
                        value={data.email}
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                    )}
                </div>

                {/* PASSWORD */}

                <div className="mb-3">
                    <label className="form-label">Password</label>

                    <input
                        type="password"
                        className={`form-control ${
                            errors.password ? "is-invalid" : ""
                        }`}
                        value={data.password}
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    {errors.password && (
                        <div className="invalid-feedback">
                            {errors.password}
                        </div>
                    )}
                </div>

                {/* REMEMBER */}

                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                        <input
                            id="remember"
                            className="form-check-input"
                            type="checkbox"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />

                        <label htmlFor="remember" className="form-check-label">
                            Remember Me
                        </label>
                    </div>

                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="small auth-link"
                        >
                            Forgot Password?
                        </Link>
                    )}
                </div>

                {/* BUTTON */}

                <button
                    className="btn btn-warning auth-btn w-100"
                    disabled={processing}
                >
                    {processing ? "Signing In..." : "Login"}
                </button>
            </form>
        </AuthLayout>
    );
}
