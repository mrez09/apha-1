import SearchInput from "./SearchInput";

export default function TableToolbar({ search, setSearch }) {
    return (
        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
            <SearchInput search={search} setSearch={setSearch} />
        </div>
    );
}
