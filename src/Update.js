import React, { useState } from "react";
import { alter } from "./ArrayValues";
import './App.css'

export const Update01=(change)=>
{

    const[pos]=useState(change.who)

    const[sign,setsign]=useState(
        {
            "Uname":change.mention.Uname,
            "Fname":change.mention.Fname,
            "Gender":change.mention.Gender,
            "Qname":change.mention.Qname,
            "Ltd":change.mention.Ltd,
            "Cno":change.mention.Cno,
            "Mail":change.mention.Mail,
            "Lan":change.mention.lan
        })
        const reg=()=>
        {
            alter(pos,sign)
            alert( "update successfully")
            // alert("Enrolled Successfully "+JSON.stringify(sign))
            //create(sign)
        }
        const can=()=>
        {
            alert("Better luck next time")
        }

    const tracky=(maddy)=>
        {
            //extraction
            const{name,value}=maddy.target
            setsign(
                (old)=>{
                return{
                    ...old,
                    [name]:value
                    }
                }
            )

        }
        const Imgsrc=
        {
            width:'200px',
            height:'240px',
            backgroundImage:'Images/Matrimony images.jpg'
        }
        const ff={
            fontFamily:'Viner Hand ITC'
        }
        const shape1={
            textTransform:'uppercase',
            fontSize:'20px',
            fontFamily:'Cookie',
            width:'250px',
            height:'10px',
        }
        const shape={
            fontFamily:'Terminal'
        }
        return(
            <>
            <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-md-10 col-sm-12 p-4 mt-4 text-light card " >
                        <h1 style={ff} className="card-title text-center"> TAMIL MATRIMONY</h1>
                        <div className="card-body">
                        <img src="Images/tamil-matrimony-logo.png" className="card-img " style={Imgsrc} alt="u hapiee we hapiee" />
                        <p className=" float-end" style={shape1}><span className="fw-bold text-dark" style={shape}>MARRIAGE</span><hr/><br/>Infinite blessings,<br/>Thousands of people,<br/>Three knots,Two hearts<br/>Becomes ONE SOUL</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center"  >
                    <div className="col-lg-9 col-md-10 col-sm-12 p-4 mt-1 mb-4shadow bg-light">
                        <div className="form-group mt-2 ">
                            <label>Username</label>
                            <input type="text" 
                            onChange={tracky}
                            value={sign.Uname}
                            name="Uname" 
                            placeholder="Enter the username" 
                            className="form-control"/>
                        </div>
                        <div className="form-group mt-2">
                            <label>Fullname</label>
                            <input type="text" 
                            onChange={tracky}
                            value={sign.Fname}
                            name="Fname"
                            placeholder="Enter the Fullname" 
                            className="form-control"/>
                        </div>
                        <div>
                            <label className="mt-2">Gender</label>
                            <textarea className="form-control"
                                   name="Gender"
                                   value={sign.Gender}
                                   onChange={tracky}>
                        </textarea>
 
                        </div>
                        <div className="form-group mt-2">
                            <label>Qualification</label>
                            <input type="text"
                            onChange={tracky}
                            value={sign.Qname}
                             name="Qname"
                             placeholder="Enter Your qualification" 
                             className="form-control"/>
                        </div>
                        <div className="form-group mt-2">
                            <label>Looking for selected age</label>
                            <select className="form-select mt-" name="Ltd" onChange={tracky}value={sign.Ltd}>
                                <option selected hidden>Age limit</option>
                                <option>21-25</option>
                                <option>26-30</option>
                                <option>31-40</option>
                            </select>
                        </div>
                        <div className="form-group mt-2">
                            <label>Contact no</label>
                            <input type="tel"
                            onChange={tracky} 
                            value={sign.Cno}
                            name="Cno"
                            placeholder="Enter the number" 
                            className="form-control"/>
                        </div>
                        <div className="form-group mt-2">
                            <label>Mail-id</label>
                            <input type="email" 
                            onChange={tracky}
                            value={sign.Mail}
                            name="Mail"
                            placeholder="Enter your email-id" 
                            className="form-control"/>
                        </div>
                        <div className="form-group mt-2">
                            <label>Languages</label>
                            <textarea className="form-control"
                                   name="Lan"
                                   value={sign.Lan}
                                   onChange={tracky}>
                        </textarea>
                            </div>
                        <div className="row justify-content-around mt-4">
                            <button onClick={reg} className="btn btn-outline-success col-4">Update</button>
                            <button onClick={can} className="btn btn-outline-danger col-4">Cancel</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
            </>
        )    
    }