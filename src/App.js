import React, { useState } from "react";
import BooksList from "./Components/BooksList.jsx";
import TopLevelMenu from "./Components/TopLevelMenu.jsx";
import DB from "./data.jsx"

function App() {
  const images = require.context('../public/images', true);
  const [database, UpdateBooks] = useState(DB);
  return (
    <div className="App">
      <TopLevelMenu>
      </TopLevelMenu>
      <BooksList database={database} images={images}>

      </BooksList>
      

     
    </div>
  );
}

export default App;