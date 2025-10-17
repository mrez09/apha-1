export default function ListGaleri({
    slug,
    name,
    category,
    thumbnail,
    rating,
    url,
}) {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <iframe
                    src={url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
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
