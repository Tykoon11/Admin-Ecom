import React, { useState } from "react";
import Link from "next/link";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { RiLoginBoxFill } from "react-icons/ri";


const Header = () => {
  const [headHam, setHeadHam] = useState(false);
  // const [koon, setKoon] = useState("KoonStore");
  // const unsubscribe = store.subscribe(
  //   () => setKoon(store.getState().token)
  // );

  const handleHam = () => {
    setHeadHam(!headHam);
    console.log(headHam);
  };
  return (
    <div>
      <div className="bg-gradient-to-r from-[#ED8B5F] via-[#F0A07D] to-[#ED8B5F] h-[8vh] flex justify-between items-center px-10 md:px-20">
        <div className="flex items-center">
          <RiShoppingBag3Fill className="w-10 h-10 fill-red-600" />
          <h3 className="uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-br from-black to-[#ED4A46] ">
            KoonStore
          </h3>
        </div>
        <div>
          <div className="hidden md:flex gap-10">
            <Link href="/login">
              <p className="text-white text-md font-thin px-8 rounded-md border-2 border-[#F8CCB9]">
                Login
              </p>
            </Link>
            <Link href="/signup">
              <p className="text-white text-md font-thin px-8 bg-[#ED4A46] rounded-md border-2 border-[#ED4A46]">
                Sign up
              </p>
            </Link>
          </div>
          <div className="md:hidden">
            <GiHamburgerMenu
              size="25"
              className=" fill-white hover:fill-[#ED4A46] cursor-pointer"
              fill="white"
              onClick={handleHam}
            />

            <div className={headHam ? "block" : "hidden"}>
              <div className="absolute z-[10] right-10">
                <div className="bg-white w-28 rounded-md">
                  <div className="w-28 group ">
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
                  <div className="w-28 group">
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
  );
};

export default Header;
