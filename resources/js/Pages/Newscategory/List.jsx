import GuestLayout from "@/Layouts/GuestLayout";
import FrontendLayout from "@/Layouts/FrontendLayout";
import NavbarGuest from "@/Pages/layouts/frontend/NavbarApha";
import { Link, Head } from "@inertiajs/react";
import ListNewscategory from "@/Components/Newscategory/ListNews";
import moment from "moment";

export default function List({ featuredBuku, news, newscategory, props }) {
    return (
        <FrontendLayout>
            <Head>
                <title>
                    Newsletter Asosiasi Pengajar Hukum Adat (APHA) Indonesia
                </title>
            </Head>

            <div className="container ">
                <h1 className="">Category : {newscategory.namakategori}</h1>
            </div>

            {/*News */}
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {/*loop*/}

                        {news.map((listNews) => (
                            <ListNewscategory
                                key={listNews.id}
                                img={`/storage/${listNews.img}`}
                                slug={listNews.slug}
                                judul={listNews.judul}
                                publish={moment(listNews.publish_at).format(
                                    "dddd D MMMM YYYY "
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
