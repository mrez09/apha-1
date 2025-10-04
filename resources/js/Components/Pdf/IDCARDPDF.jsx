import { React, useState, useEffect } from "react";
import {
    View,
    Page,
    Text,
    Image,
    Document,
    StyleSheet,
} from "@react-pdf/renderer";
import { Link } from "@inertiajs/react";
//import LogoApha from "../photos/Logo-Apha.png";
import LogoApha from "../photos/Logo-AphaC.png";
//import KTAApha from "../photos/KTA-Apha.png";
import KTAApha from "../photos/idcard-APHA.png";
import KTAAphainfo from "../photos/idcard-APHA-info.png";
import iconAlamat from "../photos/iconLocation.png";
import iconEmail from "../photos/iconEmail.png";
import iconPhone from "../photos/iconPhone.png";
import iconWeb from "../photos/iconWeb.png";
import KTAAphaBelakang from "../photos/Name_Card-APHA-Belakang.png";
import parse from "html-react-parser";
import Html from "react-pdf-html";
import "../../../css/invoice.css";

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
    status,
    konten,
    is_featured,
    tanggal_bayar,
    created_at,
    updated_at,
    deleted_at,

    nama,
    no_kta,
    universitas,
    email,
    phone,
    alamat,
    tanggal_print,
    url_img,
    qrCodeUrl,
    qrCodeBase,
    expired_date,
    start_date,
}) {
    //const dynamicFontSize = nama.length > 25 ? 9 : 11;
    const maxFont = 11;
    const minFont = 7;

    const dynamicFontSize = Math.max(
        minFont,
        maxFont - Math.floor((nama.length - 20) / 10),
    );
    const infoFontSize = nama.length > 25 ? 7 : 8;
    const styles = StyleSheet.create({
        body: {
            position: "relative",
            width: 243,
            height: 153,
            backgroundColor: "#fff",
            margin: "auto",
        },
    });

    return (
        <Document>
            <Page size={{ width: 243, height: 153 }} style={styles.body}>
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
                            width: 243,
                            height: 153,
                            objectFit: "fill", // bukan "cover"
                        }}
                        src={KTAApha}
                    />
                </View>
                <Image
                    src={qrCodeBase}
                    style={{
                        position: "absolute",
                        bottom: 10,
                        right: 10,
                        width: 40,
                        height: 40,
                    }}
                />
            </Page>

            <Page size={{ width: 243, height: 153 }} style={styles.body}>
                <View>
                    {/* Background */}
                    <Image
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: 243,
                            height: 153,
                            objectFit: "fill",
                        }}
                        src={KTAAphainfo}
                    />

                    {/* Logo kanan atas */}
                    <Image
                        src={LogoApha}
                        style={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            width: 30,
                            height: 30,
                        }}
                    />

                    <View
                        style={{
                            position: "absolute",
                            top: 55,
                            left: 15,
                            width: 100,
                            textAlign: "center",
                        }}
                    >
                        {/* Nama */}
                        <Text
                            style={{
                                fontWeight: "bold",
                                color: "#0C2B4E",
                                fontSize: dynamicFontSize,
                                letterSpacing: 0.5,
                                lineHeight: 1.2,
                            }}
                        >
                            {nama}
                        </Text>

                        {/* Universitas */}
                        <Text
                            style={{
                                fontSize: 8,
                                color: "#0C2B4E",
                                marginTop: 2, // jarak kecil biar rapi
                            }}
                        >
                            {universitas}
                        </Text>

                        <View
                            style={{
                                width: 90,
                                height: 1,
                                borderBottomWidth: 0.8,
                                borderStyle: "dotted",
                                borderColor: "#0C2B4E",
                                alignSelf: "center",
                                marginVertical: 2,
                            }}
                        />
                        {/* Nomor KTA */}
                        <Text
                            style={{
                                fontSize: 7,
                                color: "#444",
                                marginTop: 2,
                            }}
                        >
                            {no_kta}
                        </Text>
                    </View>

                    {/* Kontak info */}
                    <View
                        style={{
                            position: "absolute",
                            top: 50,
                            right: 20,
                            width: 90,
                        }}
                    >
                        {/* Baris email */}

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 2,
                            }}
                        >
                            <Image
                                src={iconEmail}
                                style={{ width: 8, height: 8, marginRight: 4 }}
                            />
                            <Text
                                style={{
                                    fontSize: infoFontSize,
                                    color: "#333",
                                }}
                            >
                                {email}
                            </Text>
                        </View>

                        {/* Baris telepon */}
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 2,
                            }}
                        >
                            <Image
                                src={iconPhone}
                                style={{ width: 8, height: 8, marginRight: 4 }}
                            />
                            <Text
                                style={{
                                    fontSize: infoFontSize,
                                    color: "#333",
                                }}
                            >
                                {phone}
                            </Text>
                        </View>

                        {/* Baris alamat */}
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 2,
                            }}
                        >
                            <Image
                                src={iconAlamat}
                                style={{ width: 8, height: 8, marginRight: 4 }}
                            />
                            <Text
                                style={{
                                    fontSize: infoFontSize,
                                    color: "#333",
                                }}
                            >
                                {alamat}
                            </Text>
                        </View>

                        {/* Baris website */}
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                src={iconWeb}
                                style={{ width: 8, height: 8, marginRight: 4 }}
                            />
                            <Text
                                style={{
                                    fontSize: infoFontSize,
                                    color: "#333",
                                }}
                            >
                                www.apha.or.id
                            </Text>
                        </View>
                    </View>
                    {/* QR Code di kanan bawah */}
                    <Image
                        src={qrCodeUrl}
                        style={{
                            position: "absolute",
                            top: 110,
                            bottom: 10,
                            right: 10,
                            width: 35,
                            height: 35,
                        }}
                    />
                </View>
            </Page>
        </Document>
    );
}

//export default InvoicePDF;
