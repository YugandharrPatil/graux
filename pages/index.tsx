import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div>
			<Head>
				<title>Graux</title>
				<meta name="keywords" content="" />
			</Head>

			{/* heading */}

			<main className={styles.heading}>
				<Image src={"/images/solana.png"} alt="" width={150} height={150} />
				<h1>
					Solana <br /> Solution for <br /> Blockchains
				</h1>
			</main>

			{/* stats */}

			<main className={styles.stats}>
				<div>
					<h1>Transaction Speed (TPS)</h1>
					<h5 className="text-center">100,000+</h5>
				</div>
				<div>
					<h1>Total Transactions Completed</h1>
					<h5 className="text-center">1,000,000+</h5>
				</div>
				<div>
					<h1>Validators & Nodes</h1>
					<h5 className="text-center">1000+</h5>
				</div>
			</main>

			{/* What is Graux */}

			<main className={styles.what}>
				<h2>What is Graux?</h2>
				<p className="pt-5">
					Graux is an interoperability protocol. It will help in providing faster and user friendly system where you can build Dapps on multi-chain
					one-click user experience accessing token De-Fi, gamify and governance. You can convert and use Graux as a hybrid blockchain and use
					different multichains to do a transaction in private entity
				</p>
				<p className="pt-5">
					Graux is an interoperability protocol. It will help in providing faster and user friendly system where you can build Dapps on multi-chain
					one-click user experience accessing token De-Fi, gamify and governance. You can convert and use Graux as a hybrid blockchain and use
					different multichains to do a transaction in private entity
				</p>
				<p className="pt-5">
					Graux is an interoperability protocol. It will help in providing faster and user friendly system where you can build Dapps on multi-chain
					one-click user experience accessing token De-Fi, gamify and governance. You can convert and use Graux as a hybrid blockchain and use
					different multichains to do a transaction in private entity
				</p>
			</main>
			<main className="text-center hey">
				<h1>Tools and Integrations</h1>
				<ul>
					<li>BFT</li>
					<li>Interoperability</li>
					<li>Sidechain</li>
					<li>Supply Chains</li>
					<li>Oracle</li>
				</ul>
			</main>
		</div>
	);
}
