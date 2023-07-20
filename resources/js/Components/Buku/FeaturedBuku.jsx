import { Link } from "@inertiajs/react";
export default function FeaturedBuku({
    slug,
    name,
    category,
    thumbnail,
    rating,
    img,
    created,
}) {
    return (
        <div className="col">
            <Link href={route("frontbuku.show", slug)}>
                <div className="card shadow-sm">
                    <img
                        src={img}
                        className="bd-placeholder-img card-img-top news-img"
                        width="100%"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        role="img"
                    />

                    <div className="card-body">
                        <p className="card-text">{name}.</p>
                        <div className="d-flex justify-content-between align-items-center"></div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
