import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DataTable from "datatables.net-dt";
import { Head } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import { Link, useForm } from "@inertiajs/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
//import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function List(props) {
    let table = new DataTable("#myTable", {
        // options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    const { data, setData, post, processing, errors } = useForm({
        no_kta: "",
        nama: "",
        kode: "",
        phone: "",
        email: "",
        alamat: "",
        jk: "",
        img: "",
        universitas: "",
        fakultas: "",
        alamatf: "",
        mk: "",
        scholar: "",
        scopus: "",
        sinta: "",
        dec: "",
        rating: 0,
        is_featured: false,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value,
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.member.store"));
    };
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Tambah Anggota" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Tambah Anggota</h1>

                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <a
                            type="button"
                            href={route("admin.dashboard.member.index")}
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Kembali
                        </a>
                    </div>
                </div>
            </div>
            {/*End Dashboard Title*/}

            <div className="container">
                <div className="row">
                    <h4 className="mb-3"></h4>

                    <form onSubmit={submit}>
                        <div className="row g-3">
                            <div className="col-sm-12">
                                <label className="form-label">No KTA</label>

                                <input
                                    type="text"
                                    name="no_kta"
                                    value={data.no_kta}
                                    placeholder="Masukan No KTA"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="no_kta"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.no_kta}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label">
                                    Nama Lengkap (Dengan Gelar)
                                </label>

                                <input
                                    type="text"
                                    name="nama"
                                    value={data.nama}
                                    placeholder="Masukan Nama Lengakap (Dengan Gelar)"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="nama"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.nama}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">NIDN/NIDK</label>

                                <input
                                    type="text"
                                    name="kode"
                                    value={data.kode}
                                    placeholder="Masukan NIDN/NIDK"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="kode"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.kode}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">Nomer HP</label>

                                <input
                                    type="text"
                                    name="phone"
                                    value={data.phone}
                                    placeholder="Masukan Nomor Telepon"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="phone"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.phone}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">
                                    Alamat Email
                                </label>

                                <input
                                    type="text"
                                    name="email"
                                    value={data.email}
                                    placeholder="Masukan Email Anda"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="email"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label">
                                    Alamat Rumah
                                </label>

                                <input
                                    type="text"
                                    name="alamat"
                                    value={data.alamat}
                                    placeholder="Masukan Alamat"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="alamat"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.alamat}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">
                                    Jenis Kelamin
                                </label>
                                <select
                                    className="form-control form-select block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    id="jk"
                                    name="jk"
                                    onChange={onHandleChange}
                                >
                                    <option value="">Choose...</option>
                                    <option value="lk">Laki-Laki</option>
                                    <option value="pr">Perempuan</option>
                                </select>
                                <div className="invalid-feedback">
                                    <InputError
                                        message={errors.jk}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">
                                    Photo Pengurus
                                </label>
                                <input
                                    type="file"
                                    name="img"
                                    placeholder="Masukan Judul"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    onChange={onHandleChange}
                                />
                                <div>
                                    <InputError
                                        message={errors.img}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <br />
                            <h3>Instansi</h3>
                            <hr />

                            <div className="col-sm-6">
                                <label className="form-label">
                                    Universitas
                                </label>

                                <input
                                    type="text"
                                    name="universitas"
                                    value={data.universitas}
                                    placeholder="Masukan Nama Universitas"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="universitas"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.universitas}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">Fakultas</label>

                                <input
                                    type="text"
                                    name="fakultas"
                                    value={data.fakultas}
                                    placeholder="Masukan Nama Fakultas"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="fakultas"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.fakultas}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">
                                    Alamat Fakultas
                                </label>

                                <input
                                    type="text"
                                    name="alamatf"
                                    value={data.alamatf}
                                    placeholder="Masukan Alamat Fakultas"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="alamatf"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.alamatf}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label">
                                    Mata Kuliah Yang di Ampu
                                </label>

                                <input
                                    type="text"
                                    name="mk"
                                    value={data.mk}
                                    placeholder="Masukan Mata Kuliah yang diampu"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="mk"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.mk}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label">
                                    Google Scholar
                                </label>

                                <input
                                    type="text"
                                    name="scholar"
                                    placeholder="Masukan Link Google Sholar"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="scholar"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.scholar}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label">Id Scopus</label>

                                <input
                                    type="text"
                                    name="scopus"
                                    placeholder="Masukan Id Scopus"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="scopus"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.scopus}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label">ID Sinta</label>

                                <input
                                    type="text"
                                    name="sinta"
                                    placeholder="Masukan Id Sinta"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="scholar"
                                    onChange={onHandleChange}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.scholar}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label">
                                    Deskripsi Anggota
                                </label>
                                {/*<input
                                    type="text"
                                    name="konten"
                                    placeholder="Masukan Judul"
                                    className="form-control block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    autoComplete="judul"
                                    onChange={onHandleChange}
                                    />*/}
                                <CKEditor
                                    editor={ClassicEditor}
                                    name="dec"
                                    data=""
                                    onReady={(editor) => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log(
                                            "Editor is ready to use!",
                                            editor,
                                        );
                                    }}
                                    onChange={(event, editor, e) => {
                                        const data = editor.getData();
                                        setData("dec", data);

                                        console.log({ event, editor, data });
                                    }}
                                    onBlur={(event, editor) => {
                                        console.log("Blur.", editor);
                                    }}
                                    onFocus={(event, editor) => {
                                        console.log("Focus.", editor);
                                    }}
                                />
                                <div className="">
                                    <InputError
                                        message={errors.decription}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <hr className="my-4"></hr>

                            <button
                                className="w-100 btn btn-primary btn-lg"
                                type="submit"
                                //processing={processing}
                            >
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
