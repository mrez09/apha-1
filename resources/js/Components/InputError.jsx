export default function InputError({ message, className = "" }) {
    return message ? (
        <div className={`apha-input-error ${className}`}>
            <i className="fas fa-circle-exclamation me-1"></i>
            {message}
        </div>
    ) : null;
}
