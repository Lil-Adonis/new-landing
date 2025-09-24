"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function MobileMenu({
  isMobileMenu,
  handleMobileMenu,
}: {
  isMobileMenu: boolean;
  handleMobileMenu: () => void;
}) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const mounted = useRef(false); 

  // Hide menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        if (showMenu) setShowMenu(false);
        if (isMobileMenu) handleMobileMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenu, handleMobileMenu, showMenu]);


  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      setShowMenu(isMobileMenu);
    } else {
      setShowMenu(isMobileMenu); 
    }
  }, [isMobileMenu]);

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <>
      <div
        className={`mobile-menu-container ${showMenu ? "show" : ""} ${
          mounted.current ? "with-transition" : ""
        }`}
      >
        <div className="d-flex justify-content-end border-bottom px-3 py-2">
          <button
            className="btn-close"
            onClick={handleMobileMenu}
            aria-label="Close"
          />
        </div>

        <nav className="p-3">
          <ul className="list-unstyled m-0 fw-bold text-uppercase">
            {/* Products */}
            <li className="border-bottom">
              <button
                className="btn w-100 text-start d-flex justify-content-between align-items-center py-3"
                onClick={() => toggleDropdown("products")}
              >
                <span>Products</span>
                <span className="small">
                  {openDropdown === "products" ? "−" : "▾"}
                </span>
              </button>
              <div
                className={`collapse ${
                  openDropdown === "products" ? "show" : ""
                }`}
              >
                <ul className="list-unstyled ps-3 pb-2 fw-normal text-capitalize">
                  <li>
                    <Link
                      href="/"
                      onClick={handleMobileMenu}
                      className="d-block py-1"
                    >
                      Platform
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Industries */}
            <li className="border-bottom">
              <Link
                href="#"
                className="d-block py-3"
                onClick={handleMobileMenu}
              >
                Industries
              </Link>
            </li>

            {/* Resources */}
            <li className="border-bottom">
              <button
                className="btn w-100 text-start d-flex justify-content-between align-items-center py-3"
                onClick={() => toggleDropdown("resources")}
              >
                <span>Resources</span>
                <span className="small">
                  {openDropdown === "resources" ? "−" : "▾"}
                </span>
              </button>
              <div
                className={`collapse ${
                  openDropdown === "resources" ? "show" : ""
                }`}
              >
                <ul className="list-unstyled ps-3 pb-2 fw-normal text-capitalize">
                  <li>
                    <Link
                      href="/page-style-guide"
                      onClick={handleMobileMenu}
                      className="d-block py-1"
                    >
                      Podcast
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/page-elements"
                      onClick={handleMobileMenu}
                      className="d-block py-1"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/page-elements"
                      onClick={handleMobileMenu}
                      className="d-block py-1"
                    >
                      Case Study
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Providers */}
            <li className="border-bottom">
              <button
                className="btn w-100 text-start d-flex justify-content-between align-items-center py-3"
                onClick={() => toggleDropdown("providers")}
              >
                <span>Providers</span>
                <span className="small">
                  {openDropdown === "providers" ? "−" : "▾"}
                </span>
              </button>
              <div
                className={`collapse ${
                  openDropdown === "providers" ? "show" : ""
                }`}
              >
                <ul className="list-unstyled ps-3 pb-2 fw-normal text-capitalize">
                  <li>
                    <Link
                      href="#"
                      onClick={handleMobileMenu}
                      className="d-block py-1"
                    >
                      Network
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        {/* Footer Buttons */}
        <div className="d-flex gap-2 px-3 py-4 border-top">
          <Link href="/login" className="btn btn-outline-dark flex-grow-1">
            Login
          </Link>
          <Link href="https://api.leadconnectorhq.com/widget/form/c3PUsJgtYjyol6QQfUdM" className="btn btn-dark flex-grow-2">
            Book a Demo
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {showMenu && (
        <div className="menu-overlay" onClick={handleMobileMenu}></div>
      )}

      <style jsx>{`
        .mobile-menu-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: #fff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transform: translateY(-100%);
          z-index: 1050;
          opacity: 0;
        }
        .mobile-menu-container.show {
          transform: translateY(0);
          opacity: 1;
        }
        .with-transition {
          transition: transform 0.4s ease, opacity 0.4s ease;
        }
        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1040;
        }
        .btn {
          box-shadow: none !important;
        }
        .btn-dark {
          border-radius: 8px;
          font-weight: 600;
        }
        .btn-outline-dark {
          border-radius: 8px;
        }
      `}</style>
    </>
  );
}
