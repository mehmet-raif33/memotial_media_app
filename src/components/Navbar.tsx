"use client";
import website_logo_background_removed from "../Assets/images/website_logo_background_removed.png";
import addUser from "../Assets/images/addUser.png";
import addUserClicked from "../Assets/images/addUserClicked.png";
import profile from "../Assets/images/profile.png";
import profileClicked from "../Assets/images/profileClicked.png";
import homepage from "../Assets/images/homepage.png";
import homepageClicked from "../Assets/images/homepageClicked.png";
import trend from "../Assets/images/trend.png";
import trendClicked from "../Assets/images/trendClicked.png";
import chat from "../Assets/images/chat.png";
import chatClicked from "../Assets/images/chatClicked.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useSelector, UseSelector } from "react-redux";
import { RootState } from "../redux/store";

export const Navbar = () => {
  const [logData, setLogData] = useState(true);
  const userSession = useSelector((state: RootState) => state.userSession.isUserHere)
  const pathName = usePathname();

  const LogInNavLinkList = [
    {
      path: "/homepage",
      ActiveImageUrl: homepageClicked,
      PasifImageUrl: homepage,
      isActive: pathName === "/homepage",
    },
    {
      path: "/profile",
      ActiveImageUrl: profileClicked,
      PasifImageUrl: profile,
      isActive: pathName.startsWith("/profile"), // startsWith ile alt rotaları da kapsayacak şekilde kontrol
    },
    {
      path: "/chat",
      ActiveImageUrl: chatClicked,
      PasifImageUrl: chat,
      isActive: pathName === "/chat",
    },
    {
      path: "/liveflow",
      ActiveImageUrl: trendClicked,
      PasifImageUrl: trend,
      isActive: pathName === "/liveflow",
    },
  ];

  const LogOutNavLinkList = [
    {
      path: "/homepage",
      ActiveImageUrl: homepageClicked,
      PasifImageUrl: homepage,
      isActive: pathName === "/homepage",
    },
    {
      path: "/authpage",
      ActiveImageUrl: addUserClicked,
      PasifImageUrl: addUser,
      isActive: pathName === "/authpage",
    },
    {
      path: "/liveflow",
      ActiveImageUrl: trendClicked,
      PasifImageUrl: trend,
      isActive: pathName === "/liveflow",
    },
  ];

  return (
    <nav className="flex justify-center items-center md:justify-between z-20 bg-sky-100 text-slate-200 md:h-16 h-14 text-lg fixed bottom-0 w-full md:top-0">
      <div className="md:mx-10 md:my-auto md:inline hidden">
        <Image
          className="h-[40px] w-[300px]"
          src={website_logo_background_removed}
          alt="Website Logo"
        />
      </div>

      <div className="md:mx-10 w-full md:w-auto justify-around md:justify-center md:my-auto flex flex-row items-center">
        {userSession
          ? LogInNavLinkList.map((a) => (
              <Link href={a.path} key={a.path}>
                <Image
                  src={a.isActive ? a.ActiveImageUrl : a.PasifImageUrl}
                  alt={a.path} // Alt açıklamasını daha dinamik hale getirdim
                  className="md:h-[40px] h-[35px] md:w-[40px] w-[35px] ml-3"
                />
              </Link>
            ))
          : LogOutNavLinkList.map((a) => (
              <Link href={a.path} key={a.path}>
                <Image
                  src={a.isActive ? a.ActiveImageUrl : a.PasifImageUrl}
                  alt={a.path} // Alt açıklamasını daha dinamik hale getirdim
                  className="md:h-[40px] h-[35px] md:w-[40px] w-[35px] ml-3"
                />
              </Link>
            ))}
      </div>
    </nav>
  );
};
