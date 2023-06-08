import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {YOUTUBE_SEARCH_API} from '../../utils/Constant'
import './TitleForm.scss';
import { cacheResult } from "../../store/SearchSlice";

export default function SearchBar(){

    const [searchQuery,setDataSearch] = useState('');
    const [searchList,setDataList] = useState([]);
    const [showSuggestion,setshowSuggestion] = useState(false);

    const resultFromStore = useSelector((store) => store.SearchSlice);
    const dispatch = useDispatch();


    const handleInput =(val) =>{
        setDataSearch(val);
    }

    const handleSelectSearch =(elem)=>{
        setDataSearch(elem)
    }

    const getSearchSuggestion =async()=>{
        console.log('timer creation');
        await axios.get(YOUTUBE_SEARCH_API+searchQuery)
        .then((response)=> {
            let data = response;
            setDataList(data.data[1]);
            setshowSuggestion(!showSuggestion);
            dispatch(cacheResult({
                [searchQuery]: data.data[1]
            }))

        console.log(searchList)})
        .catch((err)=> console.log("err==",err))

        console.log('searchlist==',searchList);
    }

    //debouncing to call api
    useEffect(()=>{
        const timer =setTimeout(()=>{
            if(resultFromStore[searchQuery]){
                setDataList(resultFromStore[searchQuery]);
            } else {
            getSearchSuggestion()
            }
        },200);

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
       {showSuggestion && searchList.length > 1 && searchList.map((elem,index) => <li key={index} onClick={()=>handleSelectSearch(elem)}>{elem}</li>
        )}
        </ul>
        </div>  
        </div>
    )
}
