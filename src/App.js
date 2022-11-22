import List from "./List";
import data from "./data";
import {useState} from "react";


function App() {

  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople((oldValue) => {
      return oldValue.filter((value) => value.id !== id);
    })
  }

  const deletePeople = () => {
    setPeople([])
  }

  const reloadPeople = () => {
    setPeople(data)
  }

  return (
    <section>
      <div className="container">
        <h2 style={{color: 'var(--bg-blue)'}}>Prossimi Incontri</h2>
        <div className="people-list">
          <List data={people} removeItem={removeItem}/>
        </div>
        <div className="btn-group">
          <button className="btn btn-reset" onClick={reloadPeople}>Reload</button>
          <button className="btn btn-delete" onClick={deletePeople}>Delete all</button>
        </div>
      </div>
    </section>
  );
}

export default App;
