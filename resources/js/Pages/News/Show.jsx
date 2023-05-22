import FrontendLayout from "@/Layouts/FrontendLayout";
import { Link, Head } from "@inertiajs/react";
import moment from "moment";
import parse from "html-react-parser";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { useState, useCallback } from "react";

export default function List({ featuredBuku, news, props }) {
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
                <title>My app</title>
                <meta
                    head-key="description"
                    name="description"
                    content={news.judul}
                />
                <meta
                    head-key="whatsapp"
                    name="whatsapp"
                    property="og:image"
                    content={`/storage/${news.img}`}
                />
                {/*Sosial Media*/}
                {/*Open Graph Protocol*/}
                {/*<meta property="fb:app_id" content="your_app_id" /> */}
                <meta property="og:title" content={news.judul} />

                <meta property="og:type" content="video.movie" />
                <meta property="og:url" content="https://www.apha.or.id" />
                <meta property="og:image" content={`/storage/${news.img}`} />
                {/*Twitard*/}
                <meta
                    name="twitter:title"
                    content="Asosiasi Pengajar Hukum Adat "
                />
                <meta
                    name="twitter:description"
                    content=" Selamat Datang di Asosiasi Pengajar Hukum Adat"
                />
                <meta name="twitter:image" content={`/storage/${news.img}`} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className="container">
                <div className="row g-5 d-flex justify-content-center">
                    <div className="col-md-11 ">
                        <article className="blog-post mt-5">
                            <h2 className="blog-post-title">{news.judul}</h2>
                            <p className="blog-post-meta">
                                {moment(news.publish_at).format(
                                    "dddd D MMMM YYYY"
                                )}
                            </p>
                            <img
                                src={`/storage/${news.img}`}
                                className="rounded img-fluid img-thumbnail"
                                alt=""
                            />
                            <div className="kon-10">{parse(news.konten)}</div>
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
