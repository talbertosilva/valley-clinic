import { Appointment } from "./Appointment";
import { Clinic } from "./Clinic";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Menu } from "./Menu";
import { Online } from "./Online";
import { Services } from "./Services";

function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <Appointment />
      <Clinic />
      <Services />
      <Online />
      <Footer />
    </div>
  );
}

export default App;
