import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from '../Shimmer/Shimmer';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Movies.scss';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
// import StarRating from './StarRating';
import _defaultImg from '../../assets/default_image.jpg'



function TheatreMovies() {
    const {id} = useParams();
    const [data,setData] = useState([]);
    const [castList,setCastList] = useState([]);
    const [background, setBackground] = useState('');
    const [videoData,setVideoData] = useState();
    useEffect(()=>{
        const getData =  ()=>{
             axios.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=23b2395d981664980812d2c0a1ebd44e&language=en-US')
        .then((response)=>{
            console.log("in theatreeeeeeeeeeeeeeeeeeeeeeeeeeeee 26");
            // console.log(Object.entries(response.data).map((e) => ( { [e[0]]: e[1] } )));
            // setData(Object.entries(response.data).map((e) => ( { [e[0]]: e[1] } )));
            setData(()=>response.data)
            console.log('state in movies===',response.data)
            setBackground("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces" + data.backdrop_path);
            console.log("background in theatre=====",Object.values(data.genres)); 
            console.log("data length====", data);       
        })
        .catch((error)=>{
            console.log('error',error);
        })
    }

        const getVideoData = () => {
            axios.get('https://api.themoviedb.org/3/movie/'+id+'/videos?api_key=23b2395d981664980812d2c0a1ebd44e&language=en-US')
            .then((response)=>{
                console.log("response of video========",response.data.results[0]);
                setVideoData(()=>response.data.results[0]);
            })
            .catch((error)=>{
                console.log("error===",error);
                setVideoData(()=> undefined);
            })
        } 

    getData();
    getVideoData();
    },[])

    useEffect(()=>{
        const getCast =  ()=>{
             axios.get('https://api.themoviedb.org/3/movie/'+id+'/credits?api_key=23b2395d981664980812d2c0a1ebd44e&language=en-US')
        .then((response)=>{
            console.log("cast======",response.data.cast,id);
            if(response.data.cast && response.data.cast !== '' && response.data.cast.length > 10){
                response.data.cast.length =10; 

            }
            setCastList(response.data.cast)
        })
        .catch((error)=>{
            console.log('error',error);
        })
    }
    getCast();
    },[])

    return ( data && data.backdrop_path !== undefined?
    <><Header />
    <div className='movie_header' style={{background: `linear-gradient(rgba(3,37,65, 0.8) 0%, rgba(3,37,65, 0) 100%),url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}')`,zIndex: "1"}}>
   <div className="header_column" style={{zIndex: "2"}}>
    <div key ={data.id} className="card">
    {data.poster_path !== null? <img className="data_image" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`} alt="pic-alt" />:<img className="data_image" src={_defaultImg} alt="pic-alt" /> }
    <div className='card_wrapper'>
    <div>
    </div>
    </div>
    </div>
    <div className='movie_header_detail'>
   <h2 className='data_name'>{data.original_title}</h2>
   <span className='genres'><span style={{border: '1px solid rgba(255,255,255,0.6)',
    color: 'rgba(255,255,255,0.6)',marginRight: '3px'}}> TV-G</span></span>
   <div className='percentage'>
   <div className='rating'><p>
    {data.vote_average !== undefined || null ? Math.floor(data.vote_average) :"" } 
    </p></div>
    <p className='text'> User<br></br>Score</p>
    <div className='tooltip'>
    <span ><FormatListBulletedIcon className='MuiSvgIcon-root'/></span>
    <span><FavoriteIcon /></span>
    <span><BookmarkIcon/></span>
    <span><StarBorderOutlinedIcon/></span>
    </div>
    </div>
    <div className='overview'>
        <h3 className='overview_heading'>Overview</h3>
        <p className='overview_para'>{data.overview}</p>
    </div>
   </div>
    </div>
    </div>

    <div className='casting_scroll'>
    {castList.length > 0 ?
        <div className='cast_detail'>Series Cast
    <div className='cast_scroller'>
     <div className='cast_title'></div>
        <ul className="scroll">{castList.map((elem)=><div className='cast_individual' key={{elem}}>
        <div className='cast_profile'>{elem.profile_path !== null ? <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${elem.profile_path}`} alt="cast_img"/>: <img src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-36-user-female-grey-d9222f16ec16a33ed5e2c9bbdca07a4c48db14008bbebbabced8f8ed1fa2ad59.svg" alt="cast_img"/>}</div>
        <li className='cast_name'><h4>{elem.name}</h4></li>
        </div>)}</ul> 
        </div>
        </div>:<div>No cast list</div>
    }
    {videoData !== undefined ? <div className='youtube-video'><iframe width="500" height="315" src={`https://www.youtube.com/embed/${videoData.key}?si=m8ThyrfRTUQ8nCMO`} title={videoData.name} frameborder="0" 
       style={{borderRadius: "15px"}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>:""}
    </div>
    <Footer/>
    </>  : <div>
    <Shimmer />
    </div>
    
  )
}

export default TheatreMovies
