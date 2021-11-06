import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();

  const callAbout = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);

      if (!res.status === 200) {
        throw new Error("Authorize please");
      }
    } catch (error) {
      console.log(error);
      history.push("/login");
    }
  };

  useEffect(() => {
    callAbout();
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      <p>About</p>
    </div>
  );
};

export default About;
