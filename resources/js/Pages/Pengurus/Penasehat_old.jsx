import { Link, Head } from "@inertiajs/react";
import FrontendLayout from "@/Layouts/FrontendLayout";

import { Fragment, useState } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Welcome(props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <FrontendLayout>
            <Head title="Dewan Penasehat Lembaga Studi Hukum Indonesia" />

            <div className="container marketing">
                <div className="row">
                    <div className="col-lg-4">
                        <img
                            src="https://penerbit.lshi.or.id/assets/image/apha/Pengurus/Aminuddin-Salle.png"
                            className="bd-placeholder-img rounded-circle"
                            width="140"
                            height="140"
                            aria-label="Placeholder: 140x140"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        />

                        <title>Prof. Dr. H. Aminuddin Salle, SH, MH</title>

                        <h2>Prof. Dr. H. Aminuddin Salle, SH, MH</h2>
                        <p>Ketua</p>
                        <p>
                            <a className="btn btn-secondary" href="#">
                                View details &raquo;
                            </a>
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <img
                            src="https://penerbit.lshi.or.id/assets/image/apha/Pengurus/Sulistyowati-Irianto.png"
                            className="bd-placeholder-img rounded-circle"
                            width="140"
                            height="140"
                            aria-label="Placeholder: 140x140"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        />
                        <title>Prof. Dr. Sulistyowati Irianto, MA</title>

                        <h2>Prof. Dr. Sulistyowati Irianto, MA</h2>
                        <p>Wakil Ketua</p>
                        <p>
                            <a className="btn btn-secondary" href="#">
                                View details &raquo;
                            </a>
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <img
                            src="https://penerbit.lshi.or.id/assets/image/apha/Pengurus/Wayan.png"
                            className="bd-placeholder-img rounded-circle"
                            width="140"
                            height="140"
                            aria-label="Placeholder: 140x140"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        />
                        <title>Prof. Dr. Wayan P. Windia, SH, Msi</title>

                        <h2>Prof. Dr. Wayan P. Windia, SH, Msi</h2>
                        <p>Wakil Ketua</p>
                        <p>
                            <a className="btn btn-secondary" href="#">
                                View details &raquo;
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
