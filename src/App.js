import React from "react";
import { Asgn20 } from "./components/Asgn20";
import { Card, CardContent } from "@mui/material";

function App() {
  return (
    <Card sx={{ bgcolor: "lavender" }}>
      <CardContent>
        <Asgn20 />
      </CardContent>
    </Card>
  );
}

export default App;
