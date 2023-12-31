import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './TitleForm.scss';
import { cacheResult } from "../../store/SearchSlice";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function SearchBar(props){

    const [searchQuery,setDataSearch] = useState('');
    const [searchList,setDataList] = useState([]);
    const [showSuggestion,setshowSuggestion] = useState(false);

    const resultFromStore = useSelector((store) => store.SearchSlice);
    const dispatch = useDispatch();


    const handleInput =(val) =>{
        setDataSearch(val);
    }

    const handleSelectSearch =(elem)=>{
        setDataSearch(elem.original_title);
        props.setSearchQueryId(()=>elem.id);
    }

    const stylingobj={
        color:"black",
        listStyle:"none",
        height: "25px",
        paddingTop: "10px",
        display: "flex",
        marginRight: "8px",
        marginLeft: "-40px"
    }

    const getSearchSuggestion =async()=>{
        await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=23b2395d981664980812d2c0a1ebd44e`)
        .then((response)=> {
            let data = response;
            data.data.results.length = 10
            setDataList(data.data.results);
            setshowSuggestion(!showSuggestion);
            dispatch(cacheResult({
                [searchQuery]: data.data.results
            }))

        })
        .catch((err)=> console.log("err==",err))
    }

    //debouncing to call api
    useEffect(()=>{
        const timer =setTimeout(()=>{
            if(resultFromStore[searchQuery]){
                setDataList(resultFromStore[searchQuery]);
            } else {
            getSearchSuggestion()
            }
        },170);

        return ()=>{
            setshowSuggestion(false);
            clearTimeout(timer);
        }
    },[searchQuery])

    return (
        <div className="search bar">
        <input className='Banner_form_input' value={searchQuery} type='text' placeholder="Search for a movie, tv show, person......" 
        onChange={(e)=>handleInput(e.target.value)}
        ></input>
       <div className="search-list">
       <ul>
       {showSuggestion && searchList.length > 1 && searchList.map((elem,index) => <li style={stylingobj} key={index} onClick={()=>handleSelectSearch(elem)}><SearchOutlinedIcon style={{fontSize: "20px",marginLeft: "25px"}}/><p style={{margin: "0"}}>{elem.original_title}</p></li>
        )}
        </ul>
        </div>  
        </div>
    )
}
