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
    sertifikat,
    qrcode,
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
                        <div className="container mt-5">
                            <h2 className="mb-4">✅ Verifikasi Sertifikat</h2>

                            <div className="card shadow">
                                <div className="card-body">
                                    <h5 className="card-title title_Serti">
                                        {sertifikat.nama}
                                    </h5>
                                    <span className="Text_Serti">
                                        <strong>No Sertifikat:</strong>{" "}
                                        {sertifikat.no}
                                    </span>
                                    <br />
                                    <span className="Text_Serti">
                                        <strong>Acara:</strong>{" "}
                                        {sertifikat.judul}
                                    </span>
                                </div>

                                {/* 
    
                                <div className="mt-4">
                                    <h5>
                                        📲 Scan QR Code ini untuk verifikasi:
                                    </h5>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: qrcode,
                                        }}
                                    />
                                </div>
*/}
                                <div className="Prev_serti">
                                    <embed
                                        src={sertifikat.img}
                                        width="100%"
                                        height="500px"
                                        title="PDF Viewer"
                                    />
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
