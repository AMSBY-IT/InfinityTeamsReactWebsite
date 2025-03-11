import axios from "axios";

export const loginUser = async (username: string, password: string) => {
        const response = await axios.post(`http://vaibhavarora2-001-site17.anytempurl.com/api/auth/login`, { username, password });
        return response.data;
    
};


// export const fetchCandidates = async(requestModel:any)=>{
//         const token = localStorage.getItem("token");
//         if (!token) {
//             console.error("No token found");
//             return;
//         }
        
        

//         const queryParams = new URLSearchParams({
//             request: JSON.stringify(requestModel)
//         }).toString();

//         const url = `${API_URL}/umbraco/surface/candidatelistsurface/getcandidates?${queryParams}`


        
//         try{
//             const response= await axios.get(url
//                 ,{
//                 headers:{
//                     Authorization: `Bearer ${token}`
//                 }
//             }
//         )
//         return response.data.data
            
//         }catch(err){
//             throw(err)
//         }
//     }


// export const fetchDeveloperTags = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//         console.error("No token found.");
//         return;
//     }
//     try {
//         const response = await axios.get(`${API_URL}/umbraco/surface/common/getdevelopertags`
//             ,{
//             headers:{
//                 Authorization: `Bearer ${token}`
//             }
//         }
//         );
//         return response.data.data;
//     } catch (err) {
//         throw(err)
//     }
// };

// export const fetchSkills = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//         console.error("No token found");
//         return;
//     }
//     try {
//         const response = await axios.get(`${API_URL}/umbraco/surface/common/getskills`
//             ,{
//             headers:{
//                 Authorization: `Bearer ${token}`
//             }
//         }
//         );
//         return response.data.data;
//     } catch (err) {
//         throw(err)
//     }
// };

// export const fetchCountries = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//         console.error("No token found");
//         return;
//     }
//     try {
//         const response = await axios.get(`${API_URL}/umbraco/surface/common/getcountries`
//             ,{
//             headers:{
//                 Authorization: `Bearer ${token}`
//             }
//         }
//         );
//         return response.data.data;
//     } catch (err) {
//         throw(err)
//     }
// };

// export const fetchLevels = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//         console.error("No token found");
//         return;
//     }
//     try {
//         const response = await axios.get(`${API_URL}/umbraco/surface/common/getlevels`
//             ,{
//             headers:{
//                 Authorization: `Bearer ${token}`
//             }
//         }
//         );
//         return response.data.data;
//     } catch (err) {
//         throw(err)
//     }
// };

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