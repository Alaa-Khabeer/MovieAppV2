//import axios from "axios";
//import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardGroup from 'react-bootstrap/CardGroup';
import MCard from "./moviecard";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { movies } from "./Store/movieaction";
//import { axiosInstance } from "./Network/axiosInstance";
function Favorite(){
    const pnum = useSelector((state)=>state.pageNum)
   // const [movieData, setMovieData] = useState([])
    const dispatchAction = useDispatch()
    const Movie = useSelector((state)=>state.mlist)
   useEffect(()=>{
        //axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87&page=${pnum}`)
        /*axiosInstance.get(`/popular?api_key=9b743af1d4fde1d65af33c40dcccce87&page=${pnum}`)
        .then((movies)=>setMovieData(movies.data.results))
        .catch((er)=>console.log(er))*/
        dispatchAction(movies(pnum))
    }, [pnum])

    const favList = useSelector((state)=>state.added)

    return(
        <CardGroup className="ms-3">
        {Movie.map((data)=>{
            for(let i of favList){
                if(data.id===i){
                    return(
                        <div  key={data.id}>
                        <Link to="#"><MCard Id={data.id} img={data.poster_path} title={data.title} vote={data.vote_average}/></Link>
                        </div>
                     )           
                }
            }
        })}
        </CardGroup>
    )
}
export default Favorite;