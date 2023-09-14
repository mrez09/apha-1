import React from "react";
import { Link } from "@inertiajs/react";
import parse from "html-react-parser";

export default function Pagination({ links }) {
    function getClassName(active) {
        if (active) {
            return "page-item disabled";
        } else {
            return "page-item";
        }
    }

    return (
        links.length > 3 && (
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    {links.map((link, key) =>
                        link.url === null ? (
                            <Link class="page-item">
                                <a class="page-link">{parse(link.label)}</a>
                            </Link>
                        ) : (
                            <Link
                                className={getClassName(link.active)}
                                href={link.url}
                            >
                                <a class="page-link">{parse(link.label)}</a>
                            </Link>
                        )
                    )}
                </ul>
            </nav>
        )
    );
}
