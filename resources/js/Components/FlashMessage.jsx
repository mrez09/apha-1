export default function FlashMessage({
    className,
    message = "",
    type = "success",
}) {
    const alertClass = type === "error" ? "alert-danger" : "alert-success";

    return (
        <div
            className={`alert ${alertClass} alert-dismissible fade show`}
            role="alert"
        >
            {message}

            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
            ></button>
        </div>
    );
}
