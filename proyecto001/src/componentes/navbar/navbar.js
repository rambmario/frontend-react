import Link from "next/link"
import { useContext } from "react";
import { maincontextState } from "@/context/maincontextprovider";

export default function Navbar(props) {

    let { darkmode } = useContext(maincontextState);

    return (
        <div className="navbar">
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
    )
}