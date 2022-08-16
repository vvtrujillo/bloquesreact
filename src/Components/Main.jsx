import Subcontent from "./Subcontent";
import Advertisement from "./Advertisement";


const Main = () => {

    return(
        <div className="main-comp">
            <div className="container-subcontent">
                <Subcontent></Subcontent>
                <Subcontent></Subcontent>
                <Subcontent></Subcontent>
            </div>            
            <Advertisement></Advertisement>                        
        </div>
    )

}

export default Main;