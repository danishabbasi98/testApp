// const axios = require('axios');
import axios from "axios";

export const fetchData = async (id: number) => {
    const results = await axios.get(
        `http://localhost:8080/students/${id}`
    ).then(res => { 
        console.log("RESULT : "+res.data)
        return res.data;
      })
    
};
fetchData(15);
module.exports = fetchData;