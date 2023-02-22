import RegisterForm from "./components/RegisterForm";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import ReactMarkDown from "./components/ReactMarkDown" 
import { CreatePost } from "./components/CreatePost";
import { BlogEditor } from "./components/BlogEditor";
import Secure from "./components/Secure";
function App() {
   
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/Register" element={<RegisterForm/>}/>
        <Route path="/MarkDown" element={<ReactMarkDown/>}/>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/BlogEditor" element={<Secure><BlogEditor/></Secure>}/>
        <Route path="/CreatePost" element={<Secure><CreatePost/></Secure>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;