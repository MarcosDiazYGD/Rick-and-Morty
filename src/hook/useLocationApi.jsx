import axios from "axios";
import { useEffect, useState } from "react";

const useCallApi = () => {
  const [response, setResponse] = useState({});
  
  useEffect(() => {
    const idLocation = Math.floor(Math.random() * 125)+1
    axios.get(`https://rickandmortyapi.com/api/location/${idLocation}`).then((res) => setResponse(res.data));
  },[]);
  return [response];
};

export default useCallApi;
