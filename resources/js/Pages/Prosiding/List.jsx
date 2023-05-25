import GuestLayout from "@/Layouts/GuestLayout";
import FrontendLayout from "@/Layouts/FrontendLayout";
import NavbarGuest from "@/Pages/layouts/frontend/NavbarApha";
import { Link, Head } from "@inertiajs/react";
import FeaturedBuku from "@/Components/Buku/FeaturedBuku";
import ListProsiding from "@/Components/Prosiding/ListProsiding";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

export default function List({ featuredBuku, prosiding, props }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <FrontendLayout>
            <Head>
                <title>
                    Prosiding Asosiasi Pengajar Hukum Adat (APHA) Indonesia
                </title>
                <meta
                    head-key="Description"
                    name="description"
                    content="Prosiding Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    head-key="Mobile Capable"
                    name="mobile-web-app-capable"
                    content="yes"
                />
                <meta
                    head-key="App Name"
                    name="application-name"
                    content="Asosiasi Pengajar Hukum Adat (APHA)"
                />
                <meta
                    head-key="Apple Mobile App Name"
                    name="apple-mobile-web-app-title"
                    content="Asosiasi Pengajar Hukum Adat (APHA)"
                />
                <meta
                    head-key="Theme Color"
                    name="theme-color"
                    content="#ff6300"
                ></meta>
                {/*Sosial Media*/}
                {/*Open Graph Protocol*/}
                <meta
                    head-key="App id Facebook"
                    property="fb:app_id"
                    content="961443805039846"
                ></meta>

                <meta
                    head-key="Title Open Graph"
                    property="og:title"
                    content="Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    head-key="Description Open Graph"
                    property="og:description"
                    content="Prosiding Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    head-key="Type Open Graph"
                    property="og:type"
                    content="website"
                />
                <meta
                    head-key="URL Open Graph"
                    property="og:url"
                    content="https://www.apha.or.id"
                />
                <meta
                    head-key="Image Open Graph"
                    property="og:image"
                    content="https://i.imgur.com/R4DyCBa.png"
                />
                <meta
                    head-key="Image Type Open Graph"
                    property="og:image:type"
                    content="image/jpeg"
                />
                <meta
                    head-key="Image Width Open Graph"
                    property="og:image:width"
                    content="1800"
                />
                <meta
                    head-key="Image Height Open Graph"
                    property="og:image:height"
                    content="550"
                />
                {/*Twitard*/}

                <meta
                    head-key="Twitter Title"
                    name="twitter:title"
                    content="Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    head-key="Twitter Description"
                    name="twitter:description"
                    content="Prosiding Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    head-key="Twitter Image"
                    name="twitter:image"
                    content="https://i.imgur.com/R4DyCBa.png"
                />
                <meta
                    head-key="Twitter Card"
                    name="twitter:card"
                    content="summary_large_image"
                />
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

                        {prosiding.map((listBukus) => (
                            <ListProsiding
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
