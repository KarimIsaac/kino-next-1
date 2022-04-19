import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="menu-container">
        <div className="menu-dropdown">
          <Link href="/movies">
            <p className="menu-link">FILMER</p>
          </Link>
        </div>

        <div className="menu-dropdown">
          <Link href="/#">
            <p className="menu-link">LIVE PÅ BIO</p>
          </Link>
        </div>

        <div className="menu-dropdown">
          <Link href="/#">
            <p className="menu-link">BARNBIO</p>
          </Link>
        </div>

        <div className="menu-dropdown">
          <Link href="/#">
            <p className="menu-link">EVENEMANG</p>
          </Link>
        </div>

        <div className="menu-dropdown">
          <Link href="/#">
            <p className="menu-link">BILJETTER</p>
          </Link>
        </div>

        <div className="menu-dropdown">
          <Link href="/#">
            <p className="menu-link">OM OSS</p>
          </Link>
        </div>

        <div className="menu-dropdown">
          <Link href="/#">
            <p className="menu-link">IN ENGLISH</p>
          </Link>
        </div>
      </div>
    </>
  );
}
