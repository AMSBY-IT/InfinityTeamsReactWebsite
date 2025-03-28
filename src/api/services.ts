import { usercredentials, userdata, personalData, professionalData, skillsData } from "@/Types/types";
import axios from "axios";
import { toast } from 'react-toastify';

export const loginUser = async (userCredentials: usercredentials) => {
    const response = await axios.post(`http://vaibhavarora2-001-site17.anytempurl.com/api/candidates/login`, userCredentials);
    return response.data;

};


export const registerUser = async (userData: userdata) => {
    const response = await axios.post(`http://vaibhavarora2-001-site17.anytempurl.com/api/candidates/register`, userData);
    return response.data;

};

export const getcountries = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        toast.error("No token found.");
        return;
    }
    const response = await axios.get(`http://vaibhavarora2-001-site17.anytempurl.com/api/country/list`
        , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    return response.data.data;
};

export const getLanguages = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        toast.error("No token found.");
        return;
    }
    const response = await axios.get(`http://vaibhavarora2-001-site17.anytempurl.com/api/language/list`
        , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    return response.data.data;
};

export const postPersonalData = async (personalData: personalData) => {
    const token = localStorage.getItem("token");
    if (!token) {
        toast.error("No token found.");
        return;
    }
    const response = await axios.post(`http://vaibhavarora2-001-site17.anytempurl.com/api/candidates/personal`, personalData
        , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    return response.data;

};


export const getskills = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No token found.");
        return;
    }
    const response = await axios.get(`http://vaibhavarora2-001-site17.anytempurl.com/api/skill/list`
        , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    return response.data.data;
};

export const getDesignation = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No token found.");
        return;
    }
    const response = await axios.get(`http://vaibhavarora2-001-site17.anytempurl.com/api/designation/list`
        , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    return response.data.data;
};

export const getDegree = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No token found.");
        return;
    }
    const response = await axios.get(`http://vaibhavarora2-001-site17.anytempurl.com/api/degree/list`
        , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    return response.data.data;
};

export const getlevels = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No token found.");
        return;
    }
    const response = await axios.get(`http://vaibhavarora2-001-site17.anytempurl.com/api/level/list`
        , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    return response.data.data;
};

export const postProfessionalData = async (professionalData: professionalData) => {
    const token = localStorage.getItem("token");
    if (!token) {
        toast.error("No token found.");
        return;
    }
    const response = await axios.post(`http://vaibhavarora2-001-site17.anytempurl.com/api/candidates/professional`, professionalData
        , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    return response.data;

};

export const postSkillsData = async (skillsData: skillsData) => {
    const token = localStorage.getItem("token");
    if (!token) {
        toast.error("No token found.");
        return;
    }
    const response = await axios.post(`http://vaibhavarora2-001-site17.anytempurl.com/api/candidates/skills`, skillsData
        , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    return response.data;

};


export const postCVData = async (Cv: File) => {
    const token = localStorage.getItem("token");
    if (!token) {
        toast.error("No token found.");
        return;
    }

    const formData = new FormData();
    formData.append("resumeFile", Cv);

    console.log("formData",formData)
    const response = await axios.post(`http://vaibhavarora2-001-site17.anytempurl.com/api/candidates/cv`, formData
        , {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );
    return response.data;

};

export const fetchTitle = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No token found fetchtitle.");
        return;
    }
    const response = await axios.get(`http://vaibhavarora2-001-site17.anytempurl.com/api/Industry/list`
        , {
            headers: {
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
        , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    return response.data.data;
};