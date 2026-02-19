import React from "react";
import NavBar from "./NavBar";
import Jumbotron from './Jumbotron';
import Footer from "./Footer";
import Card from "./Card";

function Home() {
    return (
        <div>
            <NavBar/>
            <main className="container mt-4">
                <Jumbotron/>
				<Card/>
            </main>
			<Footer/>
        </div>
    );
}

export default Home;


