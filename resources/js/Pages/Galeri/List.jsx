import GuestLayout from "@/Layouts/GuestLayout";
import FrontendLayout from "@/Layouts/FrontendLayout";
import NavbarGuest from "@/Pages/layouts/frontend/NavbarApha";
import { Link, Head } from "@inertiajs/react";
import FeaturedBuku from "@/Components/Buku/FeaturedBuku";
import ListGaleri from "@/Components/Galeri/ListGaleri";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

export default function List({ galeri, props }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <FrontendLayout>
            <Head title="Asosiasi Pengajar Hukum Adat" />

            <div className="Container text-center">
                <h1 className="">Galeri</h1>
                <h2>Asosiasi Pengajar Hukum Adat</h2>
            </div>

            {/*News */}
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {/*loop*/}

                        {galeri.map((galeris) => (
                            <ListGaleri
                                key={galeris.id}
                                thumbnail={`/storage/${galeris.img}`}
                                //slug={featuredBukus.slug}
                                name={galeris.name}
                                //category={featuredBukus.category}
                                //thumbnail={featuredBukus.id}
                                //rating={featuredBukus.rating}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
