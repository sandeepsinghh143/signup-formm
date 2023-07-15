import React from "react";
import FormValidation from "./Components/FormValidation";
import Img from "./Components/Img";


const App = () => {

    return(
        <div>
            <p className='desc'>Find 3D Objects, Mockups and Illustration here.</p>
            <Img/>
            <div className="mainarea"><FormValidation /></div>
        </div>
    )
}

export default App;