import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  const [resource, setResource] = useState("posts");

  return (
    <div>
      <UserList></UserList>
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todds</button>
      </div>
      <ResourceList resource={resource}></ResourceList>
    </div>
  );
};

export default App;
