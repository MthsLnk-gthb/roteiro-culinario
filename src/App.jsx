import './App.css'
import MainScreen from './Components/MainPage/MainPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './BlogPage/Blog';


function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />}/>
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}


export default App

