import { Link, Head, useForm } from "@inertiajs/react";
import FlashMessage from "@/Components/FlashMessage";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Fragment, useState, useRef } from "react";
import InputError from "@/Components/InputError";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Contact(props) {
    const myRef = useRef(null);
    const { setData, post, processing, errors } = useForm({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        message: "",
        read: false,
    });
    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };
    const submit = (e) => {
        e.preventDefault();
        console.log("Test Input");
        e.target.reset();

        post(route("frontcontact.store"));
        myRef.current.scrollIntoView();
    };

    return (
        <FrontendLayout>
            <Head>
                <title>
                    Contact US Asosiasi Pengajar Hukum Adat (APHA) Indonesia
                </title>
                <meta
                    head-key="description"
                    name="description"
                    content="Contact US Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    head-key="mobile-web-app-capable"
                    name="mobile-web-app-capable"
                    content="yes"
                />
                <meta
                    head-key="application-name"
                    name="application-name"
                    content="Asosiasi Pengajar Hukum Adat (APHA)"
                />
                <meta
                    head-key="apple-mobile-web-app-title"
                    name="apple-mobile-web-app-title"
                    content="Asosiasi Pengajar Hukum Adat (APHA)"
                />
                <meta
                    head-key="theme-color"
                    name="theme-color"
                    content="#ff6300"
                ></meta>
                {/*Sosial Media*/}
                {/*Open Graph Protocol*/}
                <meta
                    head-key="fb:app_id"
                    property="fb:app_id"
                    content="961443805039846"
                ></meta>

                <meta
                    head-key="og:title"
                    property="og:title"
                    content="Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    head-key="og:description"
                    property="og:description"
                    content="Silahkan Hubungi Kami Jika ada pertanyaan Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta head-key="og:type" property="og:type" content="website" />
                <meta
                    head-key="og:url"
                    property="og:url"
                    content="https://www.apha.or.id"
                />
                <meta
                    head-key="og:image"
                    property="og:image"
                    content="https://i.imgur.com/R4DyCBa.png"
                />
                <meta
                    head-key="og:image:type"
                    property="og:image:type"
                    content="image/jpeg"
                />
                <meta
                    head-key="og:image:width"
                    property="og:image:width"
                    content="1800"
                />
                <meta
                    head-key="og:image:height"
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
                    content="Hubungi Kami Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
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

            <section className="py-1 text-center bg-sec">
                <div className="row  crumble">
                    <div className="col-lg-12 col-md-12 mx-auto head-bread">
                        <h1 className="f-bread">Kontak Kami</h1>

                        <p className="lead-bread py-1">
                            Asosiasi Pengajar Hukum Adat
                        </p>
                    </div>
                </div>
            </section>
            <nav className="" aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumber">
                    <li className="breadcrumb-item ">
                        <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Kontak Kami
                    </li>
                </ol>
            </nav>
            <div className="container">
                {props.flashMessage?.message && (
                    <FlashMessage message={props.flashMessage.message} />
                )}
            </div>

            <div className="container">
                <iframe
                    className="i-res"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9988493783385!2d106.7870864139957!3d-6.263879963065596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1a15b2cefb7%3A0x4f99af07b043ec4a!2sLSHI%20-%20Lembaga%20Studi%20Hukum%20Indonesia!5e0!3m2!1sen!2sid!4v1676532692261!5m2!1sen!2sid"
                    width="1050"
                    height="325"
                    loading="lazy"
                ></iframe>

                <div ref={myRef} className="container">
                    <div className="row align-items-stretch no-gutters contact-wrap">
                        <div className="col-md-8">
                            <div className="form h-100">
                                <h3>GET IN TOUCH</h3>

                                <form className="mb-5" onSubmit={submit}>
                                    <div className="row">
                                        <div className="col-md-6 form-group mb-5">
                                            <label className="col-form-label">
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                className="form-contact form-control"
                                                name="firstname"
                                                id="firstname"
                                                placeholder="Your First Name"
                                                onChange={onHandleChange}
                                            />
                                            <InputError
                                                message={errors.firstname}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="col-md-6 form-group mb-5">
                                            <label className="col-form-label">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-contact form-control"
                                                name="lastname"
                                                id="lastname"
                                                placeholder="Your Last Name"
                                                onChange={onHandleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 form-group mb-5">
                                            <label className="col-form-label">
                                                Phone
                                            </label>
                                            <input
                                                type="text"
                                                className="form-contact form-control"
                                                name="phone"
                                                id="phone"
                                                placeholder="Phone #"
                                                onChange={onHandleChange}
                                            />
                                        </div>
                                        <div className="col-md-6 form-group mb-5">
                                            <label className="col-form-label">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                className="form-contact form-control"
                                                name="email"
                                                id="email"
                                                placeholder="Your Email "
                                                onChange={onHandleChange}
                                            />
                                            <InputError
                                                message={errors.email}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 form-group mb-5">
                                            <label className="col-form-label">
                                                Message *
                                            </label>
                                            <textarea
                                                className="form-contact  form-control"
                                                name="message"
                                                id="message"
                                                cols="30"
                                                rows="4"
                                                placeholder="Write your message"
                                                onChange={onHandleChange}
                                            ></textarea>
                                            <InputError
                                                message={errors.message}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group">
                                            <input
                                                type="submit"
                                                value="Send Message"
                                                className="btn btn-primary rounded-0 py-2 px-4"
                                            />
                                            <span className="submitting"></span>
                                        </div>
                                    </div>
                                </form>

                                <div id="form-message-warning mt-4"></div>
                                <div id="form-message-success">
                                    Your message was sent, thank you!
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 guts-c">
                            <div className="contact-info h-100 ">
                                <h3>Contact Information</h3>
                                <p className="mb-5 con-p">
                                    What do you have to say to us?
                                </p>
                                <ul className="list-unstyled">
                                    <li className="d-flex">
                                        <i className="fas ic fa-location-dot"></i>
                                        <span className="a-link">
                                            <a
                                                className="a-link"
                                                target="_blank"
                                                href="https://goo.gl/maps/gqQE1wstP2YHe9xM7?coh=178572&entry=tt"
                                            >
                                                Jl. Kyai Tapa No.1 Grogol
                                                Jakarta Barat
                                            </a>
                                        </span>
                                    </li>
                                    <li className="d-flex">
                                        <i className="fas ic fa-phone"></i>
                                        <span className="a-link">
                                            <a
                                                className="a-link"
                                                href="tel:+6287883256166"
                                            >
                                                (+62) 878-8325-6166
                                            </a>
                                        </span>
                                    </li>
                                    <li className="d-flex">
                                        <i className="fas ic fa-envelope"></i>
                                        <span>
                                            <a
                                                className="a-link"
                                                href="mailto:apha.sekretariat@gmail.com"
                                            >
                                                apha.sekretariat@gmail.com
                                            </a>
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
