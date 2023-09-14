import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import Input from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
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

        post(route("register"));
    };

    return (
        <>
            <Head title="Sign Up" />
            <section class="ftco-section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6 text-center mb-1">
                            <h2 class="heading-section">Register </h2>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-12 col-lg-10">
                            <div class="wrap d-md-flex">
                                <div class="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                                    <div class="text w-100">
                                        <h2>Welcome Back!</h2>
                                        <p>
                                            Enter your personal details and
                                            start your journey with us
                                        </p>

                                        <p>Don't have an account?</p>
                                    </div>
                                </div>
                                <div class="login-wrap p-4 p-lg-5">
                                    <div class="d-flex">
                                        <div class="w-100">
                                            <h3 class="mb-4">Sign In</h3>
                                        </div>
                                    </div>
                                    <form onSubmit={submit} class="signin-form">
                                        <div class="form-group mb-3">
                                            <label class="label" for="name">
                                                Name
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="Your Name"
                                                value={data.name}
                                                className="block form-control text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                                autoComplete="name"
                                                onChange={handleOnChange}
                                            />
                                            <InputError
                                                message={errors.name}
                                                className="mt-2"
                                            />
                                        </div>

                                        <div class="form-group mb-3">
                                            <label class="label" for="email">
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={data.email}
                                                placeholder="Email Addres"
                                                className="block form-control text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                                autoComplete="username"
                                                onChange={handleOnChange}
                                            />
                                            <InputError
                                                message={errors.email}
                                                className="mt-2"
                                            />
                                        </div>

                                        <div class="form-group mb-3">
                                            <label class="label" for="password">
                                                Password
                                            </label>

                                            <input
                                                id="password"
                                                type="password"
                                                name="password"
                                                value={data.password}
                                                placeholder="Password"
                                                className="block form-control text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                                autoComplete="new-password"
                                                onChange={handleOnChange}
                                            />

                                            <InputError
                                                message={errors.password}
                                                className="mt-2"
                                            />
                                        </div>

                                        <div class="form-group mb-3">
                                            <label class="label" for="password">
                                                Ulangi Password
                                            </label>

                                            <input
                                                id="password_confirmation"
                                                type="password"
                                                name="password_confirmation"
                                                value={
                                                    data.password_confirmation
                                                }
                                                placeholder="Repeat Password"
                                                className="block form-control text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                                autoComplete="new-password"
                                                onChange={handleOnChange}
                                            />

                                            <InputError
                                                message={
                                                    errors.password_confirmation
                                                }
                                                className="mt-2"
                                            />
                                        </div>
                                        <div class="form-group d-md-flex">
                                            <div class="text-left">
                                                <Checkbox
                                                    name="remember"
                                                    value={data.remember}
                                                    onChange={handleOnChange}
                                                />
                                                <label class=" checkbox-primary mb-5">
                                                    Terms, Privacy Policy
                                                </label>
                                            </div>
                                            <div class="w-50 text-md-right">
                                                {/*a*/}
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <button
                                                className="form-control btn btn-primary submit px-3"
                                                disabled={processing}
                                            >
                                                Sign Up
                                            </button>
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
