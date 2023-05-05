import GuestLayout from "@/Layouts/GuestLayout";
import FrontendLayout from "@/Layouts/FrontendLayout";
import NavbarGuest from "@/Pages/layouts/frontend/NavbarApha";
import { Link, Head } from "@inertiajs/react";
import ListNews from "@/Components/News/ListNews";
import moment from "moment";
import parse from "html-react-parser";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

export default function List({ featuredBuku, news, props }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    //const parse = require("html-react-parser");
    return (
        <FrontendLayout>
            <Head title="Asosiasi Pengajar Hukum Adat" />
            <div class="container">
                <div class="row g-5">
                    <div class="col-md-8">
                        <article class="blog-post mt-5">
                            <h2 class="blog-post-title">{news.judul}</h2>
                            <p class="blog-post-meta">
                                January 1, 2021 by <a href="#">Mark</a>
                            </p>
                            <img
                                src={`/storage/${news.img}`}
                                className="rounded img-fluid img-thumbnail"
                                alt=""
                            />
                            {parse(news.konten)}
                            <hr />
                        </article>
                    </div>

                    <div class="col-md-4">
                        <div class="position-sticky">
                            <div class="p-4 mb-3 bg-light rounded">
                                <h4 class="fst-italic">About</h4>
                                <p class="mb-0">
                                    Customize this section to tell your visitors
                                    a little bit about your publication,
                                    writers, content, or something else
                                    entirely. Totally up to you.
                                </p>
                            </div>

                            <div class="p-4">
                                <h4 class="fst-italic">Archives</h4>
                                <ol class="list-unstyled mb-0">
                                    <li>
                                        <a href="#">March 2021</a>
                                    </li>
                                    <li>
                                        <a href="#">February 2021</a>
                                    </li>
                                    <li>
                                        <a href="#">January 2021</a>
                                    </li>
                                    <li>
                                        <a href="#">December 2020</a>
                                    </li>
                                    <li>
                                        <a href="#">November 2020</a>
                                    </li>
                                    <li>
                                        <a href="#">October 2020</a>
                                    </li>
                                    <li>
                                        <a href="#">September 2020</a>
                                    </li>
                                    <li>
                                        <a href="#">August 2020</a>
                                    </li>
                                    <li>
                                        <a href="#">July 2020</a>
                                    </li>
                                    <li>
                                        <a href="#">June 2020</a>
                                    </li>
                                    <li>
                                        <a href="#">May 2020</a>
                                    </li>
                                    <li>
                                        <a href="#">April 2020</a>
                                    </li>
                                </ol>
                            </div>

                            <div class="p-4">
                                <h4 class="fst-italic">Elsewhere</h4>
                                <ol class="list-unstyled">
                                    <li>
                                        <a href="#">GitHub</a>
                                    </li>
                                    <li>
                                        <a href="#">Twitter</a>
                                    </li>
                                    <li>
                                        <a href="#">Facebook</a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
