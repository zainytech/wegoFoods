import { NextApiRequest, NextApiResponse } from "next";

const API_URL = "https://gist.githubusercontent.com/wilson-wego/8311b463cd331099e34a1f251dad4cbf/raw/f1b04f9afe0fcc0c9270cb486b927641b7d27436/food.json"

export const GET = async (req:NextApiRequest,res:NextApiResponse) =>{
    try {
        const response = await fetch(API_URL);
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