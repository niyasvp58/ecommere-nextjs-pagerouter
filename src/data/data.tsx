// import React from 'react'
// import Commerce from '@chec/commerce.js';

// const commerce = new Commerce('pk_5571737b3e8967e5e15349df5e0549e77face05cb8e1b');

// const category = new Commerce('pk_55852adf77557bc1a63ac013b33bb5afe86a085b6c16f');

// export const getproduct = async () => {
//     try {
//         const products = await commerce.products.list();
//         return products.data;
//     } catch (error) {
//         console.log("error on product data", error);
//         throw error; // Optionally, you can rethrow the error to handle it elsewhere
//     }
// };

// export const getcategorydata = async () => {
//     try{
//         const product = await category.products.list();
//         return product.data;
//     }catch(error){
//         console.log("category data error",error)
//     }
// }
// export const getproductbyID =async(productID:any)=>{
//     try{
//         const product = commerce.products.retrieve(productID);
//         return product;
//     }catch(error){
//         console.log("productby id data error",error)
//     }
// }
// export class Productdata{
//     static getproduct = async ()=>{
//         try{
//             const product = await commerce.products.list()
//             return product.data ;
//         }catch(error){
//             console.log("error on product data" ,error)
//         }
//     }
//     static getproductbyID =async(productID:any)=>{
//         try{
//             const product = commerce.products.retrieve(productID);
//             return product;
//         }catch(error){
//             console.log("productby id data error",error)
//         }
//     }
//     static getcategorydata= async ()=>{
//         try{
//             const product = await category.products.list();
//             return product.data;
//         }catch(error){
//             console.log("category data error",error)
//         }
//     }
// }
import React from 'react';
import Commerce from '@chec/commerce.js';
import { Product as CommerceProduct } from '@chec/commerce.js/types/product';

const commerce = new Commerce('pk_5571737b3e8967e5e15349df5e0549e77face05cb8e1b');
const category = new Commerce('pk_55852adf77557bc1a63ac013b33bb5afe86a085b6c16f');

type Category = {
    id: string;
    name: string;
    slug: string;
    // Add other properties as needed based on the API response
  };
// Use the types from the commerce.js library
export const getproduct = async (): Promise<CommerceProduct[]> => {
  try {
    const { data: products } = await commerce.products.list();
    return products;
  } catch (error) {
    console.error("error on product data", error);
    throw error;
  }
};

export const getcategorydata = async (): Promise<Category[]> => {
  try {
    const { data: categories } = await category.categories.list();
    return categories;
  } catch (error) {
    console.error("category data error", error);
    throw error;
  }
};

export const getproductbyID = async (productID: string): Promise<CommerceProduct> => {
  try {
    const product = await commerce.products.retrieve(productID);
    return product;
  } catch (error) {
    console.error("product by id data error", error);
    throw error;
  }
};

export class Productdata {
  static async getproduct(): Promise<CommerceProduct[]> {
    try {
      const { data: products } = await commerce.products.list();
      return products;
    } catch (error) {
      console.error("error on product data", error);
      throw error;
    }
  }

  static async getproductbyID(productID: string): Promise<CommerceProduct> {
    try {
      const product = await commerce.products.retrieve(productID);
      return product;
    } catch (error) {
      console.error("product by id data error", error);
      throw error;
    }
  }

  static async getcategorydata(): Promise<Category[]> {
    try {
      const { data: categories } = await category.categories.list();
      return categories;
    } catch (error) {
      console.error("category data error", error);
      throw error;
    }
  }
}