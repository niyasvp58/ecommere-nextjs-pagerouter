import "@/styles/Productcard.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from "../../component/header";
import { ShopContextProvider } from "../contextcart/contextcart";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <Header />
    <ShopContextProvider>
      <Component {...pageProps} />;
      </ShopContextProvider>
    </>
  ) 

}
