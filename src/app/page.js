import About from "./components/About";
import Consulting from "./components/Consulting";
import Explore from "./components/Explore";
import Homebanner from "./components/Homebanner";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
  <div>
   <Homebanner />
   <About />
   <Consulting />
   <Explore />
   <Testimonials />
  
 </div>
  );
}
