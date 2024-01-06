import "./App.css";
import { useState } from "react";
import { Button } from "@mui/material";

function App() {
  const [clickCount, addClickCount] = useState(0);
  return (
    <div className="App">
      <p>Hello. I'm Alex. Thanks for checking out my web app.</p>
      <Button variant="contained" onClick={() => addClickCount(clickCount + 1)}>
        {`This has been clicked ${clickCount} times!`}
      </Button>
    </div>
  );
}

export default App;
