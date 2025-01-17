import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/authContext.jsx'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { SocketContextProvider } from './context/SocketContext.jsx';

const queryClient=new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:0
    }
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
       <QueryClientProvider client={queryClient}>
       <ReactQueryDevtools initialIsOpen={false}/>
       <SocketContextProvider>
         <App />
       </SocketContextProvider>
       </QueryClientProvider>
     </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
