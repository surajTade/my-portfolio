import { useState } from "react";
import Close from "../assets/close.svg";

export const PortfolioItem = (prop) => {
	const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal((prevState) => !prevState);
	};

	return (
		<div className="portfolio-item">
			<img src={prop.img} alt="" className="portfolio-img" />

			<div className="portfolio-hover" onClick={toggleModal}>
				<h3 className="portfolio-title">{prop.title}</h3>
			</div>

			{modal && (
				<div className="portfolio-modal">
					<div className="portfolio-modal-content">
						<img
							src={Close}
							alt=""
							className=" modal-close"
							onClick={toggleModal}></img>
						<h3 className="modal-title">{prop.title}</h3>
						<ul className="modal-list grid">
							{prop.details.map((detail, idx) => {
								return (
									<li className="modal-item" key={idx}>
										<span className="item-icon">{detail.icon}</span>
										<div>
											<span className="item-title">{detail.title}</span>
											{detail.title === "Preview : " ? (
												<a
													href={detail.desc}
													target="_blank"
													className="item-details">
													{detail.desc}
												</a>
											) : (
												<span className="item-details">{detail.desc}</span>
											)}
										</div>
									</li>
								);
							})}
						</ul>

						<img src={prop.img} alt="" className="modal-img" />
					</div>
				</div>
			)}
		</div>
	);
};
