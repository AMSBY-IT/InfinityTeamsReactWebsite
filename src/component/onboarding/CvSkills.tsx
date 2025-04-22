import { useContext, useEffect, useState } from 'react'
import PrimaryButton from "../shared/PrimaryButton"
import FileUpload from '../shared/FileUpload'
import { Options } from '../shared/DropDown'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getskills, postCVData, postSkillsData } from '@/api/services'
import { CandidateContext } from '@/Provider/CandidateContext'
import MultiSelectDropdown from '../shared/MultiSelectDropDown'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { z } from "zod";

const cvSkillsSchema = z.object({
  skills: z
    .array(z.object({ id: z.string() }))
    .min(1, "At least one skill is required"),
  file: z.instanceof(File, { message: "CV file is required" }),
});



function CvSkills() {

	const { dispatch, skills } = useContext(CandidateContext);

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
				if (uploadCVMutation.isSuccess) {
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
				if (skillsMutation.isSuccess) {
					navigate("/profile")
				}
			}
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	const handleSubmit = () => {
		const formData = {
		  skills: selectedOptions.map((select) => ({ id: select.id })),
		  file: selectedFile,
		};
	  
		const result = cvSkillsSchema.safeParse(formData);
	  
		if (!result.success) {
		  const firstError = result.error.errors[0]?.message || "Invalid input";
		  toast.error(firstError);
		  return;
		}
	  
		uploadCVMutation.mutate(result.data.file);
		skillsMutation.mutate({ skills: result.data.skills });
	  };
	  

	const navigate = useNavigate();

	return (
		<div>

			<div className="w-full rounded-lg">

				<FileUpload onChange={(file) => setSelectedFile(file)} required/>

				<MultiSelectDropdown
					options={skills}
					label="Skills"
					required
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