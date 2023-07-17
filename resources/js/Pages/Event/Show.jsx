import FrontendLayout from "@/Layouts/FrontendLayout";
import { Link, Head } from "@inertiajs/react";
import moment from "moment";
import parse from "html-react-parser";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { useState, useCallback } from "react";
import ListTerkait from "@/Components/News/ListTerkait";

export default function List({
    featuredBuku,
    acara,
    //newsjoin,
    //newsterkait,
    //newsterkaitget,
    props,
}) {
    //Copy Button
    const [copied, setCopied] = useState(false);
    const onCopy = useCallback(() => {
        setCopied(true);
    }, []);
    const url_homes = window.location.href;
    //const parse = require("html-react-parser");
    return (
        <FrontendLayout>
            <Head>
                <title>
                    Event - Asosiasi Pengajar Hukum Adat (APHA) Indonesia
                </title>
            </Head>

            <div className="container">
                <div className="row g-5 d-flex justify-content-center">
                    <div className="col-lg-8">
                        <article className="blog-post mt-5">
                            <nav className="" aria-label="breadcrumb">
                                <ol className="breadcrumb newscrumber">
                                    <li className="breadcrumb-item ">
                                        <Link href={route("frontnews.index")}>
                                            Event
                                        </Link>
                                    </li>
                                </ol>
                            </nav>
                            <div class="lane-gdark"></div>

                            <img
                                src={`/storage/${acara.img}`}
                                className="my-2 rounded img-fluid img-thumbnail"
                                alt=""
                            />
                            <div class="lanep-gdark"></div>
                            <div className="kon-10">
                                {parse(acara.description)}
                            </div>
                            <hr />
                        </article>
                    </div>
                    <div className="col-lg-4 text-center sm-margin-top xs-margin-top">
                        <div class="my-5 mx-0 wrapper-sidebar wrapper-btn">
                            <div class="row">
                                <div class="col-md-12 padding-top my-5">
                                    <h2 className="blog-post-title ">
                                        {acara.judul}
                                    </h2>
                                    <p className="blog-post-meta">
                                        {moment(acara.eventdate_at).format(
                                            "dddd D MMMM YYYY"
                                        )}
                                        &nbsp;
                                        <span className="blog-post-meta">
                                            - {acara.view} &nbsp;
                                            <i class="fa-solid fa-eye"></i>
                                        </span>
                                    </p>
                                    <p>{acara.subjudul}</p>

                                    {/** image Galery */}

                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                    >
                                        Launch demo modal
                                    </button>

                                    <div
                                        class="modal fade"
                                        id="exampleModal"
                                        tabindex="-1"
                                        aria-labelledby="exampleModalLabel"
                                        aria-hidden="true"
                                    >
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1
                                                        class="modal-title fs-5"
                                                        id="exampleModalLabel"
                                                    >
                                                        Modal title
                                                    </h1>
                                                    <button
                                                        type="button"
                                                        class="btn-close"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    ></button>
                                                </div>
                                                <div class="modal-body">
                                                    <div
                                                        id="carouselExampleInterval"
                                                        class="carousel carousel-dark slide"
                                                        data-bs-ride="carousel"
                                                    >
                                                        <div class="carousel-inner">
                                                            <div
                                                                class="carousel-item active"
                                                                data-bs-interval="10000"
                                                            >
                                                                <img
                                                                    src="https://i.imgur.com/y4g72j2.jpg"
                                                                    class="d-block w-100"
                                                                    alt="..."
                                                                />
                                                            </div>
                                                            <div
                                                                class="carousel-item"
                                                                data-bs-interval="2000"
                                                            >
                                                                <img
                                                                    src="https://i.imgur.com/SM5Equu.jpg"
                                                                    class="d-block w-100"
                                                                    alt="..."
                                                                />
                                                            </div>
                                                        </div>
                                                        <button
                                                            class="carousel-control-prev"
                                                            type="button"
                                                            data-bs-target="#carouselExampleInterval"
                                                            data-bs-slide="prev"
                                                        >
                                                            <span
                                                                class="carousel-control-prev-icon"
                                                                aria-hidden="true"
                                                            ></span>
                                                            <span class="visually-hidden">
                                                                Previous
                                                            </span>
                                                        </button>
                                                        <button
                                                            class="carousel-control-next"
                                                            type="button"
                                                            data-bs-target="#carouselExampleInterval"
                                                            data-bs-slide="next"
                                                        >
                                                            <span
                                                                class="carousel-control-next-icon"
                                                                aria-hidden="true"
                                                            ></span>
                                                            <span class="visually-hidden">
                                                                Next
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button
                                                        type="button"
                                                        class="btn btn-secondary"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        Close
                                                    </button>
                                                    <button
                                                        type="button"
                                                        class="btn btn-primary"
                                                    >
                                                        Save changes
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
