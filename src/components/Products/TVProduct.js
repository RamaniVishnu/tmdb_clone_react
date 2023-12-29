import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import Shimmer from '../Shimmer/Shimmer';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../store/favouriteSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';


function TVProduct() {
    const [data,setData] = useState([]);
    const [pageNum,setPageNum]=useState(1);
    const dispatch = useDispatch();
    const favor=useSelector((store)=>store.favouriteSlice.items);

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=23b2395d981664980812d2c0a1ebd44e&language=en-US&page=`+pageNum)
        .then((response)=>{
            // setData(response.data.results)
           
            setData(response.data.results)
            
        })
        .catch((error)=>{
            console.log(error);
        })
    },[pageNum])

    function nameEllipsis(name){
        if(name.length >= 15){
            return name.substring(0,17)+"...";
        } else {
            return name;
        }
    }

    function favoriteList(poster){
        if(favor.includes(poster)){
            dispatch(removeItem(poster))
        } else{
            dispatch(addItem(poster))
        }
    }

    return (data.length > 1? <>
    <div className='movie_detail'>
    {data.map((data)=> (<div  key ={data.id} className="card">
    <Link to={'/product/'+ data.id}><img className="data_image" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}`} alt="pic-alt" /></Link>
    <div className='card_wrapper'>
    <div className='percentage'>
    <p className='rating'>
    {Math.floor(data.vote_average)} 
    </p>
    </div>
    <div>
    <div className='data_name'> {nameEllipsis(data.name)}
    <p className='data_air'>{data.first_air_date}<span onClick={()=>favoriteList(data.poster_path)}><FavoriteIcon style={favor.includes(data.poster_path)?{color: 'red'}:{color: 'lightgrey'}} /></span></p>
    </div>
    </div>
    </div>
    </div>
    ))}
    </div>
    <div className="pagination">
        {[...Array(5)].map((elem,index)=><div className={index+1 === pageNum? 'activepage':'pagination_list'} onClick={()=>setPageNum(index+1)}>{index+1}</div>)}
    </div>
    </> :  <div><Shimmer /></div>
    )
}
export default TVProduct;