import GuestLayout from "@/Layouts/GuestLayout";
import FrontendLayout from "@/Layouts/FrontendLayout";
import FlashMessage from "@/Components/FlashMessage";
import NavbarGuest from "@/Pages/layouts/frontend/NavbarApha";
import { Link, usePage, Head } from "@inertiajs/react";
import FeaturedBuku from "@/Components/Buku/FeaturedBuku";
import ListBuku from "@/Components/Buku/ListBuku";
import Pagination from "@/Components/Page/Pagination";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Fragment, useState, useCallback } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

export default function List({ featuredBuku, buku, props, url, flashMessage }) {
    //Copy Share
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

    const { bukup } = usePage().props;

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <FrontendLayout>
            <Head>
                <title>
                    Buku Asosiasi Pengajar Hukum Adat (APHA) Indonesia
                </title>
            </Head>

            <div className="Container text-center">
                <h1 className="">Pendaftaran Anggota </h1>
                <h2>Asosiasi Pengajar Hukum Adat</h2>
            </div>

            {/*News */}
            <div className="album py-5 bg-light">
                <div className="container">
                    {flashMessage?.message && (
                        <FlashMessage message={flashMessage.message} />
                    )}
                    {flashMessage?.message && (
                        <div>
                            <p>Silahkan Login Sekarang</p>
                            <a
                                className="btn btn-success btn-lg"
                                aria-current="page"
                                href="/login"
                            >
                                Login
                            </a>
                        </div>
                    )}

                    <h1>Syarat</h1>
                    <p>
                        Keanggotaan APHA terbuka bagi semua dosen pengajar di
                        semua perguruan tinggi di Indonesia, baik PTN maupun
                        PTS, yang menekuni atau memiliki spesialiasi bidang
                        keilmuan di salah satu fakultas ilmu hukum serta
                        memenuhi ketentuan yang dipersyaratkan.
                    </p>
                    <p>
                        Persyaratan untuk mengajukan permohonan sebagai anggota
                        APHA adalah sebagai berikut:{" "}
                    </p>
                    <div className="container">
                        <ol className="my-list">
                            <li className="li-anggota">
                                Mengisi formulir keanggotaan yang disediakan ;
                            </li>

                            <li className="li-anggota">
                                Memiliki Nomor Induk Dosen Nasional (NIDN) atau
                                Nomor Induk Dosen Khusus (NIDK);
                            </li>
                            <li className="li-anggota">
                                Bersedia untuk terikat pada Anggaran Dasar dan
                                Anggaran Rumah Tangga;
                            </li>
                            <li className="li-anggota">
                                Bersedia untuk membayar iuran keanggotaan;
                            </li>
                        </ol>
                        <p>Silahkan Daftar Disini</p>
                        <Link
                            className="btn apha-btn btn-lg"
                            aria-current="page"
                            href={route("frontanggota.daftar")}
                        >
                            Daftar Menjadi Anggota
                        </Link>
                    </div>
                    <hr />
                    <div className="detail-article__share-wrapper">
                        <b>SHARE</b>

                        <div className="detail-article__share">
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

                    <hr />
                    <p>Sudah Menjadi Anggota</p>
                    <a
                        className="btn btn-apha  btn-sm"
                        aria-current="page"
                        href="/login"
                    >
                        Silahkan Login
                    </a>
                </div>
            </div>
        </FrontendLayout>
    );
}
