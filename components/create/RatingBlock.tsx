import React, { useEffect, useState } from 'react'
import { Star } from 'lucide-react'

interface starProps {
    rating:number
}

function RatingBlock({rating}:starProps) {
    const starArr = new Array(rating).fill(0).map((_, index) => index + 1);
    const [currentStar,setCurrentstar] = useState<number | null>(null);

    console.log(currentStar)
    const handleHover = (num:number)=>{
        setCurrentstar((prev)=>num)
    };

  return (
    <div className='flex justfiy-center items-center'>
        {starArr.map((item)=>(
            <Star onMouseLeave={()=>handleHover(0)} onMouseOver={()=>handleHover(item)} fill={`${currentStar&&item<=currentStar?"#FFFF00":"#ffffff"}`} className={`text-neutral-600  ${currentStar&&item<=currentStar?"text-yellow-600 cursor-pointer":"text-neutral-600"}`} key={item} />
        ))}
    </div>
  )
}

export default RatingBlock
