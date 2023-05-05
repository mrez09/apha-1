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
            <div className="min-h-screen bg-orange-400 flex justify-center items-center">
                <div className="absolute w-60 h-60 rounded-xl bg-yellow-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
                <form
                    onSubmit={submit}
                    className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20"
                >
                    <div>
                        <h1 className="text-3xl font-bold text-center mb-4 ">
                            Register
                        </h1>
                        <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide">
                            Enter your personal details and start your journey
                            with us
                        </p>
                    </div>
                    <div className="space-y-4">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            value={data.name}
                            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            autoComplete="name"
                            onChange={handleOnChange}
                        />
                        <InputError message={errors.name} className="mt-2" />

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

                        <InputError message={errors.email} className="mt-2" />

                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            placeholder="Password"
                            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            autoComplete="new-password"
                            onChange={handleOnChange}
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />

                        <input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            placeholder="Repeat Password"
                            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            autoComplete="new-password"
                            onChange={handleOnChange}
                        />

                        <InputError
                            message={errors.password_confirmation}
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
                    <div className="flex items-center mb-4">
                        <input
                            id="default-checkbox"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            name="accepttos"
                            required
                        />
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            I have read and agree to the
                            <a
                                className="primary"
                                href="http://lshi.or.id/tos/"
                                target="_blank"
                            >
                                Terms of Service
                            </a>
                        </label>
                        <InputError
                            message={errors.accepttos}
                            className="mt-2"
                        />
                    </div>

                    <div className="text-center mt-6">
                        <button
                            type="submit"
                            className="py-3 w-64 text-xl text-white bg-yellow-400 rounded-2xl"
                            disabled={processing}
                        >
                            Register
                        </button>
                        <p className="mt-4 text-sm">
                            Already registered with us?
                            <Link href={route("login")}>
                                <span className="underline  cursor-pointer">
                                    Sign In
                                </span>
                            </Link>
                        </p>
                    </div>
                </form>
                <div className="w-40 h-40 absolute bg-yellow-300 rounded-full top-0 right-12 hidden md:block"></div>
                <div className="w-20 h-40 absolute bg-yellow-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
            </div>
        </>
    );
}
