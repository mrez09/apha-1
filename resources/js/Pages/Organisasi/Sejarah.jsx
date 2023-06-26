import { Link, Head } from "@inertiajs/react";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Fragment, useState, useCallback } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Pengurus(props) {
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
                    Sejarah Asosiasi Pengajar Hukum Adat (APHA) Indonesia
                </title>
                <meta
                    name="description"
                    content="Sejarah Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta
                    name="application-name"
                    content="Asosiasi Pengajar Hukum Adat (APHA)"
                />
                <meta
                    name="apple-mobile-web-app-title"
                    content="Asosiasi Pengajar Hukum Adat (APHA)"
                />
                <meta name="theme-color" content="#ff6300"></meta>
                {/*Sosial Media*/}
                {/*Open Graph Protocol*/}
                <meta property="fb:app_id" content="961443805039846"></meta>

                <meta
                    property="og:title"
                    content="Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    property="og:description"
                    content="Sejarah Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.apha.or.id" />
                <meta
                    property="og:image"
                    content="https://i.imgur.com/R4DyCBa.png"
                />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="1800" />
                <meta property="og:image:height" content="550" />
                {/*Twitard*/}

                <meta
                    name="twitter:title"
                    content="Sejarah Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    name="twitter:description"
                    content="Sejarah Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    name="twitter:image"
                    content="https://i.imgur.com/R4DyCBa.png"
                />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <section className="py-1 text-center bg-sec">
                <div className="row  crumble">
                    <div className="col-lg-12 col-md-12 mx-auto head-bread">
                        <h1 className="f-bread">Sejarah</h1>

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
                    <li className="breadcrumb-item">
                        <a href="#">Organisasi</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Sejarah
                    </li>
                </ol>
            </nav>

            <main className="container">
                <div className="row mb-2"></div>

                <div className="row col-md-12 g-5 mt-2">
                    <div className="col-md-10 mx-auto">
                        <h2>Selayang Pandang </h2>
                        <h2 className="blog-post-title pb-4 mb-4 fst-italic border-bottom">
                            Asosiasi Pengajar Hukum Adat (APHA)
                        </h2>

                        <article className="blog-post">
                            <p>
                                Pengajar Hukum Adat dibentuk sebagai rangka
                                meningkatkan dan mengembangkan kapasitas anggota
                                melalui penyelenggaraan pendidikan, pelatihan,
                                penelitian, dan pengembangan hukum adat.
                            </p>
                            <p>
                                APHA didirikan pada tahun 2017 di Jakarta. APHA
                                bersifat terbuka untuk para pengajar Hukum Adat
                                di Indonesia serta tidak terikat dan/atau
                                mengikat diri kepada kekuatan organisasi sosial
                                politik tertentu.
                            </p>
                            <hr />
                            <h3>Visi & Misi</h3>
                            <h4>Visi</h4>
                            <ol>
                                <li>
                                    Mengembangkan serta meningkatkan kemampuan
                                    anggota untuk menyiapkan peserta didik
                                    menjadi manusia Indonesia yang beriman dan
                                    bertaqwa kepada Tuhan Yang Maha Esa, berbudi
                                    luhur, serta berwawasan kebangsaan dan
                                    berdaya saing global,
                                </li>
                                <li>
                                    Mengembangkan serta meningkatkan kemampuan
                                    anggota agar berperan menjadi agen
                                    pembangunan terdepan dalam usaha meneliti,
                                    mengembangkan dan menerapkan ilmu
                                    pengetahuan hukum dan budaya bangsa untuk
                                    meningkatkan taraf kehidupan masyarakat. 3.
                                    Memelihara dan menegakkan akuntabilitas
                                    anggota di masyarakat.
                                </li>
                            </ol>
                            <h4>Misi</h4>
                            <p>
                                Membina dan memberdayakan kemampuan anggota
                                meliputi:
                            </p>
                            <ol>
                                <li>
                                    pembinaan dan pemberdayaan kemampuan
                                    pengelolaan anggota dalam mewujudkan
                                    profesionalitas sebagai tenaga pendidik
                                </li>
                                <li>
                                    pemenuhan hak dan kewajiban anggota melalui
                                    pengembagan wawasan penegtahuan bidang hukum
                                    adat
                                </li>
                                <li>
                                    mengembangkan kerjasama antar anggota dalam
                                    rangka meningkatkan kualitas masing-masing
                                    anggota
                                </li>
                                <li>
                                    memberikan advokasi, perlindungan, dan
                                    pembelaan terhadap anggota dari tindakan
                                    yang merugikan atas dasar peraturan
                                    perundang-undangan yang berlaku
                                </li>
                            </ol>
                        </article>
                    </div>
                </div>
                <hr />
                <div className="detail-article__share-wrapper">
                    <b>SHARE</b>

                    <div className="detail-article__share">
                        <div className="col-md-10">
                            <CopyToClipboard onCopy={onCopy} text={url_homes}>
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
            </main>
        </FrontendLayout>
    );
}
