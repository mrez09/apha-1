import GuestLayout from "@/Layouts/GuestLayout";
import FrontendLayout from "@/Layouts/FrontendLayout";
import NavbarGuest from "@/Pages/layouts/frontend/NavbarApha";
import { Link, usePage, Head } from "@inertiajs/react";
import FeaturedBuku from "@/Components/Buku/FeaturedBuku";
import ListBuku from "@/Components/Buku/ListBuku";
import Pagination from "@/Components/Page/Pagination";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

export default function List({ featuredBuku, buku, props, url }) {
    const { bukup } = usePage().props;

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <FrontendLayout>
            <Head>
                <title>
                    Buku Asosiasi Pengajar Hukum Adat (APHA) Indonesia
                </title>
                <meta
                    name="description"
                    content="Buku Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                    inertia="description"
                />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta
                    name="application-name"
                    content="Asosiasi Pengajar Hukum Adat (APHA)"
                />
                <meta
                    name="apple-mobile-web-app-title"
                    content="Asosiasi Pengajar Hukum Adat (APHA)"
                />
                <meta name="theme-color" content="#ff6300"></meta>
                {/*Sosial Media*/}
                {/*Open Graph Protocol*/}
                <meta property="fb:app_id" content="961443805039846"></meta>

                <meta
                    property="og:title"
                    content="Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    property="og:description"
                    content="Buku Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.apha.or.id" />
                <meta
                    property="og:image"
                    content="https://i.imgur.com/R4DyCBa.png"
                />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="1800" />
                <meta property="og:image:height" content="550" />
                {/*Twitard*/}

                <meta
                    name="twitter:title"
                    content="Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    name="twitter:description"
                    content="Buku Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    name="twitter:image"
                    content="https://i.imgur.com/R4DyCBa.png"
                />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

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

                        {bukup.data.map(
                            ({
                                id,
                                slug,
                                thumbnail,
                                name,
                                category,
                                rating,
                            }) => (
                                <ListBuku
                                    key={id}
                                    slug={slug}
                                    img={`/storage/${thumbnail}`}
                                    name={name}
                                    category={category}
                                    thumbnail={id}
                                    rating={rating}
                                />
                            ),
                        )}
                    </div>

                    <hr />

                    <Pagination
                        class="mt-6"
                        links={bukup.links}
                        key={bukup.id}
                    />
                </div>
            </div>
        </FrontendLayout>
    );
}
