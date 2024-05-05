import Link from "next/link";
import { Button } from "../ui/button";
import { menuItems } from "@/lib/navMenuItems";
import DesktopNavMenuItem from "./DesktopNavMenuItem";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className="py-3 items-center px-8 flex justify-between">
      <div>DEVFILO</div>
      <nav className="flex gap-8 items-center">
        <ul className="flex gap-6 text-gri_text tems-center">
          {menuItems.map((item) => (
            <DesktopNavMenuItem key={item.href} menuItem={item} />
          ))}
        </ul>
        <div className="flex gap-4">
          <Link href="https://app.devfilo.com" target="blank">
            <Button className="rounded-full px-8" variant="outline">
              Giriş Yap
            </Button>
          </Link>
          <Link href="https://app.devfilo.com" target="blank">
            <Button className="rounded-full px-8">Kayıt Ol</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
