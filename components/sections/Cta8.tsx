'use client'
import CountUp from 'react-countup'

export default function Cta8() {
	return (
		<>
			<section className="section-cta-8 bg-4">
				<div className="container-fluid position-relative section-padding">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-5">
								{/* <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What We offer</span>
								</div> */}
								<h5 className="ds-5 mt-2">The Future of Property Operations is Autonomous</h5>
								<p>Limpiar’s AI-powered platform turns buildings into self-operating ecosystems, reducing costs, increasing uptime, and creating the future of facility management.</p>


								<div className="d-flex pt-3 align-items-center">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
										<div className="icon">
											{/* <img src="/assets/imgs/service-4/icon-1.svg" alt="limpiar" /> */}
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="18" stroke="#0d6efd" strokeWidth="2" fill="rgba(109,77,242,0.08)" />
  <path d="M12 20h16M20 12v16" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round"/>
</svg>
										</div>
									</div>
									<div className="ps-5">
										<h6>AI-Driven Workflows</h6>
										<p>From request to resolution without manual steps.</p>
									</div>
								</div>

								<div className="d-flex pt-3 align-items-center">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
										<div className="icon">
											{/* <img src="/assets/imgs/service-4/icon-2.svg" alt="limpiar" /> */}
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="18" stroke="#0d6efd" strokeWidth="2" fill="rgba(109,77,242,0.08)" />
  <path d="M20 12l8 4v6c0 5-4 8-8 8s-8-3-8-8v-6l8-4z" stroke="#0d6efd" strokeWidth="2" fill="none"/>
  <path d="M17 23l3 3 5-5" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
										</div>
									</div>
									<div className="ps-5">
										<h6>Predictive Maintenance</h6>
										<p>Prevent downtime before it happens.</p>
									</div>
								</div>

                                	<div className="d-flex pt-3 align-items-center">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
										<div className="icon">
											{/* <img src="/assets/imgs/service-4/icon-2.svg" alt="infinia" /> */}
                                            {/* <img src="/assets/imgs/features-1/icon-4.svg" alt="limpiar" /> */}
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="18" stroke="#0d6efd" strokeWidth="2" fill="rgba(109,77,242,0.08)" />
  <circle cx="20" cy="20" r="5" stroke="#0d6efd" strokeWidth="2" fill="none"/>
  <circle cx="10" cy="20" r="2" fill="#0d6efd"/>
  <circle cx="30" cy="20" r="2" fill="#0d6efd"/>
  <circle cx="20" cy="10" r="2" fill="#0d6efd"/>
  <circle cx="20" cy="30" r="2" fill="#0d6efd"/>
  <path d="M20 15v-3M20 25v3M25 20h3M15 20h-3" stroke="#0d6efd" strokeWidth="2"/>
</svg>
										</div>
									</div>
									<div className="ps-5">
										<h6>Vendor Intelligence</h6>
										<p>Match and dispatch the right vendor instantly.</p>
									</div>
								</div>


                                	<div className="d-flex pt-3 align-items-center">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
										<div className="icon">
											{/* <img src="/assets/imgs/service-4/icon-2.svg" alt="infinia" /> */}
                                            {/* <img src="/assets/imgs/features-1/icon-3.svg" alt="limpiar" /> */}

                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="18" stroke="#0d6efd" strokeWidth="2" fill="rgba(109,77,242,0.08)" />
  <rect x="13" y="22" width="3" height="6" fill="#0d6efd"/>
  <rect x="18.5" y="18" width="3" height="10" fill="#0d6efd"/>
  <rect x="24" y="25" width="3" height="3" fill="#0d6efd"/>
  <path d="M20 18c2-4 6-4 8 0" stroke="#0d6efd" strokeWidth="2" fill="none"/>
</svg>
										</div>
									</div>
									<div className="ps-5">
										<h6>Sustainability Metrics</h6>
										<p>Track and achieve your ESG & operational goals.</p>
									</div>
								</div>


							</div>
							<div className="col-lg-6 offset-lg-1 text-center mt-lg-0 mt-8">
								<div className="position-relative z-1 d-inline-block mb-lg-0 mb-8">
									<img className="rounded-4 position-relative z-1" src="/assets/imgs/cta-5/img-1.png" alt="infinia" />
									<div className="alltuchtopdown tag-year position-absolute backdrop-filter bg-primary rounded-4 px-4 py-5 text-center z-1">
										<span className="h2 count fw-black my-0 lh-1 text-white text-nowrap"><span className="odometer" /> <CountUp end={25} enableScrollSpy={true} />+</span>
										<p className="text-white text-nowrap mb-0">Years of Experience</p>
									</div>
									<div className="position-absolute tag-dots z-0 pt-5">
										<img className="alltuchtopdown" src="/assets/imgs/cta-4/vector.svg" alt="infinia" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
