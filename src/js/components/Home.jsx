import React from "react";
import NavBar from "./NavBar";
import Jumbotron from './Jumbotron';
import Footer from "./Footer";
import Cardprops from "./Cardprops";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

/*
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="mt-5">Hello Rigo!</h1>
	
		</div>
	);
};
*/

function Home() {
    return (
        <div>
            <NavBar/>
            <main className="container mt-4">
                <Jumbotron/>
				<Cardprops/>
            </main>
			<Footer/>
        </div>
    );
}

export default Home;


