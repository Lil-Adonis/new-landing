// 'use client'
// import Link from 'next/link'
// import { useState } from 'react'
// import PerfectScrollbar from 'react-perfect-scrollbar'

// export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
// 	const [isAccordion, setIsAccordion] = useState(0)

// 	const handleAccordion = (key: any) => {
// 		setIsAccordion(prevState => prevState === key ? null : key)
// 	}
// 	return (
// 		<>
// 			{/* Offcanvas search */}
// 			<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? 'sidebar-visible' : ''}`}>
// 				<div className="mobile-header-wrapper-inner">
// 					<div className="mobile-header-logo">
// 						<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
// 							<img src="assets/imgs/template/logo.png" alt="limpiar" />
							
// 						</Link>
// 						<div className={`burger-icon burger-icon-white border rounded-3 ${isMobileMenu ? 'burger-close' : ''}`} onClick={handleMobileMenu}>
// 							<span className="burger-icon-top" />
// 							<span className="burger-icon-mid" />
// 							<span className="burger-icon-bottom" />
// 						</div>
// 					</div>
// 					<div className="mobile-header-content-area">
// 						<div className="perfect-scroll">
// 							<div className="mobile-menu-wrap mobile-header-border">
// 								<nav>
// 									<ul className="mobile-menu font-heading ps-0">
// 										<li className={`has-children ${isAccordion === 1 ? "active" : ""}`}>
// 											<span className="menu-expand" onClick={() => handleAccordion(1)}>
// 												<i className="arrow-small-down"></i>
// 											</span>
// 											<Link className="active" href="#">Homepages</Link>
// 											<ul className="sub-menu" style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
// 												<li><Link href="/">Home 1 - Business Startup</Link></li>
// 												<li><Link href="/home-2">Home 2 - Application Landing</Link></li>
// 												<li><Link href="/home-3">Home 3 - Marketing Services</Link></li>
// 												<li><Link href="/home-4">Home 4 - IT Services</Link></li>
// 												<li><Link href="/home-5">Home 5 - Consulting Services</Link></li>
// 											</ul>
// 										</li>
// 										<li className={`has-children ${isAccordion === 2 ? "active" : ""}`}>
// 											<span className="menu-expand" onClick={() => handleAccordion(2)}>
// 												<i className="arrow-small-down"></i>
// 											</span>
// 											<Link href="#">About Us</Link>
// 											<ul className="sub-menu" style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
// 												<li><Link href="/page-about">About us v.1</Link></li>
// 												<li><Link href="/page-about-2">About us v.2</Link></li>
// 												<li><Link href="/page-about-3">About us v.3</Link></li>
// 											</ul>
// 										</li>
// 										<li className={`has-children ${isAccordion === 3 ? "active" : ""}`}>
// 											<span className="menu-expand" onClick={() => handleAccordion(3)}>
// 												<i className="arrow-small-down"></i>
// 											</span>
// 											<Link href="#">Our Services</Link>
// 											<ul className="sub-menu" style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
// 												<li><Link href="/page-services-1">Services v.1</Link></li>
// 												<li><Link href="/page-services-2">Services v.2</Link></li>
// 												<li><Link href="/page-services-3">Services v.3</Link></li>
// 												<li><Link href="/page-services-details-1">Services details v.1</Link></li>
// 												<li><Link href="/page-services-details-2">Services details v.2</Link></li>
// 											</ul>
// 										</li>
// 										<li className={`has-children ${isAccordion === 4 ? "active" : ""}`}>
// 											<span className="menu-expand" onClick={() => handleAccordion(4)}>
// 												<i className="arrow-small-down"></i>
// 											</span>
// 											<Link href="#">Our Team</Link>
// 											<ul className="sub-menu" style={{ display: `${isAccordion == 4 ? "block" : "none"}` }}>
// 												<li><Link href="/page-team-1">Our team v.1</Link></li>
// 												<li><Link href="/page-team-2">Our team v.2</Link></li>
// 												<li><Link href="/page-team-3">Our team v.3</Link></li>
// 												<li><Link href="/page-team-4">Our team v.4</Link></li>
// 												<li><Link href="/page-team-5">Our team v.5</Link></li>
// 												<li><Link href="/page-team-6">Our team v.6</Link></li>
// 												<li><Link href="/page-team-detail-1">Team detail v.1</Link></li>
// 												<li><Link href="/page-team-detail-2">Team detail v.2</Link></li>
// 											</ul>
// 										</li>
// 										<li className={`has-children ${isAccordion === 5 ? "active" : ""}`}>
// 											<span className="menu-expand" onClick={() => handleAccordion(5)}>
// 												<i className="arrow-small-down"></i>
// 											</span>
// 											<Link href="#">Features</Link>
// 											<ul className="sub-menu" style={{ display: `${isAccordion == 5 ? "block" : "none"}` }}>
// 												<li><Link href="/page-features-1">Features v.1</Link></li>
// 												<li><Link href="/page-features-2">Features v.2</Link></li>
// 											</ul>
// 										</li>
// 										<li className={`has-children ${isAccordion === 6 ? "active" : ""}`}>
// 											<span className="menu-expand" onClick={() => handleAccordion(6)}>
// 												<i className="arrow-small-down"></i>
// 											</span>
// 											<Link href="#">Pricing</Link>
// 											<ul className="sub-menu" style={{ display: `${isAccordion == 6 ? "block" : "none"}` }}>
// 												<li><Link href="/page-pricing-01">Pricing v.1</Link></li>
// 												<li><Link href="/page-pricing-02">Pricing v.2</Link></li>
// 											</ul>
// 										</li>
// 										<li className={`has-children ${isAccordion === 7 ? "active" : ""}`}>
// 											<span className="menu-expand" onClick={() => handleAccordion(7)}>
// 												<i className="arrow-small-down"></i>
// 											</span>
// 											<Link href="#">Contact Us</Link>
// 											<ul className="sub-menu" style={{ display: `${isAccordion == 7 ? "block" : "none"}` }}>
// 												<li><Link href="/page-contact-1">Contact v.1</Link></li>
// 												<li><Link href="/page-contact-2">Contact v.2</Link></li>
// 												<li><Link href="/page-contact-3">Contact v.3</Link></li>
// 											</ul>
// 										</li>
// 										<li className={`has-children ${isAccordion === 8 ? "active" : ""}`}>
// 											<span className="menu-expand" onClick={() => handleAccordion(8)}>
// 												<i className="arrow-small-down"></i>
// 											</span>
// 											<Link href="#">Blog  News</Link>
// 											<ul className="sub-menu" style={{ display: `${isAccordion == 8 ? "block" : "none"}` }}>
// 												<li><Link href="/page-blog-1">Blog v.1</Link></li>
// 												<li><Link href="/page-blog-2">Blog v.2</Link></li>
// 												<li><Link href="/page-blog-details">Blog details</Link></li>
// 											</ul>
// 										</li>
// 										<li className={`has-children ${isAccordion === 9 ? "active" : ""}`}>
// 											<span className="menu-expand" onClick={() => handleAccordion(9)}>
// 												<i className="arrow-small-down"></i>
// 											</span>
// 											<Link href="#">Case Study</Link>
// 											<ul className="sub-menu" style={{ display: `${isAccordion == 9 ? "block" : "none"}` }}>
// 												<li><Link href="/page-case-study">Case Study</Link></li>
// 												<li><Link href="/page-case-study-details">Case study details</Link></li>
// 											</ul>
// 										</li>
// 										<li className={`has-children ${isAccordion === 10 ? "active" : ""}`}>
// 											<span className="menu-expand" onClick={() => handleAccordion(10)}>
// 												<i className="arrow-small-down"></i>
// 											</span>
// 											<Link href="#">Authentication</Link>
// 											<ul className="sub-menu" style={{ display: `${isAccordion == 10 ? "block" : "none"}` }}>
// 												<li><Link href="/page-register">Register</Link></li>
// 												<li><Link href="/page-login">Sign in</Link></li>
// 											</ul>
// 										</li>
// 										<li className={`has-children ${isAccordion === 11 ? "active" : ""}`}>
// 											<span className="menu-expand" onClick={() => handleAccordion(11)}>
// 												<i className="arrow-small-down"></i>
// 											</span>
// 											<Link href="#">Utilities</Link>
// 											<ul className="sub-menu" style={{ display: `${isAccordion == 11 ? "block" : "none"}` }}>
// 												<li><Link href="/page-work-process">Work Process</Link></li>
// 												<li><Link href="/page-book-a-demo">Book a demo</Link></li>
// 												<li><Link href="/page-integration">Integration</Link></li>
// 												<li><Link href="/page-changelog">Change log</Link></li>
// 												<li><Link href="/page-privacy-policy">Privacy policy</Link></li>
// 												<li><Link href="/page-terms-conditions">Terms conditions</Link></li>
// 												<li><Link href="/page-comming-soon">Comming soon</Link></li>
// 												<li><Link href="/page-404">Error 404</Link></li>
// 											</ul>
// 										</li>
// 										<li className={`has-children ${isAccordion === 12 ? "active" : ""}`}>
// 											<span className="menu-expand" onClick={() => handleAccordion(12)}>
// 												<i className="arrow-small-down"></i>
// 											</span>
// 											<Link href="#">Style Guide</Link>
// 											<ul className="sub-menu" style={{ display: `${isAccordion == 12 ? "block" : "none"}` }}>
// 												<li><Link href="/page-style-guide">Color  Typography</Link></li>
// 												<li><Link href="/page-elements">Basic elements</Link></li>
// 											</ul>
// 										</li>
// 										<li className={`has-children ${isAccordion === 13 ? "active" : ""}`}>
// 											<span className="menu-expand" onClick={() => handleAccordion(13)}>
// 												<i className="arrow-small-down"></i>
// 											</span>
// 											<Link href="#">All Sections</Link>
// 											<ul className="sub-menu" style={{ display: `${isAccordion == 13 ? "block" : "none"}` }}>
// 												<li><Link href="/section-navigation"> Navigation </Link></li>
// 												<li><Link href="/section-hero"> Hero </Link></li>
// 												<li><Link href="/section-logo-cloud"> Logo cloud </Link></li>
// 												<li><Link href="/section-cta"> Call to action </Link></li>
// 												<li><Link href="/section-how-it-work"> How it work </Link></li>
// 												<li><Link href="/section-services"> Services </Link></li>
// 												<li><Link href="/section-team"> Team </Link></li>
// 												<li><Link href="/section-pricing"> Pricing </Link></li>
// 												<li><Link href="/section-faqs"> FAQS </Link></li>
// 												<li><Link href="/section-testimonial"> Testimonials </Link></li>
// 												<li><Link href="/section-blog"> Blog </Link></li>
// 												<li><Link href="/section-newsletter"> Newsletter </Link></li>
// 												<li><Link href="/section-footer"> Footer </Link></li>
// 												<li><Link href="/section-features"> Features </Link></li>
// 												<li><Link href="/section-projects"> Projects </Link></li>
// 												<li><Link href="/section-contact"> Contact </Link></li>
// 												<li><Link href="/section-static"> Static </Link></li>
// 											</ul>
// 										</li>
// 									</ul>
// 								</nav>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	)
// }




