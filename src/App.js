import "./App.css";
import { Sidebar } from "./components/SideBar/Sidebar";
import { Pages } from "./components/Pages/Pages";

function App() {
  return (
    <div>
      <div className="container">
        <Sidebar />
        <Pages />
      </div>
    </div>
  );
}

export default App;
