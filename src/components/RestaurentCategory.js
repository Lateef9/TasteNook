import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({data}) =>{

    const[showItems,setShowItems] = useState(false)

    const handleClick = () => {
        setShowItems(!showItems)
    }

    return(
        <div>
            {/* accordion */}
            {/* list */}

            <div className=" w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4"> 
            <div className="flex justify-between cursor-pointer"
                 onClick={handleClick}>
                <span className="text-lg font-bold"> {data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>

            <div>
              {showItems && <ItemList data={data.itemCards}/> }  
            </div>

            </div>


        </div>
    )
}

export default RestaurentCategory ;