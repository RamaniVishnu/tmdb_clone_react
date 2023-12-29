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
import StarRating from './StarRating';
import _defaultImg from '../../assets/default_image.jpg'



function Movies() {
    const {id} = useParams();
    const [data,setData] = useState([]);
    const [castList,setCastList] = useState([]);
    const [background, setBackground] = useState('');
    const [videoData,setVideoData] = useState();
    useEffect(()=>{
        const getData =  ()=>{
             axios.get('https://api.themoviedb.org/3/tv/'+id+'?api_key=23b2395d981664980812d2c0a1ebd44e&language=en-US')
        .then((response)=>{
            
            setData(Object.entries(response.data).map((e) => ( { [e[0]]: e[1] } )));
            setBackground("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces" + data[1].backdrop_path);
        })
        .catch((error)=>{
            console.log('error',error);
        })
    }
    const getVideoData = () => {
        axios.get('https://api.themoviedb.org/3/movie/'+id+'/videos?api_key=23b2395d981664980812d2c0a1ebd44e&language=en-US')
        .then((response)=>{
            
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
             axios.get('https://api.themoviedb.org/3/tv/'+id+'/aggregate_credits?api_key=23b2395d981664980812d2c0a1ebd44e&language=en-US')
        .then((response)=>{
            
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

    return ( data.length > 1 && data[1].backdrop_path !== undefined? <>
    <Header />
    <div className='movie_header' style={{background: `linear-gradient(rgba(3,37,65, 0.8) 0%, rgba(3,37,65, 0) 100%),url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data[1].backdrop_path}')`, zIndex: "1"}}>
   <div className="header_column" style={{zIndex: "2"}}>
    <div key ={data[7].id} className="card">
    {data[22].poster_path !== null? <img className="data_image" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data[22].poster_path}`} alt="pic-alt" />:<img className="data_image" src={_defaultImg} alt="pic-alt" /> }
    <div className='card_wrapper'>
    <div>
    {/* <div className='data_name'> {data[12].name}</div> */}
    </div>
    </div>
    </div>
    <div className='movie_header_detail'>
   <h2 className='data_name'>{data[12].name}</h2>
   <span className='genres'><span style={{border: '1px solid rgba(255,255,255,0.6)',
    color: 'rgba(255,255,255,0.6)',marginRight: '3px'}}> TV-G</span>{data[5].genres.map((e)=><span>{e.name} </span>)}</span>
   <div className='percentage'>
    <div className='rating'><p>
    {data[30].vote_average !== undefined || null ? Math.floor(data[30].vote_average) :"" } 
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
        <p className='overview_para'>{data[20].overview}</p>
    </div>
    <div className='created'>
    {data[2].created_by.length !== 0 && data[2].created_by[0].name !== undefined?
        <div><h4 style={{color:"#000"}}>{data[2].created_by[0].name }<span style={{color:"#000",fontWeight: "400"}}> - Creator</span></h4>
        </div>:''
    }
    </div>
    {/* <StarRating /> */}
   </div>
    </div>
    </div>
    {videoData !== undefined ?
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
        </div> : ''
    }
    
    {videoData !== undefined ? <div className='youtube-video'><iframe src={`https://www.youtube.com/embed/${videoData.key}?si=m8ThyrfRTUQ8nCMO`} title={videoData.name} frameborder="0" 
       style={{borderRadius: "15px"}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>:""}
    
    </div>: <div className='casting_scroll'>
    {castList.length > 0 ?
    <div className='cast_detailtube'>Series Cast
    <div className='cast_scroller'>
     <div className='cast_title'></div>
        <ul className="scroll">{castList.map((elem)=><div className='cast_individual' key={{elem}}>
        <div className='cast_profile'>{elem.profile_path !== null ? <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${elem.profile_path}`} alt="cast_img"/>: <img src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-36-user-female-grey-d9222f16ec16a33ed5e2c9bbdca07a4c48db14008bbebbabced8f8ed1fa2ad59.svg" alt="cast_img"/>}</div>
        <li className='cast_name'><h4>{elem.name}</h4></li>
        </div>)}</ul>
        </div>
        </div> : ''
    }
    </div>
    }
    <Footer/>
    </> : <div>
    <Shimmer />
    </div>
    
  )
}

export default Movies
