import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const options = {
      method: "GET",
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      headers: {
         "X-RapidAPI-Key": '9bcfa51ed2msh283e9e155781d70p18a2d0jsnc3084f7f9f72',
         "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
      params: {
         ...query,
      },
   };

   const fetchData = async () => {
      setIsLoading(true);

      try {
         const response = await axios.request(options);
         setData(response.data.data);
         setIsLoading(false);
      } catch (error) {
         setError(error);
         alert("Error" + error);
         
      } finally {
         setIsLoading(false);
      }
   };

   useEffect(()=>{
      fetchData();

   }, []);
   
   const refetch = () =>{
      setIsLoading(true);
      fetchData();
   }

   return {data, isLoading, error, refetch};
}

export default useFetch;