import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import './StarRating.scss'
function StarRating(){
    const [ratingValue,setRatingValue] =useState("");
    const [isHover, setIsHover] = useState("");

    const handleRating =(index)=>{
        setIsHover(index);
        if(index === 1){
            setRatingValue("poor");
        } else if(index === 2 || index === 3) {
            setRatingValue("good");
        } else {
            setRatingValue("excellent");
        }
    }
    const handleMouseLeave =(index)=>{
        setRatingValue("");
        setIsHover(index);
    }
     const star ={
        width: '20px'
     }
    return (
        <>
        <div style={{display :'flex',width: '20px',height: '10px' }}>{[...Array(5)].map((elem,index)=>{
            {/* //because in array index value start from 0 */}
            index+=1
            return <div key={index} 
            onMouseEnter={() => handleRating(index)}
    onMouseLeave={() => handleMouseLeave(index)}
        onClick={()=>handleRating(index)} style={{color: index <= isHover ? 'lightblue' : 'white',}}
            ><span className='star'>&#9733;</span> {/**u can also use <StarIcon/> from material ui  */}
        </div>
        })}</div>
        <div>{ratingValue}</div>
        </>
    )
}
export default StarRating;