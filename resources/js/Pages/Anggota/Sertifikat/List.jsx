import AnggotaLayout from "@/Layouts/AnggotaLayout";
import FlashMessage from "@/Components/FlashMessage";
import DataTable from "datatables.net-dt";
import { Head, useForm } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";

export default function List({
    auth,
    errors,
    flashMessage,
    props,
    sertifikat,
}) {
    const { delete: destroy } = useForm();
    let table = new DataTable("#myTable", {
        //options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    return (
        <AnggotaLayout
            auth={auth}
            errors={errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    List Sertifikat Anggota Asosiasi Pengajar Hukum Adat (APHA)
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">List Data Sertifikat</h1>

                <div className="btn-toolbar mb-2 mb-md-0"></div>
            </div>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}

            {/*End Dashboard Title*/}

            <div className="container">
                <div className="row">
                    <table id="myTable" className="table table-striped">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>No Sertifikat</th>
                                <th>Nama</th>
                                <th>Judul Sertifikat</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sertifikat.map((member, index) => (
                                <tr key={member.id}>
                                    <td>{++index}</td>
                                    <td>{member.no}</td>
                                    <td>{member.nama}</td>
                                    <td>{member.judul}</td>

                                    <td>
                                        <a href={member.link}>
                                            <button
                                                alt={member.judul}
                                                download={member.judul}
                                                className="btn btn-info mx-2"
                                            >
                                                Download
                                            </button>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AnggotaLayout>
    );
}
