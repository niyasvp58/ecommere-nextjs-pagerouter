'use client'
import React, { useEffect, useState } from 'react'
import { Productdata, getproduct } from '../data/data'
import Productcard from '../productcard/productcard';

interface product{
    id: any;
    name: any;
    image: any | null ;
    price: { raw: number };
    seo: { description: any };
    categories: { name: any }[];
}
interface categorydata{
    id:any;
    name:any;
}
export default function Productlist() {
    const [product,setproduct] =useState <product[]>([]);
    const [lastdata,setlastdata] = useState <product[]>([]);
    const [categorydata,setcategorydata] =useState <categorydata[]>([]);
    const [loading,setloading] = useState(true)
    const fetchdata= async ()=>{
        try{
            const product = await getproduct();
            const categorydata= await Productdata.getcategorydata();
            setproduct(product)
            setcategorydata(categorydata || [])
            setloading(false)
            if(lastdata.length==0){
                setlastdata(product)
            }
        }catch(error){
            console.log("fetchdata error",error)
        }

    }
    useEffect(()=>{
        fetchdata();
    },[])
    const filteredproduct=(cat:any)=>{
        try{
            if(cat=="all"){
                setlastdata(product)
            }else{
                const filtered=product.filter((p)=>p.categories.some(p=>p.name ===cat))
                setlastdata(filtered);
            }
        }catch(error){
            console.log("filtereed product error",error)
        }
    }
  return (
    <>
    { !loading ? (
    <div>
        <br/><br/>
        <button style={{display:"inline-flex",height:"50px",paddingLeft:"50px",paddingRight:"50px",borderRadius:"10px",marginLeft:"230px",fontWeight: "bolder",fontSize:"20px"}}
         onClick={(()=>{filteredproduct("all")})} className='btn btn-primary buttoncat'>ALL</button>
        {
            categorydata.map((p)=>{
                return(
                    <button onClick={()=>{
                        filteredproduct(p.name);
                    }} key={p.id} className='btn btn-primary'
                     style={{display:"inline-flex",height:"50px",paddingLeft:"50px",paddingRight:"50px",borderRadius:"10px",marginLeft:"60px",fontWeight: "bolder",fontSize:"20px"}}>
                        {p.name}
                    </button>
                )
            })
        }
        <br/><br/>
        <h1 style={{marginLeft:"140px"}}>Products</h1>
        <br/><br/>
    <div style={{marginLeft:"140px"}}>
        {   
             lastdata.map((p)=>(
                 <Productcard key={p.id} product={p} />
            ))
        }
    </div>
    </div>
                ) : <div>
                <div className="spinner-border" style={{ width: "70px", height: "70px",marginLeft:"750px",marginTop:"300px" }} role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
        </div> }

</>

  )
}
