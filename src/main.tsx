import React from "react"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CandidateProvider } from './Provider/CandidateProvider.tsx'
import Index from "./routes/Index.tsx"

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <CandidateProvider>
    <Index />
    <ToastContainer />
    </CandidateProvider>
    </QueryClientProvider>
  </StrictMode>
);
