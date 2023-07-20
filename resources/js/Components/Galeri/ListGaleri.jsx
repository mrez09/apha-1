export default function ListGaleri({
    slug,
    name,
    category,
    thumbnail,
    rating,
}) {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img
                    src={thumbnail}
                    className="bd-placeholder-img card-img-top gallery-img"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                />
                <div className="card-body">
                    <p className="card-text">{name}.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">
                            {/*rating.toFixed(1)*/}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
}
