import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import Shimmer from '../Shimmer/Shimmer';
function TVProduct() {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/tv/airing_today?api_key=23b2395d981664980812d2c0a1ebd44e&language=en-US&page=1")
        .then((response)=>{
            // setData(response.data.results)
            console.log('data---',response.data.results);
            setData(response.data.results)
            console.log('img=====',data.backdrop_path);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])

    return (data.length > 1? <>
    <div className='movie_detail'>
    {data.map((data)=> (<div  key ={data.id} className="card">
    <Link to={'/product/'+ data.id}><img className="data_image" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}`} alt="pic-alt" /></Link>
    <div className='card_wrapper'>
    <div className='percentage'>
    <p className='rating'>
    {data.vote_average * 10} 
    </p>
    </div>
    <div>
    <div className='data_name'> {data.name}
    <p className='data_air'>{data.first_air_date}</p>
    </div>
    </div>
    </div>
    </div>
    ))}
    </div>
    </> :  <div><Shimmer /></div>
    )
}
export default TVProduct;