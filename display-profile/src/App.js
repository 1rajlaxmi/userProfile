import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc");
        setUserData(response.data.results[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {userData ? <ProfileCard user={userData} /> : <p>Loading...</p>}
    </>
  );
}

export default App;
