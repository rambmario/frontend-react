import Link from "next/link"
import { useContext } from "react";
import { maincontextState } from "@/context/maincontextprovider";

export default function Navbar(props) {

    let { darkmode } = useContext(maincontextState);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
           <div className="container-fluid">
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/test'>Test</Link>
                </li>
                <li>
                    <Link href='/api/hello'>API</Link>
                </li>
            </ul>
           </div>
        </nav>
    )
}