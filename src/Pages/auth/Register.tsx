
import { Banner } from "@/components/ui/Banner";
import { CandidateRegisterForm } from "@/components/Auth/CandidateRegisterForm";

function Register() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col md:flex-row w-full min-h-screen bg-white shadow-lg overflow-hidden">
          <Banner></Banner>

          {/* <!-- Right Side - Form Section --> */}
          <div className="flex justify-center items-center w-full md:w-1/2">
            <div className="w-full  lg:w-3/4 p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Create your account
              </h2>

              <CandidateRegisterForm></CandidateRegisterForm>


              {/* <!-- Social Login Divider --> */}
              <div className="flex items-center my-3 sm:my-4">
                <div className="flex-1 border-t border-gray-300"></div>
                <div className="px-2 sm:px-3 text-xs sm:text-sm text-gray-500">
                  or continue with
                </div>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>
              {/* <!-- Social Login Buttons --> */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                <button
                  type="button"
                  className="flex items-center justify-center py-1.5 sm:py-2 px-2 sm:px-4 border border-gray-300 rounded-md text-xs sm:text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6c5ce7] focus:ring-offset-2 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                      fill="#4285F4"
                    />
                    <path
                      d="M7.545,14.761l-1.414-1.055c-0.967,0.967-1.523,2.304-1.523,3.794c0,2.871,2.327,5.197,5.197,5.197c1.49,0,2.827-0.556,3.794-1.523l-1.414-1.414c-0.634,0.634-1.498,1.001-2.38,1.001c-1.914,0-3.465-1.551-3.465-3.465C6.545,16.259,6.911,15.395,7.545,14.761z"
                      fill="#34A853"
                    />
                    <path
                      d="M7.545,9.239c-0.634-0.634-1-1.498-1-2.38c0-1.914,1.551-3.465,3.465-3.465c0.882,0,1.746,0.367,2.38,1.001l1.414-1.414c-0.967-0.967-2.304-1.523-3.794-1.523c-2.871,0-5.197,2.327-5.197,5.197c0,1.49,0.556,2.827,1.523,3.794L7.545,9.239z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M21.543,12.104l-0.989-0.757H12.545v3.821h5.445L16.927,16.1c0.522-1.177,0.816-2.488,0.816-3.868C17.743,10.679,16.927,12.104,21.543,12.104z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center py-1.5 sm:py-2 px-2 sm:px-4 border border-gray-300 rounded-md text-xs sm:text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6c5ce7] focus:ring-offset-2 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  Apple
                </button>
              </div>

              {/* <!-- Sign In Link --> */}
              <div className="text-center text-xs sm:text-sm">
                Already have an account?{" "}
                <a
                  href="/auth/login"
                  className="text-[#6c5ce7] font-medium hover:underline"
                >
                  Sign in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
