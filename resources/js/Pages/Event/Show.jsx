import FrontendLayout from "@/Layouts/FrontendLayout";
import { Link, Head } from "@inertiajs/react";
import moment from "moment";
import parse from "html-react-parser";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { useState, useCallback } from "react";
//import ListTerkait from "@/Components/News/ListTerkait";

export default function Show({
    acara,
    //newsjoin,
    //newsterkait,
    //newsterkaitget,
    imgacara,
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
                <div
                    className="row g-5 d-flex justify-content-center"
                    key={acara.id}
                >
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
                            <div className="lane-gdark"></div>

                            <img
                                src={`/storage/${acara.img}`}
                                className="my-2 rounded img-fluid img-thumbnail"
                                alt=""
                            />
                            <div className="lanep-gdark"></div>
                            <div className="kon-10">
                                {parse(acara.description)}
                            </div>
                            <hr />
                        </article>
                    </div>

                    {/**sidebar */}
                    <div className="col-lg-4 text-center sm-margin-top xs-margin-top ">
                        <div className=" mx-0 wrapper-sidebar wrapper-btn my-5">
                            <div className="row">
                                <div className="col-md-12 padding-top ">
                                    <h2 className="blog-post-title my-3 mx-3">
                                        {acara.judul}
                                    </h2>
                                    <p className="blog-post-meta ">
                                        {moment(acara.eventdate_at).format(
                                            "dddd D MMMM YYYY"
                                        )}
                                        &nbsp;
                                        <span className="blog-post-meta">
                                            - {acara.view} &nbsp;
                                            <i className="fa-solid fa-eye"></i>
                                        </span>
                                    </p>
                                    {parse(acara.subjudul)}

                                    {/** image Galery */}
                                    <div className="container">
                                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
                                            {imgacara.map((imgevent) => (
                                                <div
                                                    className="col"
                                                    key={imgevent.id}
                                                >
                                                    <div className="card shadow-sm">
                                                        <img
                                                            src={imgevent.img}
                                                            className="img-event bd-placeholder-img card-img-top"
                                                            width="100%"
                                                            aria-hidden="true"
                                                            preserveAspectRatio="xMidYMid slice"
                                                            focusable="false"
                                                            role="img"
                                                            data-bs-toggle="modal"
                                                            data-bs-target={`#${imgevent.slug}`}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/** Img DB {`/storage/${listNews.img}`} */}

                                    {imgacara.map((imgevent) => (
                                        <div
                                            className="modal fade"
                                            id={imgevent.slug}
                                            tabIndex="-1"
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                        >
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div
                                                        className="modal-header"
                                                        id={imgevent.slug}
                                                        key={imgevent.id}
                                                    >
                                                        <h1
                                                            className="modal-title fs-5"
                                                            id="exampleModalLabel"
                                                        >
                                                            {imgevent.judul}
                                                        </h1>
                                                        <button
                                                            type="button"
                                                            className="btn-close"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        ></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div
                                                            id="carouselExampleInterval"
                                                            className="carousel carousel-dark slide"
                                                            data-bs-ride="carousel"
                                                        >
                                                            <div className="carousel-inner">
                                                                <div
                                                                    className="carousel-item active"
                                                                    data-bs-interval="10000"
                                                                >
                                                                    <img
                                                                        src={
                                                                            imgevent.img
                                                                        }
                                                                        className="d-block w-100"
                                                                        alt="..."
                                                                    />

                                                                    {/** Img DB {`/storage/${listNews.img}`} */}
                                                                </div>
                                                                <div
                                                                    className="carousel-item"
                                                                    data-bs-interval="2000"
                                                                >
                                                                    <img
                                                                        src="https://i.imgur.com/SM5Equu.jpg"
                                                                        className="d-block w-100"
                                                                        alt="..."
                                                                    />
                                                                </div>
                                                            </div>
                                                            <button
                                                                className="carousel-control-prev"
                                                                type="button"
                                                                data-bs-target="#carouselExampleInterval"
                                                                data-bs-slide="prev"
                                                            >
                                                                <span
                                                                    className="carousel-control-prev-icon"
                                                                    aria-hidden="true"
                                                                ></span>
                                                                <span className="visually-hidden">
                                                                    Previous
                                                                </span>
                                                            </button>
                                                            <button
                                                                className="carousel-control-next"
                                                                type="button"
                                                                data-bs-target="#carouselExampleInterval"
                                                                data-bs-slide="next"
                                                            >
                                                                <span
                                                                    className="carousel-control-next-icon"
                                                                    aria-hidden="true"
                                                                ></span>
                                                                <span className="visually-hidden">
                                                                    Next
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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
