import Logo from "../../assets/medium.png";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { IoMdNotificationsOutline, IoMdNotifications } from "react-icons/io";
import { AiOutlineSave, AiFillSave } from "react-icons/ai";
import { BsFileText, BsFileTextFill } from "react-icons/bs";
import {  HiOutlinePencilAlt } from "react-icons/hi";
import { Link , useNavigate } from "react-router-dom";
import { useAuthContent } from "../../Hooks/useAuthContent";
import { useState } from "react";

const sidebarLists = [
  {
    icon: AiFillHome,
    clickedicon: AiOutlineHome,
    url: "/",
  },
  {
    icon: IoMdNotifications,
    clickedicon: IoMdNotificationsOutline,
    url: "/me/notification",
  },
  {
    icon: AiFillSave,
    clickedicon: AiOutlineSave,
    url: "/me/save",
  },
  {
    icon: BsFileTextFill,
    clickedicon: BsFileText,
    url: "/me/story",
  },
];

const profileData = {
  services: [
    {
      text: "Medium Partner Program",
    },
    {
      text: "Gift a membership",
    },
    {
      text: "Become a Member",
      color: "text-[#1a8917]",
    },
  ],
  setting: [
    {
      text: "Refine recommemdations",
    },
    {
      text: "Manage Publications",
    },
    {
      text: "Stats",
    },
    {
      text: "Setting",
    },
  ],
};

const noGmail = (gmail) => {
  const Index = gmail.indexOf("@");
  return gmail.substring(gmail[0], Index);
};

const SideBarDesktop = () => {
  const { userData, handleSignOut } = useAuthContent();
  const [profile, setProfile] = useState(false);
  const navigate = useNavigate();

  const handleSignOutSystem = () => {
    handleSignOut();
    navigate("/Get-Started");
  };
  return (
    <div className=" w-[5%] py-10 z-20 stickySideBar bg-white h-screen  md:flex flex-col hidden items-center justify-between shadow">
      <div>
        <img src={Logo} alt="medium logo" className="w-[60px] h-[60px] cursor-pointer" />
      </div>
      <div className="flex flex-col gap-10 ">
        {sidebarLists.map((list) => (
          <Link to={list.url} key={list.url}>
            <div className="cursor-pointer">
              <list.clickedicon size={35}/>
            </div>
          </Link>
        ))}
        <div className="border border-t-[0px]"></div>
        <Link to="/write">
          <div className="cursor-pointer">
            <HiOutlinePencilAlt size={35} />
          </div>
        </Link>
      </div>

      <div className="cursor-pointer" onClick={() => setProfile(!profile)}>
        {userData ? (
          <img
            src={userData.photoURL}
            alt={userData.displayName}
            className="w-[40px] h-[40px] rounded-full"
          />
        ) : (
          <p>Loading...</p>
        )}
        {profile && (
          <>
            <div className="bg-white shadow border border-solid border-t-2 rounded-lg w-[25rem]  top-[16rem] absolute py-8  flex flex-col gap-6">
              {profileData.services.map((service) => (
                <p
                  key={service.text}
                  className={`${
                    service.color ? service.color : "text-black"
                  } text-xl px-8`}
                >
                  {service.text}
                </p>
              ))}
              <div className="border border-t-[0px]"></div>
              <div className="px-8 flex flex-col gap-6">
                <p className="text-xl" onClick={handleSignOutSystem}>
                  Sign Out
                </p>
                {profileData.setting.map((setting) => (
                  <p key={setting.text} className="text-black text-xl">
                    {setting.text}
                  </p>
                ))}
              </div>
              <div className="border border-t-[0px]"></div>
              {userData ? (
                <div className="flex items-center gap-4 px-8">
                  <img
                    src={userData && userData.photoURL}
                    alt={userData.displayName}
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <div>
                    <p className="text-lg">{userData.displayName}</p>
                    <p className="text-gray-500 tracking-wide">
                      @{noGmail(userData.email)}
                    </p>
                  </div>
                </div>
              ) : (
                <p>Loading</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SideBarDesktop;
