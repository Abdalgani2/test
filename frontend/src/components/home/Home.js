import { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useLocation} from 'react-router-dom';
import Nav from "./home-nav";
import HomeCard from "./home-card";
import Axios from 'axios';


function Home() {
    const location = useLocation();
    
    const [all, setAll] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:4000/allItemsReady').then(response => {
            console.log("response",response);
            setAll(response.data.reverse());
            
        }
        )
    },[] );
    return (

        <Fragment>
            <Nav />
            <HomeCard items={all} />
            

        </Fragment>

    );
}

export default Home;