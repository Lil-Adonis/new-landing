
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function PageCaseStudy() {

	return (
		<>

			<Layout >

				{/*Case Studies*/}
				<section className="section-case-studies pt-120 mt-10">
					<div className="container position-relative z-2">
						<div className="text-center">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="limpiar" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What we offers</span>
							</div>
							<h3 className="ds-3 my-3">All Case Studies</h3>
							<p className="fs-5">We help you to bringsuccessfast</p>
						</div>
						<div className="text-center mt-6">
							<div className="p filter-menu-active">
								<Link href="#" className="btn btn-md btn-filter mb-2 me-2 active">All Projects</Link>
								<Link href="#" className="btn btn-md btn-filter mb-2 me-2">SEO Services</Link>
								<Link href="#" className="btn btn-md btn-filter mb-2 me-2">Web Design</Link>
								<Link href="#" className="btn btn-md btn-filter mb-2 me-2">Social</Link>
								<Link href="#" className="btn btn-md btn-filter mb-2 me-2">Marketing</Link>
								<Link href="#" className="btn btn-md btn-filter mb-2 me-2">APP</Link>
								<Link href="#" className="btn btn-md btn-filter mb-2 me-2">Data Analysis</Link>
							</div>
						</div>
					</div>
					<div className="container mt-6">
						<div className="row">
							<div className="col-lg-6">
								<div className="zoom-img position-relative mb-4 d-inline-block z-1">
									<div className="rounded-3 fix">
										<img className=" img-fluid w-100" src="/assets/imgs/project-2/img-7.png" alt="limpiar" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
										<p className="fs-7 text-primary mb-1">InnovateTech Inc.</p>
										<h6>Boosting customer retention: How limpiar System reduced churn by 40% in 3 months</h6>
										<p className="text-900">Armed with these insights, limpiar System implemented a comprehensive engagement strategy focused on personalization</p>
									</Link>
									<Link href="#" className="badge text-primary bg-white-keep px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1">Software Development</Link>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="zoom-img position-relative mb-4 d-inline-block z-1">
									<div className="rounded-3 fix">
										<img className="img-fluid w-100" src="/assets/imgs/project-2/img-8.png" alt="limpiar" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
										<p className="fs-7 text-primary mb-1">InnovateTech Inc.</p>
										<h6>Boosting customer retention: How limpiar System reduced churn by 40% in 3 months</h6>
										<p className="text-900">Armed with these insights, limpiar System implemented a comprehensive engagement strategy focused on personalization</p>
									</Link>
									<Link href="#" className="badge text-primary bg-white-keep px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1">Software Development</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="container mt-4 pt-7 border-top">
						<div className="row">
							{/* prettier-ignore */}
							<div className="text-center col-lg-4 col-md-6">
								<div className="zoom-img position-relative mb-4 d-inline-block z-1">
									<div className="rounded-3 fix">
										<img className="img-fluid w-100" src="/assets/imgs/project-2/img-1.png" alt="limpiar" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
										<p className="fs-7 text-primary mb-1">InnovateTech Inc.</p>
										<h6>Strategic Solutions Initiative</h6>
										<p className="text-900">Streamlining operations and growth strategies for market enhancement.</p>
									</Link>
									<Link href="#" className="badge text-primary bg-white-keep px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1">Software Development</Link>
								</div>
							</div>
							<div className="text-center col-lg-4 col-md-6">
								<div className="zoom-img position-relative mb-4 d-inline-block z-1">
									<div className="rounded-3 fix">
										<img className="img-fluid w-100" src="/assets/imgs/project-2/img-2.png" alt="limpiar" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
										<p className="fs-7 text-primary mb-1">Pioneer Enterprises</p>
										<h6>Innovate Consulting Challenge</h6>
										<p className="text-900">Leveraging consulting practices to solve complex problems.</p>
									</Link>
									<Link href="#" className="badge text-primary bg-white-keep px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1">Consulting</Link>
								</div>
							</div>
							<div className="text-center col-lg-4 col-md-6">
								<div className="zoom-img position-relative mb-4 d-inline-block z-1">
									<div className="rounded-3 fix">
										<img className="img-fluid w-100" src="/assets/imgs/project-2/img-3.png" alt="limpiar" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
										<p className="fs-7 text-primary mb-1">Summit Corp</p>
										<h6>Growth Catalyst Program</h6>
										<p className="text-900">Accelerating business growth through strategic planning.</p>
									</Link>
									<Link href="#" className="badge text-primary bg-white-keep px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1">Financial Advisory</Link>
								</div>
							</div>
							<div className="text-center col-lg-4 col-md-6">
								<div className="zoom-img position-relative mb-4 d-inline-block z-1">
									<div className="rounded-3 fix">
										<img className="img-fluid w-100" src="/assets/imgs/project-2/img-4.png" alt="limpiar" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
										<p className="fs-7 text-primary mb-1">InnovateTech Inc.</p>
										<h6>Strategic Solutions Initiative</h6>
										<p className="text-900">Streamlining operations and growth strategies for market enhancement.</p>
									</Link>
									<Link href="#" className="badge text-primary bg-white-keep px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1">Software Development</Link>
								</div>
							</div>
							<div className="text-center col-lg-4 col-md-6">
								<div className="zoom-img position-relative mb-4 d-inline-block z-1">
									<div className="rounded-3 fix">
										<img className="img-fluid w-100" src="/assets/imgs/project-2/img-5.png" alt="limpiar" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
										<p className="fs-7 text-primary mb-1">Pioneer Enterprises</p>
										<h6>Innovate Consulting Challenge</h6>
										<p className="text-900">Leveraging consulting practices to solve complex problems.</p>
									</Link>
									<Link href="#" className="badge text-primary bg-white-keep px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1">Consulting</Link>
								</div>
							</div>
							<div className="text-center col-lg-4 col-md-6">
								<div className="zoom-img position-relative mb-4 d-inline-block z-1">
									<div className="rounded-3 fix">
										<img className="img-fluid w-100" src="/assets/imgs/project-2/img-6.png" alt="limpiar" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
										<p className="fs-7 text-primary mb-1">Summit Corp</p>
										<h6>Growth Catalyst Program</h6>
										<p className="text-900">Accelerating business growth through strategic planning.</p>
									</Link>
									<Link href="#" className="badge text-primary bg-white-keep px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1">Financial Advisory</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row pt-5 text-start">
							<div className="d-flex justify-content-start align-items-center">
								<nav aria-label="Page navigation example">
									<ul className="pagination gap-2">
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#" aria-label="Previous">
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path className="stroke-dark" d="M9.49554 6.5L4.78125 11L9.49554 15.5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
													<path className="stroke-dark" d="M17.2143 11H5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#">1</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#">2</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#">3</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#">...</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#" aria-label="Next">
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path className="stroke-dark" d="M12.5 6.5L17.2143 11L12.5 15.5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
													<path className="stroke-dark" d="M16.9955 11H4.78125" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</Link>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</section>


			</Layout>
		</>
	)
}