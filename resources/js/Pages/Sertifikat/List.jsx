import GuestLayout from "@/Layouts/GuestLayout";
import FrontendLayout from "@/Layouts/FrontendLayout";
import NavbarGuest from "@/Pages/layouts/frontend/NavbarApha";
import { Link, usePage, Head } from "@inertiajs/react";
import ListNews from "@/Components/News/ListNews";
import moment from "moment";
import Pagination from "@/Components/Page/Pagination";
import parse from "html-react-parser";

export default function List({ featuredBuku, news, props }) {
    //const { newsp } = usePage().props;

    const submit = (e) => {
        e.preventDefault();

        get(route("frontsertifikat.search"));
    };

    return (
        <FrontendLayout>
            <Head>
                <title>
                    Newsletter Asosiasi Pengajar Hukum Adat (APHA) Indonesia
                </title>
            </Head>

            <div className="Container text-center">
                <h1 className="">News</h1>
                <h2>Asosiasi Pengajar Hukum Adat</h2>
            </div>

            {/*News */}
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row  g-3">
                        {/*loop*/}
                        <div class="d-flex align-items-center flex-column ">
                            <form class="d-flex" onSubmit={submit}>
                                <input
                                    className="form-control search-form me-1"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button
                                    class="btn btn-outline-primary btn-form"
                                    type="submit"
                                >
                                    Search
                                </button>
                                <button
                                    class="btn btn-outline-primary btn-form"
                                    type="submit"
                                >
                                    pindah
                                </button>
                            </form>
                        </div>
                    </div>

                    <hr />
                </div>
            </div>
        </FrontendLayout>
    );
}
