import Image from "next/image";
import Link from "next/link";
import footerStyles from "../styles/Footer.module.css";

const Footer = () => {
	return (
		<footer className={footerStyles.footer}>
			<div>
				<Image src={`/images/graux.png`} alt="" width={200} height={82} className={footerStyles.footerImage} />
				<h5 className={footerStyles.copy}>
					&#169; 2023 Graux Foundation. <br /> All rights reserved.
				</h5>
			</div>
			<div className={`${"text-center"} ${footerStyles.socials}`}>
				<h3>Connect with Us!</h3>
				<div className={[footerStyles.socialIcons, "mx-auto", "pt-3"].join(" ")}>
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
			<div className="me-5">
				<h3>Graux</h3>
				<ul>
					<li>
						<Link href="#" className={footerStyles.footerLink}>
							Whitepaper
						</Link>
					</li>
					<li>
						<Link href="#" className={footerStyles.footerLink}>
							Documentation
						</Link>
					</li>
					<li>
						<Link href="#" className={footerStyles.footerLink}>
							Privacy Policy
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
