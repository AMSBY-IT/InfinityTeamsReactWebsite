import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { Upload } from "lucide-react"

type Props = {
  label?: string
  helperText?: string
  onChange: (file: File | null) => void
  maxSizeBytes?: number
  maxSize?: string
}

export default function FileUpload({
  label = "Upload file",
  helperText = "Drag and drop or click to browse",
  onChange,
  maxSize = "(5 MB max)",
  maxSizeBytes = 5 * 1024 * 1024,
}: Props) {
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null)

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0]|| null
      if (file) {
        setSelectedFileName(file.name)
        onChange(file)
      }
    },
    [onChange],
  )

  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    onDrop,
    multiple: false,
    accept:{
      "application/pdf": [".pdf"],
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          [".docx"],
        "application/msword": [".doc"],
    },
    maxSize: maxSizeBytes,
  })

  const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > maxSizeBytes
  return (
    <div className="w-full py-2">
      <div
        {...getRootProps()}
        className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors duration-200 ${
          isDragActive
            ? "border-blue-500 bg-blue-50"
            : isDragReject || isFileTooLarge
              ? "border-red-500 bg-red-50"
              : "border-gray-300 hover:bg-gray-50"
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <div
            className={`p-2 mb-2 rounded-full ${
              isDragActive ? "bg-blue-100" : isDragReject || isFileTooLarge ? "bg-red-100" : "bg-gray-50"
            }`}
          >
            <Upload
              className={`w-6 h-6 ${
                isDragActive ? "text-blue-500" : isDragReject || isFileTooLarge ? "text-red-500" : "text-gray-500"
              }`}
            />
          </div>
          <p className="mb-1 text-sm font-medium text-gray-900">
            {isDragActive
              ? "Drop the file here"
              : isDragReject
                ? "File type not accepted"
                : isFileTooLarge
                  ? "File is too large"
                : label}
          </p>
          <p className="text-xs text-gray-500">{selectedFileName ? selectedFileName : `${helperText} ${maxSize}`}</p>
          {fileRejections.length > 0  && !isFileTooLarge &&(
            <p className="text-xs text-red-500 mt-1">File type not accepted</p>
          )}
          {isFileTooLarge && <p className="text-xs text-red-500 mt-1">File is too large</p>}
        </div>
      </div>
    </div>
  )
}
