import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Products.scss';
import { addItem, removeItem } from '../../store/favouriteSlice';
import { useDispatch, useSelector } from 'react-redux';
import {IMAGE_PATH} from '../../utils/Constant';
import Shimmer from '../Shimmer/Shimmer';
import _defaultImg from '../../assets/default_image.jpg';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Products(){
    const [data,setData] = useState([]);
    const [pageNum,setPageNum]=useState(1);
    const dispatch = useDispatch();
    const favor=useSelector((store)=>store.favouriteSlice.items);

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=23b2395d981664980812d2c0a1ebd44e&language=en-US&page=`+pageNum)
        .then((response)=>{
            setData(response.data.results)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[pageNum]);

    function favoriteList(poster){
        if(favor.includes(poster)){
            dispatch(removeItem(poster))
        } else{
            dispatch(addItem(poster))
        }
    }

    function nameEllipsis(name){
        if(name.length >= 15){
            return name.substring(0,17)+"...";
        } else {
            return name;
        }
    }

    return (data.length > 1? <>
    <div>
    <div className='movie_detail'>
    {data.map((data)=> (<div key ={data.id} className="card">
    <Link to={'/product/'+ data.id}>{data.poster_path !== null ?<img className="data_image" src={ IMAGE_PATH+data.poster_path} alt="pic-alt" />:<img className="data_image" src={_defaultImg} alt="pic-alt" style={{height: '375px'}}/>  }
    </Link>
    <div className='card_wrapper'>
    <div className='percentage'>
    <p className='rating'>
    {Math.floor(data.vote_average)} 
    </p>
    </div>
    <div>
    <div className='data_name'> {nameEllipsis(data.name)}
    <p className='data_air'>{data.first_air_date} <span onClick={()=>favoriteList(data.poster_path)}><FavoriteIcon  className='MuiSvgIcon-root' style={favor.includes(data.poster_path)?{color: 'red'}:{color: 'lightgrey'}} /></span></p>
    </div>
    </div>
    </div>
    </div>
    ))}
    </div>
    <div className="pagination">
        {[...Array(5)].map((elem,index)=><div className={index+1 === pageNum? 'activepage':'pagination_list'} onClick={()=>setPageNum(index+1)}>{index+1}</div>)}
    </div>
    </div>
    </> : <div><Shimmer /></div>
    )
};

export default Products;
