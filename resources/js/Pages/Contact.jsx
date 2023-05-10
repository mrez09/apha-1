import { Link, Head } from "@inertiajs/react";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
    ArrowPathIcon,
    BookOpenIcon,
    PaperClipIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    BuildingOfficeIcon,
    BuildingOffice2Icon,
    FingerPrintIcon,
    NewspaperIcon,
    VideoCameraIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Contact(props) {
    return (
        <FrontendLayout>
            <Head title="Lembaga Studi Hukum Indonesia" />

            <section class="py-5 text-center bg-sec">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">Kontak Kami</h1>
                    </div>
                </div>
            </section>
            <nav className="" aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumber">
                    <li class="breadcrumb-item ">
                        <a href="#">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                        Kontak Kami
                    </li>
                </ol>
            </nav>

            <div className="container">
                <iframe
                    className="i-res"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9988493783385!2d106.7870864139957!3d-6.263879963065596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1a15b2cefb7%3A0x4f99af07b043ec4a!2sLSHI%20-%20Lembaga%20Studi%20Hukum%20Indonesia!5e0!3m2!1sen!2sid!4v1676532692261!5m2!1sen!2sid"
                    width="1050"
                    height="325"
                    loading="lazy"
                ></iframe>

                <div class="container">
                    <div class="row align-items-stretch no-gutters contact-wrap">
                        <div class="col-md-8">
                            <div class="form h-100">
                                <h3>Send us a message</h3>
                                <form
                                    class="mb-5"
                                    method="post"
                                    id="contactForm"
                                    name="contactForm"
                                >
                                    <div class="row">
                                        <div class="col-md-6 form-group mb-5">
                                            <label
                                                for=""
                                                class="col-form-label"
                                            >
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="name"
                                                id="name"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div class="col-md-6 form-group mb-5">
                                            <label
                                                for=""
                                                class="col-form-label"
                                            >
                                                Email *
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="email"
                                                id="email"
                                                placeholder="Your email"
                                            />
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6 form-group mb-5">
                                            <label
                                                for=""
                                                class="col-form-label"
                                            >
                                                Phone
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="phone"
                                                id="phone"
                                                placeholder="Phone #"
                                            />
                                        </div>
                                        <div class="col-md-6 form-group mb-5">
                                            <label
                                                for=""
                                                class="col-form-label"
                                            >
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="company"
                                                id="company"
                                                placeholder="Company  name"
                                            />
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-12 form-group mb-5">
                                            <label
                                                for="message"
                                                class="col-form-label"
                                            >
                                                Message *
                                            </label>
                                            <textarea
                                                class="form-control"
                                                name="message"
                                                id="message"
                                                cols="30"
                                                rows="4"
                                                placeholder="Write your message"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 form-group">
                                            <input
                                                type="submit"
                                                value="Send Message"
                                                class="btn btn-primary rounded-0 py-2 px-4"
                                            />
                                            <span class="submitting"></span>
                                        </div>
                                    </div>
                                </form>

                                <div id="form-message-warning mt-4"></div>
                                <div id="form-message-success">
                                    Your message was sent, thank you!
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="contact-info h-100">
                                <h3>Contact Information</h3>
                                <p class="mb-5">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Molestias, magnam!
                                </p>
                                <ul class="list-unstyled">
                                    <li class="d-flex">
                                        <span class="wrap-icon icon-room mr-3"></span>
                                        <span class="text">
                                            9757 Aspen Lane South Richmond Hill,
                                            NY 11419
                                        </span>
                                    </li>
                                    <li class="d-flex">
                                        <span class="wrap-icon icon-phone mr-3"></span>
                                        <span class="text">
                                            +1 (291) 939 9321
                                        </span>
                                    </li>
                                    <li class="d-flex">
                                        <span class="wrap-icon icon-envelope mr-3"></span>
                                        <span class="text">
                                            info@mywebsite.com
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/*contact*/}
            </div>
        </FrontendLayout>
    );
}
