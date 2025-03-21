
// import { CandidateContext } from '../Provider/CandidateContext';
// import { useNavigate } from 'react-router-dom';
// import { useMutation } from '@tanstack/react-query';
// import { loginUser } from '../api/services';

import UserAuthForm from "./Auth/UserAuthForm";

import { Banner } from "./ui/Banner";

const LoginPage = () => {
  // const { dispatch } = useContext(CandidateContext);

  // const navigate = useNavigate();

  // const loginMutation = useMutation({
  //   mutationFn: ({
  //     username,
  //     password,
  //   }: {
  //     username: string;
  //     password: string;
  //   }) => loginUser(username, password),
  //   onSuccess: (data) => {
  //     localStorage.setItem('token', data.token);
  //     dispatch({ type: 'SET_LOGIN', payload: true });
  //     dispatch({ type: 'SET_LOADING', payload: true });
  //     navigate('/');
  //   },
  //   onError: (error) => {
  //     dispatch({ type: 'SET_ERROR', payload: error.message });
  //   },
  // });

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col md:flex-row w-full min-h-screen bg-white shadow-lg overflow-hidden">
          <Banner></Banner>

          <div className="flex justify-center items-center w-full md:w-1/2">
            <div className="w-full  lg:w-3/4 p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Login your account
              </h2>
              <UserAuthForm></UserAuthForm>

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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" width="128" height="128" viewBox="0 0 128 128"><path fill="#fff" d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"/><path fill="#e33629" d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"/><path fill="#f8bd00" d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"/><path fill="#587dbd" d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"/><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4"/></svg>
                    Google
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center py-1.5 sm:py-2 px-2 sm:px-4 border border-gray-300 rounded-md text-xs sm:text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6c5ce7] focus:ring-offset-2 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" width="128" height="128" viewBox="0 0 128 128"><path d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137c-.138.44-2.607 8.916-8.597 17.669c-5.178 7.568-10.553 15.108-19.018 15.266c-8.318.152-10.993-4.934-20.504-4.934c-9.508 0-12.479 4.776-20.354 5.086c-8.172.31-14.395-8.185-19.616-15.724C15.822 94.961 7.669 66.8 18.616 47.791c5.438-9.44 15.158-15.417 25.707-15.571c8.024-.153 15.598 5.398 20.503 5.398c4.902 0 14.106-6.676 23.782-5.696c4.051.169 15.421 1.636 22.722 12.324c-.587.365-13.566 7.921-13.425 23.639M82.272 21.719c4.338-5.251 7.258-12.563 6.462-19.836c-6.254.251-13.816 4.167-18.301 9.416c-4.02 4.647-7.54 12.087-6.591 19.216c6.971.54 14.091-3.542 18.43-8.796"/></svg>
                    Apple
                  </button>
                </div>

                {/* <!-- Sign In Link --> */}
                <div className="text-center text-xs sm:text-sm">
                  don't have an account?{" "}
                  <a
                    href="/auth/register"
                    className="text-[#6c5ce7] font-medium hover:underline"
                  >
                    Sign up
                  </a>
                </div>
              </div>
              </div>
          
        </div>
      </div>
    </>
  );
};

export default LoginPage;
