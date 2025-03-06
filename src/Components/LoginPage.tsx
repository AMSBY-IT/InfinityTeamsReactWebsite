import { useContext, useRef, useState } from 'react';
import { CandidateContext } from '../Provider/CandidateContext';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../api/services';
import { Button, buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import UserAuthForm from './Auth/UserAuthForm';

const LoginPage = () => {
  const errRef = useRef<HTMLParagraphElement | null>(null);

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [errMsg, setErrMsg] = useState('');

  const context = useContext(CandidateContext);

  if (!context) {
    return <p>Error: CandidateContext is not provided!</p>;
  }

  const { dispatch, errorMessage, loading } = context;

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
      localStorage.setItem('token', data.token);
      dispatch({ type: 'SET_LOGIN', payload: true });
      dispatch({ type: 'SET_LOADING', payload: true });
      navigate('/');
    },
    onError: (error) => {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    },
  });

  // const handleLogin = async () => {
  //     if (!username || !password) {
  //         dispatch({ type: "SET_ERROR", payload: "Please enter email and password." });
  //         return;
  //     }

  //     dispatch({ type: "SET_LOADING", payload: true });

  //     try {
  //         const response = await loginUser(username, password);
  //         localStorage.setItem("token", response.token);

  //         dispatch({ type: "SET_LOGIN", payload: true });
  //         dispatch({ type: "SET_ERROR", payload: "" });

  //         navigate("/")
  //     } catch (err) {
  //         let errorMsg = "Login Failed";
  //         if (axios.isAxiosError(err)) {
  //             if (!err.response) errorMsg = "No Server Response";
  //             else if (err.response.status === 400) errorMsg = "Missing Username or Password";
  //             else if (err.response.status === 401) errorMsg = "Unauthorized";
  //         }
  //         dispatch({ type: "SET_ERROR", payload: errorMsg });
  //     } finally {
  //         dispatch({ type: "SET_LOADING", payload: false });
  //     }
  // };

  return (
    <>
      <div className='md:hidden'>
        <img
          src='/examples/authentication-light.png'
          width={1280}
          height={843}
          alt='Authentication'
          className='block dark:hidden'
        />
        <img
          src='/examples/authentication-dark.png'
          width={1280}
          height={843}
          alt='Authentication'
          className='hidden dark:block'
        />
      </div>
      <div className='container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
        <a
          href='/examples/authentication'
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'absolute right-4 top-4 md:right-8 md:top-8'
          )}
        >
          Login
        </a>
        <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
          <div className='absolute inset-0 bg-zinc-900' />
          <div className='relative z-20 flex items-center text-lg font-medium'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='mr-2 h-6 w-6'
            >
              <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
            </svg>
            Acme Inc
          </div>
          <div className='relative z-20 mt-auto'>
            <blockquote className='space-y-2'>
              <p className='text-lg'>
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className='text-sm'>Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className='lg:p-8'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <div className='flex flex-col space-y-2 text-center'>
              <h1 className='text-2xl font-semibold tracking-tight'>
                Create an account
              </h1>
              <p className='text-sm text-muted-foreground'>
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm isLoading={false} />
            <p className='px-8 text-center text-sm text-muted-foreground'>
              By clicking continue, you agree to our{' '}
              <a
                href='/terms'
                className='underline underline-offset-4 hover:text-primary'
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                href='/privacy'
                className='underline underline-offset-4 hover:text-primary'
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
