let MatValues=[
    {
            "Uname":"Maddy@434",
            "Fname":"Manojkumar",
            "Gender":"Male",
            "Qname":"Bachelor of computer applications",
            "Ltd":"21-25",
            "Cno":"9789355980",
            "Mail":"manojgeetha12.10@gmail.com",
            "Lan":["Malayalam,Tamil"]
    },
     {
            "Uname":"Pavi@449",
            "Fname":"Pavithra M",
            "Gender":"female",
            "Qname":"Bachelor of Maths",
            "Ltd":"24-28",
            "Cno":"9500655980",
            "Mail":"Pavimano.10@gmail.com",
            "Lan":["Malayalam,Tamil,telgu"]
    },
    {
        "Uname":"Aarthi@1057",
        "Fname":"Aarthi Ayyanar",
        "Gender":"female",
        "Qname":"Bachelor of dental",
        "Ltd":"26-30",
        "Cno":"8903647393",
        "Mail":"Aarthi046@gmail.com",
        "Lan":["Malayalam,Tamil"]
},
{
    "Uname":"Annamalai Rock",
    "Fname":"AnnaMalai",
    "Gender":"Male",
    "Qname":"Bachelor of Commerce",
    "Ltd":"21-25",
    "Cno":"9878654356",
    "Mail":"AnnamalaiMass10@gmail.com",
    "Lan":["Malayalam,Tamil,Kannada"]
},
{
    "Uname":"Uma@474",
    "Fname":"Umadevi",
    "Gender":"Female",
    "Qname":"Bachelor of Engineering(CSE)",
    "Ltd":"25-30",
    "Cno":"7089335980",
    "Mail":"uma1210@gmail.com",
    "Lan":["telugu,Tamil"]
}
]

export const create=(ele)=>{
    MatValues.push(ele)
}
export const list=()=>{
    return MatValues
}
export const read1=(index)=>
{
    return MatValues[index]
}

export const fetchExact01=(name)=>{
    const tmp=MatValues.filter((element)=>{
        return element.Uname===name
    })
    return tmp[0]
}

export const alter=(place,data)=>{
    MatValues[place]=data
}



export const del=(index)=>
{
    MatValues=MatValues.filter((data,subcriber)=>
    {
        return subcriber!==index 
    })
    return list()
   
}