'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: { isMobileMenu: boolean, handleMobileMenu: () => void }) {
	const [openItem, setOpenItem] = useState<string | null>(null)

	const toggleItem = (key: string) => {
		setOpenItem(prev => (prev === key ? null : key))
	}

	return (
		<>
			<div className={`mobile-menu-container ${isMobileMenu ? 'show' : ''}`}>
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
								onClick={() => toggleItem("products")}
							>
								<span>Products</span>
								<span className="small">{openItem === "products" ? "−" : "▾"}</span>
							</button>
							<div className={`collapse ${openItem === "products" ? "show" : ""}`}>
								<ul className="list-unstyled ps-3 pb-2 fw-normal text-capitalize">
									<li><Link href="/" onClick={handleMobileMenu} className="d-block py-1">Platform</Link></li>
								</ul>
							</div>
						</li>

						{/* Industries */}
						<li className="border-bottom">
							<Link href="#" className="d-block py-3" onClick={handleMobileMenu}>
								Industries
							</Link>
						</li>

						{/* Resources */}
						<li className="border-bottom">
							<button
								className="btn w-100 text-start d-flex justify-content-between align-items-center py-3"
								onClick={() => toggleItem("resources")}
							>
								<span>Resources</span>
								<span className="small">{openItem === "resources" ? "−" : "▾"}</span>
							</button>
							<div className={`collapse ${openItem === "resources" ? "show" : ""}`}>
								<ul className="list-unstyled ps-3 pb-2 fw-normal text-capitalize">
									<li><Link href="/page-style-guide" onClick={handleMobileMenu} className="d-block py-1">Podcast</Link></li>
									<li><Link href="/page-elements" onClick={handleMobileMenu} className="d-block py-1">Blog</Link></li>
									<li><Link href="/page-elements" onClick={handleMobileMenu} className="d-block py-1">Case Study</Link></li>
								</ul>
							</div>
						</li>

						{/* Providers */}
						<li className="border-bottom">
							<button
								className="btn w-100 text-start d-flex justify-content-between align-items-center py-3"
								onClick={() => toggleItem("providers")}
							>
								<span>Providers</span>
								<span className="small">{openItem === "providers" ? "−" : "▾"}</span>
							</button>
							<div className={`collapse ${openItem === "providers" ? "show" : ""}`}>
								<ul className="list-unstyled ps-3 pb-2 fw-normal text-capitalize">
									<li><Link href="#" onClick={handleMobileMenu} className="d-block py-1">Network</Link></li>
								</ul>
							</div>
						</li>

						{/* Pricing */}
						{/* <li className="border-bottom">
							<Link href="#" className="d-block py-3" onClick={handleMobileMenu}>
								Pricing
							</Link>
						</li> */}
					</ul>
				</nav>

				{/* Footer Buttons */}
				<div className="d-flex gap-2 px-3 py-4 border-top">
		
					<Link href="/login" className="btn btn-outline-dark flex-grow-1">
						Login
					</Link>
					<Link href="/book-demo" className="btn btn-dark flex-grow-2">
						Book a Demo
					</Link>
				</div>
			</div>

			{/* Overlay */}
			{isMobileMenu && <div className="menu-overlay" onClick={handleMobileMenu}></div>}

			<style jsx>{`
				.mobile-menu-container {
					position: fixed;
					top: 0;
					left: 0;
					right: 0;
					background: #fff;
					box-shadow: 0 4px 12px rgba(0,0,0,0.1);
					transform: translateY(-100%);
					transition: transform 0.4s ease, opacity 0.4s ease;
					z-index: 1050;
					opacity: 0;
				}
				.mobile-menu-container.show {
					transform: translateY(0);
					opacity: 1;
				}
				.menu-overlay {
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background: rgba(0,0,0,0.5);
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
	)
}
