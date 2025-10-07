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
                <ul className="pagination justify-content-center">
                    {links.map((link, index) =>
                        link.url === null ? (
                            <li
                                key={`${link.label}-${index}`}
                                className="page-item disabled"
                            >
                                <span className="page-link">
                                    {parse(link.label)}
                                </span>
                            </li>
                        ) : (
                            <li
                                key={`${link.label}-${index}`}
                                className={getClassName(link.active)}
                            >
                                <Link href={link.url} className="page-link">
                                    {parse(link.label)}
                                </Link>
                            </li>
                        ),
                    )}
                </ul>
            </nav>
        )
    );
}
