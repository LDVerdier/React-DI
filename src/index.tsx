import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type ServiceContainer = {
    fetchData:(url: string) => Promise<any>
  };

const container: ServiceContainer = {
   fetchData: async (url: string) => {
    return 'real API call'
   }
  };
  
export const ServiceContainerContext = createContext<ServiceContainer>(
    {} as ServiceContainer,
  );

export const useServiceContainer = () => useContext(ServiceContainerContext);



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ServiceContainerContext.Provider value={container}>
        <App />
    </ServiceContainerContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
