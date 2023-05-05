import Input from "@/Components/TextInput";
import { Link, Head } from "@inertiajs/react";

export default function Login() {
    return (
        <>
            <Head title="Sign Up" />
            <div className="min-h-screen bg-orange-400 flex justify-center items-center">
                <div className="absolute w-60 h-60 rounded-xl bg-yellow-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
                <div className="absolute w-48 h-48 rounded-xl bg-yellow-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
                <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
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
                            type="text"
                            placeholder="Your Name"
                            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                        />

                        <input
                            type="text"
                            placeholder="Email Addres"
                            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Password"
                            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            name="accepttos"
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
                    </div>

                    <div className="text-center mt-6">
                        <button className="py-3 w-64 text-xl text-white bg-yellow-400 rounded-2xl">
                            Register
                        </button>
                        <p className="mt-4 text-sm">
                            Already registered with us?
                            <Link href={route("accounts.login")}>
                                <span className="underline  cursor-pointer">
                                    Sign In
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="w-40 h-40 absolute bg-yellow-300 rounded-full top-0 right-12 hidden md:block"></div>
                <div className="w-20 h-40 absolute bg-yellow-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
            </div>
        </>
    );
}
