 
import { verifEmail } from "@/api/services"
import { Button } from "@/component/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/component/ui/card"
import { CheckCircle, Loader2, XCircle } from "lucide-react"
import  { useEffect, useState } from 'react'

const  Verify=()=> {
  const [tokebUrl,setToken] = useState('')
  const [verificationState, setVerificationState] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(()=>{
    const token=window.location.href
    const t=token.split("=")[1]
    setToken(t)

  },[])

  // Function to verify the email
  const verifyEmail = async () => {
    if (!tokebUrl) {
      setVerificationState("error")
      setErrorMessage("Verification token is missing")
      return
    }

    try {
      setVerificationState("loading")

      const response = await verifEmail(tokebUrl)



      if (response.success) {
        setVerificationState("success")
      } else {
        setVerificationState("error")
        setErrorMessage(response.message || "Failed to verify email")
      }
    } catch (error) {
      setVerificationState("error")
      setErrorMessage("An unexpected error occurred")
      console.error("Verification error:", error)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Email Verification</CardTitle>
          <CardDescription>Please verify your email address to continue</CardDescription>
        </CardHeader>
        <CardContent>
          {verificationState === "idle" && (
            <p className="text-sm text-gray-500">Click the button below to verify your email address.</p>
          )}

          {verificationState === "loading" && (
            <div className="flex flex-col items-center justify-center py-4">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="mt-2 text-sm text-gray-500">Verifying your email...</p>
            </div>
          )}

          {verificationState === "success" && (
            <div className="flex flex-col items-center justify-center py-4">
              <CheckCircle className="h-12 w-12 text-green-500" />
              <p className="mt-2 text-center font-medium">Your email has been successfully verified!</p>
              <p className="mt-1 text-center text-sm text-gray-500">You can now access all features of your account.</p>
            </div>
          )}

          {verificationState === "error" && (
            <div className="flex flex-col items-center justify-center py-4">
              <XCircle className="h-12 w-12 text-red-500" />
              <p className="mt-2 text-center font-medium">Verification failed</p>
              <p className="mt-1 text-center text-sm text-red-500">{errorMessage}</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          {verificationState === "idle" && (
            <Button onClick={verifyEmail} className="w-full">
              Verify Email
            </Button>
          )}

          {verificationState === "success" && (
            <Button asChild className="w-full">
              <a href="/auth/login">Go to Dashboard</a>
            </Button>
          )}

          {verificationState === "error" && (
            <Button onClick={verifyEmail} variant="outline" className="w-full">
              Try Again
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

export default Verify