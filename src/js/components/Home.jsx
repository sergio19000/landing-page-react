import React from "react";
import Card from "../components/Card";


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
export default Home;
*/

const Home = () => {
	return (
		<div className="contenedor d-flex flex-column align-items-center">
			
			<div className="row justify-content-center g-1">
				<div className="col-12 col-sm-6 col-lg-3">
					  <Card
            title="La Luz al final el túnel"
            text="despues de tanto luchar pude hacer mi primer componente"
            image="https://fastly.picsum.photos/id/137/300/200.jpg?hmac=7GOEmQEJNznawKi8mMjA3tPrgb6kbZZ0qCxn8H0RKFU"
            buttonText="Find out more"
                     />
				</div>

				<div className="col-12 col-sm-6 col-lg-3">
					<Card
			title="Un poquito mas de luz"
            text="También pude centrar el contenido dentro de mi card"
            image="https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE"
            buttonText="Find out more"
					/>
				</div>

				<div className="col-12 col-sm-6 col-lg-3">
					<Card
			title="Todo empieza a florecer"
            text="Ahora se ve un poquito mas claro el camino"
            image="https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA"
            buttonText="Find out more"
					/>
				</div>

				<div className="col-12 col-sm-6 col-lg-3">
					<Card
			title="Que bonito paisaje"
            text="Aquí es donde quiero estar en este momento"
            image="https://fastly.picsum.photos/id/37/2000/1333.jpg?hmac=vpYLNsQZwU2szsZc4Uo17cW786vR0GEUVq4icaKopQI"
            buttonText="Find out more"
					/>
				</div>
			</div>
			
		</div>

		
	);
};

export default Home;


