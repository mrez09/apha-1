import { useEffect } from "react";
import { useState } from "react";
import AuthLayout from "@/Layouts/AuthLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, useForm } from "@inertiajs/react";

export default function ForgotPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token,
        email: email || "",
        password: "",
        password_confirmation: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("password.store"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <AuthLayout
            title="Reset Password"
            heading="Reset Password"
            description="Masukkan password baru untuk akun APHA Anda."
        >
            <Head title="Reset Password" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <input
                        type="email"
                        className={`form-control ${
                            errors.email ? "is-invalid" : ""
                        }`}
                        value={data.email}
                        readOnly
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4 position-relative">
                    <InputLabel htmlFor="password" value="Password" />

                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={data.password}
                        className={`form-control pe-5 ${
                            errors.password ? "is-invalid" : ""
                        }`}
                        autoComplete="new-password"
                        onChange={onHandleChange}
                    />

                    <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        <i
                            className={`fas ${
                                showPassword ? "fa-eye-slash" : "fa-eye"
                            }`}
                        ></i>
                    </button>

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 position-relative">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="password_confirmation"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className={`form-control pe-5 ${
                            errors.password_confirmation ? "is-invalid" : ""
                        }`}
                        autoComplete="new-password"
                        onChange={onHandleChange}
                    />

                    <button
                        type="button"
                        className="password-toggle"
                        onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                        }
                    >
                        <i
                            className={`fas ${
                                showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                            }`}
                        ></i>
                    </button>

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton
                        className="btn btn-warning auth-btn w-100"
                        disabled={processing}
                    >
                        {processing ? (
                            <>
                                <span
                                    className="spinner-border spinner-border-sm me-2"
                                    role="status"
                                ></span>
                                Signing In...
                            </>
                        ) : (
                            <>
                                <i className="fas fa-right-to-bracket me-2"></i>
                                Reset Password
                            </>
                        )}
                    </PrimaryButton>
                </div>
            </form>
        </AuthLayout>
    );
}
