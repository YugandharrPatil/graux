import Image from "next/image";
import Link from "next/link";
import footerStyles from "../styles/Footer.module.css";

const Footer = () => {
	return (
		<footer className={footerStyles.footer}>
			<div>
				<Image src={`/images/graux.png`} alt="" width={200} height={82} />
				<h5 className={footerStyles.copy}>
					&#169; 2023 Graux Foundation. <br /> All rights reserved.
				</h5>
			</div>
			<div className="socials text-center mt-4">
				<h3>Connect with Us!</h3>
				<div className={[footerStyles.socialIcons, "mx-auto", "pt-4"].join(" ")}>
					<a href="">
						<i className="fa-xl fa-brands fa-twitter"></i>
					</a>
					<a href="">
						<i className="fa-xl fa-brands fa-discord"></i>
					</a>
					<a href="">
						<i className="fa-xl fa-brands fa-telegram"></i>
					</a>
					<a href="">
						<i className="fa-xl fa-brands fa-reddit"></i>
					</a>
					<a href="">
						<i className="fa-xl fa-brands fa-github"></i>
					</a>
					<a href="">
						<i className="fa-xl fa-brands fa-medium"></i>
					</a>
				</div>
			</div>
			<div className="links">
				<h4>Graux</h4>
				<ul>
					<li>
						<Link href="#">Whitepaper</Link>
					</li>
					<li>
						<Link href="#">Documentation</Link>
					</li>
					<li>
						<Link href="#">Privacy Policy</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
