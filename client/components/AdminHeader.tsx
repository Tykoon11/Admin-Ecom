import React, { useState } from "react";
import Link from "next/link";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { AiOutlineCaretDown } from "react-icons/ai";
import { RiLogoutBoxFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { store } from "../redux/authStore";
import User from "../types/users";

const AdminHeader = () => {
  const [admin, setAdmin] = useState(false);
  const [product, setProduct] = useState(false);
  const [headHam, setHeadHam] = useState(false);

  const user = store.getState().user as unknown as User;
  console.log(user);

  const handleHam = () => {
    setHeadHam(!headHam);
    console.log(headHam);
  };

  const handleAdmin = () => {
    setAdmin(!admin);
    setProduct(false);
    console.log(admin);
  };
  const handleProduct = () => {
    setProduct(!product);
    setAdmin(false);
    console.log(product);
  };
  return (
    <div>
      <div className="bg-gradient-to-r from-[#ED8B5F] via-[#F0A07D] to-[#ED8B5F] h-[8vh] flex justify-between items-center px-10 md:px-20">
        <div className="flex gap-20 items-center">
          <div className="flex items-center">
            <RiShoppingBag3Fill className="w-10 h-10 fill-red-600" />
            <h3 className="uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-br from-black to-[#ED4A46] ">
              KoonStore
            </h3>
          </div>
          <div className="lg:flex gap-10 text-sm text-white hidden">
            <Link
              href="/admindashboard"
              className="hover:text-[#ED4A46] ease-in duration-300"
            >
              <p>Dashboard</p>
            </Link>
            <Link
              href="/adminuser"
              className="hover:text-[#ED4A46] ease-in duration-300"
            >
              <p>Users</p>
            </Link>
            <div>
              <Link
                href=""
                onClick={handleProduct}
                className="hover:text-[#ED4A46] ease-in duration-300 flex justify-center items-center gap-2 group"
              >
                <p>Products</p>
                <AiOutlineCaretDown
                  size="16"
                  className=" fill-white group-hover:fill-[#ED4A46] ease-in duration-300 cursor-pointer "
                  fill="white"
                />
              </Link>
              <div className="hidden lg:block">
                <div className={product ? "block" : "hidden "}>
                  <div className="absolute z-[10] top-12 left-[410px] border-[#E4E7EB] border-2 rounded-lg">
                    <div className="bg-white w-36 rounded-md">
                      <div className="w-36 group ">
                        <Link
                          className=" text-sm font-normal p-2 text-[#ED4A46] group-hover:text-white group-hover:bg-[#ED4A46] group-hover:rounded-t-lg ease-in duration-200 flex justify-left items-center gap-2"
                          href="/admincreateproduct"
                          onClick={handleProduct}
                        >
                          <p>Create Product</p>
                        </Link>
                      </div>
                      <hr />
                      <div className="w-36 group">
                        <Link
                          className=" text-sm text-[#ED4A46] p-2 group-hover:text-white group-hover:bg-[#ED4A46] group-hover:rounded-b-lg ease-in duration-200 flex justify-left items-center gap-2"
                          href="/adminallproduct"
                          onClick={handleProduct}
                        >
                          <p>All Products</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/adminorder"
              className="hover:text-[#ED4A46] ease-in duration-300"
            >
              <p>Orders</p>
            </Link>
          </div>
        </div>

        <div>
          <div>
            <div
              className="hidden lg:flex justify-center items-center gap-2 group cursor-pointer"
              onClick={handleAdmin}
            >
              <h3 className="text-white text-sm group-hover:text-[#ED4A46] ease-in duration-300">
                {user?.username}
              </h3>
              <AiOutlineCaretDown
                size="16"
                className=" fill-white group-hover:fill-[#ED4A46] ease-in duration-300 cursor-pointer "
                fill="white"
              />
            </div>
            <div className="hidden lg:block">
              <div className={admin ? "block " : "hidden"}>
                <div className="absolute z-[10] right-24 top-12 border-[#E4E7EB] border-2 rounded-lg">
                  <div className="bg-white w-44 rounded-md">
                    <div className="w-44 group ">
                      <Link
                        className=" text-sm font-normal p-2 text-[#ED4A46] group-hover:text-white group-hover:bg-[#ED4A46] group-hover:rounded-t-lg ease-in duration-200 flex justify-left items-center gap-2"
                        href="/adminprofile"
                        onClick={handleAdmin}
                      >
                        <BsFillPersonFill className="w-5 h-5" />
                        <p>Profile</p>
                      </Link>
                    </div>
                    <hr />
                    <div className="w-44 group">
                      <Link
                        className=" text-sm text-[#ED4A46] p-2 group-hover:text-white group-hover:bg-[#ED4A46] group-hover:rounded-b-lg ease-in duration-200 flex justify-left items-center gap-2"
                        href="/"
                        onClick={handleAdmin}
                      >
                        <RiLogoutBoxFill className="w-5 h-5" />
                        <p>Log Out</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:hidden">
              <GiHamburgerMenu
                size="25"
                className=" fill-white hover:fill-[#ED4A46] cursor-pointer"
                fill="white"
                onClick={handleHam}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={headHam ? "block" : "hidden "}>
        <div className="lg:hidden">
          <Link href="/admindashboard" className="group">
            <h1 className="py-3 px-5 text-sm group-hover:text-white ease-in duration-300 group-hover:bg-gradient-to-r from-[#ED8B5F] via-[#F0A07D] to-[#ED8B5F] ">
              Dashboard
            </h1>
          </Link>
          <hr />
          <Link href="/adminuser" className="group">
            <h1 className="py-3 px-5 text-sm group-hover:text-white ease-in duration-300 group-hover:bg-gradient-to-r from-[#ED8B5F] via-[#F0A07D] to-[#ED8B5F]">
              Users
            </h1>
          </Link>
          <hr />
          <div
            className="flex items-center cursor-pointer group hover:bg-gradient-to-r from-[#ED8B5F] via-[#F0A07D] to-[#ED8B5F]"
            onClick={handleProduct}
          >
            <h1 className="py-3 pl-5 pr-1 text-sm group-hover:text-white ease-in duration-300 cursor-pointer">
              Products
            </h1>
            <AiOutlineCaretDown
              size="14"
              className="group-hover:text-white ease-in duration-300 cursor-pointer"
            />
          </div>
          <hr />
          <div className={product ? "block px-10" : "hidden"}>
            <Link
              href="/admincreateproduct"
              className="group"
              onClick={handleProduct}
            >
              <h2 className="py-2 pl-5 text-sm group-hover:text-white ease-in duration-300 group-hover:bg-gradient-to-r from-[#ED8B5F] via-[#F0A07D] to-[#ED8B5F]">
                Create Product
              </h2>
            </Link>
            <hr />
            <Link
              href="/adminallproduct"
              className="group"
              onClick={handleProduct}
            >
              <h2 className="py-2 pl-5 text-sm group-hover:text-white ease-in duration-300 group-hover:bg-gradient-to-r from-[#ED8B5F] via-[#F0A07D] to-[#ED8B5F]">
                All Product
              </h2>
            </Link>
          </div>

          <hr />
          <Link href="/adminorder" className="group">
            <h1 className="py-3 px-5 text-sm group-hover:text-white ease-in duration-300 group-hover:bg-gradient-to-r from-[#ED8B5F] via-[#F0A07D] to-[#ED8B5F]">
              Orders
            </h1>
          </Link>
          <hr />
          <div
            className="flex items-center cursor-pointer group hover:bg-gradient-to-r from-[#ED8B5F] via-[#F0A07D] to-[#ED8B5F]"
            onClick={handleAdmin}
          >
            <h1 className="py-3 pl-5 px-1 text-sm group-hover:text-white">
              {user?.username}
            </h1>
            <AiOutlineCaretDown
              size="14"
              className="group-hover:text-white ease-in duration-300 cursor-pointer"
            />
          </div>
          <hr />
          <div className={admin ? "block px-10" : "hidden"}>
            <Link href="adminprofile" className="group" onClick={handleAdmin}>
              <h2 className="py-2 pl-5 text-sm group-hover:text-white ease-in duration-300 group-hover:bg-gradient-to-r from-[#ED8B5F] via-[#F0A07D] to-[#ED8B5F]">
                Profile
              </h2>
            </Link>
            <hr />
            <Link href="/" className="group" onClick={handleAdmin}>
              <h2 className="py-2 pl-5 text-sm group-hover:text-white ease-in duration-300 group-hover:bg-gradient-to-r from-[#ED8B5F] via-[#F0A07D] to-[#ED8B5F]">
                Log Out
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
