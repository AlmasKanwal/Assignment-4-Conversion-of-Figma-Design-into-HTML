import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";

type HeaderProps = {
    fontClass: string;
  };

export default function Navbar({ fontClass }: HeaderProps) {
    return (
        <>
            <div className={`${fontClass} nav`}>
                <ul className="nav-links">
                    <li><Link href="">Works</Link></li>
                    <li><Link href="">Blog</Link></li>
                    <li><Link href="">Contact</Link></li>
                    <HiBars3 className="nav-icon"/>
                </ul>
            </div>
        </>
    );
}
