import ToDoList from "./views/ToDoList";
import Header from "./components/todos/Header";
import './assets/css/index.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <ToDoList/>
    </div>
  );
}

export default App;
