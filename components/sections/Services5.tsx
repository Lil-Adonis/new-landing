'use client'
import Isotope from 'isotope-layout';
import { useEffect, useRef, useState, useCallback } from 'react';

export default function Services5() {
	const isotope = useRef<Isotope | null>(null);
	const [filterKey, setFilterKey] = useState<string>('*');

	useEffect(() => {
		if (typeof window !== 'undefined') {
			isotope.current = new Isotope('.masonary-active', {
				itemSelector: '.filter-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.filter-item',
				},
			});
		}
	}, []);

	useEffect(() => {
		if (isotope.current) {
			isotope.current.arrange({ filter: filterKey === '*' ? '*' : `.${filterKey}` });
		}
	}, [filterKey]);

	const handleFilterKeyChange = useCallback((key: string) => () => {
		setFilterKey(key)
	}, [])

	const activeBtn = (value: string) => (value === filterKey ? "active btn btn-md btn-filter mb-2 me-2" : "btn btn-md btn-filter mb-2 me-2")

	return (
		<>

			{/* Services 5 */}
			<section className="section-team-1 position-relative fix section-padding">
				<div className="container position-relative z-2">
					<div className="text-center">
						<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
							<img src="assets/imgs/features-1/dots.png" alt="limpiar" />
							<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What we offers</span>
						</div>
						<h3 className="ds-3 my-3">Expert insights & real-world results</h3>
						<p className="fs-5"> Stay ahead with AI-driven trends, automation strategies, and proven <br/> outcomes in property operations, maintenance, and vendor management. </p>
					</div>
					{/* <div className="text-center mt-6">
						<div className="button-group filter-button-group filter-menu-active">
							<button className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All </button>
							<button className={activeBtn("seo")} onClick={handleFilterKeyChange("seo")}>insights</button>
							<button className={activeBtn("webdesign")} onClick={handleFilterKeyChange("webdesign")}>Case studies</button>
							<button className={activeBtn("social")} onClick={handleFilterKeyChange("social")}>Updates</button>
						</div>
					</div> */}
				</div>
				<div className="container mt-6">
					<div className="masonary-active justify-content-between row">
						<div className="grid-sizer" />
						<div className="filter-item col-12 col-md-4 seo marketing">
							<div className="project-item zoom-img rounded-2 fix position-relative">
								<img className="rounded-2" src="assets/imgs/project-1/img-1.png" alt="limpiar" />
								<a href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 ">
									<span className="shadow-sm d-flex align-items-center bg-white-keep d-inline-flex rounded-pill px-2 py-1 mb-3">
										<span className="bg-primary fs-9 fw-bold rounded-pill px-2 py-1 text-white">Get</span>
										<span className="fs-7 fw-medium text-primary mx-2">Free Update</span>
										<svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
											<path d="M10.3125 5.5625L14.4375 9.5L10.3125 13.4375" stroke="#6D4DF2" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M14.25 9.5H3.5625" stroke="#6D4DF2" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</span>
									<h5 className="text-700">Automated work order flows</h5>
									<p className="fs-7 mb-0">See how Ai eliminate manual steps and streamline muti-site operations for greater efficiency</p>
								</a>
							</div>
						</div>

						
						{/* <div className="filter-item col-12 col-md-4 webdesign dataanalysis seo">
							<div className="project-item zoom-img rounded-2 fix position-relative">
								<img className="rounded-2" src="assets/imgs/project-1/img-2.png" alt="limpiar" />
								<a href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 ">
									<span className="shadow-sm d-flex align-items-center bg-white-keep d-inline-flex rounded-pill px-2 py-1 mb-3">
										<span className="bg-primary fs-9 fw-bold rounded-pill px-2 py-1 text-white">Get</span>
										<span className="fs-7 fw-medium text-primary mx-2">Free Update</span>
										<svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
											<path d="M10.3125 5.5625L14.4375 9.5L10.3125 13.4375" stroke="#6D4DF2" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M14.25 9.5H3.5625" stroke="#6D4DF2" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</span>
									<h5 className="text-700">Predictive maintanace at scale</h5>
									<p className="fs-7 mb-0">Discover how proactive scheduling and real time alert reduce downtime and extend asset life</p>
								</a>
							</div>
						</div> */}

						<div className="filter-item col-12 col-md-4 social marketing">
							<div className="project-item zoom-img rounded-2 fix position-relative">
								<img className="rounded-2" src="assets/imgs/project-1/img-3.png" alt="limpiar" />
								<a href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 ">
									<span className="shadow-sm d-flex align-items-center bg-white-keep d-inline-flex rounded-pill px-2 py-1 mb-3">
										<span className="bg-primary fs-9 fw-bold rounded-pill px-2 py-1 text-white">Get</span>
										<span className="fs-7 fw-medium text-primary mx-2">Free Update</span>
										<svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
											<path d="M10.3125 5.5625L14.4375 9.5L10.3125 13.4375" stroke="#6D4DF2" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M14.25 9.5H3.5625" stroke="#6D4DF2" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</span>
									<h5 className="text-700">Inventory forcasting in action</h5>
									<p className="fs-7 mb-0">Ensure automated tracking that ensures parts availability and optimizes supply chain management.</p>
								</a>
							</div>
						</div>


						<div className="filter-item col-12 col-md-4 marketing app dataanalysis seo">
							<div className="project-item zoom-img rounded-2 fix position-relative">
								<img className="rounded-2" src="assets/imgs/project-1/img-4.png" alt="limpiar" />
								<a href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 ">
									<span className="shadow-sm d-flex align-items-center bg-white-keep d-inline-flex rounded-pill px-2 py-1 mb-3">
										<span className="bg-primary fs-9 fw-bold rounded-pill px-2 py-1 text-white">Get</span>
										<span className="fs-7 fw-medium text-primary mx-2">Free Update</span>
										<svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
											<path d="M10.3125 5.5625L14.4375 9.5L10.3125 13.4375" stroke="#6D4DF2" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M14.25 9.5H3.5625" stroke="#6D4DF2" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</span>
									<h5 className="text-700">Ai powered vendor dispatch</h5>
									<p className="fs-7 mb-0">learn how intelligent vendor selection accelerates resonse and improves service quality</p>
								</a>
							</div>
						</div>


						<div className="filter-item col-12 col-md-4 grid-item--height2 app dataanalysis">
							<div className="project-item zoom-img rounded-2 fix position-relative">
								<img className="rounded-2" src="assets/imgs/project-1/img-5.png" alt="limpiar" />
								<a href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 ">
									<span className="shadow-sm d-flex align-items-center bg-white-keep d-inline-flex rounded-pill px-2 py-1 mb-3">
										<span className="bg-primary fs-9 fw-bold rounded-pill px-2 py-1 text-white">Get</span>
										<span className="fs-7 fw-medium text-primary mx-2">Free Update</span>
										<svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
											<path d="M10.3125 5.5625L14.4375 9.5L10.3125 13.4375" stroke="#6D4DF2" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M14.25 9.5H3.5625" stroke="#6D4DF2" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</span>
									<h5 className="text-700">Seamless work order automation</h5>
									<p className="fs-7 mb-0">Automated routing removes bottlenecks and ensures every request is handeled on time </p>
								</a>
							</div>
						</div>

						<div className="filter-item col-12 col-md-4 social grid-item--width2">
							<div className="project-item zoom-img rounded-2 fix position-relative">
								<img className="rounded-2" src="assets/imgs/project-1/img-6.png" alt="limpiar" />
								<a href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 ">
									<span className="shadow-sm d-flex align-items-center bg-white-keep d-inline-flex rounded-pill px-2 py-1 mb-3">
										<span className="bg-primary fs-9 fw-bold rounded-pill px-2 py-1 text-white">Get</span>
										<span className="fs-7 fw-medium text-primary mx-2">Free Update</span>
										<svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
											<path d="M10.3125 5.5625L14.4375 9.5L10.3125 13.4375" stroke="#6D4DF2" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M14.25 9.5H3.5625" stroke="#6D4DF2" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</span>
									<h5 className="text-700">Realtime inventory visibility</h5>
									<p className="fs-7 mb-0">See how dashboard provide actionable data for multi-site inventory management</p>
								</a>
							</div>
						</div>


					


						


					



						




					





						





					




						



					




					

					








					</div>




					
				</div>
				{/* <div className="container">
					<div className="row mt-6">
						<div className="col-lg-7">
							<div className="d-flex align-items-center justify-content-lg-end justify-content-center">
								<a href="#" className="btn btn-gradient">
									Get Free Quote
									<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</a>
								<a href="#" className="ms-5 text-decoration-underline fw-bold">How We Work</a>
							</div>
						</div>
					</div>
				</div> */}
				<div className="position-absolute top-0 start-50 translate-middle-x z-0">
					<img src="assets/imgs/service-2/bg-line.png" alt="limpiar" />
				</div>
				<div className="rotate-center ellipse-rotate-success position-absolute z-1" />
				<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
			</section>


		</>
	)
}
