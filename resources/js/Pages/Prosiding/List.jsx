import GuestLayout from "@/Layouts/GuestLayout";
import FrontendLayout from "@/Layouts/FrontendLayout";
import NavbarGuest from "@/Pages/layouts/frontend/NavbarApha";
import { Link, usePage, Head } from "@inertiajs/react";
import FeaturedBuku from "@/Components/Buku/FeaturedBuku";
import ListProsiding from "@/Components/Prosiding/ListProsiding";
import Pagination from "@/Components/Page/Pagination";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

export default function List({ featuredBuku, prosiding, props }) {
    const { prosidingp } = usePage().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <FrontendLayout>
            <Head>
                <title>
                    Prosiding Asosiasi Pengajar Hukum Adat (APHA) Indonesia
                </title>
            </Head>

            <div className="Container text-center">
                <h1 className="">Prosiding</h1>
                <h2>Asosiasi Pengajar Hukum Adat</h2>
            </div>

            {/*News */}
            <div className="album py-5 bg-light">
                <div className="container">
                    {/*<h1>Featured</h1>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {/*loop}

                        {/*
                        featuredProsiding.map((featuredBukus) => (
                            <FeaturedBuku
                                key={featuredBukus.id}
                                img={`/storage/${featuredBukus.thumbnail}`}
                                slug={featuredBukus.slug}
                                name={featuredBukus.name}
                                category={featuredBukus.category}
                                thumbnail={featuredBukus.id}
                                rating={featuredBukus.rating}
                            />
                        ))
                        }
                    </div>*/}
                    <h1>Browse Prosiding</h1>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {/*loop*/}

                        {prosidingp.data.map(
                            ({
                                id,
                                slug,
                                thumbnail,
                                name,
                                category,
                                rating,
                            }) => (
                                <ListProsiding
                                    key={id}
                                    slug={slug}
                                    img={`/storage/${thumbnail}`}
                                    name={name}
                                    category={category}
                                    thumbnail={id}
                                    rating={rating}
                                />
                            )
                        )}
                    </div>

                    <hr />

                    <Pagination class="mt-6" links={prosidingp.links} />
                </div>
            </div>
        </FrontendLayout>
    );
}
