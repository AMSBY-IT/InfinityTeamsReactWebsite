

const SignupPage = () => {
    

    return (
        <>
        <div className="w-full h-screen">
            <div className="flex items-center w-full h-full justify-center bg-gray-50">
                <div className="bg-white rounded-lg shadow-sm p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-semibold">Create a Account</h1>
                        <button className="text-gray-400 hover:text-gray-600">
                            {/* <X className="h-5 w-5" /> */}
                        </button>
                    </div>

                    <div className="text-center text-gray-500 mb-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white">Choose your Account Type</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <button className="bg-[#6039C8] py-3 px-7  text-white rounded-md">
                            Candidate
                        </button>
                        <button className="bg-gray-100 py-3 px-7 text-gray-600 rounded-md">
                            Employer
                        </button>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Your Email</label>
                            <input type="email" className="w-full outline-none py-3 px-3 border rounded-md"/>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input type="password" className="w-full outline-none py-3 px-3 border rounded-md"/>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember" className="text-sm text-gray-500">
                                    Remember me
                                </label>
                            </div>
                        </div>

                        <button className="w-full bg-[#6039C8] py-3 px-7 text-white rounded-md">
                            SignUp
                        </button>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or</span>
                            </div>
                        </div>

                        {/* <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
                            <button className="w-full flex items-center gap-2 py-3 px-2 text-sm bg-gray-100 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 256 262"><rect fill="none"/><path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"/><path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg>
                                Continue with Google
                            </button>
                            <button className="w-full flex items-center gap-2 py-3 px-2 text-sm bg-gray-100 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 256 256"><rect fill="none"/><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"/></svg>
                                Continue with Facebook
                            </button>
                        </div> */}

                        <p className="text-center text-gray-500 text-sm mt-6">
                            Do have an account?
                            <a href="/login" className="text-[#6039C8] ml-1">
                                login
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            </div>

        </>
    );
};

export default SignupPage;
