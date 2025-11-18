import { SECTION } from "../utils/sectiontype";
import Addtask from "./Addtask";
import Search from './Search'
import Today from './Today'
import Upcoming from './Upcoming'
import Filter from './Filter'
import Complete from './Complete'
import Taskbar from "./Taskbar";
import Navbar from "./Navbar"
import { useSelector } from "react-redux";
import Alltasks from "./Alltasks";
import Failed from "./Failed";
const Home=()=>{
const active = useSelector((store) => store.button.active);

return (
  <div>
    <Navbar />
    <div className="flex">
      <Taskbar />
      {active === SECTION.NONE && <Alltasks/>}
      {active === SECTION.ADD && <Addtask />}
      {active === SECTION.SEARCH && <Search />}
      {active === SECTION.TODAY && <Today />}
      {active === SECTION.UPCOMING && <Upcoming />}
      {active === SECTION.FILTER && <Filter />}
      {active === SECTION.COMPLETE && <Complete />}
      {active === SECTION.FAILED && <Failed/>}
    </div>
  </div>
);
};
export default Home;
