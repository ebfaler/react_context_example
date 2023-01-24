
import { Route, Routes } from "react-router-dom";


import Header from "./components/Header";
import Home from "./components/Home";
import UserSignIn from "./components/UserSignIn";
import UserSignOut from "./components/UserSignOut";
import Settings from "./components/Settings";
import NotFound from "./components/NotFound";

function App() {



  return (
    // to provide the context within all children of App, use UserContext Provider which usually lives at the top level of the app
    // also adding actions to the context provider


    <div>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={
          <UserSignIn />
        } />
        <Route path="signout" element={<UserSignOut />} />
        <Route path="settings" element={
          <Settings />
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>


  );
}

export default App;
