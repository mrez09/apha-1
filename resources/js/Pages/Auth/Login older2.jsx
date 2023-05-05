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
            <div className="min-h-screen bg-orange-400 flex justify-center items-center">
                <div className="absolute w-60 h-60 rounded-xl bg-yellow-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
                <form
                    className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20"
                    onSubmit={submit}
                >
                    <div>
                        <h1 className="text-3xl font-bold text-center mb-4 ">
                            Log In
                        </h1>
                        <p className="text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide">
                            Welcome Back!
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </p>
                    </div>
                    <div className="space-y-4">
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            placeholder="Email Addres"
                            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            autoComplete="username"
                            onChange={handleOnChange}
                        />

                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            placeholder="Password"
                            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            autoComplete="current-password"
                            onChange={handleOnChange}
                        />
                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                value={data.remember}
                                onChange={handleOnChange}
                            />
                            <span className="ml-2 text-sm text-gray-600">
                                Remember me
                            </span>
                        </label>
                    </div>

                    <div className="text-center mt-6">
                        <button
                            className="py-3 w-64 text-xl text-white bg-yellow-400 rounded-2xl"
                            disabled={processing}
                        >
                            Login
                        </button>
                        <p className="mt-4 text-sm">
                            Not a member yet?{" "}
                            <Link href={route("register")}>
                                <span className="underline underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Create a New Account
                                </span>
                            </Link>
                            <span> or </span>
                            <span>
                                {canResetPassword && (
                                    <Link
                                        href={route("password.request")}
                                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Forgot your password?
                                    </Link>
                                )}
                            </span>
                        </p>
                    </div>
                </form>
                <div className="w-40 h-40 absolute bg-yellow-300 rounded-full top-0 right-12 hidden md:block"></div>
                <div className="w-20 h-40 absolute bg-yellow-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
            </div>
        </>
    );
}
