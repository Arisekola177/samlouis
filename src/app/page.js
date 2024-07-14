import About from "./components/About";
import Consulting from "./components/Consulting";
import Homebanner from "./components/Homebanner";
import Properties from "./components/Properties";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
  <div>
   <Homebanner />
   <About />
   <Consulting />
   <Properties />
   <Testimonials />
  
 </div>
  );
}
