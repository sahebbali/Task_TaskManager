import { Fragment } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ProfilePage from "./pages/ProfilePage";
import CreatePage from "./pages/CreatePage";
import ProgressPage from "./pages/ProgressPage";

import CompletedPage from "./pages/CompletedPage";
import FullscreenLoader from "./components/masterLayout/Fullscreen-Loader";
import PendingdPage from "./pages/PendingPage";
import AllTaskPage from "./pages/NewPage";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<DashboardPage />} />
          <Route exact path="/Create" element={<CreatePage />} />
          <Route exact path="/AllTask" element={<AllTaskPage />} />
          <Route exact path="/Progress" element={<ProgressPage />} />
          <Route exact path="/Completed" element={<CompletedPage />} />
          <Route exact path="/Panding" element={<PendingdPage />} />
          <Route exact path="/Profile" element={<ProfilePage />} />

          <Route exact path="/Login" element={<LoginPage />} />
          <Route exact path="/Registration" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
      <FullscreenLoader />
    </Fragment>
  );
}

export default App;
