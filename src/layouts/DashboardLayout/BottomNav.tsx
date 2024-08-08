import React, { act } from "react";
import {
  IoHomeOutline,
  IoAlbumsOutline,
  IoReceiptOutline,
  IoPersonCircleOutline,
  IoList,
  IoHome,
  IoReceipt,
  IoAlbums,
  IoPersonCircle,
  IoFolderOutline,
  IoFolder,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";

type Props = {};

const BottomNav = (props: Props) => {
  const bottomItems = [
    {
      icon: <IoHomeOutline size={24} />,
      activeIcon: <IoHome size={24} />,
      title: "Home",
      link: "/dashboard",
    },
    {
      icon: <IoFolderOutline size={24} />,
      activeIcon: <IoFolder size={24} />,
      title: "Orders",
      link: "/orders",
    },
    {
      icon: <IoReceiptOutline size={24} />,
      activeIcon: <IoReceipt size={24} />,
      title: "Receipts",
      link: "/receipts",
    },
    {
      icon: <IoAlbumsOutline size={24} />,
      activeIcon: <IoAlbums size={24} />,
      title: "General",
      link: "/general",
    },
    {
      icon: <IoPersonCircleOutline size={24} />,
      activeIcon: <IoPersonCircle size={24} />,
      title: "Settings",
      link: "/settings",
    },
  ];

  const path = window.location.pathname;
  console.log(path);
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-[4.75rem] flex items-center ">
        {bottomItems.map((item, index) => (
          <button
            onClick={() => {
              navigate(item.link);
            }}
            key={index}
            className="flex-1 flex flex-col items-center space-y-0.5 "
          >
            {path === item.link ? item.activeIcon : item.icon}
            {/* {path === item.link && (
              <p className=" text-xs font-[600] ">{item.title}</p>
            )} */}
          </button>
        ))}
      </div>
    </>
  );
};

export default BottomNav;
