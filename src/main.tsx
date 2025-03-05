import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './output.css'
import { CandidateProvider } from "./Provider/CandidateContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <CandidateProvider>
    <App />
    </CandidateProvider>
    </QueryClientProvider>
  </StrictMode>,
)
