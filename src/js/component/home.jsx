import React from "react";
import Navbar from "./navJumbo.jsx";
import Jumbotron from "./Jumbotron.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar
				titleNav="Start Bootstrap"
				itemNav1="Home"
				itemNav2="About"
				itemNav3="Services"
				itemNav4="Contact"
			/>
			<Jumbotron
				title="A Warm Welcome"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nesciunt deleniti eum quia tempora iste magnam, possimus suscipit, tempore fuga officia commodi fugiat dolor ut sint itaque incidunt nihil cupiditate."
				buttonLabel="Call to action!"
				buttonURL="#"
			/>
		</div>
	);
};

export default Home;
