import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import FirstHome from "./Home/FirstHome";
import Services from "./Services/Services";
import Footer from "./Footer/Footer";
import Members from "./Members/Members";
import Contact from "./Contact/Contact";
import Project from "./Project/Project";
import ErrorPage from "./ErrorPage/ErrorPage";
import FAQ from "./FAQ/FAQ";
import Review from "./Review/Review";
import About from "./About/About";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import SingleTeam from "./SingleTeam/SingleTeam";
import ProjectDetail from "./ProjectDetail/ProjectDetail";
import Thanks from "./Thanks/Thanks";
import ServiceDetail from "./ServiceDetail/ServiceDetail";
import Blog from "./Blog/Blog";

function App() {
  const location = useLocation();
  const paths = ['/', '/services/', '/members/', '/contact/', '/project/', '/FAQ/', '/reviews/', '/about/', '/login/', '/signup/', '/blog/']

  return (
    <>
      {(paths.includes(location.pathname) || location.pathname.includes('/details/') || location.pathname.includes('/project/') || location.pathname.includes('/service/')) && <Header />}
      <Routes>
        <Route path="/" element={<FirstHome />} />
        <Route path="services/" element={<Services />} />
        <Route path="members/" element={<Members />} />
        <Route path="contact/" element={<Contact />} />
        <Route path="project/" element={<Project />} />
        <Route path="FAQ/" element={<FAQ />} />
        <Route path="reviews/" element={<Review />} />
        <Route path="about/" element={<About />} />
        <Route path="login/" element={<Login />} />
        <Route path="signup/" element={<SignUp />} />
        <Route path="/details/:itemSlug" element={<SingleTeam />} />
        <Route path="/project/:proSlug" element={<ProjectDetail />} />
        <Route path="thanks/" element={<Thanks />} />
        <Route path="/service/:serviceSlug" element={<ServiceDetail />} />
        <Route path="blog/" element={<Blog />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {((paths.includes(location.pathname) && location.pathname != '/login/' || location.pathname.includes('/details/') || location.pathname.includes('/project/') || location.pathname.includes('/service/'))) && <Footer />}
    </>
  );
}

export default App;
