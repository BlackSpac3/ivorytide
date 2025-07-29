
import Date from "./components/Date";
import Event from "./components/Event";
import Family from "./components/Family";
import Friends from "./components/Friends";
import Gallery from "./components/Gallery";
import Happy from "./components/Happy";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Watch from "./components/Watch";
import Welcome from "./components/Welcome";
import Where from "./components/Where";
import Rsvp from "./components/Rsvp";
import Insta from "./components/insta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Welcome />
      <Happy />
      <Family />
      <Story />
      <Friends />
      <Watch />
      <Event />
      <Gallery />
      <Date />
      <Where />
      <Rsvp />
      <Insta />
      <Footer />
     
    </div>
  );
}
