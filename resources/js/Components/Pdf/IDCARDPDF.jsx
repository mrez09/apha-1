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
    alamat,
    tanggal_print,
    url_img,
    qrCodeUrl,
    qrCodeBase,
}) {
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
                </View>
            </Page>

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
                            width: 243, // sesuai ukuran page
                            height: 153,
                            objectFit: "fill", // bukan "cover"
                        }}
                        src={KTAAphainfo}
                    />

                    <Image style={styles.img_idcard} src={LogoApha} />
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
                </View>
            </Page>
        </Document>
    );
}

//export default InvoicePDF;
