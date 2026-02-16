import React from "react";
import NavBar from "./NavBar";
import Jumbotron from './Jumbotron';


function Home() {
    return (
        <div>
            <NavBar/>
            <main className="container mt-4">
                <Jumbotron/>
            </main>
        </div>
    );
}

export default Home;