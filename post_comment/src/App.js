import Dashboard from "./pages/dashboard/dashboard";
import Comment from "./pages/commentPage/comment";
import Navbar from "./components/navbar/navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route exact path="/" element={<Dashboard/>}></Route>
    
    <Route exact path="/comment" element={<Comment/>}></Route>
    </Routes>
    </Router>
  );
}

export default App;
