import GuestLayout from "@/Layouts/GuestLayout";
import FrontendLayout from "@/Layouts/FrontendLayout";
import NavbarGuest from "@/Pages/layouts/frontend/NavbarApha";
import { Link, Head } from "@inertiajs/react";
import FeaturedBuku from "@/Components/Buku/FeaturedBuku";
import ListBuku from "@/Components/Buku/ListBuku";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

export default function List({ featuredBuku, buku, props }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <FrontendLayout>
            <Head title="Asosiasi Pengajar Hukum Adat" />

            <div className="Container text-center">
                <h1 className="">Buku</h1>
                <h2>Asosiasi Pengajar Hukum Adat</h2>
            </div>

            {/*News */}
            <div className="album py-5 bg-light">
                <div className="container">
                    <h1>Featured</h1>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {/*loop*/}

                        {featuredBuku.map((featuredBukus) => (
                            <FeaturedBuku
                                key={featuredBukus.id}
                                img={`/storage/${featuredBukus.thumbnail}`}
                                slug={featuredBukus.slug}
                                name={featuredBukus.name}
                                category={featuredBukus.category}
                                thumbnail={featuredBukus.id}
                                rating={featuredBukus.rating}
                            />
                        ))}
                    </div>
                    <h1>Browse Book</h1>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {/*loop*/}

                        {buku.map((listBukus) => (
                            <ListBuku
                                key={listBukus.id}
                                slug={listBukus.slug}
                                img={`/storage/${listBukus.thumbnail}`}
                                name={listBukus.name}
                                category={listBukus.category}
                                thumbnail={listBukus.id}
                                rating={listBukus.rating}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
