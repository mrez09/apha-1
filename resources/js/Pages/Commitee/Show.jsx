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

export default function List({ featuredBuku, commitee, cururl, props }) {
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
                    Pengurus - Asosiasi Pengajar Hukum Adat (APHA) Indonesia
                </title>
            </Head>
            <div className="container ">
                <div className="row g-5 mx-4 my-4 d-flex justify-content-center mt-5 round-card">
                    <div className="col-md-6 img-center mb-4">
                        <img
                            src={`/storage/${commitee.img}`}
                            className="rounded img-fluid book-thumbnail"
                            alt=""
                        />
                    </div>
                    <div className="col-md-6 mt-2   ">
                        <article className="blog-post ">
                            <h2 className="blog-post-title mt-5 text-accent">
                                {commitee.nama}
                            </h2>
                            <hr />
                            {(() => {
                                if (commitee.subdivisi_id == 1) {
                                    return (
                                        <h4 className="blog-post-title mt-2 text-paragh">
                                            {commitee.namajabatan}
                                        </h4>
                                    );
                                } else {
                                    return (
                                        <h4 className="blog-post-title mt-2 text-paragh">
                                            {commitee.namasubdivisi} -{" "}
                                            {commitee.namajabatan}
                                        </h4>
                                    );
                                }
                            })()}

                            {(() => {
                                if (commitee.description != null) {
                                    return (
                                        <div>
                                            <div className="kon-10">
                                                {parse(commitee.description)}
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return <p></p>;
                                }
                            })()}

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
