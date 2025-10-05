import { useEffect, useState } from "react";
import authSlides from "@/data/authSlides";

export default function AuthCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % authSlides.length);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    const slide = authSlides[current];

    return (
        <>
            <div className="auth-slide">
                <div className="auth-slide-header">
                    <div className="auth-slide-icon">
                        <i className={`fas ${slide.icon}`}></i>
                    </div>

                    <h2 className="auth-slide-title">{slide.title}</h2>
                </div>

                <p className="auth-slide-description">{slide.description}</p>
            </div>

            <div className="auth-indicators">
                {authSlides.map((_, index) => (
                    <span
                        key={index}
                        className={`auth-dot ${
                            current === index ? "active" : ""
                        }`}
                    />
                ))}
            </div>
        </>
    );
}
