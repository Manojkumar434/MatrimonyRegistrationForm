import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { del, fetchExact01, list } from "./ArrayValues";
import { MatDetails } from "./MatrimonyForm";
import {  Padi01 } from "./Read";
import {   Update01 } from "./Update";

export const Main=()=>
{
    const[tmpArray,settmpArray]=useState([])
    const[tempArray,settempArray]=useState(false)
    const[readview,setreadview]=useState(false)
    const[updateview,setupdateview]=useState(false)
    const[pos,setPos]=useState(0)
    const[obj,setObj]=useState({})

    const hello=()=>{
        settmpArray(list())
    }
    useEffect(()=>
    {
        hello()
    },[])
    return(
        <>           
                                                                    
{(tempArray)?
                <>  
                    <MatDetails/>
                    <button className="btn btn-outline-secondary" onClick={
                        ()=>{
                            settempArray(false)
                        }
                    }>
                        <i class="bi bi-skip-backward-btn-fill"></i>Back
                    </button>
                </>
                :
                (updateview)?
                <>
                    <Update01 who={pos} mention={obj}/>
                    <button className="btn btn-outline-secondary" onClick={
                        ()=>{
                            setupdateview(false)
                        }
                    }>
                        <i className="bi bi-skip-backward-btn-fill"></i> Back
                    </button>
                </>
                :
                (readview)?
                <>
                <Padi01 who={pos}/>
                    <button className="btn btn-outline-secondary" onClick={
                        ()=>{
                            setreadview(false)
                        }
                    }>
                         Back
                    </button>
                </>
                :
                <>
        
                    <button className="btn btn-outline-success mb-3 mt-5 float-start"
                        onClick={()=>{
                            settempArray(true)
                        }}>
                        <i class="bi bi-cloud-plus"></i>New Customer
                    </button>
                    <button className="btn btn-outline-success mb-3 mt-5 ms-5 ">Login</button>
                    
                    <h1 className="text-dark text-center bg-info">MATRIMONY NEW SUBCRIBER</h1>   
        

        <div className="row justify-content-center bg-light text-light">
                        <div className="table-responsive-md">
                            <table className="col-lg-8 col-md-10 col-sm-12 table table-striped p-3 shadow rounded">
                                <thead>
                                    <tr className="text-dark">
                                        <th>USERNAME</th>
                                        <th>FIRSTNAME</th>
                                        <th>GENDER</th>
                                        <th>QUALIFICATION</th>
                                        <th>AGE LIMIT</th>
                                        <th>CONTACT NO</th>
                                        <th>MAIL-ID</th>
                                        <th>LANGUAGE</th>
                                        <th>ACTIONS</th>
                                   </tr>
                                </thead>
                                <tbody>
                                    {tmpArray.map((elems,index)=>(
                                        <tr className="">
                                             <td>
                                                <button class="btn btn-outline-info" onClick={()=>{
                                                    setreadview(true)
                                                    setPos(index)
                                                }}>
                                                   READ 
                                                </button>
                                                {elems.Uname}
                                            </td>
                                            <td className="text-center"> {elems.Fname}</td>
                                            <td className="text-center"> {elems.Gender}</td>
                                            <td className="text-center"> {elems.Qname}</td>
                                            <td className="text-center"> {elems.Ltd}</td>
                                            <td className="text-center"> {elems.Cno}</td>
                                            <td className="text-center"> {elems.Mail}</td>
                                            <td className="text-center"> {elems.Lan}</td>
                                            
                                            <td>
                                                <button className="btn btn-outline-warning rounded-circle"
                                                onClick={()=>{
                                                    setupdateview(true)
                                                    setPos(index)
                                                    const y=fetchExact01(elems.Uname)
                                                    setObj(y)
                                                }}>
                                                    Edit
                                                </button>
                                            </td>
                                            <td>
                                                <button className="btn btn-outline-danger "
                                                onClick={()=>
                                                    {
                                                        
                                                        settmpArray(del(index))
                                                    }}>
                                                    Delete 
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </>
                    }
        </>
    )
}