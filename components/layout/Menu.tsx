import Link from "next/link"

export default function Menu() {

	return (
		<>

			<div className="d-none d-lg-flex">
				<ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
										<li className="nav-item dropdown  has-min-mega-menu has-mega-menu">
						<Link className="nav-link fw-bold d-flex align-items-center" href="#"   >
							Products
						</Link>

								<div className="mega-menu fix start-40 translate-middle-x">
							<div className="container">
								<div className="row">
									<div className="col-12">
										<div className="mega-menu-content">
											<div className="row">
												<div className="col-4">
													<div className="mega-menu-list">
														<p className="text-primary fw-bold mb-1 fs-7">PLATFORM</p>
														<ul className="list-unstyled">
															<li>
																<Link className="dropdown-item position-relative z-1" href="">Limpiar Platform</Link>
																<p>Your all-in-one hub for autonomous property operations</p>
																</li>
															<li><Link className="dropdown-item position-relative z-1" href="">Limpiar Managed Services</Link>
																<p>Your all-in-one hub for autonomous property operations</p>
															</li>
															<li><Link className="dropdown-item position-relative z-1" href="">Limpiar App Service</Link>
																<p>Your all-in-one hub for autonomous property operations</p>
															</li>
															{/* <li><Link className="dropdown-item position-relative z-1" href="">Our team v.4</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Our team v.5</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Our team v.6</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Team detail v.1</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Team detail v.2</Link></li> */}
														</ul>
													</div>
												</div>
												<div className="col-4">
													<div className="mega-menu-list">
														<p className="text-primary fw-bold mb-1 fs-7">FEATURES</p>
														<ul className="list-unstyled">
															<li><Link className="dropdown-item position-relative z-1" href="">AI-Driven Workflows</Link>
															<p>Automate work orders from request to resolution without manual steps.</p>
															</li>
															<li><Link className="dropdown-item position-relative z-1" href="">Predictive Maintenance</Link>
															<p> Prevent downtime with scheduling and smart inventory insights.</p>
															</li>
															<li><Link className="dropdown-item position-relative z-1" href="">Vendor Intelligence</Link>
															<p>Match, dispatch, and monitor vendors with real-time visibility.</p>
															</li>
												
															{/* <li><Link className="dropdown-item position-relative z-1" href="">Our team v.6</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Team detail v.1</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Team detail v.2</Link></li> */}
														</ul>
													</div>
												</div>
										
							
								
												<div className="col-4">
													<div className="mega-menu-list">
														<p className="text-primary fw-bold mb-1 fs-7">FEATURES</p>
														<ul className="list-unstyled">
																	<li><Link className="dropdown-item position-relative z-1" href="">Sustainability Tracking</Link>
															<p> Automated ESG logs and compliance reporting for greener operations.</p>
															</li>
															<li><Link className="dropdown-item position-relative z-1" href="">Centralized Dashboard</Link>
															<p>
																All your property data, KPIs, and alerts in one simple hub.
															</p>
															</li>
														</ul>
													</div>
													<div className="position-relative bg-4 rounded-3 mt-2">
														<img
															className="rounded-3"
															src="/assets/imgs/template/bg-card.png"
															alt=""
															style={{ maxWidth: "50%" }}
														/>
														<div className="position-absolute top-40 start-50 translate-middle z-0">
															{/* <img className="ms-1 pt-2" src="assets/imgs/template/logo.png" alt="limpiar" /> */}
															<p className="fs-7 pt-2 fw-bold text-900 text-center my-3 text-nowrap">
																Automated operations<br /> made simple
															</p>
															<div className="d-flex mt-3 ms-3">
																<img src="/assets/imgs/other/avatar-1.png" alt="limpiar" />
																<img className="avt-hero" src="/assets/imgs/other/avatar-2.png" alt="limpiar" />
																<img className="avt-hero " src=" assets/imgs/other/avatar-3.png" alt="limpiar" />
															</div>
															<Link href="#" className="btn btn-md btn-gradient fs-8 mt-3 text-nowrap">
																Request Demo
																<svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
																	<path d="M12.5477 11.3147V5.30603H6.53906" stroke="white" strokeWidth="1.06034" strokeLinecap="round" strokeLinejoin="round" />
																	<path d="M12.3707 5.48276L5.125 12.7284" stroke="white" strokeWidth="1.06034" strokeLinecap="round" strokeLinejoin="round" />
																</svg>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="position-absolute top-0 start-50 translate-middle-x z-0">
								<img src="/assets/imgs/team-1/bg-line.png" alt="limpiar" />
							</div>
							<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
							<div className="ellipse-rotate-primary-sm position-absolute top-0 end-0 translate-middle-y z-0" />
						</div>


						
			
					</li>
					<li className="nav-item dropdown  has-mega-menu">
						<Link className="nav-link fw-bold d-flex align-items-center" href="#"   >
							Industries
						</Link>

							<div className="mega-menu fix start-50 translate-middle-x">
							<div className="container">
								<div className="row">
									<div className="col-12">
										<div className="mega-menu-">
											<div className="row">
												<div className="col-3">
													<div className="mega-menu-list">
														<p className="text-primary fw-bold mb-1 fs-7">CATEGORIES</p>
														<ul className="list-unstyled">
															<li><Link className="dropdown-item position-relative z-1" href="">Restaurants</Link>
															<p> Front to back, simplified</p>
															</li>
															<li><Link className="dropdown-item position-relative z-1" href="">Healthcare</Link>
															<p>Compliance made easy</p>
															</li>
															<li><Link className="dropdown-item position-relative z-1" href="">Gyms & Fitness</Link>
															<p>Always operational</p>
															</li>
															{/* <li><Link className="dropdown-item position-relative z-1" href="">Our team v.4</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Our team v.5</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Our team v.6</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Team detail v.1</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Team detail v.2</Link></li> */}
														</ul>
													</div>
												</div>
												<div className="col-3">
													<div className="mega-menu-list">
														<p className="text-primary fw-bold mb-1 fs-7">CATEGORIES</p>
														<ul className="list-unstyled">
															<li><Link className="dropdown-item position-relative z-1" href="">Retail</Link>
															<p>Smarter store ops</p>
															</li>
															<li><Link className="dropdown-item position-relative z-1" href="">Grocery & Convenience</Link>
															<p> Run smoother stores</p>
															</li>
															<li><Link className="dropdown-item position-relative z-1" href="">Hospitality & Medspas</Link>
															<p> Flawless guest experiences</p>
															</li>
															{/* <li><Link className="dropdown-item position-relative z-1" href="">Our team v.4</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Our team v.5</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Our team v.6</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Team detail v.1</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Team detail v.2</Link></li> */}
														</ul>
													</div>
												</div>
													<div className="col-3">
													<div className="mega-menu-list">
														<p className="text-primary fw-bold mb-1 fs-7">CATEGORIES</p>
														<ul className="list-unstyled">
															<li><Link className="dropdown-item position-relative z-1" href="">Education</Link>
															<p> Safe, efficient campuses</p>
															</li>
															<li><Link className="dropdown-item position-relative z-1" href="">Corporate Offices</Link>
															<p> Streamlined workplace ops</p>
															</li>
															<li><Link className="dropdown-item position-relative z-1" href="">Industrial & Warehousing</Link>
															<p> Reduce downtime, boost output</p>
															</li>
														
															{/* <li><Link className="dropdown-item position-relative z-1" href="">Our team v.5</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Our team v.6</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Team detail v.1</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Team detail v.2</Link></li> */}
														</ul>
													</div>
												</div>
													{/* <div className="col-2">
													<div className="mega-menu-list">
														<p className="text-primary fw-bold mb-1 fs-7">OUR TEAM</p>
														<ul className="list-unstyled">
															<li><Link className="dropdown-item position-relative z-1" href="">Our team v.1</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Our team v.2</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Our team v.3</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Our team v.4</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Our team v.5</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Our team v.6</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Team detail v.1</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Team detail v.2</Link></li>
														</ul>
													</div>
												</div> */}
												{/* <div className="col-2">
													<div className="mega-menu-list">
														<p className="text-primary fw-bold mb-1 fs-7">UTILITIES</p>
														<ul className="list-unstyled">
															<li><Link className="dropdown-item position-relative z-1" href="">Work Process</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Book a demo</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Integration</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Change log</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Privacy policy</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Terms conditions</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Comming soon</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Error 404</Link></li>
														</ul>
													</div>
												</div> */}
												<div className="col-2">
													<div className="mega-menu-list">
														<p className="text-primary fw-bold mb-1 fs-7">CATEGORIES</p>
														<ul className="list-unstyled">
															<li><Link className="dropdown-item position-relative z-1" href="">Multi-Family Housing</Link>
															<p> Smarter maintenance at scale</p>
															</li>
														</ul>
													</div>
													{/* <div className="position-relative bg-4 rounded-3 mt-5">
														<img className="rounded-3" src="/assets/imgs/template/bg-card.png" alt="" />
														<div className="position-absolute top-50 start-50 translate-middle z-0">
															<img className="ms-3" src="/assets/imgs/logo/logo-dark.svg" alt="limpiar" />
															<p className="fs-7 fw-bold text-900 text-center my-3 text-nowrap">Multi-layout SaaS  <br /> Startup Website <br /> Template</p>
															<div className="d-flex mt-3 ms-3">
																<img src="/assets/imgs/other/avatar-1.png" alt="limpiar" />
																<img className="avt-hero" src="/assets/imgs/other/avatar-2.png" alt="limpiar" />
																<img className="avt-hero " src=" assets/imgs/other/avatar-3.png" alt="limpiar" />
															</div>
															<Link href="#" className="btn btn-md btn-gradient fs-8 mt-3 text-nowrap">
																Get this now
																<svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
																	<path d="M12.5477 11.3147V5.30603H6.53906" stroke="white" strokeWidth="1.06034" strokeLinecap="round" strokeLinejoin="round" />
																	<path d="M12.3707 5.48276L5.125 12.7284" stroke="white" strokeWidth="1.06034" strokeLinecap="round" strokeLinejoin="round" />
																</svg>
															</Link>
														</div>
													</div> */}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="position-absolute top-0 start-50 translate-middle-x z-0">
								<img src="/assets/imgs/team-1/bg-line.png" alt="limpiar" />
							</div>
							<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
							<div className="ellipse-rotate-primary-sm position-absolute top-0 end-0 translate-middle-y z-0" />
						</div>
					
					</li>
							 <li className="nav-item dropdown menu-item-has-children"> 
							 	{/* <li className="nav-item dropdown has-mega-menu"> */}
						<Link className="nav-link fw-bold d-flex align-items-center" href="#"   >
							Resources
						</Link>

									{/* <div className="mega-menu fix  start-20 ">
							<div className="d-flex flex-wrap gap-2 position-relative z-1">
								<Link href="/section-navigation" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
									Navigation
								
								</Link>
								<Link href="/section-hero" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
									Hero
								
								</Link>
								<Link href="/section-logo-cloud" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
									Logo cloud
								
								</Link>
								<Link href="/section-cta" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
									Call to action
								
								</Link>
								<Link href="/section-how-it-work" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
									How it work
							
								</Link>
								<Link href="/section-services" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
									Services
								
								</Link>
				
							</div>
							<div className="position-absolute bottom-0 end-0 z-0">
								<img src="/assets/imgs/other/bg-line.png" alt="infinia" />
							</div>
							<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
						</div> */}
								<div className="dropdown-menu p-4 fix">
							<ul className="list-unstyled">
								<li className="position-relative border-bottom z-1">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/podcast">
										Blog & Insights
									</Link>
								</li>
								<li className="position-relative z-1 border-bottom pt-2">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/blog">
									Case Studies
									</Link>
								</li>
										<li className="position-relative border-bottom z-1 pt-2">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/case-study">
										Podcast
									</Link>
								</li>
											<li className="position-relative border-bottom z-1 pt-2">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/podcast">
										Guides & Whitepapers
									</Link>
								</li>
											<li className="position-relative border-bottom z-1 pt-2">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/podcast">
									Webinars & Events
									</Link>
								</li>
											<li className="position-relative  z-1 pt-2">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/podcast">
										Help Center
									</Link>
								</li>
							</ul>
							<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
							<div className="ellipse-rotate-primary-sm position-absolute bottom-0 end-0 translate-middle z-0" />
						</div>




					</li>
					<li className="nav-item ">
						<Link className="nav-link fw-bold d-flex align-items-center" href="https://limpiador.limpiar.online/home"   >
							Service network
						</Link>
	
					</li>

				</ul>
			</div>
		</>
	)
}
