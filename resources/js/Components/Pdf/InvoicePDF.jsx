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
import LogoApha from "../photos/Logo-Apha.png";
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

export default function InvoicePDF({
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
    alamat,
    tanggal_print,
}) {
    const styles = StyleSheet.create({
        body: {
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 35,
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
            marginVertical: 15,
            marginHorizontal: 100,
            align: "left",
            width: 300,
            backgroundColor: "tomato",
            float: "left",
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
        },
        senderheader: {
            fontSize: 12,
            marginBottom: 20,
            textAlign: "left",
            color: "black",
        },
        sendertext: {
            fontSize: 10,
            marginBottom: 20,
            textAlign: "left",
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
        by: {
            position: "absolute",
            fontSize: 10,
            textAlign: "center",
            color: "black",

            bottom: 60,
            left: 0,
            right: 0,
        },
        //Table

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
            <Page style={styles.body} size="A4">
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: 20,
                    }}
                >
                    <Image style={{ flex: 1 }} src={LogoApha} />
                    <Text style={styles.info_invoice}>
                        <Text style={styles.info_invoice_t1}>
                            Perkumpulan Pengajar Hukum Adat {"\n"}
                        </Text>
                        <Text style={styles.info_invoice_t2}>
                            No Rekening : 126-00-0742744-5 {"\n"}
                        </Text>
                        <Text style={styles.info_invoice_t3}>
                            Jl. Haji Nawi Raya No. 10B Rt. 001 RW.001 {"\n"}
                            Cilandak Gandaria Selatan CILANDAK 12420
                        </Text>
                    </Text>
                </View>

                <Text style={styles.btnInvoices}>
                    <Text style={styles.btnInvoicetext}>{status}</Text>
                </Text>

                <Text style={styles.header} fixed>
                    <Text style={styles.subheader1}>
                        Invoice #{no_invoice} {"\n"}
                    </Text>
                    <Text style={styles.subheader2}>
                        Invoice Date: {tanggal_bayar} {"\n"}
                    </Text>
                </Text>

                <Text style={styles.sender}>
                    <Text style={styles.senderheader}>Invoiced To {"\n"}</Text>
                    <Text style={styles.sendertext}>
                        {nama} {"\n"}
                        {alamat}
                    </Text>
                </Text>

                <Html>{konten}</Html>

                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                    fixed
                ></Text>

                <Text style={styles.time}>
                    PDF Generated on {tanggal_print}
                </Text>
                <Text style={styles.by}>By Asosiasi Pengajar Hukum Adat.</Text>
            </Page>
        </Document>
    );
}

//export default InvoicePDF;
