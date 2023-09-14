import AuthenticatedLayout from "@/Layouts/AnggotaLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">
                    <i className="fas ic fa-home"></i>Dashboard
                </h1>
                <div className="btn-toolbar mb-2 mb-md-0"></div>
            </div>
            {/*End Dashboard Title*/}
            <h2>Selamat Datang!</h2>
            <h5>{props.auth.user.name}</h5>

            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="container">
                                <div className="row g-5 mt-2">
                                    <div className="col-md-6 img-center">
                                        <img
                                            src={`/storage/${props.anggota.img}`}
                                            className="rounded img-fluid img-thumb book-thumbnail img-thumbnail mb-5"
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-md-6 mt-5   ">
                                        <article className="blog-post ">
                                            <table className="tb-progota">
                                                <tbody>
                                                    <tr>
                                                        <td className="tb-iprofile">
                                                            No. Kta
                                                        </td>
                                                        <td className="tb-profile">
                                                            :{" "}
                                                            {(() => {
                                                                if (
                                                                    props
                                                                        .anggota
                                                                        .no_kta ==
                                                                        null ||
                                                                    props
                                                                        .anggota
                                                                        .no_kta ==
                                                                        ""
                                                                ) {
                                                                    return (
                                                                        <span>
                                                                            Belum
                                                                            Terbit
                                                                        </span>
                                                                    );
                                                                } else {
                                                                    return (
                                                                        <span>
                                                                            {
                                                                                props
                                                                                    .anggota
                                                                                    .no_kta
                                                                            }
                                                                        </span>
                                                                    );
                                                                }
                                                            })()}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Nama</td>
                                                        <td>
                                                            :{" "}
                                                            {props.anggota.name}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>NIDN/NIDK</td>
                                                        <td>
                                                            :{" "}
                                                            {props.anggota.kode}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jenis Kelamin</td>
                                                        {(() => {
                                                            if (
                                                                props.anggota
                                                                    .jk == "lk"
                                                            ) {
                                                                return (
                                                                    <td>
                                                                        : Laki
                                                                        Laki
                                                                    </td>
                                                                );
                                                            } else if (
                                                                props.anggota
                                                                    .jk == "pr"
                                                            ) {
                                                                return (
                                                                    <td>
                                                                        :
                                                                        Perempuan
                                                                    </td>
                                                                );
                                                            }
                                                        })()}
                                                    </tr>
                                                    <tr>
                                                        <td>Alamat</td>
                                                        <td>
                                                            :{" "}
                                                            {
                                                                props.anggota
                                                                    .alamat
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>No Telpon</td>
                                                        <td>
                                                            :{" "}
                                                            {
                                                                props.anggota
                                                                    .phone
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Email</td>
                                                        <td>
                                                            :{" "}
                                                            {
                                                                props.anggota
                                                                    .email
                                                            }
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <h4>Institusi</h4>
                                            <table className="tb-progota">
                                                <tr>
                                                    <td className="tb-iprofile">
                                                        Universitas
                                                    </td>
                                                    <td className="tb-profile">
                                                        :{" "}
                                                        {
                                                            props.anggota
                                                                .universitas
                                                        }
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Fakultas</td>
                                                    <td>
                                                        :{" "}
                                                        {props.anggota.fakultas}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Alamat Fakultas</td>
                                                    <td>
                                                        :{" "}
                                                        {props.anggota.alamatf}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Mata Kuliah</td>
                                                    <td>
                                                        : {props.anggota.mk}
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>Link Google Scholar</td>
                                                    <td>
                                                        :{" "}
                                                        {props.anggota.scholar}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Id Scopus</td>
                                                    <td>
                                                        : {props.anggota.scopus}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Link Google Sinta</td>
                                                    <td>
                                                        : {props.anggota.sinta}
                                                    </td>
                                                </tr>
                                            </table>
                                            <hr />
                                        </article>
                                        <h5 className="card-title">
                                            Status Keanggotaan Anda
                                        </h5>
                                        <a href="#" className="btn btn-primary">
                                            {(() => {
                                                if (props.anggota.status == 0) {
                                                    return <h7>Belum Aktif</h7>;
                                                } else {
                                                    return <h7>Aktif</h7>;
                                                }
                                            })()}
                                        </a>
                                    </div>

                                    {/*end News*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
