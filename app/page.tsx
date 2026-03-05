"use client";
import { useState } from "react";
import { jsPDF } from "jspdf";
import Link from 'next/link'

export default function Home() {

    const [allInfo, setAllInfo] = useState([])
    const [info, setInfo] = useState({
        active: false,
        identity: {
            first_name: "",
            last_name: "",
            dob: "",
            birth_place: "",
            address: "",
            phone_number: "",
            gender: "",
            email: "",
            ip: {}
        },
        employment: {
            employer: "",
            employer_address: "",
            employer_phone: "",
            employer_type: "",
        },
        title: "",
        value: "",
        imageName: "",
        imageUrl: "",
    })

    const handlePDF = () => {
        const doc = new jsPDF("p", "pt", "a4", false);
        doc.text(`Titre : ${info.title}`, 100, 20);
        doc.text(`Information : ${info.value}`, 100, 40);
        doc.save("mypdf.pdf");
    }

    const disableNewInfo = () => {
        setInfo({
            active: false,
            identity: {
                first_name: "",
                last_name: "",
                dob: "",
                birth_place: "",
                address: "",
                phone_number: "",
                gender: "",
                email: "",
                ip: {}
            },
            employment: {
                employer: "",
                employer_address: "",
                employer_phone: "",
                employer_type: "",
            },
            title: "",
            value: "",
            imageName: "",
            imageUrl: "",
        })
    }

    const saveNewInfo = () => {
        const id = info.identity
        const emp = info.employment
        setAllInfo(prev => [...prev, { identity: { first_name: id.first_name, last_name: id.last_name, dob: id.dob, birth_place: id.birth_place, address: id.address, phone_number: id.phone_number, gender: id.gender, email: id.email, ip: id.ip }, employment: { employer: emp.employer, employer_address: emp.employer_address, employer_phone: emp.employer_phone, employer_type: emp.employer_type }, title: info.title, value: info.value, imageName: info.imageName, imageUrl: info.imageUrl }])
        console.log(allInfo);
        disableNewInfo()
    }

    return (
        <div>
            <nav className="flex items-center justify-between m-3">
                <Link href="/">OsintSearch</Link>
                <div className="flex items-center gap-3">
                    <Link href="/">Accueil</Link>
                    <Link href="">Tous les rapports</Link>
                </div>
            </nav>
            <div className="m-3">
                <div className="bg-gray-600 p-2 rounded-[6px] mt-">
                    {allInfo.length <= 0 ? (
                        <div>Aucune info pour le moment !</div>
                    ) : (
                        <div>
                            {allInfo.map((v, k) => (
                                <div key={k}>
                                    <p>Prénom : {v.identity.first_name}</p>
                                    <p>{v.identity.last_name}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="mt-3">
                    <button className="border-2 border-blue-500 p-3 rounded-[6px] hover:text-white cursor-pointer hover:bg-blue-500 transition duration-500" onClick={() => setInfo({ ...info, active: true })}>Créer un nouveau rapport</button>
                    <button onClick={() => handlePDF()} className="">Imprimer</button>
                </div>
                {info.active && (
                    <div className="inset-0 fixed flex items-center justify-center bg-black/80">
                        <div className="flex items-center flex-col gap-3 justify-center bg-black/30 p-10 rounded-[6px] w-1/4">
                            <div>
                                <h2 className="text-center text-white text-[22px] font-bold italic">identité</h2>
                                <hr className="text-white w-2/3 m-auto my-5" />
                                <div className="flex items-center flex-col gap-3 text-white/60 w-full">
                                    <div className="w-full flex items-center gap-2">
                                        <input placeholder="Prénom" className="border-2 border-amber-600 p-2 w-1/2 rounded-[6px]" type="text" value={info.identity.first_name} onChange={(e) => setInfo({ ...info, identity: { ...info.identity, first_name: e.target.value } })} />
                                        <input placeholder="Nom de famille" className="border-2 border-amber-600 p-2 w-1/2 rounded-[6px]" type="text" value={info.identity.last_name} onChange={(e) => setInfo({ ...info, identity: { ...info.identity, last_name: e.target.value } })} />
                                    </div>
                                    <div className="w-full flex items-center gap-2">
                                        <input className="border-2 border-amber-600 p-2 w-1/2 rounded-[6px]" type="date" value={info.identity.dob} onChange={(e) => setInfo({ ...info, identity: { ...info.identity, dob: e.target.value } })} />
                                        <input placeholder="Lieu de naissance" className="border-2 border-amber-600 p-2 w-1/2 rounded-[6px]" id="infoTitle" type="text" value={info.identity.birth_place} onChange={(e) => setInfo({ ...info, identity: { ...info.identity, birth_place: e.target.value } })} />
                                    </div>
                                    <div className="w-full flex items-center gap-2">
                                        <input placeholder="Adresse" className="border-2 border-amber-600 p-2 w-1/2 rounded-[6px]" type="text" value={info.identity.address} onChange={(e) => setInfo({ ...info, identity: { ...info.identity, address: e.target.value } })} />
                                        <input placeholder="Numéro de téléphone" className="border-2 border-amber-600 p-2 w-1/2 rounded-[6px]" id="infoTitle" type="text" value={info.identity.phone_number} onChange={(e) => setInfo({ ...info, identity: { ...info.identity, phone_number: e.target.value } })} />
                                    </div>
                                    <div className="w-full flex items-center gap-2">
                                        <input placeholder="Genre" className="border-2 border-amber-600 p-2 w-1/2 rounded-[6px]" type="text" value={info.identity.gender} onChange={(e) => setInfo({ ...info, identity: { ...info.identity, gender: e.target.value } })} />
                                        <input placeholder="Mail" className="border-2 border-amber-600 p-2 w-1/2 rounded-[6px]" id="infoTitle" type="text" value={info.identity.email} onChange={(e) => setInfo({ ...info, identity: { ...info.identity, email: e.target.value } })} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-center text-white text-[22px] font-bold italic">Autre</h2>
                                <hr className="text-white w-2/3 m-auto my-2" />
                                <div className="flex items-center flex-col text-white/60 w-full">
                                    <label htmlFor="infoTitle">Titre de l'information :</label>
                                    <input className="border-2 border-amber-600 p-2 w-full rounded-[6px]" id="infoTitle" type="text" value={info.title} onChange={(e) => setInfo({ ...info, title: e.target.value })} />
                                </div>
                                <div className="flex items-center flex-col text-white/60 w-full">
                                    <label htmlFor="valueTitle">Valeur de l'information :</label>
                                    <input className="border-2 border-amber-600 p-2 w-full rounded-[6px]" id="valueTitle" type="text" value={info.value} onChange={(e) => setInfo({ ...info, value: e.target.value })} />
                                </div>
                                <div className="flex items-center flex-col text-white/60 w-full">
                                    <label htmlFor="valueTitle">Ajouter une image</label>
                                    <input className="border-2 border-amber-600 p-2 w-full rounded-[6px]" id="valueTitle" type="text" value={info.imageUrl} onChange={(e) => setInfo({ ...info, imageUrl: e.target.value })} />
                                    <img src={info.imageUrl} alt="Image upload" className="mt-5 rounded-[6px] w-2/3" />
                                </div>
                            </div>
                            <div className="flex items-center w-full gap-2">
                                <button className="border-2 border-red-500 px-8 mt-5 w-2/4 rounded-[6px] p-2 hover:text-white hover:bg-red-500 transition duration-500" onClick={() => disableNewInfo()}>Annuler</button>
                                <button className="border-2 border-green-500 px-8 mt-5 w-2/4 rounded-[6px] p-2 hover:text-white hover:bg-green-500 transition duration-500" onClick={() => saveNewInfo()}>Sauvegarder</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
}