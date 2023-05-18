import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
import { Provider } from "react-redux";
import store from "../store";
import Head from "next/head";

const progress = new ProgressBar({
  size: 2,
  color: "#FFCA42",
  className: "z-100",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Bookish Bargains</title>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.png" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
