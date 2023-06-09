import React, { FormEvent, SyntheticEvent, useState } from "react";
import Link from "next/link";
import axios from "axios";
import User from "@/types/users";
import { MdOutlineArrowBack } from "react-icons/md";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { store, setToken, setUser } from "../redux/authStore";
import { useRouter } from "next/navigation";
import Head from "next/head";

const signup = () => {

  const router = useRouter();
  const [state, setState] = useState<User>({} as User);

  function onChange(e: FormEvent<HTMLInputElement>) {
    setState({
      ...state,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  const register = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/users/signup",
        state
      );
      store.dispatch(setToken(response.data));
      getUser();
      router.push("/admindashboard")
      console.log("Updated state:", store.getState());
    } catch (err) {
      alert(err);
    }
  };

  const getUser = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${store.getState().token}`,
      };
      const response = await axios.get("http://localhost:3000/users/showUser", {
        headers,
      });
      store.dispatch(setUser(response.data));
      console.log(response.data);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <Head>
        <title>KoonStore | Signup</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen items-center px-12 lg:px-0 justify-center bg-gradient-to-r from-[#ED8B5F] via-[#F0A07D] to-[#ED8B5F] ">
        <div className="flex shadow-lg rounded-2xl shadow-gray-500">
          <div className="hidden lg:flex items-center px-24 bg-white bg-opacity-50 rounded-l-2xl">
            <RiShoppingBag3Fill className="w-10 h-10 fill-red-600" />
            <h3 className="uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-br from-black to-[#ED4A46] ">
              KoonStore
            </h3>
          </div>
          <div className=" py-12 lg:p-12 bg-white rounded-l-2xl rounded-r-2xl lg:rounded-l-[0] bg-opacity-100 flex items-center max-w-7xl">
            <div className="bg-white p-6 rounded-r-2xl">
              <Link href="/">
                <MdOutlineArrowBack className="cursor-pointer w-6 h-6" />
              </Link>
              <div className=" text-center">
                <p className="uppercase text-[#9aa19f] tracking-tight font-bold text-sm">
                  Welcome!
                </p>
                <br />
                <h1 className=" font-bold text-2xl text-gray-500">
                  Sign <span className="text-[#ED4A45]">up</span>
                </h1>
              </div>
              <br />
              <div>
                <form onSubmit={register}>
                  <div className="">
                    <label className="text-xs">Firstname</label>
                    <input
                      className=" px-1 w-full border-[1px] border-[#b0b7b5] rounded-sm placeholder:text-xs "
                      type="text"
                      onChange={onChange}
                      name="firstname"
                      aria-label="/"
                      required
                      placeholder="Enter your firstname"
                    />
                  </div>
                  <div className="">
                    <label className="text-xs">Lastname</label>
                    <input
                      className=" px-1 w-full border-[1px] border-[#b0b7b5] rounded-sm placeholder:text-xs "
                      type="text"
                      name="lastname"
                      onChange={onChange}
                      required
                      aria-label="/"
                      placeholder="Enter your lastname"
                    />
                  </div>
                  <div className="">
                    <label className="text-xs">Username</label>
                    <input
                      className=" px-1 w-full border-[1px] border-[#b0b7b5] rounded-sm placeholder:text-xs "
                      type="text"
                      name="username"
                      onChange={onChange}
                      required
                      aria-label="/"
                      placeholder="Enter a username"
                    />
                  </div>
                  <div className="pt-2">
                    <label className="text-xs">Create password</label>
                    <input
                      className=" px-1 w-full border-[1px] border-[#b0b7b5] rounded-sm placeholder:text-xs "
                      type="text"
                      name="password"
                      onChange={onChange}
                      required
                      aria-label="/"
                      placeholder="Minimum of 6 characters"
                    />
                  </div>

                  <div className="flex justify-center mt-8">
                    <button
                      type="submit"
                      className="px-20 py-2 bg-[#ED4A45] rounded-lg uppercase text-sm font-bold hover:bg-opacity-80 text-white"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>

                <br />
                <div className="flex text-xs justify-center">
                  <p className="mr-2">Already have an account?</p>
                </div>
                <div className="flex text-xs justify-center">
                  <Link href="/login" className="text-blue-400 underline ">
                    Log in
                  </Link>
                  <p className="ml-2">instead</p>
                </div>
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

export default signup;
