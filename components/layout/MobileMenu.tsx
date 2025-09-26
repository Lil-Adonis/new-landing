

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
          <ul className="list-unstyled m-0">
            {/* Products */}
            <li className="border-bottom">
              <button
                className="btn w-100 text-start d-flex justify-content-between align-items-center py-3 fw-bold text-uppercase"
                onClick={() => toggleDropdown("products")}
              >
                <span>Products</span>
                <span className="dropdown-icon">
                  {openDropdown === "products" ? "−" : "▾"}
                </span>
              </button>
              <div
                className={`dropdown-content ${
                  openDropdown === "products" ? "show" : ""
                }`}
              >
                <ul className="list-unstyled ps-3 pb-2 fw-normal text-capitalize">
                  <li>
                    <Link
                      href="/limpiar-platform"
                      onClick={handleMobileMenu}
                      className="d-block py-2 text-decoration-none"
                    >
                      <strong>Limpiar Platform</strong>
                      <small className="d-block text-muted">Your all-in-one hub for autonomous property operations</small>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/managed-services"
                      onClick={handleMobileMenu}
                      className="d-block py-2 text-decoration-none"
                    >
                      <strong>Limpiar Managed Services</strong>
                      <small className="d-block text-muted">Extend your team with trusted cleaning, maintenance, and vendor partners</small>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/limpiar-app"
                      onClick={handleMobileMenu}
                      className="d-block py-2 text-decoration-none"
                    >
                      <strong>Limpiar App Service</strong>
                      <small className="d-block text-muted">Mobile-first tools for internal teams to streamline daily operations</small>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Features */}
            <li className="border-bottom">
              <Link
                href="/features"
                className="d-block py-3 text-decoration-none fw-bold text-uppercase"
                onClick={handleMobileMenu}
              >
                Features
              </Link>
            </li>

            {/* Industries */}
            <li className="border-bottom">
              <Link
                href="/industries"
                className="d-block py-3 text-decoration-none fw-bold text-uppercase"
                onClick={handleMobileMenu}
              >
                Industries
              </Link>
            </li>

            {/* Resources */}
            <li className="border-bottom">
              <button
                className="btn w-100 text-start d-flex justify-content-between align-items-center py-3 fw-bold text-uppercase"
                onClick={() => toggleDropdown("resources")}
              >
                <span>Resources</span>
                <span className="dropdown-icon">
                  {openDropdown === "resources" ? "−" : "▾"}
                </span>
              </button>
              <div
                className={`dropdown-content ${
                  openDropdown === "resources" ? "show" : ""
                }`}
              >
                <ul className="list-unstyled ps-3 pb-2 fw-normal text-capitalize">
                  <li>
                    <Link
                      href="/blog"
                      onClick={handleMobileMenu}
                      className="d-block py-2 text-decoration-none"
                    >
                      Blog & Insights
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/case-study"
                      onClick={handleMobileMenu}
                      className="d-block py-2 text-decoration-none"
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/podcast"
                      onClick={handleMobileMenu}
                      className="d-block py-2 text-decoration-none"
                    >
                      Podcast
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/guide"
                      onClick={handleMobileMenu}
                      className="d-block py-2 text-decoration-none"
                    >
                      Guides & Whitepapers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/podcast"
                      onClick={handleMobileMenu}
                      className="d-block py-2 text-decoration-none"
                    >
                      Webinars & Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      onClick={handleMobileMenu}
                      className="d-block py-2 text-decoration-none"
                    >
                      Help Center
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* About */}
            <li className="border-bottom">
              <Link
                href="/about"
                className="d-block py-3 text-decoration-none fw-bold text-uppercase"
                onClick={handleMobileMenu}
              >
                About
              </Link>
            </li>

            {/* Service network */}
            <li className="border-bottom">
              <Link
                href="https://limpiador.limpiar.online/home"
                className="d-block py-3 text-decoration-none fw-bold text-uppercase"
                onClick={handleMobileMenu}
              >
                Service network
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer with Login Button */}
        <div className="px-3 py-4 border-top bg-light">
          <div className="d-grid">
            <Link 
              href="https://property-manager.limpiar.online/login" 
              className="btn btn-gradient py-3 fw-semibold"
              onClick={handleMobileMenu}
            >
              Login
              <svg
                className="ms-2"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
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
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          transform: translateY(-100%);
          z-index: 1050;
          opacity: 0;
          max-height: 100vh;
          overflow-y: auto;
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
        }
        
        .mobile-menu-container.show {
          transform: translateY(0);
          opacity: 1;
        }
        
        .with-transition {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1040;
          backdrop-filter: blur(4px);
        }
        
        .btn {
          box-shadow: none !important;
          border: none;
          background: transparent;
          color: inherit;
          font-weight: inherit;
          text-transform: inherit;
        }
        
        .btn:hover, .btn:focus, .btn:active {
          background: rgba(0, 0, 0, 0.05) !important;
          color: inherit;
          box-shadow: none !important;
        }
        
        .btn-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
          color: white !important;
          border-radius: 12px !important;
          font-weight: 600 !important;
          transition: all 0.3s ease;
          border: none !important;
        }
        
        .btn-gradient:hover {
          background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3) !important;
        }
        
        .dropdown-content {
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
        }
        
        .dropdown-content.show {
          max-height: 500px;
          opacity: 1;
        }
        
        .dropdown-icon {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
          color: #6c757d;
        }
        
        .border-bottom {
          border-bottom: 1px solid #e9ecef !important;
        }
        
        .border-bottom:last-child {
          border-bottom: none !important;
        }
        
        .btn-close {
          background-size: 20px;
          opacity: 0.7;
          transition: opacity 0.2s ease;
        }
        
        .btn-close:hover {
          opacity: 1;
        }
        
        .bg-light {
          background-color: #f8f9fa !important;
        }
        
        a {
          color: #333;
          transition: color 0.2s ease;
        }
        
        a:hover {
          color: #667eea;
        }
        
        small {
          font-size: 0.8rem;
          line-height: 1.3;
        }
      `}</style>
    </>
  );
}