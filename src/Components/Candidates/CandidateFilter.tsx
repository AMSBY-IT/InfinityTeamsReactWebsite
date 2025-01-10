import { useContext} from "react"
import Select from 'react-select'
import { MultiValue,StylesConfig } from "react-select"
import { CandidateContext } from "../../Provider/CandidateContext"
import {Selected} from "../../Types/types"


export default function CandidateFilter() {

  const data = useContext(CandidateContext)

  if (!data){
    return <div>error data is undefined</div>  
  }

  const { title, skill, countries, setSkillIds, setDevelopertagIds, setCountryIds }=data

  const developerOptions = title.map((t) => (
    {
      value: t.name,
      label: t.name,
      id: t.id,
      guid: t.guid
    }
  ))

  const skills = skill.map((s) => (
    {
      value: s.name,
      label: s.name,
      id: s.id,
      guid: s.guid
    }
  ))

  const country = countries.map((c) => (
    {
      value: c.name,
      label: c.name,
      id: c.id,
      guid: c.guid
    }
  ))


  const handleSelectChange = (selected:MultiValue<Selected>, type:string) => {
    const selectedGuids = selected.map((option) => option.guid);
    console.log("selected",selected)
    if (type === "titles") {
      setDevelopertagIds(selectedGuids);
    } else if (type === "skills") {
      setSkillIds(selectedGuids);
    } else if (type === "countries") {
      setCountryIds(selectedGuids.toString());
    }
  };

  const customStyles:StylesConfig<Selected,true> = {
    control: (base) => ({
      ...base,
      border: 'none',
      boxShadow: 'none',
      background: 'transparent',
      minHeight: '32px',
      cursor: 'pointer',
      '&:hover': {
        border: 'none'
      }
    }),
    container: (base) => ({
      ...base,
      width: '-webkit-fill-available'
    }),
    placeholder: (base) => ({
      ...base,
      color: 'black',
      fontSize: '0.875rem'
    }),
    dropdownIndicator: (base) => ({
      ...base,
      padding: '0 4px'
    }),
    valueContainer: (base) => ({
      ...base,
      padding: '0 8px'
    }),
    input: (base) => ({
      ...base,
      margin: 0,
      padding: 0
    }),
    multiValueRemove: (base) => (
      {
        ...base,
        crusor: 'pointer',
        ':hover': {
          color: 'black'
        }
      }
    )
  }

  return (
    <div className='tw-pt-6'>
      <div className='tw-max-w-7xl tw-mx-auto max-xl:tw-max-w-5xl'>
        <div className='tw-mx-auto max-sm:tw-w-11/12 max-lg:tw-w-11/12'>
          <div className='tw-flex tw-justify-between tw-bg-white tw-rounded-md tw-border-[1px] max-lg:tw-flex-col'>
            <div className="tw-flex tw-items-center tw-p-3 tw-justify-between tw-gap-4 tw-px-4 tw-grow max-lg:tw-flex-col max-lg:tw-py-4">
              <div className="tw-flex tw-items-center tw-gap-2 tw-grow max-lg:tw-w-full">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className='tw-w-5 tw-text-untitled-ui--primary600' viewBox="0 0 22 22"><path fill="#7f56d9" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" /></svg>
                </div>
                <Select
                  options={developerOptions}
                  placeholder="Add Keywords"
                  isMulti
                  styles={customStyles}
                  // isSearchable={false}
                  onChange={(selected) => handleSelectChange(selected, "titles")}
                />
              </div>

              <div className="tw-h-full tw-w-px tw-bg-gray-200 max-lg:tw-hidden" />


              <div className="tw-flex tw-items-center tw-gap-2 tw-grow max-lg:tw-w-full">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className='tw-w-5' viewBox="0 0 22 22"><path fill="#7f56d9" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9" /><circle cx="12" cy="9" r="2.5" fill="#7f56d9" /></svg>
                </div>
                <Select
                  options={country}
                  placeholder="All Countries"
                  isMulti
                  styles={customStyles}
                  // isSearchable={false}
                  onChange={(selected) => handleSelectChange(selected, "countries")}
                />
              </div>

              <div className="tw-h-full tw-w-px tw-bg-gray-200 max-lg:tw-hidden" />


              <div className="tw-flex tw-items-center tw-gap-2 tw-grow max-lg:tw-w-full">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className='tw-w-5' viewBox="0 0 22 22"><g fill="none" stroke="#7f56d9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm5-2V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-4 5v.01" /><path d="M3 13a20 20 0 0 0 18 0" /></g></svg>
                </div>
                <Select
                  options={skills}
                  placeholder="Add Skills"
                  isMulti
                  styles={customStyles}
                  // isSearchable={false}
                  onChange={(selected) => handleSelectChange(selected, "skills")}
                />
              </div>




            </div>
            {/* <button className="tw-bg-untitled-ui--primary600 tw-text-white tw-text-[12px] tw-px-4 tw-py-4 tw-rounded-r-md tw-font-medium max-lg:tw-rounded-bl-md max-lg:tw-rounded-tr-none">
              START SEARCHING
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}
