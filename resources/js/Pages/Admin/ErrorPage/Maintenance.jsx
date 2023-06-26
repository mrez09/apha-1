import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FlashMessage from "@/Components/FlashMessage";
import DataTable from "datatables.net-dt";
import { Head, useForm } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";

export default function List({
    auth,
    errors,
    flashMessage,
    props,
    konfigurasi,
}) {
    const { delete: destroy } = useForm();
    let table = new DataTable("#myTable", {
        // options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Konfigurasi Website
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div class="container-maintenance">
                <div class="what-is-up">
                    <div class="spinny-cogs">
                        <i
                            class="fa fa-3x fa-cog fa-spin-one"
                            aria-hidden="true"
                        ></i>
                        <i
                            class="fa fa-9x fa-cog fa-spin"
                            aria-hidden="true"
                        ></i>
                        <i
                            class="fa fa-5x fa-cog fa-spin-two"
                            aria-hidden="true"
                        ></i>
                    </div>
                    <h1 class="maintenance">Under Maintenance</h1>
                    <h2>
                        Our developers are hard at work updating your system.
                        Please wait while we do this. We have also made the
                        spinning cogs to distract you.
                    </h2>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
