import GuestLayout from "@/Layouts/GuestLayout";
import FrontendLayout from "@/Layouts/FrontendLayout";
import NavbarGuest from "@/Pages/layouts/frontend/NavbarApha";
import { Link, Head } from "@inertiajs/react";
import FeaturedBuku from "@/Components/Buku/FeaturedBuku";
import ListVideo from "@/Components/Video/ListVideo";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

export default function List({ galeri, props }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <FrontendLayout>
            <Head>
                <title>
                    Galeri Video Asosiasi Pengajar Hukum Adat (APHA) Indonesia
                </title>
                <meta
                    head-key="Description"
                    name="description"
                    content="Galeri Video Kegiatan Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
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
                    content="Galeri Video Kegiatan Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
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
                    content="Galeri Video Kegiatan Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
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
                <h1 className="">Galeri</h1>
                <h2>Asosiasi Pengajar Hukum Adat</h2>
            </div>

            <div className="container">
                <div className="row tabs-galeri">
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <Link
                                class="nav-link "
                                href={route("frontgaleri.index")}
                            >
                                Photo
                            </Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page">
                                Video
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/*News */}
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {/*loop*/}

                        {galeri.map((galeris) => (
                            <ListVideo
                                key={galeris.id}
                                url={galeris.url}
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
