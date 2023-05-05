import GuestLayout from "@/Layouts/GuestLayout";
import FrontendLayout from "@/Layouts/FrontendLayout";
import NavbarGuest from "@/Pages/layouts/frontend/NavbarApha";
import { Link, Head } from "@inertiajs/react";
import ListNews from "@/Components/News/ListNews";
import moment from "moment";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

export default function List({ featuredBuku, news, props }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <FrontendLayout>
            <Head title="Asosiasi Pengajar Hukum Adat" />

            <div className="Container text-center">
                <h1 className="">News</h1>
                <h2>Asosiasi Pengajar Hukum Adat</h2>
            </div>

            {/*News */}
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {/*loop*/}

                        {news.map((listNews) => (
                            <ListNews
                                key={listNews.id}
                                img={`/storage/${listNews.img}`}
                                slug={listNews.slug}
                                judul={listNews.judul}
                                publish={moment(listNews.publish_time).format(
                                    "dddd D MMMM YYYY"
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
