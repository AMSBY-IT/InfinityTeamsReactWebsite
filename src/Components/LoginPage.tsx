import { useContext, useRef, useState } from "react";
import { CandidateContext } from "../Provider/CandidateContext";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/services";

const LoginPage = () => {
  const errRef = useRef<HTMLParagraphElement | null>(null);

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [errMsg, setErrMsg] = useState('');


  const { dispatch, errorMessage, loading } = useContext(CandidateContext);

  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => loginUser(username, password),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      dispatch({ type: "SET_LOGIN", payload: true });
      dispatch({ type: "SET_LOADING", payload: true })
      navigate("/");
    },
    onError: (error) => {
      dispatch({ type: "SET_ERROR", payload: error.message });
    },
  });


  return (
    <>
      <div className="tw-w-full tw-h-screen">
        <div className="tw-flex tw-items-center tw-w-full tw-h-full tw-justify-center tw-bg-gray-50">
          <div className="tw-bg-white tw-rounded-lg tw-shadow-sm tw-p-8">
            <div className="tw-flex tw-justify-between tw-items-center tw-mb-6">
              <h1 className="tw-text-2xl tw-font-semibold">Login</h1>
              <button className="tw-text-gray-400 hover:tw-text-gray-600">
                {/* <X className="tw-h-5 tw-w-5" /> */}
              </button>
            </div>

            <div className="tw-text-center tw-text-gray-500 tw-mb-6">
              <div className="tw-relative">
                <div className="tw-absolute tw-inset-0 tw-flex tw-items-center">
                  <div className="tw-w-full tw-border-t tw-border-gray-200"></div>
                </div>
                <div className="tw-relative tw-flex tw-justify-center tw-text-sm">
                  <span className="tw-px-2 tw-bg-white">
                    Choose your Account Type
                  </span>
                </div>
              </div>
            </div>

            <div className="tw-grid tw-grid-cols-2 tw-gap-4 tw-mb-6">
              <button className="tw-bg-[#6039C8] tw-py-3 tw-px-7 tw-rounded-md tw-text-white">
                Candidate
              </button>
              <button className="tw-bg-gray-100 tw-py-3 tw-px-7 tw-rounded-md tw-text-gray-600">
                Employer
              </button>
            </div>

            <div className="tw-space-y-4">
              {errorMessage && (
                <p
                  ref={errRef}
                  className="tw-text-sm tw-text-red-600"
                  aria-live="assertive"
                >
                  {errorMessage}
                </p>
              )}
              <div>
                <label className="tw-block tw-text-sm tw-font-medium tw-mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  className="tw-w-full tw-outline-none tw-py-3 tw-px-3 tw-border tw-rounded-md"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>

              <div>
                <label className="tw-block tw-text-sm tw-font-medium tw-mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="tw-w-full tw-outline-none tw-py-3 tw-px-3 tw-border tw-rounded-md"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="tw-flex tw-items-center tw-justify-between">
                <div className="tw-flex tw-items-center tw-space-x-2">
                  <input type="checkbox" id="remember" />
                  <label
                    htmlFor="remember"
                    className="tw-text-sm tw-text-gray-500"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="tw-text-sm tw-text-gray-500 hover:tw-text-gray-700"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                className="tw-w-full tw-bg-[#6039C8] tw-py-3 tw-px-7 tw-text-white tw-rounded-md"
                onClick={() => loginMutation.mutate({ username, password })}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              <div className="tw-relative tw-my-6">
                <div className="tw-absolute tw-inset-0 tw-flex tw-items-center">
                  <div className="tw-w-full tw-border-t tw-border-gray-200"></div>
                </div>
                <div className="tw-relative tw-flex tw-justify-center tw-text-sm">
                  <span className="tw-px-2 tw-bg-white tw-text-gray-500">
                    Or
                  </span>
                </div>
              </div>
              <p className="tw-text-center tw-text-gray-500 tw-text-sm tw-mt-6">
                Don't have an account?
                <a href="/signup" className="tw-text-[#6039C8] tw-ml-1">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
