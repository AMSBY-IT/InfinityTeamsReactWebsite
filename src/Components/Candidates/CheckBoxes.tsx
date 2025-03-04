import { useContext, useEffect, useState } from "react"
import { CandidateContext } from "../../Provider/CandidateContext"
import { Levels } from "../../Types/types";
import { useQuery } from "@tanstack/react-query";
import { fetchlevels } from "../../api/services";


const CheckBoxes = () => {

    const context = useContext(CandidateContext);

    if (!context) {
        return <p>Error: CandidateContext is not provided!</p>;
    }

    const {levels,isChecked,dispatch} = context

    const { data:levelData } = useQuery({queryKey:['level'], queryFn:()=>fetchlevels()});
  
  useEffect(()=>{
    if (levelData){
      dispatch({ type: "SET_LEVEL", payload: levelData });
    }
  },[levelData])

    // const levelMutation = useMutation({
    //     mutationFn: () => fetchlevels(),
    //     onSuccess: (data) => {
    //       console.log("titledata", data);
    //       dispatch({ type: "SET_LEVEL", payload: data });
    //     },
    //     onError: (error) => {
    //       console.log("error", error.message);
    //     },
    //   });


    // useEffect(() => {
    //     if (token) {
    //         levelMutation.mutate();
    //       }
    //     }, [token]);


    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(true);

    const toggleChecked = (id:string) => {
        dispatch({ 
            type: "SET_CHECKED", 
            payload: { id, checked: !isChecked[id] }
        });
    };

    // setLevelIds((prevGuids) => {
    //         if (prevGuids.includes(guid)) {
    //             return prevGuids.filter((existingGuid) => existingGuid !== guid);
    //         } else {
    //             return [...prevGuids, guid];
    //         }
    //     });
    // }

    // const SelectedSearch = () => {
    //     setLevelIds(selectedIDs)
    // }

    // const RemoveSelected = () => {
    //     setChecked([])
    //     setSelectedIds([])
    //     setLevelIds([])
    // }


    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };
    
    return (
        <div className="tw-flex tw-flex-col lg:tw-w-1/5 xl:tw-w-1/5">
            <div className="">
                <div className="tw-flex tw-flex-col tw-gap-8">
                    <div className="search__item">
                        <div className="tw-flex tw-justify-between tw-items-center tw-pb-1 tw-capitalize tw-text-lg tw-font-medium tw-cursor-pointer tw-text-[#242121] experience-label" onClick={toggleDropdown}>
                            experience Level
                            <svg xmlns="http://www.w3.org/2000/svg" className={`tw-w-6 ${isDropdownOpen ? 'tw-rotate-180' : ''}`} viewBox="0 0 24 24">
                                <path fill="#000" d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062" /></svg>
                        </div>
                        {isDropdownOpen && (
                            <div className="search__item__list" id="chkbxLevels">
                                {levels.map((item:Levels) => {
                                    return (
                                        <div className="tw-flex tw-items-center tw-py-1">
                                            <div key={item.id} className="tw-text-base tw-font-normal tw-flex tw-items-center tw-cursor-pointer" onClick={()=>toggleChecked(item.id)}>
                                                <input type="checkbox" className="tw-hidden group" />
                                                <span id={item.id.toString()} className={`tw-w-[16px] tw-h-[16px] tw-border tw-border-[#c8c9d0] tw-rounded-[2px] tw-mr-[10px] tw-inline-block tw-relative ${isChecked[item.id] ? 'tw-bg-untitled-ui--primary800 tw-border-untitled-ui--primary800' : 'tw-bg-transparent'}`}>
                                                    <span className={`tw-absolute  tw-left-[4px] tw-w-[6px] tw-h-[10px] tw-border-white tw-border-r-[2px] tw-border-b-[2px] tw-rotate-45 ${isChecked[item.id] ? 'tw-block' : 'tw-hidden'}`}>
                                                    </span>
                                                </span>
                                                <label className="tw-cursor-pointer tw-font-normal tw-text-untitled-ui--gray800">{item.name}</label>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* <div className="tw-mt-10">
                <div className="tw-flex tw-gap-4">
                    <button className="tw-py-2 tw-px-5 tw-text-white tw-bg-untitled-ui--primary600 tw-text-sm tw-uppercase tw-rounded-lg">Apply</button>
                    <button className="tw-py-2 tw-px-5 tw-text-black tw-bg-[#e3e3e7] tw-text-sm tw-uppercase tw-rounded-lg">Reset</button>
                </div>
            </div> */}
        </div>
    )
}

export default CheckBoxes;