
import { Inter } from "next/font/google";
import Productlist from "./productlist";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Productlist />
    </>
  );
}
