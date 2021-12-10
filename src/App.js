import React from "react"
import {Route,Routes} from 'react-router-dom'
import AllMeetups from "./pages/allMeetups";
import NewMeetups from "./pages/newMeetups";
import Favourates from "./pages/favourates";
import Layout from "./components/layout/layout";
function App() {
  return (
    <Layout>
        <Routes>
        <Route path="/meetups" exact element={ <AllMeetups />} />
        <Route path="/meetups/newmeetups" element={ <NewMeetups /> } />
        <Route path="/meetups/favourates" element={<Favourates />} />
        </Routes>
    </Layout>
  );
}

export default App;
