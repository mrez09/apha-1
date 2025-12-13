import { React, useState, useEffect } from "react";
import {
    View,
    Page,
    Text,
    Image,
    Document,
    StyleSheet,
} from "@react-pdf/renderer";
import QRCode from "qrcode"; // <=== tambahkan ini
import { Link } from "@inertiajs/react";
import LogoApha from "../photos/Logo-Apha.png";
import KTAApha from "../photos/KTA-Apha.png";
import KTAAphaBelakang from "../photos/KTA_Apha-Belakang.png";
import parse from "html-react-parser";
import Html from "react-pdf-html";
import "../../../css/invoice.css";
import { Font } from "@react-pdf/renderer";
import moment from "moment";

Font.register({
    family: "Poppins",
    fonts: [
        { src: "/fonts/Poppins-Regular.ttf" },
        { src: "/fonts/Poppins-Bold.ttf", fontWeight: "bold" },
    ],
});
const html = `<html>

<head>
    <title>CSS - Make Two DIVs Left and Right Aligned inside Main DIV.</title>
    <!--Example CSS-->
    <link href="ExampleStyle.css" type="text/css" rel="stylesheet"/>
    <style>
        .outerDiv
        {
            background-color: #006699;
            color: #fff;
            height: 400px;
            width: 400px;
            margin: 0px auto;
            padding: 5px;
        }
        .leftDiv
        {
            background-color: #efefef;
            color: #000;
            height: 400px;
            width: 48%;
            float: left;
        }
        .rightDiv
        {
            background-color: #efefef;
            color: #000;
            height: 400px;
            width: 48%;
            float: right;
        }
        			
    </style>
</head>
<body style="text-align: center;">
    <h1>CSS - Make Two DIVs Left and Right Aligned inside Main DIV.</h1>
    <div class="outerDiv">
        <div class="leftDiv">
            This is Left DIV.
        </div>
        <div class="rightDiv">
            This is Right DIV.
        </div>		
        <div "style: clear:both;"></div>
    </div>
</body>
</html>
`;

