
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbars from './Component/Navbar';
import Slides from './Component/Slides';
import Smallcard from './Component/Smallcard';
import Videocard from './Component/Videocard';
import Footer from './Component/Footer';
import InvestmentSection from './Component/InvestmentSection';
import AwardCarousel from './Component/AwardsCarousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Testimonials from './Component/Testimonials';
import AccountOpening from './Component/AccountOpening';
import BlogSection from './Component/Blogs';
import VideoCarousel from './Component/Videos';
import AppFeatures from './Component/AppFeatures';


function App() {
  return (
    <>
    <Navbars />
    <Slides/>
    {/* <Smallcard/> */}
    {/* <Videocard/> */}

<AppFeatures />

<BlogSection />
<VideoCarousel /> 
 <AccountOpening />   
<Testimonials />
<AwardCarousel />
    <Footer /> 
    </>
  );
    
}

export default App;
