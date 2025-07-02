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
}) {
    const styles = StyleSheet.create({
        body: {
            //paddingTop: 35,
            //paddingBottom: 65,
            //paddingHorizontal: 35,
            //width: 638,
            //height: 1004,
            //maxWidth: 480,
            maxWidth: 674,
            //maxHeight: 380,
            maxHeight: 375,
        },

        /*Id Card*/
        logo: {
            marginLeft: -20,
        },

        Card_APHA: {
            paddingTop: 20,
        },

        t_kta: {
            paddingTop: 20,
            textAlign: "left",
        },

        h1_APHA: {
            fontSize: 22,
            textAlign: "center",
            fontWeight: "800",
            height: 10,
            zIndex: 1,
        },

        img_idcard: {
            width: 240,
            /*
            border-radius: 50%;
            border: 4px solid #ffffff;
            float: right;
            */
            //transform: scale(1.6),
            //position: "relative",

            top: 70,
            //bottom: -30,
            left: 320,
            //left: 60,
            //zIndex: 2,
        },
        Nama_id: {
            position: "absolute",
            fontSize: 18,
            textAlign: "left",
            color: "black",
            fontWeight: "bold",
            width: 300,

            //bottom: 0,
            bottom: 225,
            left: 20,
            right: 0,
            fontWeight: "bold",
        },

        KTA_id: {
            position: "absolute",
            fontSize: 14,
            textAlign: "left",
            color: "orange",
            fontWeight: "bold",

            //bottom: 0,
            bottom: 210,
            left: 20,
            right: 0,
            fontWeight: "bold",
        },

        Afiliasi_id: {
            position: "absolute",
            fontSize: 14,
            textAlign: "left",
            color: "black",
            fontWeight: "bold",

            //bottom: 0,
            top: 180,
            left: 20,
            right: 0,
            fontWeight: "bold",
        },

        Afiliasi_dot: {
            position: "absolute",
            fontSize: 14,
            textAlign: "left",
            color: "black",
            fontWeight: "bold",

            //bottom: 0,
            top: 180,
            left: 100,
            right: 0,
            fontWeight: "bold",
        },

        Universitas: {
            position: "absolute",
            fontSize: 14,
            textAlign: "left",
            color: "black",
            fontWeight: "bold",

            //bottom: 0,
            top: 180,
            left: 110,
            right: 0,
            fontWeight: "bold",
            width: 200,
        },

        Berlaku: {
            position: "absolute",
            fontSize: 14,
            textAlign: "left",
            color: "black",
            fontWeight: "bold",

            //bottom: 0,
            bottom: 80,
            left: 20,
            right: 0,
            fontWeight: "bold",
        },

        Berlaku_dot: {
            position: "absolute",
            fontSize: 14,
            textAlign: "left",
            color: "black",
            fontWeight: "bold",

            //bottom: 0,
            bottom: 80,
            left: 100,
            right: 0,
            fontWeight: "bold",
        },

        Tahun: {
            position: "absolute",
            fontSize: 14,
            textAlign: "left",
            color: "black",
            fontWeight: "bold",

            //bottom: 0,
            bottom: 80,
            left: 110,
            right: 0,
            fontWeight: "bold",
        },

        Footer_1: {
            position: "absolute",
            fontSize: 18,
            textAlign: "left",
            color: "white",

            //bottom: 0,
            top: 320,
            left: 20,
            right: 0,
            fontWeight: "heavy",
        },

        Footer_2: {
            position: "absolute",
            fontSize: 18,
            textAlign: "left",
            color: "white",
            fontWeight: "heavy",

            //bottom: 0,
            top: 340,
            left: 20,
            right: 0,
        },

        border_pemisah: {
            borderBottom: "4px solid #ef7d39",
            top: 170,
            left: 20,
            right: 0,
            width: 120,

            position: "absolute",
        },

        /*end idcard*/

        textup: {
            position: "absolute",
            left: "0px",
            right: "0px",
            marginHorizontal: "auto",
            textAlign: "center",
            justifyContent: "center",
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
            marginTop: 100,
            marginHorizontal: 70,
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

        textup: {
            position: "absolute",
            top: 20,
            zIndex: 2,
            color: "#fff",
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
        by: {
            position: "absolute",
            fontSize: 12,
            textAlign: "center",
            color: "black",

            //bottom: 0,
            top: 20,
            left: 0,
            right: 0,
            fontWeight: "bold",
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
            <Page style={styles.body}>
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
                            zIndex: -1,
                            top: 0,
                            width: "100%",
                        }}
                        src={KTAApha}
                    />

                    <Image style={styles.img_idcard} src={LogoApha} />

                    {
                        //<Image style={styles.image} src={url_img} />
                        //<Image style={styles.image} src={`/storage/${img}`} />
                    }
                    <Text style={styles.textup}></Text>
                </View>
                <Text style={styles.by}>
                    <Text style={styles.h1_APHA}>APHA</Text>
                    {"\n"}
                    <Text style={styles.h1_APHA}>
                        ASOSIASI PENGAJAR HUKUM ADAT
                    </Text>
                </Text>

                <Text style={styles.Nama_id}>{nama}</Text>
                <Text style={styles.KTA_id}>{no_kta}</Text>
                <Text style={styles.border_pemisah}></Text>
                <Text style={styles.Afiliasi_id}>Afiliasi</Text>
                <Text style={styles.Afiliasi_dot}>: </Text>
                <Text style={styles.Universitas}>{universitas}</Text>

                <Text style={styles.Berlaku}>Berlaku</Text>
                <Text style={styles.Berlaku_dot}>: </Text>
                <Text style={styles.Tahun}>2024</Text>

                <Text style={styles.Footer_1}>
                    Fakultas Hukum Universitas Trisakti Kampus A Gedung H Lantai
                    6
                </Text>
                <Text style={styles.Footer_2}>
                    Jl. Kyai Tapa No.1 Grogol Jakarta Barat.
                </Text>
                {
                    //<Text style={styles.sendertext}>Whatap2</Text>
                }
                {
                    //<Html>TEST</Html>
                }
            </Page>
            <Page style={styles.body}>
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
                            zIndex: -1,
                            top: 0,
                            width: "100%",
                        }}
                        src={KTAAphaBelakang}
                    />

                    {
                        //<Image style={styles.img_idcard} src={LogoApha} />
                    }

                    {
                        //<Image style={styles.image} src={url_img} />
                        //<Image style={styles.image} src={`/storage/${img}`} />
                    }

                    <Text style={styles.textup}></Text>
                </View>

                {/** 
                         * 
                <Text style={styles.by}>
                    <Text style={styles.h1_APHA}>APHA</Text>
                    {"\n"}
                    <Text style={styles.h1_APHA}>
                        ASOSIASI PENGAJAR HUKUM ADAT
                    </Text>
                </Text>

                <Text style={styles.Nama_id}>{nama}</Text>
                <Text style={styles.KTA_id}>{no_kta}</Text>
                <Text style={styles.border_pemisah}></Text>
                <Text style={styles.Afiliasi_id}>Afiliasi</Text>
                <Text style={styles.Afiliasi_dot}>: </Text>
                <Text style={styles.Universitas}>{universitas}</Text>

                <Text style={styles.Berlaku}>Berlaku</Text>
                <Text style={styles.Berlaku_dot}>: </Text>
                <Text style={styles.Tahun}>2024</Text>

                <Text style={styles.Footer_1}>
                    Fakultas Hukum Universitas Trisakti Kampus A Gedung H Lantai
                    6
                </Text>
                
                <Text style={styles.Footer_2}>
                    Jl. Kyai Tapa No.1 Grogol Jakarta Barat.
                </Text>

                */}

                {
                    //<Text style={styles.sendertext}>Whatap2</Text>
                }
                {
                    //<Html>TEST</Html>
                }
            </Page>
        </Document>
    );
}

//export default InvoicePDF;
