import Link from "next/link"

export default function Menu() {

	return (
		<>

			<div className="d-none d-lg-flex">
				<ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
										<li className="nav-item dropdown menu-item-has-children">
						<Link className="nav-link fw-bold d-flex align-items-center" href="#"   >
							Products
						</Link>
						<div className="dropdown-menu fix">
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
						</div>
					</li>
					<li className="nav-item  ">
						<Link className="nav-link fw-bold d-flex align-items-center" href="#"   >
							Industries
						</Link>
					
					</li>
							 <li className="nav-item dropdown menu-item-has-children"> 
						<Link className="nav-link fw-bold d-flex align-items-center" href="#"   >
							Resources
						</Link>
								<div className="dropdown-menu p-4 fix">
							<ul className="list-unstyled">
								<li className="position-relative border-bottom z-1">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/page-style-guide">
										Podcast
									</Link>
								</li>
								<li className="position-relative z-1 border-bottom">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/page-elements">
										Blog
									</Link>
								</li>
										<li className="position-relative z-1">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/page-elements">
										case study
									</Link>
								</li>
							</ul>
							<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
							<div className="ellipse-rotate-primary-sm position-absolute bottom-0 end-0 translate-middle z-0" />
						</div>




					</li>
					<li className="nav-item ">
						<Link className="nav-link fw-bold d-flex align-items-center" href="#"   >
							Service network
						</Link>
	
					</li>

				</ul>
			</div>
		</>
	)
}
