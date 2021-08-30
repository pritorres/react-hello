import React from "react";
import PropTypes from "prop-types";

const Navbar = props => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				{props.titleNav}
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							{props.itemNav1}
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							{props.itemNav2}
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							{props.itemNav3}
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							{props.itemNav4}
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	titleNav: PropTypes.string,
	itemNav1: PropTypes.string,
	itemNav2: PropTypes.string,
	itemNav3: PropTypes.string,
	itemNav4: PropTypes.string
};

export default Navbar;
