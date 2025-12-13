export default function SearchInput({ search, setSearch }) {
    return (
        <div className="search-box position-relative">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>

            <input
                type="text"
                className="form-control search-input"
                placeholder="Cari data..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}
