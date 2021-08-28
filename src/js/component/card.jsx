import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="col-md-3 px-2 my-4">
			<div className="card h-100 text-center border">
				<img src={props.img} className="card-img-top h-80" alt="..." />
				<div className="card-body">
					<h2 className="card-title">{props.title}</h2>
					<p className="card-text ">{props.description}</p>
				</div>
				<div className="card-footer text-center">
					<a href={props.buttonUrl} className="btn btn-primary">
						{props.buttonLabel}
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	img: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonUrl: PropTypes.string
};

export default Card;
