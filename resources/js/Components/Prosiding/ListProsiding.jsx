import { Link } from "@inertiajs/react";
export default function ListProsiding({
    slug,
    name,
    category,
    thumbnail,
    rating,
    img,
}) {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <Link href={route("frontprosiding.show", slug)}>
                    <img
                        src={img}
                        className="bd-placeholder-img card-img-top book-img"
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
                </Link>
            </div>
        </div>
    );
}
