import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);

  function AddActivity() {
    //setlistData([...listData, activity]);
    //console.log(listData);
    setlistData((listData) => {
      const updateList = [...listData, activity];
      console.log(updateList);
      setActivity("");
      return updateList;
    });
  }
  function removeActivity(i) {
    const updateListData = listData.filter((elem, id) => {
      return i != id;
    });
    setlistData(updateListData);
  }
  function removeAll() {
    setlistData([]);
  }

  return (
    <>
      <div className="container">
        <div className="header">TodoList</div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={AddActivity}>Add</button>

        <p className="List-heading">
          ***************** List of Data **********
        </p>

        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listData">{data}</div>
                  <div className="btn-position">
                    <button onClick={() => removeActivity(i)}>Remove</button>
                  </div>
                </p>
              </>
            );
          })}

        {listData.length >= 1 && (
          <button onClick={removeAll}>Remove All</button>
        )}
      </div>
    </>
  );
}
export default TodoList;
