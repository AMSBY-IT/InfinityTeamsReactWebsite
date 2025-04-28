import { checkValidEmail, registerUser } from "@/api/services";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';

export const CandidateRegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword:"",
});
const [err,setErr]=useState("")

const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const regitserMutation = useMutation({
  mutationFn:registerUser,
  onSuccess:(data:{success:string,message:string})=>{
    if(data.success ){
      toast.success(data.message)
      navigate("/auth/login")
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
});

const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (formData.password !== formData.confirmPassword) {
    toast.error("Passwords do not match!");
    return;
  }
  regitserMutation.mutate(formData)
};

const  handleFocusOut=async ()=>{
  const resp=await checkValidEmail(formData.email)
  if(resp.success){
    setErr(resp.message)
  }
  console.log(resp,"repoms")
}

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <!-- firstName Field --> */}
        <div className="mb-3 sm:mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            First Name<span className="text-red-500">*</span>
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <input
              type="text"
              required
              id="name"
              name="firstName"
              onChange={handleChange}
              placeholder="Enter your firstname"
              className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 text-sm sm:text-base focus:outline-none focus:ring-[#6c5ce7] focus:border-[#6c5ce7]"
            ></input>
          </div>
        </div>

        {/* <!-- lastName Field --> */}
        <div className="mb-3 sm:mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Last Name<span className="text-red-500">*</span>
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <input
              type="text"
              required
              id="lastname"
              name="lastName"
              onChange={handleChange}
              placeholder="Enter your lastname"
              className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 text-sm sm:text-base focus:outline-none focus:ring-[#6c5ce7] focus:border-[#6c5ce7]"
            ></input>
          </div>
        </div>

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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <input
              type="email"
              required
              id="email"
              name="email"
              onChange={handleChange}
              onBlur={handleFocusOut}
              placeholder="Enter your email"
              className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 text-sm sm:text-base focus:outline-none focus:ring-[#6c5ce7] focus:border-[#6c5ce7]"
            ></input>
          </div>
          <small className="text-gray-900">{err.toLowerCase()}</small>
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <input
              type="password"
              required
              id="password"
              name="password"
              onChange={handleChange}
              placeholder="Create password"
              className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 text-sm sm:text-base focus:outline-none focus:ring-[#6c5ce7] focus:border-[#6c5ce7]"
            ></input>
          </div>
        </div>

        <div className="mb-4 sm:mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Confirm Password<span className="text-red-500">*</span>
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <input
              type="password"
              required
              id="confirmpassword"
              name="confirmPassword"
              onChange={handleChange}
              placeholder="Re-type Password"
              className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 text-sm sm:text-base focus:outline-none focus:ring-[#6c5ce7] focus:border-[#6c5ce7]"
            ></input>
          </div>
        </div>

        {/* <!-- Sign Up Button --> */}
        <button
          type="submit"
          className="w-full bg-[#6c5ce7] text-white py-2 px-4 rounded-md text-sm sm:text-base hover:bg-[#6c5ce7]/90 focus:outline-none focus:ring-2 focus:ring-[#6c5ce7] focus:ring-offset-2 transition-colors"
        >
          Sign Up
        </button>
      </form>
    </>
  );
};
