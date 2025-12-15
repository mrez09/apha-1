import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FlashMessage from "@/Components/FlashMessage";
import { Head, useForm, router } from "@inertiajs/react";
import { useEffect, useState, useRef } from "react";
import { Link } from "@inertiajs/react";
import TableToolbar from "@/Components/Table/TableToolbar";

export default function List({
    auth,
    errors,
    flashMessage,
    props,
    logs,
    filters,
}) {
    console.log("List Function");
    console.log("logs props:", logs);
    console.log("Jumlah data:", logs?.data?.length ?? 0);
    console.log("Data:", logs.data);

    console.count("LIST RENDER");
    const { delete: destroy } = useForm();

    //const [search, setSearch] = useState(filters?.search || "");
    const isFirstRender = useRef(true);
    const [status, setStatus] = useState(filters?.status || "");
    const [loading, setLoading] = useState(false);

    //const [searchValue, setSearchValue] = useState(search);
    const [searchValue, setSearchValue] = useState(filters?.search || "");

    //search
    useEffect(() => {
        console.log("List Mounted");
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const timeout = setTimeout(() => {
            router.get(
                route("admin.dashboard.changelog.index"),
                {
                    search: searchValue,
                },
                {
                    preserveState: true,
                    preserveScroll: true,
                },
            );
        }, 500);

        return () => clearTimeout(timeout);
    }, [searchValue]);

    //loading
    useEffect(() => {
        const start = router.on("start", () => {
            console.log("START REQUEST");
            setLoading(true);
        });

        const finish = router.on("finish", () => {
            console.log("FINISH REQUEST");
            setLoading(false);
        });

        return () => {
            start();
            finish();
        };
    }, []);

    const handleStatus = (value) => {
        setStatus(value);

        router.get(
            route("admin.dashboard.changelog.index"),
            {
                search: searchValue,
                status: value,
            },
            {
                preserveState: true,
                preserveScroll: true,
            },
        );
    };

    const handleSort = (column) => {
        let direction = "asc";

        if (filters.sort === column && filters.direction === "asc") {
            direction = "desc";
        }

        router.get(
            route("admin.dashboard.changelog.index"),
            {
                search: searchValue,
                status: status,
                sort: column,
                direction: direction,
            },
            {
                preserveState: true,
                preserveScroll: true,
            },
        );
    };

    const getSortIcon = (column) => {
        if (filters.sort !== column) {
            return "fas fa-sort";
        }

        return filters.direction === "asc"
            ? "fas fa-sort-up"
            : "fas fa-sort-down";
    };
    //console.count("RETURN");

    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    List Data Anggota Asosiasi Pengajar Hukum Adat (APHA)
                </h2>
            }
        >
            <Head title="Dashboard" />
            {
                //console.count("LIST RENDER bro")
            }

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">
                    List Data Anggota Asosiasi Pengajar Hukum Adat (APHA)
                </h1>

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="btn-group">
                        <Link
                            href={route("admin.dashboard.changelog.create")}
                            className="btn btn-outline-secondary d-flex align-items-center"
                        >
                            <i className="bi bi-plus-lg me-2"></i>
                            Tambah Anggota
                        </Link>
                    </div>
                </div>
            </div>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}

            {/*End Dashboard Title*/}

            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <h5 className="mb-1">Data Anggota</h5>

                            <small className="text-muted">
                                Total: {logs.total} anggota
                            </small>
                        </div>
                        <TableToolbar
                            search={searchValue}
                            setSearch={setSearchValue}
                            showStatus={true}
                        />
                    </div>
                    <div className="position-relative">
                        {loading && (
                            <div className="table-loading">
                                <div className="spinner-border text-warning"></div>
                            </div>
                        )}

                        <table className="table table-striped align-middle">
                            <thead>
                                <tr>
                                    <th
                                        style={{ cursor: "pointer" }}
                                        onClick={() => handleSort("version")}
                                    >
                                        Version
                                        <i
                                            className={`${getSortIcon("version")} ms-1`}
                                        ></i>
                                    </th>

                                    <th
                                        style={{ cursor: "pointer" }}
                                        onClick={() => handleSort("title")}
                                    >
                                        Judul
                                        <i
                                            className={`${getSortIcon("title")} ms-1`}
                                        ></i>
                                    </th>

                                    <th
                                        style={{ cursor: "pointer" }}
                                        onClick={() => handleSort("status")}
                                    >
                                        Status
                                        <i
                                            className={`${getSortIcon("status")} ms-1`}
                                        ></i>
                                    </th>

                                    <th
                                        style={{ cursor: "pointer" }}
                                        onClick={() => handleSort("created_at")}
                                    >
                                        Dibuat
                                        <i
                                            className={`${getSortIcon("created_at")} ms-1`}
                                        ></i>
                                    </th>

                                    <th width="180">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {logs.data.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <span className="badge bg-dark">
                                                {item.version}
                                            </span>
                                        </td>

                                        <td>{item.title}</td>

                                        <td>
                                            {item.status == 1 ? (
                                                <span className="badge bg-success">
                                                    Published
                                                </span>
                                            ) : (
                                                <span className="badge bg-secondary">
                                                    Draft
                                                </span>
                                            )}
                                        </td>

                                        <td>
                                            {new Date(
                                                item.created_at,
                                            ).toLocaleDateString("id-ID")}
                                        </td>

                                        <td>
                                            {/* View */}
                                            <Link
                                                href={route(
                                                    "admin.dashboard.changelog.show",
                                                    item.id,
                                                )}
                                                className="btn btn-info my-2"
                                            >
                                                View
                                            </Link>

                                            {/* Edit */}
                                            <Link
                                                href={route(
                                                    "admin.dashboard.changelog.edit",
                                                    item.id,
                                                )}
                                                className="btn btn-warning my-2 ms-1"
                                            >
                                                Edit
                                            </Link>

                                            {/* Delete */}
                                            <button
                                                type="button"
                                                className="btn btn-danger my-2 ms-1"
                                                onClick={() => {
                                                    if (
                                                        !confirm(
                                                            `Hapus Release Note "${item.version} - ${item.title}"?`,
                                                        )
                                                    ) {
                                                        return;
                                                    }

                                                    destroy(
                                                        route(
                                                            "admin.dashboard.changelog.destroy",
                                                            item.id,
                                                        ),
                                                        {
                                                            preserveScroll: true,
                                                        },
                                                    );
                                                }}
                                            >
                                                Delete
                                            </button>
                                            <Link
                                                href={route(
                                                    "admin.dashboard.changelog.trash",
                                                )}
                                                className="btn btn-secondary"
                                            >
                                                <i className="fas fa-trash me-1"></i>
                                                Trash
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                {(logs?.data?.length ?? 0) === 0 && (
                                    <tr>
                                        <td colSpan="8" className="text-center">
                                            Data tidak ditemukan
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 d-flex justify-content-end gap-2 pagination-custom">
                        {logs.links.map((link, index) => (
                            <Link
                                key={index}
                                preserveScroll
                                href={link.url || "#"}
                                className={`
                                    page-link-custom
                                    ${link.active ? "page-link-active" : ""}
                                    ${!link.url ? "page-link-disabled" : ""}
                                `}
                                dangerouslySetInnerHTML={{
                                    __html: link.label,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
