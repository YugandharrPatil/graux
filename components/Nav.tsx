import Image from "next/image";
import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
	return (
		<div>
			<nav className={`navbar navbar-expand-lg fixed-top ${navStyles.nav}`}>
				<div className="container-fluid">
					<a className="navbar-brand" href="#hi">
						<Image src={"/images/graux.png"} alt="" width={200} height={82} />
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#hinavbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto">
							<li className={`${navStyles.navItem} nav-item me-4`}>
								<Link className="nav-link" href="/products">
									Products
								</Link>
							</li>
							<li className={`${navStyles.navItem} nav-item me-4`}>
								<Link className="nav-link" href="#WhatIsGraux">
									About
								</Link>
							</li>
							<li className={`${navStyles.navItem} nav-item me-4`}>
								<Link className="nav-link" href="#Contact">
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
