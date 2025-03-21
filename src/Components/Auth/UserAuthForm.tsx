import { loginUser } from "@/api/services";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';


const UserAuthForm = () => {

  const navigate = useNavigate();

  const [ credentials, setCredentials]=useState({
    Email:"",
    Password:""
  })

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const loginMutation = useMutation({
    mutationFn:loginUser,
    onSuccess: (data)=>{
      if (data.success) {
        localStorage.setItem("token", data.data.token);
        navigate("/onboarding/personal");
      } else {
        toast.error("Login failed: " + data.message);
      }
    },
    onError:(error)=>{
      if (axios.isAxiosError(error)) {
        
        const errorMessage = error.response?.data?.message || "An unknown error occurred.";
        toast.error("Error: " + errorMessage);
      } else {
        
        toast.error("Error: " + error.message);
      }
    },
  })

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutation.mutate(credentials)
  };

  return (
    <>
      <form  onSubmit={handleSubmit}>
        {/* <!-- Email Field --> */}
        <div className="mb-3 sm:mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <input
              type="email"
              required
              id="email"
              name="Email"
              onChange={handleChange}
              placeholder="Enter your email"
              className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 text-sm sm:text-base focus:outline-none focus:ring-[#6c5ce7] focus:border-[#6c5ce7]"
            ></input>
          </div>
        </div>

        {/* <!-- Password Field --> */}
        <div className="mb-3 sm:mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <input
              type="password"
              required
              id="password"
              name="Password"
              onChange={handleChange}
              placeholder="Enter password"
              className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 text-sm sm:text-base focus:outline-none focus:ring-[#6c5ce7] focus:border-[#6c5ce7]"
            ></input>
          </div>
        </div>

        {/* <!-- Sign Up Button --> */}
        <button
          type="submit"
          className="w-full bg-[#6c5ce7] text-white py-2 px-4 rounded-md text-sm sm:text-base hover:bg-[#6c5ce7]/90 focus:outline-none focus:ring-2 focus:ring-[#6c5ce7] focus:ring-offset-2 transition-colors"
        >
          Sign In
        </button>
      </form>
    </>
  );
};

export default UserAuthForm;
