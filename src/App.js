import "./App.css";
import { useState } from "react";
import { Button } from "@mui/material";

function App() {
  const [clickCount, addClickCount] = useState(0);
  return (
    <div className="App">
      <p>Richard "Alex" Green</p>
      <p>
        Full-stack web engineer with a background in human resources and
        operations. Proficient in JavaScript and Python having created and
        contributed to React and Django apps. Energetic and eager to meet any
        challenge.
      </p>
      <Button variant="contained" onClick={() => addClickCount(clickCount + 1)}>
        {`${clickCount}`}
      </Button>
    </div>
  );
}

export default App;
