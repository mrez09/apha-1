import FrontendLayout from "@/Layouts/FrontendLayout";
import { Link, Head } from "@inertiajs/react";
import moment from "moment";
import parse from "html-react-parser";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { useState, useCallback } from "react";
import ListTerkait from "@/Components/News/ListTerkait";

export default function List({
    featuredBuku,
    news,
    newsjoin,
    newsterkait,
    newsterkaitget,
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
                    Berita - Asosiasi Pengajar Hukum Adat (APHA) Indonesia
                </title>
            </Head>
            <div className="container">
                <div className="row g-5 d-flex justify-content-center">
                    <div className="col-md-11 ">
                        <article className="blog-post mt-5">
                            <nav className="" aria-label="breadcrumb">
                                <ol className="breadcrumb newscrumber">
                                    <li className="breadcrumb-item ">
                                        <Link href={route("frontnews.index")}>
                                            News
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <Link
                                            href={route(
                                                "frontnewscategory.show",
                                                newsjoin.slug_category,
                                            )}
                                        >
                                            {newsjoin.namakategori}
                                        </Link>
                                    </li>
                                </ol>
                            </nav>
                            <div className="lane-gdark"></div>
                            <h2 className="blog-post-title">{news.judul}</h2>

                            <p className="blog-post-meta">
                                {moment(news.publish_at).format(
                                    "dddd D MMMM YYYY",
                                )}
                                &nbsp;
                                <span className="blog-post-meta">
                                    - {news.view} &nbsp;
                                    <i className="fa-solid fa-eye"></i>
                                </span>
                            </p>

                            <img
                                src={`/storage/${news.img}`}
                                className="rounded img-fluid img-thumbnail"
                                alt=""
                            />
                            <div className="lanep-gdark"></div>
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

                        {/**Berita Terkait */}
                        <hr />
                        {(() => {
                            if (newsterkaitget != 0) {
                                return <h4>Berita Terkait </h4>;
                            }
                        })()}

                        {/*News */}
                        <div className="album py-5 bg-light">
                            <div className="container">
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                    {/*loop*/}

                                    {newsterkait.map((listNews) => (
                                        <ListTerkait
                                            key={listNews.link_id}
                                            img={`/storage/${listNews.img}`}
                                            slug={listNews.slug_news}
                                            judul={listNews.judul}
                                            publish={moment(
                                                listNews.publish_at,
                                            ).format("dddd D MMMM YYYY ")}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*end News*/}
                </div>
            </div>
        </FrontendLayout>
    );
}
