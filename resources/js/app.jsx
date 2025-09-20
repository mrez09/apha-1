//import './bootstrap';
//import "../frontend/css/bootstrap.css"; //bootstrap biasa
import "bootstrap/dist/css/bootstrap.min.css";
//import "../css/app.css";
import "../css/apha.css";
import "../css/style.css";
//import "../texteditor/src/ckeditor";\
import { router } from "@inertiajs/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

router.on("error", (event) => {
    const status = event.detail?.response?.status;
    if (status === 429) {
        toast.error("Terlalu banyak permintaan. Coba lagi dalam 1 menit.");
    }
});

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: "#4B5563",
    },
});
