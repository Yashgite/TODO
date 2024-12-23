import Input from "./components/Input";
import "./App.css";
import { useState } from "react";
import List from "./components/List";

function App() {
  const [listtodo, setListtodo] = useState([]);
  let addlist = (inputtext) => {
    setListtodo([...listtodo, inputtext]);
  };

  const deleteitem = (key) => {
    let newList = [...listtodo];
    newList.splice(key, 1);
    setListtodo([...newList]);
  };
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <Input addlist={addlist} />
      <div>
        <hr />
        {listtodo.map((listitem, i) => {
          return (
            <List item={listitem} index={i} key={i} deleteitem={deleteitem} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
