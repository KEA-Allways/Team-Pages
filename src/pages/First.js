import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Layout from "./Layout";
import Welcome from "./Welcome";

function First(){
    const [showLogo, setShowLogo] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setShowLogo(false);
        }, 2000); // 2초 후 로고를 숨김
    }, []);

    return(
    <div>
        {showLogo 
        ?
            <Welcome />
        :
        <div>
            <Navbar/>
            <header className="header">
                <div className="header-content">
                    <Logo />
                    <h1>
                        <span style={{ color: '#FBF562' , fontSize:'70px' }}>ALWAYS</span>
                        &nbsp;&nbsp;<span style={{ color: '#43C0FF' , fontSize:'70px' }}>ALL WAYS</span> 
                    </h1>
                </div>
            </header>
        </div>
    }
          
    </div>
    )
}

export default First;