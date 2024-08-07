import React from "react";
import {
  IoHomeOutline,
  IoAlbumsOutline,
  IoReceiptOutline,
  IoPersonCircleOutline,
  IoList,
} from "react-icons/io5";

type Props = {};

const BottomNav = (props: Props) => {
  const bottomItems = [
    {
      icon: <IoHomeOutline size={24} />,
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: <IoList size={24} />,
      title: "Orders",
      link: "/orders",
    },
    {
      icon: <IoReceiptOutline size={24} />,
      title: "Receipts",
      link: "/receipts",
    },
    {
      icon: <IoAlbumsOutline size={24} />,
      title: "General",
      link: "/general",
    },
    {
      icon: <IoPersonCircleOutline size={24} />,
      title: "Settings",
      link: "/settings",
    },
  ];
  return (
    <>
      <div className="w-full h-[4.75rem] flex items-center ">
        {bottomItems.map((item, index) => (
          <div key={index} className="flex-1 flex items-center justify-center">
            {item.icon}
            {/* <p>{item.title}</p> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default BottomNav;
