import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta />
			</Head>

			<Script
				src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
				integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
				crossOrigin="anonymous"
			/>

			<Script src="https://kit.fontawesome.com/efc02ea3e9.js" crossOrigin="anonymous" />

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
