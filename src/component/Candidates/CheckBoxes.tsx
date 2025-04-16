import { useContext, useEffect, useState } from 'react';
import { CandidateContext } from '../../Provider/CandidateContext';
import { commonType } from '../../Types/types';
import { useQuery } from '@tanstack/react-query';
import { getlevels } from '../../api/services';

const CheckBoxes = () => {


  const { levels, isChecked, dispatch } = useContext(CandidateContext);

  const { data: levelData } = useQuery({
    queryKey: ['level'],
    queryFn: () => getlevels(),
  });

  useEffect(() => {
    if (levelData) {
      dispatch({ type: 'SET_LEVEL', payload: levelData });
    }
  }, [levelData, dispatch]);

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

  const toggleChecked = (id: string) => {
    dispatch({
      type: 'SET_CHECKED',
      payload: { id, checked: !isChecked[id] },
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
    <div className='flex flex-col lg:w-1/5 xl:w-1/5'>
      <div className=''>
        <div className='flex flex-col gap-8'>
          <div className='search__item'>
            <div
              className='flex justify-between items-center pb-1 capitalize text-lg font-medium cursor-pointer text-[#242121] experience-label'
              onClick={toggleDropdown}
            >
              experience Level
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className={`w-6 ${isDropdownOpen ? 'rotate-180' : ''}`}
                viewBox='0 0 24 24'
              >
                <path
                  fill='#000'
                  d='M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062'
                />
              </svg>
            </div>
            {isDropdownOpen && (
              <div className='search__item__list' id='chkbxLevels'>
                {levels.map((item: commonType) => {
                  return (
                    <div key={item.id} className='flex items-center py-1'>
                      <div
                        key={item.id}
                        className='text-base font-normal flex items-center cursor-pointer'
                        onClick={() => toggleChecked(item.id)}
                      >
                        <input type='checkbox' className='hidden group' />
                        <span
                          id={item.id.toString()}
                          className={`w-[16px] h-[16px] border border-[#c8c9d0] rounded-[2px] mr-[10px] inline-block relative ${isChecked[item.id]
                              ? 'bg-untitled-ui--primary800 border-untitled-ui--primary800'
                              : 'bg-transparent'
                            }`}
                        >
                          <span
                            className={`absolute  left-[4px] w-[6px] h-[10px] border-white border-r-[2px] border-b-[2px] rotate-45 ${isChecked[item.id] ? 'block' : 'hidden'
                              }`}
                          ></span>
                        </span>
                        <label className='cursor-pointer font-normal text-untitled-ui--gray800'>
                          {item.name}
                        </label>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
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
