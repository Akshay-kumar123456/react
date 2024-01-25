import AllAirline from "./classcomponents/allairlines";
import NavExecutive from "./navexe";
import YourComponent from "./statistics";

function ExeHome(){



    return(
        <div>
            <NavExecutive/>
            <YourComponent/>
            <AllAirline/>
        </div>
    )

}
export default ExeHome;