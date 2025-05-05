import DropDown from '@/component/shared/DropDown';
import TextInput from '@/component/shared/TextInput';
import RadioSelect from '@/component/sidebar/RadioSelect';
import { UpdateProfileType } from '@/Types/types';
import { ClipboardCheck, Clock } from 'lucide-react';

export interface UpdateProfileFormProps {
  updateprofileData: UpdateProfileType;
  setUpdateprofileData: React.Dispatch<React.SetStateAction<UpdateProfileType>>;
}

export default function ProfileUpdateform({
  updateprofileData,
  setUpdateprofileData,
}: UpdateProfileFormProps) {
  const jobTypePreferenceOptions = [
    {
      id: 'Full-Time',
      name: 'Full-Time',
    },
    {
      id: 'Freelance',
      name: 'Freelance',
    },
    {
      id: 'Both',
      name: 'Both',
    },
  ];

  //   const [jobsearchstatus,Setjobsearchstatus] =useState("Open")
  //   const [jobtypepreference,Setjobtypepreference]=useState<Options>()

  //   const [name,setName] =useState("")
  //   const [phone,setPhone] =useState("")
  //   const [noticeperiod, setNoticeperiod] = useState(0);
  //   const [city, setCity] = useState("");

  //   const handleJobtypepreferenceChange = (selectedOption: Options) => {
  //     Setjobtypepreference(selectedOption as Options);
  //   };

  return (
    <>
      \{' '}
      <TextInput
        label='Name'
        placeHolder='Enter Name'
        helperText=''
        required
        value={updateprofileData?.name}
        onChange={(value) => {
          setUpdateprofileData((prev) => ({ ...prev, name: value }));
        }}
      />
      <TextInput
        label='Phone Number'
        placeHolder='Enter Phone'
        helperText=''
        required
        value={updateprofileData?.phone}
        onChange={(value) => {
          setUpdateprofileData((prev) => ({ ...prev, phone: value }));
        }}
      />
      <DropDown
        options={jobTypePreferenceOptions}
        label='Job Preference'
        helperText=''
        required
        onChange={(option) =>
          setUpdateprofileData((prev) => ({
            ...prev,
            jobTypePreference: option.name,
          }))
        }
      />
      <RadioSelect
        title='Job Search Status'
        selected={updateprofileData?.jobSearchStatus}
        required
        onChange={(value) => {
          setUpdateprofileData((prev) => ({ ...prev, jobSearchStatus: value }));
        }}
        options={[
          { label: 'Open', icon: <Clock className='h-5 w-5' /> },
          {
            label: 'Close',
            icon: <ClipboardCheck className='h-5 w-5' />,
          },
        ]}
      />
      <TextInput
        label='Notice Period'
        placeHolder='Enter Notice Period'
        helperText=''
        required
        value={updateprofileData.noticePeriod?.toString()}
        onChange={(value) => {
          setUpdateprofileData((prev) => ({
            ...prev,
            noticePeriod: Number(value),
          }));
        }}
      />
      <TextInput
        label='City'
        placeHolder='Enter City'
        helperText=''
        required
        value={updateprofileData?.location}
        onChange={(value) => {
          setUpdateprofileData((prev) => ({ ...prev, location: value }));
        }}
      />
    </>
  );
}
