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

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Konfigurasi Website</h1>
            </div>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}

            {/*End Dashboard Title*/}

            <div className="container">
                <div className="row">
                    <div class="container px-4 py-5" id="icon-grid">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                            <div class="col d-flex align-items-start">
                                <i class="fa-solid fa-gear bi text-muted flex-shrink-0 me-3 fa-2xl"></i>
                                <div className="item-config">
                                    <Link
                                        href={route(
                                            "admin.dashboard.konfigurasi.edit",
                                            konfigurasi.slug
                                        )}
                                    >
                                        <h4 class="fw-bold mb-0">
                                            Konfigurasi Website
                                        </h4>
                                        <p>Konfigurasi Dasar Website.</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
