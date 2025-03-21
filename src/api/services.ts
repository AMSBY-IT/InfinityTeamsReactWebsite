import { usercredentials, userdata } from "@/Types/types";
import axios from "axios";

export const loginUser = async (userCredentials:usercredentials) => {
        const response = await axios.post(`http://vaibhavarora2-001-site17.anytempurl.com/api/candidates/login`, userCredentials);
        return response.data;
    
};


export const registerUser = async (userData:userdata) => {
    const response = await axios.post(`http://vaibhavarora2-001-site17.anytempurl.com/api/candidates/register`, userData);
    return response.data;

};

export const fetchTitle = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No token found fetchtitle.");
        return;
    }
        const response = await axios.get(`http://vaibhavarora2-001-site17.anytempurl.com/api/Industry/list`
            ,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        );
        return response.data.data;
};

export const fetchskills = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No token found.");
        return;
    }
        const response = await axios.get(`http://vaibhavarora2-001-site17.anytempurl.com/api/skill/list`
            ,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        );
        return response.data.data;
};

export const fetchcountries = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No token found.");
        return;
    }
        const response = await axios.get(`http://vaibhavarora2-001-site17.anytempurl.com/api/country/list`
            ,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        );
        return response.data.data;
};

export const fetchlevels = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No token found.");
        return;
    }
        const response = await axios.get(`http://vaibhavarora2-001-site17.anytempurl.com/api/level/list`
            ,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        );
        return response.data.data;
};


export const candidateFetch = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No token found.");
        return;
    }
        const response = await axios.get(`http://vaibhavarora2-001-site17.anytempurl.com/api/candidates/list`
            ,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        );
        return response.data.data;
};