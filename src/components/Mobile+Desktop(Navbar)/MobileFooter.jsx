import React from 'react'
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { IoSearchOutline,IoSearchSharp} from "react-icons/io5";
import { AiOutlineSave, AiFillSave } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuthContent } from "../../Hooks/useAuthContent";

const sidebarLists = [
  {
    icon: AiFillHome,
    clickedicon: AiOutlineHome,
    url: "/",
  },
  {
    icon: IoSearchOutline,
    clickedicon: IoSearchSharp,
    url: "/me/search",
  },
  {
    icon: AiOutlineSave,
    clickedicon:AiFillSave ,
    url: "/me/save",
  }
];


const MobileFooter = () => {
    const { userData} = useAuthContent()
  return (
    <div className='flex gap-16 px-8 bg-white  items-center h-16 shadow-lg w-full border border-1 md:hidden fixed bottom-0'>
            {sidebarLists.map((list)=>(
                <Link to={list.url} key={list.url}>
                <list.icon size={30} />
                </Link>
            ))}
            { userData ? (

              <img src={userData.photoURL} alt={userData.displayName} className="w-[30px] h-[30px] rounded-full" />
            ) : <p>Loading...</p>

            }
    </div>
  )
}

export default MobileFooter