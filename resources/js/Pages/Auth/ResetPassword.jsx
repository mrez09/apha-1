import { useEffect } from "react";
import { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import AuthLayout from "@/Layouts/AuthLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
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

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={data.password}
                        className={`form-control ${
                            errors.password ? "is-invalid" : ""
                        }`}
                        autoComplete="new-password"
                        isFocused={true}
                        onChange={onHandleChange}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className={`form-control ${
                            errors.password_confirmation ? "is-invalid" : ""
                        }`}
                        autoComplete="new-password"
                        onChange={onHandleChange}
                    />

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
