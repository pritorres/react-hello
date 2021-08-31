import React from "react";
import Navbar from "./navJumbo.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<>
			<Navbar
				titleNav="Start Bootstrap"
				itemNav1="Home"
				itemNav2="About"
				itemNav3="Services"
				itemNav4="Contact"
			/>
			<div className="container ">
				<Jumbotron
					title="A Warm Welcome"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nesciunt deleniti eum quia tempora iste magnam, possimus suscipit, tempore fuga officia commodi fugiat dolor ut sint itaque incidunt nihil cupiditate."
					buttonLabel="Call to action!"
					buttonURL="#"
				/>
				<div className="card-deck mb-5">
					<Card
						title="The architecture"
						description="Architecture was born with man in prehistory during the Neolithic age when various human groups developed a sedentary lifestyle based on agriculture."
						img="https://images.unsplash.com/photo-1629992125612-222a72207786?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=325"
						buttonLabel="The architecture"
						buttonUrl="https://es.wikipedia.org/wiki/Arquitectura"
					/>
					<Card
						title="Cars"
						description="The automobile has its origin in the late 19th century, when in 1885, the German inventor Carl Benz patented his Benz Patent-Motorwagen.human groups developed a sedentary lifestyle based on agriculture human groups developed a sedentary lifestyle based "
						img="https://images.unsplash.com/photo-1629992125612-222a72207786?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=325"
						buttonLabel="The cars"
						buttonUrl="https://es.wikipedia.org/wiki/Autom%C3%B3vil"
					/>

					<Card
						title="Programing"
						description="Programming is the process used to devise and order the actions necessary to carry out a project, prepare certain machines or devices to start working at the time and in the desired way, or develop programs for use in computers.human groups developed a sedentary lifestyle based "
						img="https://images.unsplash.com/photo-1629992125612-222a72207786?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=325"
						buttonLabel="The programing"
						buttonUrl="https://es.wikipedia.org/wiki/Programaci%C3%B3n"
					/>
					<Card
						title="Tattoo"
						description="Architecture was born with man in prehistory during the Neolithic age when various human groups developed a sedentary lifestyle based on agriculture"
						img="https://images.unsplash.com/photo-1629992125612-222a72207786?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=325"
						buttonLabel="The tattoos"
						buttonUrl="https://es.wikipedia.org/wiki/Tatuaje"
					/>
				</div>
			</div>
			<Footer text="Copyright © Your Website 2018" />
		</>
	);
};

export default Home;
