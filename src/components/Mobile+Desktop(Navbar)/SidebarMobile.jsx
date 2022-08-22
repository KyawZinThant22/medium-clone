import Logo from "../../assets/medium.png"
import {IoNotificationsOutline} from "react-icons/io5"
import { useAuthContent } from "../../Hooks/useAuthContent";
import { useNavigate } from "react-router-dom";

const SidebarMobile = () => {
  const {handleSignOut} = useAuthContent()  
  const navigate = useNavigate()
  const handleSignOutSystem = () => {
    handleSignOut();
    navigate("/Get-Started");
  };
  return (
    <div className='md:hidden flex p-3 justify-between items-center shadow fixed w-full bg-white z-10 top-0'>
      <img src={Logo} alt="logo" className="w-[40px] h-[40px]"  />
      <div className="flex items-center gap-4">
        <button aria-label="ugrade membership" className="bg-black text-white rounded-full py-2 text-md px-6">Upgrade</button>
        <button onClick={handleSignOutSystem} aria-label="sign out" className="text-red-700">Sign Out</button>
        <div className="border border-solid rounded-full p-2">
        <IoNotificationsOutline size={25}/>
        </div>
      </div>
    </div>
  )
}

export default SidebarMobile