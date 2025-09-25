'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function HowItWork1() {

	const [isOpen, setOpen] = useState(false)

	return (
		<>
			<section className="howitwork-1 section-padding position-relative fix">
				<div className="container position-relative z-1">
					<div className="text-center mb-8">
						<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1" data-aos="zoom-in" data-aos-delay={200}>
							<img src="/assets/imgs/features-1/dots.png" alt="limpiar" />
							<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What we do</span>
						</div>
						<h3 className="ds-3 my-3 fw-regular" data-aos="fade-zoom-in" data-aos-delay={100}>Move from <span className="fw-bold">Reactive <br/> </span> to  <span className="fw-bold"> Autonomous</span>  </h3>
						<p className="fs-5 mb-0" data-aos="fade-zoom-in" data-aos-delay={200}>Most facilities react after problems occur. Limpiar’s AI predicts, prevents, and resolves issues automatically, <br/> keeping properties optimized, compliant, and profitable without constant oversight.</p>
					</div>
				</div>
				<div className="position-absolute top-0 start-50 translate-middle-x z-0">
					<img src="/assets/imgs/howitwork-1/img-bg-line.png" alt="limpiar" />
				</div>
				<div className="container position-relative z-1">
					<div className="position-relative">
						<div className="position-lg-absolute top-0 start-0 bottom-0 w-lg-50 d-flex flex-column justify-content-between m-lg-10 pb-lg-0 pb-5 z-1">
							<div className="d-flex feature-item">
								<div className="bg-primary-soft-keep icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
									<div className="icon">
										<img src="/assets/imgs/howitwork-1/icon-1.svg" alt="limpiar" />
									</div>
								</div>
								<div data-aos="fade-zoom-in" data-aos-delay={100}>
									<h5 className="text-lg-white text-900">Property Automation</h5>
									<p className="text-lg-white text-900 opacity-75">Automated task routing, tracking, and resolution.</p>
								</div>
							</div>

							<div className="dashed-line-1 d-none d-lg-block" />

							<div className="d-flex feature-item position-relative z-1">
								<div className="bg-primary-soft-keep icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
									<div className="icon">
										<img src="/assets/imgs/howitwork-1/icon-2.svg" alt="limpiar" />
									</div>
								</div>
								<div data-aos="fade-zoom-in" data-aos-delay={200}>
									<h5 className="text-lg-white text-900">Work Synchronization</h5>
									<p className="text-lg-white text-900 opacity-75"> Real-time coordination between vendors, staff, and assets.</p>
								</div>
							</div>

								<div className="dashed-line-2 d-none d-lg-block" />

							<div className="d-flex feature-item">
								<div className="bg-primary-soft-keep icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
									<div className="icon">
										<img src="/assets/imgs/howitwork-1/icon-3.svg" alt="limpiar" />
									</div>
								</div>
								<div data-aos="fade-zoom-in" data-aos-delay={300}>
									<h5 className="text-lg-white text-900">Mobile Access</h5>
									<p className="text-lg-white text-900 opacity-75">Manage every property from anywhere.</p>
								</div>
							</div>

								<div className="dashed-line-3 d-none d-lg-block pt-[2rem]" />

								<div className="d-flex feature-item position-relative z-1">
								<div className="bg-primary-soft-keep icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
									<div className="icon">
										<img src="/assets/imgs/howitwork-1/icon-2.svg" alt="limpiar" />
									</div>
								</div>
								<div data-aos="fade-zoom-in" data-aos-delay={200}>
									<h5 className="text-lg-white text-900">Predictive AI Scheduling</h5>
									<p className="text-lg-white text-900 opacity-75"> Anticipate maintenance and optimize workforce allocation.</p>
								</div>
							</div>

							


							
						
							
						</div>
						<div className="position-relative d-inline-block">
							<img className="rounded-3 w-100 img-fluid" src="/assets/imgs/howitwork-1/img-bg.png" alt="limpiar" />
							<div className="bg-linear-primary rounded-3 position-absolute top-0 start-0 w-75 h-100" />
							<div className="position-absolute bottom-0 end-0 m-md-8 m-4">
								<div className="d-flex align-items-center justify-content-center">
									<Link href="#" onClick={() => setOpen(true)} scroll={false} className="mb-md-0 mb-3 d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter px-3 py-2 align-self-stretch popup-video hover-up me-3">
										<span className="backdrop-filter me-2 icon-shape icon-md rounded-circle">
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<path className="stroke-dark" d="M5.0978 3.31244L12.0958 6.80342C13.077 7.29449 13.0767 8.69249 12.0954 9.18316L5.09734 12.6927C4.21074 13.136 3.16687 12.4925 3.16687 11.5027L3.16687 4.50219C3.16687 3.51217 4.2112 2.86872 5.0978 3.31244Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</span>
										<span className="fw-bold fs-7 text-900">
											Watch more
										</span>
									</Link>
									<div
										className={`modal-video ${isOpen ? 'modal-video-open' : ''}`}
										style={{
											display: isOpen ? 'block' : 'none',
											position: 'fixed',
											top: 0,
											left: 0,
											width: '100%',
											height: '100%',
											backgroundColor: 'rgba(0,0,0,0.8)',
											zIndex: 9999
										}}
										onClick={() => setOpen(false)}
									>
										<video
											src="/Announcement.mp4"
											controls
											
											style={{
												position: 'absolute',
												top: '50%',
												left: '50%',
												transform: 'translate(-50%, -50%)',
												maxWidth: '90%',
												maxHeight: '90%'
											}}
											onClick={(e) => e.stopPropagation()}
										/>
									</div>
									<Link href="https://api.leadconnectorhq.com/widget/booking/N59Uzph3F1P9QB1CfZLS" className="btn btn-gradient d-none d-md-block rounded-4">
										Get started
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
				<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
			</section>
		</>
	)
}
