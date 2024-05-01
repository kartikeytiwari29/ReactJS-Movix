import axios from "axios";

const BASE_URL ="https://api.themoviedb.org/3";

const TMDB_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzJlZDIwZTc5NzkwOTA1ZDEyOGFiYWRmMzQ3YmU0MiIsInN1YiI6IjY0MTM2ODUwZTE4ZTNmMDdiNDI1NzFlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i3YROP83VZafYz6F5Xz7A19ysP8n_zZOjaIh4RgFSk8"

const headers={
    Authorization: "bearer " + TMDB_TOKEN,
};


export const fetchDataFromApi=async(url, params) => {
    try{
        const{data} =await axios.get(BASE_URL + url,{
            headers,
            params

        })
        return data;

    }catch(err){
        console.log(err);
        return err;
    }
}