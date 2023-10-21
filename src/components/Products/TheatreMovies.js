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



function TheatreMovies() {
    const {id} = useParams();
    const [data,setData] = useState([]);
    const [castList,setCastList] = useState([]);
    const [background, setBackground] = useState('')
    useEffect(()=>{
        const getData =  ()=>{
             axios.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=23b2395d981664980812d2c0a1ebd44e&language=en-US')
        .then((response)=>{
            // console.log(Object.entries(response.data).map((e) => ( { [e[0]]: e[1] } )));
            // setData(Object.entries(response.data).map((e) => ( { [e[0]]: e[1] } )));
            setData(()=>response.data)
            console.log('state in movies===',response.data)
            setBackground("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces" + data.backdrop_path);
            console.log("background in theatre=====",Object.values(data.genres));        
        })
        .catch((error)=>{
            console.log('error',error);
        })
    }
    getData();
    },[])

    useEffect(()=>{
        const getCast =  ()=>{
             axios.get('https://api.themoviedb.org/3/movie/'+id+'/credits?api_key=23b2395d981664980812d2c0a1ebd44e&language=en-US')
        .then((response)=>{
            console.log("cast======",response.data.cast,id);
            setCastList(response.data.cast)
        })
        .catch((error)=>{
            console.log('error',error);
        })
    }
    getCast();
    },[])

    return ( <div><Header />
    {/* `url('${background}')` */}
    <div className='movie_header' style={{background: `linear-gradient(rgba(3,37,65, 0.8) 0%, rgba(3,37,65, 0) 100%),url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}')`}}>
   <div className="header_column">
    <div key ={data.id} className="card">
    {data.poster_path !== null? <img className="data_image" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`} alt="pic-alt" />:<img className="data_image" src={_defaultImg} alt="pic-alt" /> }
    <div className='card_wrapper'>
    <div>
    <div className='data_name'> {data.name}
    {/* <p className='data_air'>{data.first_air_date}</p> */}
    </div>
    </div>
    </div>
    </div>
    <div className='movie_header_detail'>
   <h2 className='data_name'>{data.original_title}</h2>
   <span className='genres'><span style={{border: '1px solid rgba(255,255,255,0.6)',
    color: 'rgba(255,255,255,0.6)',marginRight: '3px'}}> TV-G</span></span>
   <div className='percentage'>
    <p className='rating'>
    {data.vote_average} 
    </p>
    <p className='text'> User<br></br>Score</p>
    <div className='tooltip'>
    <span style={{boxSizing: 'border-box',
    background: 'rgba(3,37,65, 1)',
    borderRadius: '50%',
    width: '46px',
    height: '46px',}}><FormatListBulletedIcon style={{marginLeft: '10px',
    marginTop: '10px'}}/></span>
    <span style={{boxSizing: 'border-box',
    background: 'rgba(3,37,65, 1)',
    borderRadius: '50%',
    width: '46px',
    height: '46px',}}><FavoriteIcon style={{marginLeft: '10px',
    marginTop: '10px'}}/></span>
    <span style={{boxSizing: 'border-box',
    background: 'rgba(3,37,65, 1)',
    borderRadius: '50%',
    width: '46px',
    height: '46px',}}><BookmarkIcon style={{marginLeft: '10px',
    marginTop: '10px'}}/></span>
    <span style={{boxSizing: 'border-box',
    background: 'rgba(3,37,65, 1)',
    borderRadius: '50%',
    width: '46px',
    height: '46px',}}><StarBorderOutlinedIcon style={{marginLeft: '10px',
    marginTop: '10px'}}/></span>
    </div>
    </div>
    <div className='overview'>
        <h3 className='overview_heading'>Overview</h3>
        <p className='overview_para9'>{data.overview}</p>
    </div>
    <StarRating />
   </div>
    </div>
    </div>
    {castList.length > 0 ? <div className='cast_Scroller' style={{scrollBehavior: "smooth",
    width: "800px",
    overflowX: "scroll",
    margin: "0 40px 0 36px",height: "270px"}}>
        <ul style={{display: "flex",padding: "0", listStyleType: "none",margin: "0"}}>{castList.map((elem)=><div className='cast_individual' style={{margin: "10px",
    height: "220px"}}>
        <div style={{width: "138px",height: "175px",position: "relative",backgroundColor: "#dbdbdb"}}>{elem.profile_path !== null ? <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${elem.profile_path}`} alt="cast_img"/>: <img src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-36-user-female-grey-d9222f16ec16a33ed5e2c9bbdca07a4c48db14008bbebbabced8f8ed1fa2ad59.svg" style={{width: "50px",
    height: "50px",
    position: "absolute",
    top: "33%",
    left: "31%",
    bottom: "25%",}} alt="cast_img"/>}</div>
        <li><h4>{elem.name}</h4></li>
        </div>)}</ul>
    </div>:<div>No cast list</div>}
    <Footer/>
    </div>
    
  )
}

export default TheatreMovies