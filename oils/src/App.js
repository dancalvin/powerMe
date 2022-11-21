import Abode from "./component/Abode";
import Cproduct from "./component/Cproduct";
import Customize from "./component/Customize";
import Essential from "./component/Essential";
import Experience from "./component/Experience";
import FirstPage from "./component/Hero";
import Informed from "./component/Informed";
import LastPage from "./component/LastPage";
import Learn from "./component/Learn";
import Loyalty from "./component/Loyalty";
import Make from "./component/Make";
import Metabolism from "./component/Metabolism";
import MetaPWR from "./component/MetaPWR";
import Move from "./component/Move";
import Movement from "./component/Movement";
import Natural from "./component/Natural";
import Nuti from "./component/Nuti";
import Nutrition from "./component/Nutrition";
import Otype from "./component/Otype";
import PM from "./component/PM";
import Reduce from "./component/Reduce";
import Rest from "./component/Rest";
import Self from "./component/Self";
import Skin from "./component/Skin";
import Transform from "./component/Transform";
import Wellness from "./component/Wellness";
import Wellness2 from "./component/Wellness2";

function App() {
  // const [open, setOpen] = useState(false)
  return (
    <div className="App w-full ">
      <div className="container overflow-x-hidden">
        <FirstPage />
        <Transform />
        <Wellness />
        <Nutrition />
        <Nuti />
        <Movement />
        <Move />
        <Metabolism />
        <MetaPWR />
        <Rest />
        <PM />
        <Reduce />
        <Experience />
        <Natural />
        <Abode />
        <Self />
        <Skin />
        <Informed />
        <Otype />
        <Customize />
        <Cproduct />
        <Wellness2 />
        <Make />
        <img src={process.env.PUBLIC_URL +"/images/image-364.jpg"} className=" w-full" alt="" />
        <Loyalty />
        <Essential />
        <Learn />
        <LastPage />
      </div>
    </div>
  );
}

export default App;
