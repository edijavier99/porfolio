import "../styles/App.css"
import { IntroductionBoard } from "../components/introductionBoard";
import { WhyUs } from "../components/whyus";
import {Reviews} from "../components/reviews"
import { FAQ } from "../components/faq";
import { Services } from "../components/services";
import { Timeline } from "../components/timeline";

function  Home() {
  return (
    <div className="App">
      <IntroductionBoard/>
      <Services />
      <Timeline/>
      <WhyUs/>
      <Reviews />
      <FAQ/>
    </div>
  );
}

export default Home;
