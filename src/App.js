import TaskList from "./components/TaskList";
import './App.css';
import Addnewtask from "./components/Addnewtask";



function App() {
  return (
    <div className="App">
      <Addnewtask/>
      <TaskList/>
   
    </div>
  );
}

export default App;
