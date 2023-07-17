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

                                    <a
                                        href="#"
                                        class="btn btn-info btn-lg btn-block"
                                        data-toggle="modal"
                                        data-target="#popup-image-gallery"
                                        tabIndex="0"
                                    >
                                        Click to view Thumbnail images gallery
                                        in lightbox
                                    </a>
                                </div>
                                <div
                                    class="modal popup-image-gallery"
                                    id="popup-image-gallery"
                                    tabIndex="-1"
                                    role="dialog"
                                    aria-labelledby="myModalLabel"
                                >
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-body">
                                                <button
                                                    type="button"
                                                    class="btn close-btn"
                                                    title="Close"
                                                    data-dismiss="modal"
                                                    aria-label="Close"
                                                >
                                                    &#10006;
                                                </button>
                                                <div class="popup-slider-for">
                                                    <div class="main-image">
                                                        <img
                                                            src="https://unsplash.it/340/?random"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="main-image">
                                                        <img
                                                            src="https://unsplash.it/360/?random"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="main-image">
                                                        <img
                                                            src="https://unsplash.it/380/?random"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="main-image">
                                                        <img
                                                            src="https://unsplash.it/400/?random"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="main-image">
                                                        <img
                                                            src="https://unsplash.it/420/?random"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <h5 class="pagingInfo"></h5>
                                                <div class="popup-slider-nav hidden-xs">
                                                    <div class="thumbnail-image">
                                                        <img
                                                            src="https://unsplash.it/340/?random"
                                                            alt=""
                                                        />
                                                    </div>
                                                    unsplash.it
                                                    <div class="thumbnail-image">
                                                        <img
                                                            src="https://unsplash.it/360/?random"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="thumbnail-image">
                                                        <img
                                                            src="https://unsplash.it/380/?random"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="thumbnail-image">
                                                        <img
                                                            src="https://unsplash.it/400/?random"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="thumbnail-image">
                                                        <img
                                                            src="https://unsplash.it/420/?random"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />
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
