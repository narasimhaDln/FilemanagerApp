import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/UserContext.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserContext>
          <App />
      </UserContext>
    </BrowserRouter>
  </StrictMode>
);
