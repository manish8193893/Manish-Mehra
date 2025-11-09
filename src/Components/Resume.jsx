import React, { useState, useEffect } from "react";
import Particle from "./Particle";
import PDF from "../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url
).toString();

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`; 
function Resume() {
    const [width, setWidth] = useState(window.innerWidth);
    const [scale, setScale] = useState(1.2);

    useEffect(() => {
        const handleResize = () => {
            const w = window.innerWidth;
            setWidth(w);
            handleScale(w);
        };
        handleScale(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleScale = (screenWidth) => {
        if (screenWidth > 1200) setScale(1.2);
        else if (screenWidth > 992) setScale(1.0);
        else if (screenWidth > 768) setScale(0.85);
        else setScale(0.7);
    };

    const buttonClasses =
        "inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded max-w-[250px]";

    return (
        <div className="w-full min-h-screen resume-section relative px-4 pt-28 pb-12">
            <Particle />

            {/* PDF View */}
            <div className="resume flex justify-center">
                <div className="pdf-wrapper">
                    <Document
                        // pass the imported asset URL directly
                        file={PDF}
                        onLoadError={(error) => console.error("PDF load error:", error)}
                        noData={<div className="text-center text-red-500">Unable to load PDF</div>}
                        className="flex justify-center"
                    >
                        <Page
                            pageNumber={1}
                            scale={scale}
                            renderTextLayer={true}
                            renderAnnotationLayer={false}
                        />
                    </Document>
                </div>
            </div>
            {/* Bottom Download Button */}
            <div className="flex justify-center relative mt-6">
                <a
                    className={buttonClasses}
                    href={PDF}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <AiOutlineDownload />
                    <span>Download CV</span>
                </a>
            </div>
        </div>
    );
}

export default Resume;
