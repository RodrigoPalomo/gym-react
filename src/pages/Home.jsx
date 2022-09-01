import React, { useState } from "react";
// Packages
import { Box } from "@mui/material";
// Packages

// Components
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import HeroBanner from "../components/HeroBanner";
// Components

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises 
      setExercises={setExercises}
      bodyPart={bodyPart}
      exercises={exercises}
      />
    </Box>
  )
}

export default Home;
