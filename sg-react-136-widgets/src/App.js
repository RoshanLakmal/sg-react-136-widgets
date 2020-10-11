import React, { useState } from "react";
// import "./App.css";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

// const showAccordion = () => {
//   if(window.location.pathname === '/'){
//     return <Accordion items={items} />;
//   }
// }

// const showList = () => {
//   if(window.location.pathname === '/list'){
//     return <Search />;
//   }
// }

// const showDropdown = () => {
//   if(window.location.pathname === '/dropdown'){
//     return <Dropdown />;
//   }
// }

// const showTranslate= () => {
//   if(window.location.pathname === '/translate'){
//     return <Translate />;
//   }
// }

function App() {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ?
      <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      /> */}
      {/* <p style={{color: selected.value}}>This text is {selected.value}</p> */}
      {/* </div>
      : null} */}
      {/* <Translate /> */}
      {/* {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()} */}
      <Route path="/">
        <Accordion items={items}/>
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
          label="Select a color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
        <p style={{color: selected.value}}>This text is {selected.value}</p>
      </Route>
      <Route path="/translate">
      <Translate />
      </Route>
    </div>
  );
}

export default App;
