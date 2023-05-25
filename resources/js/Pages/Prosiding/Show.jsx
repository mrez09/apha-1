import GuestLayout from "@/Layouts/GuestLayout";
import FrontendLayout from "@/Layouts/FrontendLayout";
import NavbarGuest from "@/Pages/layouts/frontend/NavbarApha";
import { Link, Head } from "@inertiajs/react";
import ListNews from "@/Components/News/ListNews";
import moment from "moment";
import parse from "html-react-parser";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { useCallback } from "react";

export default function Show({ featuredBuku, prosiding, props }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    //const parse = require("html-react-parser");
    //Homes
    const [copied, setCopied] = useState(false);
    const onChange = useCallback(({ target: { value } }) => {
        setValue(value);
        setCopied(true);
    }, []);
    const onClick = useCallback(({ target: { innerText } }) => {
        console.log(`Clicked on "${innerText}"!`);
    }, []);
    const onCopy = useCallback(() => {
        setCopied(true);
    }, []);
    const url_homes = window.location.href;
    return (
        <FrontendLayout>
            <Head>
                <title>
                    Buku - Asosiasi Pengajar Hukum Adat (APHA) Indonesia
                </title>
                <meta
                    head-key="Description"
                    name="description"
                    content={prosiding.name}
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
                    content={prosiding.name}
                />
                <meta
                    head-key="Description Open Graph"
                    property="og:description"
                    content={prosiding.name}
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
                    content={`https://apha.or.id/storage/${prosiding.thumbnail}`}
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
                    content={prosiding.name}
                />
                <meta
                    head-key="Twitter Description"
                    name="twitter:description"
                    content={prosiding.name}
                />
                <meta
                    head-key="Twitter Image"
                    name="twitter:image"
                    content={`https://apha.or.id/storage/${prosiding.thumbnail}`}
                />
                <meta
                    head-key="Twitter Card"
                    name="twitter:card"
                    content="summary_large_image"
                />
            </Head>
            <div className="container">
                <div className="row g-5 d-flex justify-content-center mt-5">
                    <h2 className="blog-post-title">{prosiding.name}</h2>
                    <p className="blog-post-meta mt-0">
                        {moment(prosiding.created_at).format(
                            "dddd D MMMM YYYY"
                        )}
                    </p>
                    <div className="col-md-6 img-center">
                        <img
                            src={`/storage/${prosiding.thumbnail}`}
                            className="rounded img-fluid book-thumbnail"
                            alt=""
                        />
                    </div>
                    <div className="col-md-6 mt-2   ">
                        <article className="blog-post ">
                            <div className="kon-10">
                                {parse(prosiding.decription)}
                            </div>
                            <hr />
                            <div className="detail-article__share-wrapper">
                                <b>SHARE</b>

                                <div className="detail-article__share">
                                    <CopyToClipboard
                                        onCopy={onCopy}
                                        text={url_homes}
                                    >
                                        <span>
                                            <img
                                                src={`/storage/icon/Chain.gif`}
                                                className="detail-article__share-icon"
                                                alt="share Copy Link"
                                            />
                                        </span>
                                    </CopyToClipboard>

                                    <a
                                        href={`https://api.whatsapp.com/send?text=${url_homes}`}
                                        //"https://api.whatsapp.com/send?text={url_homes}"
                                        className="detail-article__share-link"
                                        target="_blank"
                                    >
                                        <img
                                            src={`/storage/icon/Whatsapp.gif`}
                                            className="detail-article__share-icon"
                                            alt="share whatsapp icon"
                                        />
                                    </a>
                                    <a
                                        href={`https://facebook.com/sharer.php?u=${url_homes}`}
                                        //href="https://facebook.com/sharer.php?u=https://apindo.or.id/en/media/forum-pengusaha-umkm-malut-sepakati-pembentukan-holding-company"
                                        className="detail-article__share-link"
                                        target="_blank"
                                    >
                                        <img
                                            //src="https://apindo.or.id/images/share-facebook.png"
                                            src={`/storage/icon/Facebook.gif`}
                                            className="detail-article__share-icon"
                                            alt="share link facebook"
                                        />
                                    </a>
                                    <div>
                                        {copied ? (
                                            <span style={{ color: "red" }}>
                                                Text berhasil dicopy
                                            </span>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/*end News*/}
                </div>
            </div>
        </FrontendLayout>
    );
}
