import React from "react";
import PropTypes from "prop-types";

const Footer = propiedad => {
	return (
		<footer className="bg-dark text-center text-lg-start text-light">
			<div className=" text-center p-5">{propiedad.text}</div>
		</footer>
	);
};

Footer.prototype = {
	text: PropTypes.string
};
export default Footer;
