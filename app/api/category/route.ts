import { NextApiRequest, NextApiResponse } from "next";

const CATEGORIES_API_URL = "https://gist.githubusercontent.com/wilson-wego/f7381fcead7a47a7df257a97a033456a/raw/33cd31ce75ba72a809d48944463b53b74b9ccae8/categories.json"

export const GET = async (req:any,res:any) =>{
    try {
        const response = await fetch(CATEGORIES_API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const categories = await response.json();
        return new Response(JSON.stringify(categories), {status : 200})
      } catch (error) {
        console.error('Error fetching categories:', error);
        return new Response("Failed to fetch categories", {status : 500})
      }
}