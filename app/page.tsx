// deno-lint-ignore-file
"use client"
import { useState } from "react";
import { jsPDF } from "jspdf";

export default function Home() {

    const [info, setInfo] = useState({ title: "", information: "" })

    const handlePDF = async () => {
        const doc = new jsPDF("p", "pt", "a4", false);
        await doc.text(`Titre : ${info.title}`, 100, 20);
        await doc.text(`Information : ${info.information}`, 100, 40);
        await doc.save("mypdf.pdf");
    }

    return (
        <div>
            <input className="border-2 border-amber-600" type="text" value={info.title} onChange={(e) => setInfo({ ...info, title: e.target.value })} />
            <input className="border-2 border-amber-600" type="text" value={info.information} onChange={(e) => setInfo({ ...info, information: e.target.value })} />
            <button onClick={() => handlePDF()}>Imprimer</button>
        </div>
    );
}