import Link from "next/link";
import MobileMenu from "../MobileMenu";
import Search from "../Search";
import OffCanvas from "../OffCanvas";
import ThemeSwitch from "@/components/elements/ThemeSwitch";
import Menu from "../Menu";

export default function Header4({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSearch,
  handleSearch,
  isOffCanvas,
  handleOffCanvas,
}: any) {
  return (
    <>
      <header>
        <nav
          className={`navbar navbar-expand-lg navbar-light w-100 z-999 header-4 ${
            scroll ? "navbar-stick" : ""
          }`}
          style={{
            position: `${scroll ? "fixed" : "relative"}`,
            top: `${scroll ? "0" : "auto"}`,
            bottom: `${scroll ? "auto" : "0"}`,
          }}
        >
          <div className="container">
            <Link
              className="navbar-brand d-flex main-logo align-items-center"
              href="/"
            >
              <img
                src="assets/imgs/template/logo.png"
                alt="limpiar"
                style={{ width: "150px", height: "auto" }}
              />
            </Link>
            <Menu />
            <div className="d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
              {/* <ThemeSwitch /> */}

			  			<div className="burger-icon burger-icon-white border rounded-3 mt-3" onClick={handleMobileMenu}>
								<span className="burger-icon-top" />
								<span className="burger-icon-mid" />
								<span className="burger-icon-bottom" />
							</div>

              <div className="d-flex align-items-center ">
                <Link
                  href="https://property-manager.limpiar.online/login"
                  className="btn btn-gradient"
                >
                  Login
                  <svg
                    className="ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      className="stroke-white"
                      d="M17.25 15.25V6.75H8.75"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="stroke-white"
                      d="M17 7L6.75 17.25"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <OffCanvas
          handleOffCanvas={handleOffCanvas}
          isOffCanvas={isOffCanvas}
        />
      </header>
      <MobileMenu handleMobileMenu={handleMobileMenu} isMobileMenu={isMobileMenu} /> 
    </>
  );
}
