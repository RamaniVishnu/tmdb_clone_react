import { useSelector } from "react-redux"
import { IMAGE_PATH } from "../../utils/Constant";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './Favourite.scss'
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/favouriteSlice";
import CloseIcon from '@mui/icons-material/Close';
import Wishlist from '../../assets/Wishlist.png';

function Favourite(){
    const data = useSelector((store)=> store.favouriteSlice.items);
    const dispatch = useDispatch()
    return (
        <>
        <Header />
        <div className="favourites_data">
        {data.length > 0 ? data.map((data,index)=><div><div key={index} className="favourite_card"><img className="favourite_img" src={IMAGE_PATH+data}></img></div><button style={{background: "white",
    border: "none",
    display: "flex",
    margin: "5px auto",
    padding: "5px"}} onClick={()=>dispatch(removeItem(data))}><CloseIcon 
        style={{backgroundColor: "white",borderRadius: "50%",width: "26px",border: "1px solid #959595",fontSize: "25px"}}/><p style={{margin: "0 3px 0 5px",
    color: "#959595",
    fontSize: "20px"}}>Remove</p></button></div>): <div style={{height:"500px",justifyContent:"center",display:"flex",margin:"auto"}}><img src={Wishlist} alt="imaaaa" /></div>}
        </div>
        <Footer />
        </>
    )
}

export default Favourite;
