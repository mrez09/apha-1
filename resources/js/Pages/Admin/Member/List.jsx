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
    member,
    filters,
}) {
    console.log("List Function");
    console.log("Member props:", member);
    console.log("Jumlah data:", member?.data?.length ?? 0);
    console.log("Data:", member.data);

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
                route("admin.dashboard.member.index"),
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
            route("admin.dashboard.member.index"),
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
            route("admin.dashboard.member.index"),
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
                        <button
                            type="button"
                            className="btn btn-danger d-flex align-items-center"
                            onClick={() => {
                                if (
                                    confirm(
                                        "Kirim reminder ke semua anggota yang belum bayar?",
                                    )
                                ) {
                                    router.post(
                                        route(
                                            "admin.dashboard.memberadmin.sendReminderBatch",
                                        ),
                                    );
                                }
                            }}
                        >
                            <i className="bi bi-envelope-fill me-2"></i>
                            Kirim Reminder Batch
                        </button>

                        <Link
                            href={route("admin.dashboard.member.create")}
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
                                Total: {member.total} anggota
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
                            <thead className=" text-center">
                                <tr>
                                    <th
                                        style={{ cursor: "pointer" }}
                                        onClick={() => handleSort("id")}
                                    >
                                        No
                                        <i
                                            className={`${getSortIcon("id")} ms-1`}
                                        ></i>
                                    </th>
                                    <th
                                        style={{ cursor: "pointer" }}
                                        onClick={() => handleSort("no_kta")}
                                    >
                                        No KTA
                                        <i
                                            className={`${getSortIcon("no_kta")} ms-1`}
                                        ></i>
                                    </th>
                                    <th
                                        style={{ cursor: "pointer" }}
                                        onClick={() => handleSort("img")}
                                    >
                                        Foto
                                        <i
                                            className={`${getSortIcon("img")} ms-1`}
                                        ></i>
                                    </th>
                                    <th
                                        style={{ cursor: "pointer" }}
                                        onClick={() => handleSort("nama")}
                                    >
                                        Nama
                                        <i
                                            className={`${getSortIcon("nama")} ms-1`}
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
                                        onClick={() => handleSort("email")}
                                        style={{ cursor: "pointer" }}
                                    >
                                        Email
                                        <i
                                            className={`${getSortIcon("email")} ms-1`}
                                        ></i>
                                    </th>
                                    <th
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                            handleSort("universitas")
                                        }
                                    >
                                        Universitas
                                        <i
                                            className={`${getSortIcon("universitas")} ms-1`}
                                        ></i>
                                    </th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {member.data.map((item, index) => (
                                    <tr key={item.id}>
                                        <td className="text-center">
                                            {member.from + index}
                                        </td>
                                        <td className="text-center fw-semibold">
                                            {item.no_kta}
                                        </td>
                                        <td className="text-center">
                                            <img
                                                //src={`/storage/${member.img}`}
                                                src={item.img_url}
                                                alt={item.nama}
                                                className="rounded-circle border shadow-sm"
                                                style={{
                                                    width: "60px",
                                                    height: "60px",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </td>
                                        <td className="fw-semibold">
                                            {item.nama}
                                        </td>
                                        <td className="text-center">
                                            {item.status == 1 ? (
                                                <span className="badge bg-success">
                                                    Aktif
                                                </span>
                                            ) : (
                                                <span className="badge bg-secondary">
                                                    Tidak Aktif
                                                </span>
                                            )}
                                        </td>
                                        <td>{item.email}</td>
                                        <td>{item.universitas}</td>
                                        <td className="text-center">
                                            <div className="d-flex justify-content-center gap-2 flex-wrap">
                                                <Link
                                                    href={route(
                                                        "admin.dashboard.memberadmin.view",
                                                        item.id,
                                                    )}
                                                >
                                                    <button className="btn btn-outline-primary btn-sm">
                                                        <i className="bi bi-eye"></i>{" "}
                                                        View
                                                    </button>
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "admin.dashboard.memberadmin.edit",
                                                        item.id,
                                                    )}
                                                >
                                                    <button className="btn btn-outline-warning btn-sm">
                                                        <i className="bi bi-pencil-square"></i>{" "}
                                                        Edit
                                                    </button>
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        destroy(
                                                            route(
                                                                "admin.dashboard.member.destroy",
                                                                item.id,
                                                            ),
                                                        )
                                                    }
                                                    className="btn btn-outline-danger btn-sm"
                                                >
                                                    <i className="bi bi-trash"></i>{" "}
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {(member?.data?.length ?? 0) === 0 && (
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
                        {member.links.map((link, index) => (
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
