import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }: any) => {
	return (
		<>
			<Navbar />
			<div>
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
