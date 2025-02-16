import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import './App.css';
import { useEffect } from "react";
import WOW from "wow.js";
import HomeTwo from "./pages/Home/HomeTwo";
import Blog from "./pages/Blog/Blog";
import BlogDetailsPage from "./pages/BlogDetails/BlogDetailsPage";
import { useLocation } from "react-router-dom";
import Displaycoin from "./component/Displaycoin";
import Moreinfo from "./component/Moreinfo";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HashRouter as Router,  } from 'react-router-dom';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import HeaderOne from "./components/Header/HeaderOne";

function App() {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }, []);

  // const { pathname } = useLocation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);
  const queryclient = new QueryClient()
  return (
    <QueryClientProvider client={queryclient}> 
    <HeaderOne />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Displaycoin />} />
        <Route path='/addyourkey/:id' element={<Moreinfo />} />
        <Route path="blog-details" element={<BlogDetailsPage />} />
      </Routes>
    
    <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
