import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import Input from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { Head, Link, useForm } from "@inertiajs/react";

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

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <Head title="Log in" />
            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-1">
                            <h2 className="heading-section">Login </h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-10">
                            <div className="wrap d-md-flex">
                                <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                                    <div className="text w-100">
                                        <h2>Welcome Back!</h2>

                                        <p>Don't have an account?</p>
                                        <Link
                                            className="btn btn-white btn-outline-white"
                                            href={route(
                                                "frontkeanggotaan.index"
                                            )}
                                        >
                                            Sign Up
                                        </Link>
                                    </div>
                                </div>
                                <div className="login-wrap p-4 p-lg-5">
                                    <div className="d-flex">
                                        <div className="w-100">
                                            <h3 className="mb-4">Sign In</h3>
                                        </div>
                                    </div>
                                    <form
                                        onSubmit={submit}
                                        className="signin-form"
                                    >
                                        <div className="form-group mb-3">
                                            <label className="label">
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={data.email}
                                                placeholder="Email Addres"
                                                className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                                autoComplete="username"
                                                onChange={handleOnChange}
                                            />
                                        </div>
                                        <InputError
                                            message={errors.email}
                                            className="mt-2"
                                        />
                                        <div className="form-group mb-3">
                                            <label className="label">
                                                Password
                                            </label>
                                            <input
                                                id="password"
                                                type="password"
                                                name="password"
                                                value={data.password}
                                                placeholder="Password"
                                                className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                                autoComplete="current-password"
                                                onChange={handleOnChange}
                                            />
                                            <InputError
                                                message={errors.password}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <button
                                                className="form-control btn btn-primary submit px-3"
                                                disabled={processing}
                                            >
                                                Login
                                            </button>
                                        </div>
                                        <div className="form-group d-md-flex">
                                            <div className="w-50 text-left">
                                                <Checkbox
                                                    name="remember"
                                                    value={data.remember}
                                                    onChange={handleOnChange}
                                                />
                                                <label className=" checkbox-primary mb-0">
                                                    Remember Me
                                                </label>
                                            </div>
                                            <div className="w-50 text-md-right">
                                                {canResetPassword && (
                                                    <Link
                                                        href={route(
                                                            "password.request"
                                                        )}
                                                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    >
                                                        Forgot your password?
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