export default function KTAPDF({
    no_invoice,
    judul,
    subjudul,
    slug_judul,
    img,
    img_kta,
    status,
    konten,
    is_featured,
    tanggal_bayar,
    created_at,
    updated_at,
    deleted_at,

    no_kta,
    nama,
    qrCodeUrl,
    expired_date,
    alamat,
    tanggal_print,
}) {
    //const dynamicFontSize = nama.length > 25 ? 9 : 11;
    const maxFont = 11;
    const minFont = 7;

    const dynamicFontSize = Math.max(
        minFont,
        maxFont - Math.floor((nama.length - 20) / 10),
    );
    const styles = StyleSheet.create({
        //body: {
        //paddingTop: 35,
        //paddingBottom: 65,
        //paddingHorizontal: 35,
        //width: 638,
        //height: 1004,
        //maxWidth: 205,
        //maxHeight: 380,
        //maxHeight: 323,
        //},
        body: {
            position: "relative",
            width: 153,
            height: 243,
            backgroundColor: "#fff",
            margin: "auto",
        },
        textup: {
            position: "absolute",
            top: 20,
            left: "0px",
            right: "0px",
            marginHorizontal: "auto",
            textAlign: "center",
            justifyContent: "center",
            zIndex: 2,
            color: "#fff",
        },

        title: {
            fontSize: 24,
            textAlign: "center",
        },
        text: {
            margin: 12,
            fontSize: 14,
            textAlign: "justify",
            fontFamily: "Times-Roman",
        },
        info_invoice: {
            padding: 10,
            fontSize: 10,
            textAlign: "right",
            fontFamily: "Times-Roman",
            flex: 1,
        },
        info_invoice_t1: {
            fontSize: 15,
            fontWeight: "bold",
        },
        info_invoice_t2: {
            fontSize: 10,
        },
        info_invoice_t3: {
            fontSize: 10,
        },

        image: {
            marginTop: 110,
            marginLeft: 60,
            marginRight: 57,
            //marginHorizontal: 50,
            //width: 50,
            //height: 100,
            height: 120,
        },

        image_old: {
            marginVertical: 15,
            marginHorizontal: 100,
            align: "left",
            width: 300,
            backgroundColor: "tomato",
            float: "left",
            position: "relative",
            zIndex: 1,
            top: 0,
        },

        photo: {
            top: 110,
            width: 80,
            align: "right",
            position: "relative",

            //marginVertical: 15,
            //marginHorizontal: 100,
            //align: "left",
            //width: 300,
            //backgroundColor: "tomato",
            //float: "left",
            //position: "relative",
            //zIndex: 2,
            //top: 0,
        },

        header: {
            fontSize: 12,
            marginBottom: 20,
            textAlign: "left",
            color: "black",
            backgroundColor: "#E8E8E8",
            padding: 10,
        },
        subheader1: {
            fontSize: 15,
            fontWeight: "bold",
        },
        subheader2: {
            fontSize: 12,
            fontWeight: "bold",
        },
        sender: {
            width: 200,
            padding: 10,
            top: 80,
            textAlign: "center",
        },
        senderheader: {
            fontSize: 12,
            marginBottom: 20,
            textAlign: "center",
            color: "black",
        },
        sendertext: {
            fontSize: 10,
            marginBottom: 20,
            color: "black",
        },

        pageNumber: {
            position: "absolute",
            fontSize: 12,
            bottom: 30,
            left: 0,
            right: 0,
            textAlign: "center",
            color: "grey",
        },
        time: {
            position: "absolute",
            fontSize: 10,
            textAlign: "center",
            color: "black",
            marginTop: 50,

            bottom: 50,
            left: 0,
            right: 0,
        },
        bynama: {
            position: "absolute",
            fontSize: 12,
            textAlign: "center",
            color: "white",
            bottom: 70,
            left: 0,
            right: 0,
            fontWeight: "bold",
        },
        bynamaif: {
            position: "absolute",
            fontSize: 12,
            textAlign: "center",
            color: "white",

            bottom: 60,
            left: 0,
            right: 0,
            fontWeight: "bold",
        },
        byno_kta: {
            position: "absolute",
            fontSize: 11,
            textAlign: "center",
            color: "white",

            bottom: 50,
            left: 0,
            right: 0,
            fontWeight: "bold",
        },
        //Table

        //nama new
        nama: {
            fontSize: 11,
            color: "#0C2B4E",
            fontWeight: "bold",
            letterSpacing: 0.5,
            lineHeight: 1.2,
            textAlign: "center",

            //position: "absolute",
            //top: 152, // atur posisi dari atas, ganti sesuai layout kartu
            //bottom: 82,
            //left: 10,
            //right: 10,
            //textAlign: "center",
            //fontSize: 11,
            //color: "#0C2B4E",
            //fontWeight: "bold",
            //letterSpacing: 0.5,
            //textTransform: "uppercase",

            //maxWidth: 180, // <— sesuaikan dengan lebar kartu kamu
            //marginHorizontal: "auto",
            //lineHeight: 1.2, // biar jarak antar baris pas
            //wordBreak: "break-word", // untuk nama panjang
        },

        noKta: {
            fontSize: 7.5,
            color: "#0C2B4E",
            fontWeight: "medium",
            marginTop: 3, // kasih jarak tetap di bawah nama
            textAlign: "center",

            //position: "absolute",
            //top: 168, // sedikit di bawah nama
            //left: 0,
            //right: 0,
            //textAlign: "center",
            //fontSize: 7.5,
            //color: "#0C2B4E",
            //fontWeight: "medium",
        },

        bootstrapBtn: {
            fontWeight: 400,
            width: 100,
            height: 50,
            color: "#212529",
            border: 1,
            padding: 2,
            fontSize: 1,
            lineHeight: 1.5,
            borderRadius: 0.25,
            color: "#fff",
            backgroundColor: "#007bff",
        },
        text_table: {
            fontSize: 10,
        },
        btnInvoices: {
            fontSize: 12,
            textAlign: "center",
            color: "black",
            backgroundColor: "#146c43",
            padding: 10,
        },
        btnInvoicetext: {
            backgroundColor: "#146c43",
            fontSize: 12,
            fontWeight: "bold",
        },
        btnInvoicetext2: {
            fontSize: 12,
            fontWeight: "bold",
        },
    });

    return (
        <Document>
            {
                //<Page size="A7" style={styles.body}>
            }
            <Page size={{ width: 153, height: 243 }} style={styles.body}>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: 20,
                    }}
                >
                    <Image
                        src={KTAApha}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: 153, // sesuai ukuran page
                            height: 243,
                            objectFit: "fill", // bukan "cover"
                        }}
                    />
                    {
                        //<Image src={LogoApha} />
                    }

                    {/* foto anggota */}
                    <View
                        style={{
                            position: "absolute",
                            top: 60,
                            left: 0,
                            right: 0,
                        }}
                    >
                        <Image
                            src={`/storage/${img}`}
                            style={{
                                width: 65,
                                height: 80,
                                margin: "auto",
                                borderRadius: 4,
                                border: "1pt solid #fff",
                            }}
                        />
                    </View>
                    <Text style={styles.textup}></Text>
                </View>

                <Image
                    src={qrCodeUrl}
                    style={{
                        position: "absolute",
                        bottom: 10,
                        right: 10,
                        width: 40,
                        height: 40,
                    }}
                />

                <View
                    style={{
                        position: "absolute",
                        top: 150, // posisi keseluruhan area nama + noKta
                        left: 10,
                        right: 10,
                        textAlign: "center",
                    }}
                >
                    <Text
                        style={{
                            ...styles.nama,
                            fontFamily: "Times-Bold",
                            fontWeight: "bold",
                            fontSize: dynamicFontSize,
                        }}
                    >
                        {nama}
                    </Text>
                    <Text style={styles.noKta}>No. Anggota: {no_kta}</Text>
                </View>

                {
                    //<Html>{konten}</Html>
                }
            </Page>

            {
                //KTA Belakang
            }
            <Page size={{ width: 153, height: 243 }} style={styles.body}>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: 20,
                    }}
                >
                    <Image
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: 153, // sesuai ukuran page
                            height: 243,
                            objectFit: "fill", // bukan "cover"
                        }}
                        src={KTAAphaBelakang}
                    />
                    <Text
                        style={{
                            position: "absolute",
                            fontFamily: "Times-Bold",
                            fontWeight: "bold",
                            top: 170, // sedikit di atas tanda tangan
                            width: "100%",
                            left: 30,
                            textAlign: "center",
                            fontSize: 4,
                            color: "black",
                        }}
                    >
                        {
                            //Berlaku s.d: {expired_date}
                        }
                        Berlaku s.d:{" "}
                        {moment(expired_date).format("DD MMM YYYY")}
                    </Text>
                    {
                        //<Image src={LogoApha} />
                    }
                    {
                        //<Image style={styles.image} src={`/storage/${img}`} />
                    }

                    <Text style={styles.textup}></Text>
                </View>

                {/** 
                     *
                <Text style={styles.bynama}>
                    {nama} {"\n"}
                    <Text style={styles.sendertext}></Text>
                </Text> 

                <Text style={styles.byno_kta}>
                    No Anggota : {no_kta} {"\n"}
                    <Text style={styles.sendertext}></Text>
                </Text>
                    */}

                {
                    //<Html>{konten}</Html>
                }
            </Page>
        </Document>
    );
}

//export default InvoicePDF;
