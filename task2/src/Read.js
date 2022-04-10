import { useEffect, useState } from "react"
import { read1 } from "./ArrayValues"


export const Padi01=(manoj)=>{
        const[signed,setsigned]=useState(
        {
            "Uname":"",
            "Fname":"",
            "Gender":"",
            "Qname":"",
            "Ltd":"",
            "Cno":"",
            "Mail":"",
            "Lan":new Array()
        })

        useEffect(()=>
        {
            jackReading()
        })
        const jackReading=()=>
        {
            setsigned(read1(manoj.who))
        }

        return(
            <>
            <h2 className="text-center">Subcriber Details</h2>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <ul className="card-body col-2">
                                    <p className="text-center fw-bold"> USERNAME -<span className="text-warning">{signed.Uname}</span></p>
                                    <p className="text-center fw-bold"> FIRSTNAME -<span className="text-warning">{signed.Fname}</span></p>
                                    <p className="text-center fw-bold"> GENDER -<span className="text-warning">{signed.Gender}</span></p>
                                    <p className="text-center fw-bold"> QUALIFICATION -<span className="text-warning">{signed.Qname}</span></p>
                                    <p className="text-center fw-bold"> AGE LIMIT -<span className="text-warning">{signed.Ltd}</span></p>
                                    <p className="text-center fw-bold"> CONTACT NUMBER -<span className="text-warning">{signed.Cno}</span></p>
                                    <p className="text-center fw-bold"> MAIL ID -<span className="text-warning">{signed.Mail}</span></p>
                                    <p className="text-center fw-bold"> LANGUAGE  -<span className="text-warning">{signed.Lan}</span></p>
                                </ul>
                                <button className="btn btn-success float-end">Subcriber Asset details</button>
                            </div>
                        </div>
            </>
        )
    }
