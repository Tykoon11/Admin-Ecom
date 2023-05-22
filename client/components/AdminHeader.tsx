import React, { useState } from "react";
import Link from "next/link";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { RiLoginBoxFill, RiLogoutBoxFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";

const AdminHeader = () => {
  const [admin, setAdmin] = useState(false);
  const [product, setProduct] = useState(false);
  const [headHam, setHeadHam] = useState(false);

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
              <div className={product ? "block" : "hidden"}>
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
                Admin User
              </h3>
              <AiOutlineCaretDown
                size="16"
                className=" fill-white group-hover:fill-[#ED4A46] ease-in duration-300 cursor-pointer "
                fill="white"
              />
            </div>

            <div className={admin ? "block" : "hidden"}>
              <div className="absolute z-[10] right-24 top-12 border-[#E4E7EB] border-2 rounded-lg">
                <div className="bg-white w-44 rounded-md">
                  <div className="w-44 group ">
                    <Link
                      className=" text-sm font-normal p-2 text-[#ED4A46] group-hover:text-white group-hover:bg-[#ED4A46] group-hover:rounded-t-lg ease-in duration-200 flex justify-left items-center gap-2"
                      href="/login"
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
            <div className="lg:hidden">
              <GiHamburgerMenu
                size="25"
                className=" fill-white hover:fill-[#ED4A46] cursor-pointer"
                fill="white"
                onClick={handleHam}
              />

              <div className={headHam ? "block" : "hidden"}>
                <div className="absolute z-[10] right-10">
                  <div className="bg-white w-44 rounded-md">
                    <div className="w-44 group ">
                      <Link
                        className=" font-semibold p-2 text-[#ED4A46] group-hover:text-white group-hover:bg-[#ED4A46] ease-in duration-200 flex justify-left items-center gap-2"
                        href="/login"
                        onClick={handleHam}
                      >
                        <RiLoginBoxFill className="w-5 h-5" />
                        <p>Login</p>
                      </Link>
                    </div>
                    <hr />
                    <div className="w-44 group">
                      <Link
                        className="font-semibold  text-[#ED4A46] p-2 group-hover:text-white group-hover:bg-[#ED4A46] ease-in duration-200 flex justify-left items-center gap-2"
                        href="/signup"
                        onClick={handleHam}
                      >
                        <BsFillPersonPlusFill className="w-5 h-5" />
                        <p>Sign up</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
