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

								<div className="mega-menu fix start-50 translate-middle-x">
							<div className="container">
								<div className="row">
									<div className="col-12">
										<div className="mega-menu-content">
											<div className="row">
												<div className="col-4">
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
												</div>
												<div className="col-4">
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
												</div>
										
							
								
												<div className="col-4">
													<div className="mega-menu-list">
														<p className="text-primary fw-bold mb-1 fs-7">STYLE GUIDE</p>
														<ul className="list-unstyled">
															<li><Link className="dropdown-item position-relative z-1" href="">Color  Typography</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Basic elements</Link></li>
														</ul>
													</div>
													<div className="position-relative bg-4 rounded-3 mt-5">
														<img className="rounded-3" src="/assets/imgs/template/bg-card.png" alt="" />
														<div className="position-absolute top-50 start-50 translate-middle z-0">
															<img className="ms-1 mt-2" src="assets/imgs/template/logo.png" alt="limpiar" />
															<p className="fs-7 fw-bold text-900 text-center my-3 text-nowrap">Automated operations<br /> lorem ipsum</p>
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


						
						{/* <div className="dropdown-menu fix">
							<ul className="list-unstyled">
								<li className="position-relative z-1 border-bottom">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/">
										<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
											<path d="M16.1143 9.19978H12.8916V2.14741C12.8916 1.99512 12.7913 1.86072 12.6452 1.81775C12.4977 1.77478 12.3416 1.83287 12.2591 1.96075L5.59417 12.2801C5.52577 12.386 5.52061 12.5204 5.58111 12.6311C5.64127 12.7414 5.75711 12.8102 5.88292 12.8102H9.10558V19.8522C9.10558 20.0045 9.20596 20.1389 9.35205 20.1819C9.38436 20.1912 9.41702 20.196 9.44933 20.196C9.5638 20.196 9.67346 20.1386 9.73808 20.0389L16.403 9.72984C16.4715 9.62397 16.4766 9.48956 16.4161 9.37887C16.356 9.26853 16.2401 9.19978 16.1143 9.19978Z" fill="#A38CFF" />
										</svg>
										<span className="ms-2">
											<span className="d-block fw-bold fs-6">Platform</span>

										</span>
									</Link>
								</li>
						
							</ul>
							<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
							<div className="ellipse-rotate-primary-sm position-absolute top-50 z-0" />
						</div> */}
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
												<div className="col-2">
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
												</div>
												<div className="col-2">
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
												</div>
													<div className="col-2">
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
												</div>
													<div className="col-2">
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
												</div>
												<div className="col-2">
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
												</div>
												<div className="col-2">
													<div className="mega-menu-list">
														<p className="text-primary fw-bold mb-1 fs-7">STYLE GUIDE</p>
														<ul className="list-unstyled">
															<li><Link className="dropdown-item position-relative z-1" href="">Color  Typography</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="">Basic elements</Link></li>
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
						<Link className="nav-link fw-bold d-flex align-items-center" href="#"   >
							Resources
						</Link>
								<div className="dropdown-menu p-4 fix">
							<ul className="list-unstyled">
								<li className="position-relative border-bottom z-1">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/podcast">
										Podcast
									</Link>
								</li>
								<li className="position-relative z-1 border-bottom">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/blog">
										Blog
									</Link>
								</li>
										<li className="position-relative z-1">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/case-study">
										case study
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
