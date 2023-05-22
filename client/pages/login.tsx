import React from "react";
import Link from "next/link";
import { MdOutlineArrowBack } from "react-icons/md";
import { RiShoppingBag3Fill } from "react-icons/ri";

const Login = () => {
  return (
    <div>
      <div className="flex min-h-screen items-center px-12 lg:px-0 justify-center bg-gradient-to-r from-[#ED8B5F] via-[#F0A07D] to-[#ED8B5F]">
        <div className="flex shadow-lg rounded-2xl shadow-gray-500">
          <div className="hidden lg:flex items-center px-24 bg-white bg-opacity-50 rounded-l-2xl ">
            <RiShoppingBag3Fill className="w-10 h-10 fill-red-600 " />
            <h3 className="uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-br from-black to-[#ED4A46] ">
              KoonStore
            </h3>
          </div>
          <div className=" py-12 lg:p-12 bg-white bg-opacity-100 rounded-l-2xl rounded-r-2xl lg:rounded-l-[0] flex items-center max-w-7xl">
            <div className="bg-white p-6 ">
              <Link href="/">
                <MdOutlineArrowBack className="cursor-pointer w-6 h-6" />
              </Link>
              <div className=" text-center">
                <p className="uppercase text-[#9aa19f] tracking-tight font-bold text-sm">
                  Welcome back!
                </p>
                <br />
                <h1 className=" font-bold text-2xl text-gray-500">
                  Log into your <br />
                  <span className="text-[#ED4A46]">Account</span>
                </h1>
              </div>
              <br />
              <div>
                <form action="">
                  <div className="">
                    <label className="text-xs">Username</label>
                    <input
                      className=" px-1 w-full border-[1px] border-[#b0b7b5] rounded-sm placeholder:text-xs "
                      type="text"
                      name="username"
                      aria-label="/"
                      placeholder="Enter your username"
                    />
                  </div>

                  <div className="pt-2">
                    <label className="text-xs">Password</label>
                    <input
                      className=" px-1 w-full border-[1px] border-[#b0b7b5] rounded-sm placeholder:text-xs "
                      type="text"
                      name="password"
                      aria-label="/"
                      placeholder="Enter your password"
                    />
                  </div>

                  <div className="flex justify-center mt-8">
                    
                    <Link href='/admindashboard' className="px-20 py-2 bg-[#ED4A45] rounded-lg uppercase text-sm font-bold hover:bg-opacity-80 text-white">
                      Login
                    </Link>
                  </div>
                </form>
                <br />
                <br />
                <div className="flex text-xs justify-center">
                  <p className="mr-2">Don&apos;t have an account?</p>
                </div>
                <div className="flex text-xs justify-center">
                  <Link href="/signup" className="text-blue-400 underline ">
                    Sign up
                  </Link>
                  <p className="ml-2">instead</p>
                </div>
                <br />
                <br />
                <div className="flex lg:hidden justify-center items-center">
                  <RiShoppingBag3Fill className="w-10 h-10 fill-red-600" />
                  <h3 className="uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-br from-black to-[#ED4A46] ">
                    KoonStore
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
