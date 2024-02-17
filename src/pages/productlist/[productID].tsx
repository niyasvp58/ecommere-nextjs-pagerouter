'use client'
import React, { useEffect, useState } from 'react'
import {  getproductbyID } from '../data/data';
import { useRouter } from 'next/router';
import Image from 'next/image';
interface product {
  id: any;
  name: any;
  image: { url: any } | null ;
  price: { raw: number };
  seo: { description: any };
}
export default  function Productdetails(props:any) {
        // const param = useParams();
        // console.log(props)
        // const params = props.params.productdetails;
        const [product, setProduct] = useState<product |undefined>(undefined);
        const router = useRouter();
        useEffect(() => {
          const fetchData = async () => {
            try {
              const { productID } = router.query;
              console.log(productID);
              const product:product |undefined = await getproductbyID(productID);
              setProduct(product);
            } catch (error) {
              console.log('context error', error);
            }
          };
          fetchData();
        }, [router.query]);
      return (
        <div style={{fontSize:"20px",fontWeight:"bold"}}>
                <div >Product ID:</div>
                <div><Image alt="priductid" src={product?.image?.url} width={400} height={400} /></div>
                <div>{product?.name}</div>
                <div>{product?.price.raw}</div>
                <div>{product?.seo.description}</div>
        </div>
      )
}
