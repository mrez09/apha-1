import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from "chart.js";
import { Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { Pie, Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
);

export default function Dashboard(props) {
    const {
        jumlahPost,
        jumlahMember,
        jumlahGaleri,
        totalAnggota,
        anggotaAktif,
        anggotaTidakAktif,
        totalBuku,
        totalProsiding,
        postPerMonth,
        eventPerMonth,
    } = usePage().props;

    const cards = [
        { title: "News", value: jumlahPost },
        { title: "Buku", value: totalBuku },
        { title: "Prosiding", value: totalProsiding },
    ];

    const cards2 = [
        { title: "Total Member", value: jumlahMember },
        { title: "Anggota Aktif", value: anggotaAktif },
        { title: "Tidak Aktif", value: anggotaTidakAktif },
    ];

    const data = {
        labels: ["Aktif", "Tidak Aktif"],
        datasets: [
            {
                label: "Jumlah Anggota",
                data: [anggotaAktif, anggotaTidakAktif],
                backgroundColor: ["#198754", "#dc3545"], // hijau & merah
                borderColor: ["#ffffff", "#ffffff"],
                borderWidth: 1,
            },
        ],
    };

    // Pie Chart - Anggota
    const pieData = {
        labels: ["Aktif", "Tidak Aktif"],
        datasets: [
            {
                data: [anggotaAktif, anggotaTidakAktif],
                backgroundColor: ["#198754", "#dc3545"],
            },
        ],
    };

    const donutData = {
        labels: ["Buku", "Prosiding"],
        datasets: [
            {
                data: [totalBuku, totalProsiding],
                backgroundColor: ["#0d6efd", "#ffc107"],
            },
        ],
    };

    // Line Chart - Post & Event per Bulan
    const formatLineData = (rawData) => {
        const labels = rawData.map((d) => d.bulan);
        const data = rawData.map((d) => d.jumlah);
        return { labels, data };
    };

    const postData = formatLineData(postPerMonth);
    const eventData = formatLineData(eventPerMonth);

    const lineData = {
        labels: postData.labels,
        datasets: [
            {
                label: "Posting",
                data: postData.data,
                borderColor: "#0d6efd",
                backgroundColor: "rgba(13, 110, 253, 0.3)",
                fill: true,
            },
            {
                label: "Event",
                data: eventData.data,
                borderColor: "#198754",
                backgroundColor: "rgba(25, 135, 84, 0.3)",
                fill: true,
            },
        ],
    };

    //option
    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };
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
                <h1 className="h2">Dashboard</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                        >
                            <a href="/dashboard/contact">Notification</a>
                        </button>
                    </div>
                </div>
            </div>
            {/*End Dashboard Title*/}

            <h2>You're logged in! {props.auth.user.name}</h2>
            <div className="container">
                <div className="row">
                    {cards.map((item, idx) => (
                        <div className="col-md-4 mb-4" key={idx}>
                            <div className="card shadow-sm h-100">
                                <div className="card-body text-center">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="display-6 fw-bold">
                                        {item.value}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    {cards2.map((item, idx) => (
                        <div className="col-md-4 mb-4" key={idx}>
                            <div className="card shadow-sm h-100">
                                <div className="card-body text-center">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="display-6 fw-bold">
                                        {item.value}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mt-4">
                <h2 className="mb-4 fw-bold">📊 Dashboard Statistik</h2>

                <div className="row g-4">
                    {/* Pie Chart */}
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-header bg-success text-white">
                                Anggota Aktif vs Tidak Aktif Tahun 2025
                            </div>
                            <div
                                className="card-body"
                                style={{ height: "300px" }}
                            >
                                <Pie data={pieData} options={options} />
                            </div>
                        </div>
                    </div>

                    {/* Donut Chart */}
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-header bg-primary text-white">
                                Distribusi Buku, Prosiding, Sertifikat
                            </div>
                            <div
                                className="card-body"
                                style={{ height: "300px" }}
                            >
                                <Doughnut data={donutData} options={options} />
                            </div>
                        </div>
                    </div>

                    {/* Line Chart */}
                    <div className="col-md-12">
                        <div className="card shadow">
                            <div className="card-header bg-warning">
                                Pertumbuhan Posting & Event
                            </div>
                            <div
                                className="card-body"
                                style={{ height: "400px" }}
                            >
                                <Line data={lineData} options={options} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
