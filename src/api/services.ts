import { usercredentials, userdata, personalData, professionalData, skillsData, EducationType, ExperienceType, UpdateProfileType } from "@/Types/types";
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

    
    const response = await axios.post(`http://vaibhavarora2-001-site17.anytempurl.com/api/candidates/cv`, formData
        , {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );
    return response.data;

};

export const getOnboardingStatus = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No token found.");
        return;
    }
    const response = await axios.get(`http://vaibhavarora2-001-site17.anytempurl.com/api/candidates/status`
        , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    return response.data.data;
};

export const getCandidateProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No token found.");
        return;
    }
    const response = await axios.get(`http://vaibhavarora2-001-site17.anytempurl.com/api/profile`
        , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    return response.data.data;
};

export const updateEducation = async (id:string,data:EducationType) => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No token found.");
        return;
    }
    const response = await axios.put(`http://vaibhavarora2-001-site17.anytempurl.com/api/profile/${id}/education`,data
        , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    return response.data;
};

export const updateExperience = async (id:string,data:ExperienceType) => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No token found.");
        return;
    }
    const response = await axios.put(`http://vaibhavarora2-001-site17.anytempurl.com/api/profile/${id}/experience`,data
        , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    return response.data;
};

export const updateProfile = async (data:UpdateProfileType) => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No token found.");
        return;
    }
    const response = await axios.put(`http://vaibhavarora2-001-site17.anytempurl.com/api/profile`,data
        , {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        }
    );
    return response.data;
};

export const updateAbout = async (data:{about:string}) => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No token found.");
        return;
    }
    const response = await axios.put(`http://vaibhavarora2-001-site17.anytempurl.com/api/profile/about`,data
        , {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        }
    );
    return response.data;
};

export const getCandidates = async ({
    skills,
    location,
    experience,
    mainSkills = [],
    noticePeriod = null,
    pageIndex = 0,
    pageSize = 10,
  }: {
    skills: string[];
    location: string[];
    experience: string[];
    mainSkills?: string[];
    noticePeriod: number|null; 
    pageIndex?: number;
    pageSize?: number;
  }) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No token found.");
      return;
    }
  
    const requestPayload = {
      pageIndex,
      pageSize,
      MainSkills: mainSkills,
      Skills: skills,
      Location: location,
      NoticePeriod: noticePeriod,
      experience,
    };
  
    const requestQuery = encodeURIComponent(JSON.stringify(requestPayload));
    const url = `http://vaibhavarora2-001-site17.anytempurl.com/api/candidates/filter?request=${requestQuery}`;
  
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      toast.error("Failed to fetch candidates.");
      console.error(error);
    }
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