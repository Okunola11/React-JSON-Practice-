import { useState, useEffect } from "react";
import Contents from "./Contents";
import Form from "./Form";
import Table from "./Table";

function App() {
  const API_URL = `https://jsonplaceholder.typicode.com/`;

  const [items, setItems] = useState([]);
  const [request, setRequest] = useState("users");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchResponse = await fetch(`${API_URL}${request}`);
        if (!fetchResponse.ok) throw Error("Could not fetch required data");
        const data = await fetchResponse.json();
        setItems(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchItems();
  }, [request, API_URL]);

  return (
    <div className="App">
      <Form
        items={items}
        setItems={setItems}
        request={request}
        setRequest={setRequest}
      />
      {/* <Contents items={items} /> */}
      <Table items={items} />
    </div>
  );
}

export default App;
