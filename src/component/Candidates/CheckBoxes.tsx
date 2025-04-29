import { useContext } from "react";
import { CandidateContext } from "../../Provider/CandidateContext";
import { commonType } from "../../Types/types";

const experienceOptions = [
  { id: "0-3", name: "0-3 years" },
  { id: "3-5", name: "3-5 years" },
  { id: "5-10", name: "5-10 years" },
];

const noticeperiodOptions = [
  { id: "0", name: "0 days" },
  { id: "30", name: "30 days" },
  { id: "45", name: "45 days" },
  { id: "60", name: "60 days" },
  { id: "90", name: "90 days" },
];

const CheckBoxes = () => {
  const { isChecked, radioSelect, dispatch } = useContext(CandidateContext);

  const toggleChecked = (id: string) => {
    const updatedChecked = { ...isChecked, [id]: !isChecked[id] };

    dispatch({
      type: "SET_CHECKED",
      payload: { id, checked: !isChecked[id] },
    });

    const selected = Object.keys(updatedChecked).filter(
      (key) => updatedChecked[key]
    );
    dispatch({ type: "SET_SELECTEDEXPERIENCE", payload: selected });
  };

  const handleRadioChange = (id: string) => {
    dispatch({ type: "SET_SELECTEDNOTICEPERIOD", payload: parseInt(id) });
    dispatch({
      type: "SET_RADIOCHECK",
      payload: parseInt(id),
    });
  };

  return (
    <div className="flex flex-col lg:w-1/5 xl:w-1/5">
      <div className="">
        <div className="flex flex-col gap-8">
          <div className="search__item">
            <div className="flex justify-between items-center pb-1 capitalize text-lg font-medium cursor-pointer text-[#242121] experience-label">
              experience Level
            </div>
            <div className="search__item__list" id="chkbxLevels">
              {experienceOptions.map((item: commonType) => {
                return (
                  <div key={item.id} className="flex items-center py-1">
                    <div
                      key={item.id}
                      className="text-base font-normal flex items-center cursor-pointer"
                      onClick={() => toggleChecked(item.id)}
                    >
                      <input type="checkbox" className="hidden group" />
                      <span
                        id={item.id.toString()}
                        className={`w-[16px] h-[16px] border border-[#c8c9d0] rounded-[2px] mr-[10px] inline-block relative ${
                          isChecked[item.id]
                            ? "bg-purple-600 border-purple-600"
                            : "bg-transparent"
                        }`}
                      >
                        <span
                          className={`absolute  left-[4px] w-[6px] h-[10px] border-white border-r-[2px] border-b-[2px] rotate-45 ${
                            isChecked[item.id] ? "block" : "hidden"
                          }`}
                        ></span>
                      </span>
                      <label className="cursor-pointer font-normal text-untitled-ui--gray800">
                        {item.name}
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="search__item">
            <div className="flex justify-between items-center pb-1 capitalize text-lg font-medium cursor-pointer text-[#242121] experience-label">
              Notice Period
            </div>
            <div className="search__item__list" id="radioNoticePeriod">
              {noticeperiodOptions.map((item: commonType) => {
                return (
                  <div key={item.id} className="flex items-center py-1">
                    <div
                      className="text-base font-normal flex items-center cursor-pointer"
                      onClick={() => handleRadioChange(item.id)}
                    >
                      <input
                        type="radio"
                        name="noticePeriod"
                        checked={radioSelect === parseInt(item.id)}
                        onChange={() => handleRadioChange(item.id)}
                        className="hidden"
                      />
                      <span
                        id={item.id.toString()}
                        className={`w-[16px] h-[16px] border border-[#c8c9d0] rounded-full mr-[10px] inline-block relative ${
                          radioSelect === parseInt(item.id)
                            ? "bg-purple-600 border-purple-600"
                            : "bg-transparent"
                        }`}
                      >
                        <span
                          className={`w-[8px] h-[8px] rounded-full bg-white absolute top-[3px] left-[3px] ${radioSelect === parseInt(item.id) ? "block" : "hidden"}`}
                        ></span>
                      </span>
                      <label className="cursor-pointer font-normal text-untitled-ui--gray800">
                        {item.name}
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-10">
                <div className="flex gap-4">
                    <button className="py-2 px-5 text-white bg-untitled-ui--primary600 text-sm uppercase rounded-lg">Apply</button>
                    <button className="py-2 px-5 text-black bg-[#e3e3e7] text-sm uppercase rounded-lg">Reset</button>
                </div>
            </div> */}
    </div>
  );
};

export default CheckBoxes;
