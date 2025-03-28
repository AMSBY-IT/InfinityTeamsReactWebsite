import { useContext, useEffect, useState } from 'react'
import PrimaryButton from "../shared/PrimaryButton"
import FileUpload from '../shared/FileUpload'
import { Options } from '../shared/DropDown'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getskills, postCVData, postSkillsData } from '@/api/services'
import { CandidateContext } from '@/Provider/CandidateContext'
import MultiSelectDropdown from '../shared/MultiSelectDropDown'
import { toast } from 'react-toastify'
import { skillsData } from '@/Types/types'
import { useNavigate } from 'react-router-dom'


function CvSkills() {

	const { dispatch, skills } =useContext(CandidateContext);

	const [selectedFile, setSelectedFile] = useState<File | null>(null)

	const [selectedOptions, setSelectedOptions] = useState<Options[]>([]);

	const { data: skillData } = useQuery({
		queryKey: ["skill"],
		queryFn: () => getskills(),
	  });

	  useEffect(() => {
		if (skillData) {
		  dispatch({ type: "SET_SKILLS", payload: skillData });
		}
	  }, [skillData, dispatch]);

	  const skillsMutation = useMutation({
		mutationFn: postSkillsData,
		onSuccess: (data) => {
		  if (data.success) {
			toast.success(data.message);
			if(uploadCVMutation.isSuccess){
				navigate("/profile")
			}
		  }
		},
		onError: (error) => {
		  toast.error(error.message);
		},
	  });

	  const uploadCVMutation = useMutation({
		  mutationFn: postCVData,
		  onSuccess: (data) => {
			if (data.success) {
			  toast.success(data.message);
			  if(skillsMutation.isSuccess){
				navigate("/profile")
			}
			}
		  },
		  onError: (error) => {
			toast.error(error.message);
		  },
		});

	  const handleSubmit = () => {
		  if (!selectedFile) {
			toast.error("Please fill all required fields");
			return;
		  }
	  
		  const formData: skillsData = {
			skills:selectedOptions.map((select)=>({id:select.id}))
		  };

		  uploadCVMutation.mutate(selectedFile)
		  skillsMutation.mutate(formData);
		};

		const navigate = useNavigate();

	return (
		<div>

			<div className="w-full rounded-lg">
        <h2 className="text-xl font-bold mb-4">File Upload</h2>

        <FileUpload onChange={(file) => setSelectedFile(file)} />

		<MultiSelectDropdown
        options={skills}
        label="Skills"
		selectedOptions={selectedOptions}
		onChange={setSelectedOptions}
      />
      </div>

			<div className="flex items-center space-x-2">
				<PrimaryButton btnText="Done" onClick={handleSubmit} />
			</div>

		</div>
	)
}

export default CvSkills