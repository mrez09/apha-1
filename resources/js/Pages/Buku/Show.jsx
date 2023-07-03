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

export default function List({ featuredBuku, buku, props }) {
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
            </Head>
            <div className="container">
                <div className="row g-5 d-flex justify-content-center mt-5">
                    <h2 className="blog-post-title">{buku.name}</h2>
                    <p className="blog-post-meta mt-0">
                        {moment(buku.created_at).format("dddd D MMMM YYYY")}
                    </p>
                    <div className="col-md-6 img-center">
                        <img
                            src={`/storage/${buku.thumbnail}`}
                            className="rounded img-fluid book-thumbnail"
                            alt=""
                        />
                    </div>
                    <div className="col-md-6 mt-2   ">
                        <article className="blog-post ">
                            <div className="kon-10">
                                {parse(buku.decription)}
                            </div>
                            <div className="kon-10">{parse(buku.sinopsis)}</div>
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
