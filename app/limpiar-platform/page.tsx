"use client";
import React from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'

const page = () => {

    	const swiperOptions = {
		slidesPerView: 4,
		spaceBetween: 30,
		slidesPerGroup: 1,
		centeredSlides: false,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		breakpoints: {
			1200: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	}
  return (
    <Layout>

        {/* <section className="section-cta-8 bg-4 section-padding-mini">
          <div className="container-fluid position-relative section-padding-platform">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <h5 className="ds-5 mt-2">
                    The Operating System for Property Operations.
                  </h5>
                  <p>
                    Limpiar's Ai-Powered Platform automates facility management
                    so your properties run themselves.
                  </p>
                  <div className="pt-3">
                    <Link
                      href="/book-demo"
                      className="btn btn-primary"
                      style={{
                        minWidth: 180,
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        padding: "0.75rem 1.5rem",
                        borderRadius: "0.5rem",
                        boxShadow: "0 2px 8px rgba(0,123,255,0.12)",
                        display: "inline-block",
                        textAlign: "center",
                      }}
                    >
                      Book a Demo
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1 text-center mt-lg-0 pt-8">
                  <div className="position-relative z-1 d-inline-block mb-lg-0 mb-8">
                    <img
                      className="rounded-4 position-relative z-1"
                      src="/hero-1.png"
                      alt="limpiar"
                    />

                    <div className="position-absolute tag-dots z-0 pt-5">
                      <img
                        className="alltuchtopdown"
                        src="/assets/imgs/cta-4/vector.svg"
                        alt="limpiar"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        		<section className="section-testimonial-13 position-relative section-padding fix">
					<div className="container position-relative z-1">
						<div className="row pb-9 ">
							<div className="col-lg-7 mx-lg-auto">
								<div className="text-center mb-lg-0 mb-5 section-padding">
									<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
										<img src="/assets/imgs/features-1/dots.png" alt="limpiar" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Limpiar platform</span>
									</div>
									<h5 className="ds-5 my-3 fw-regular"> <span className="fw-bold">The Operating System for Property Operations. <br className="d-none d-md-inline" /> </span>   <span className="fw-bold"></span></h5>
									<p className="fs-5 mb-0 text-500">Limpiar's Ai-Powered Platform automates facility management
                    so your properties run themselves.</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-8">
								<div className="position-relative mb-lg-0 mb-8 fix">
									<div className="zoom-img rounded-4 fix">
										<img src="/Variety.png" alt="limpiar" />
									</div>
									<div className="position-absolute alltuchtopdown bottom-0 start-0 m-md-5 backdrop-filter rounded-4 px-7 py-4 text-center z-1">
										<p className="pt-2">Loved by over 2k <br /> Facility Managers</p>
										<div className="d-flex align-items-center justify-content-center py-4">
											<img src="/assets/imgs/features-3/avatar-1.png" alt="limpiar" />
											<img className="avt-hero z-1" src="/assets/imgs/features-3/avatar-2.png" alt="limpiar" />
											<img className="avt-hero z-0" src=" assets/imgs/features-3/avatar-3.png" alt="limpiar" />
										</div>
										<div className="d-flex align-items-center justify-content-center">
											<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
												<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
												<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
												<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
												<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
												<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="row flex-lg-column">
									<div className="col-md-6 col-lg-12">
										<div className="backdrop-filter bg-linear-2 rounded-4 px-6 py-4 z-1">
											<div className="d-flex align-items-center justify-content-between">
                        <div className="my-lg-3 text-center">
                          <span className="h2 count fw-black mb-0 lh-1 text-white text-nowrap">
                            <CountUp end={92} enableScrollSpy={true} />%
                          </span>
                          <p className="text-white text-nowrap border-opacity-50 border-white pb-3 mb-3">Faster Orders</p>
                          <span className="h2 count fw-black my-0 lh-1 text-white text-nowrap">
                            <CountUp end={37} enableScrollSpy={true} />%
                          </span>
                          <p className="text-white text-nowrap mb-0">Cost Saved</p>
                        </div>
                        <div className="my-lg-3 text-center">
                          <span className="h2 count fw-black mb-0 lh-1 text-white text-nowrap">
                            +<CountUp end={500} enableScrollSpy={true} />k
                          </span>
                          <p className="text-white text-nowrap border-opacity-50 border-white pb-3 mb-3">Jobs Done</p>
                          <span className="h2 count fw-black my-0 lh-1 text-white text-nowrap">
                            <CountUp end={15} enableScrollSpy={true} />
                          </span>
                          <p className="text-white text-nowrap mb-0">Countries</p>
                        </div>
											</div>
										</div>
									</div>
									<div className="col-md-6 col-lg-12">
										<div className="zoom-img rounded-4 fix d-inline-block mt-4 mt-lg-4 mt-md-0 h-100">
											<img className="h-100" src="/assets/imgs/cta-13/img-2.png" alt="limpiar" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/service-2/bg-line.png" alt="limpiar" />
					</div>
					<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
					<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
				</section>



        			<section className="section-services-3  section-padding">
					<div className="container position-relative z-2">
						<div className="text-center">
							{/* <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="limpiar" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What we offers</span>
							</div> */}
							<h3 className="ds-3 my-3 fw-regular"> <span className=" fw-bold"> Platform Features <br className="d-lg-block d-none" /> </span></h3>
						</div>
						<div className="row mt-6 position-relative">
							<Swiper {...swiperOptions}
								className="swiper slider-2 px-1"
								modules={[Keyboard, Autoplay, Pagination, Navigation]}
							>
								<div className="swiper-wrapper">
									<SwiperSlide className="swiper-slide">
										<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
											<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
												<div className="icon">
													<img src="/assets/imgs/service-3/icon-1.svg" alt="limpiar" />
												</div>
											</div>
											<h5 className="my-3">Ai driven Workflows</h5>
											<p className="mb-6">From request to resolution, streamline every step with automation that eliminates delays and manual effort.</p>
											{/* <Link href="#" className="text-primary fs-7 fw-bold">
												Learn More
												<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
													<g clipPath="url(#clip0_399_9647)">
														<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
													</g>
													<defs>
														<clipPath>
															<rect width={18} height={18} fill="white" transform="translate(0.5)" />
														</clipPath>
													</defs>
												</svg>
											</Link> */}
											<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
											<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
												<div className="icon">
													<img src="/assets/imgs/service-3/icon-2.svg" alt="limpiar" />
												</div>
											</div>
											<h5 className="my-3">Predictive Maintenance</h5>
											<p className="mb-6">Stay ahead of costly breakdowns with AI that monitors asset health and predicts failures before they happen.</p>
											{/* <Link href="#" className="text-primary fs-7 fw-bold">
												Learn More
												<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
													<g clipPath="url(#clip0_399_9647)">
														<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
													</g>
													<defs>
														<clipPath>
															<rect width={18} height={18} fill="white" transform="translate(0.5)" />
														</clipPath>
													</defs>
												</svg>
											</Link> */}
											<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
											<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
												<div className="icon">
													<img src="/assets/imgs/service-3/icon-3.svg" alt="limpiar" />
												</div>
											</div>
											<h5 className="my-3">Vendor Intelligence</h5>
											<p className="mb-6">Easily manage vendors with transparency into performance, compliance, and costs.</p>
											{/* <Link href="#" className="text-primary fs-7 fw-bold">
												Learn More
												<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
													<g clipPath="url(#clip0_399_9647)">
														<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
													</g>
													<defs>
														<clipPath>
															<rect width={18} height={18} fill="white" transform="translate(0.5)" />
														</clipPath>
													</defs>
												</svg>
											</Link> */}
											<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
											<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
												<div className="icon">
													<img src="/assets/imgs/service-3/icon-1.svg" alt="limpiar" />
												</div>
											</div>
											<h5 className="my-3">Sustainability Tracking</h5>
											<p className="mb-6">Measure, report, and improve sustainability metrics across your properties.</p>
											{/* <Link href="#" className="text-primary fs-7 fw-bold">
												Learn More
												<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
													<g clipPath="url(#clip0_399_9647)">
														<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
													</g>
													<defs>
														<clipPath>
															<rect width={18} height={18} fill="white" transform="translate(0.5)" />
														</clipPath>
													</defs>
												</svg>
											</Link> */}
											<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
											<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
												<div className="icon">
													<img src="/assets/imgs/service-3/icon-1.svg" alt="limpiar" />
												</div>
											</div>
											<h5 className="my-3">Centralized Dashboard</h5>
											<p className="mb-6">All your property operations, in one simple view.</p>
											{/* <Link href="#" className="text-primary fs-7 fw-bold">
												Learn More
												<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
													<g clipPath="url(#clip0_399_9647)">
														<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
													</g>
													<defs>
														<clipPath>
															<rect width={18} height={18} fill="white" transform="translate(0.5)" />
														</clipPath>
													</defs>
												</svg>
											</Link> */}
											<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
											<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
												<div className="icon">
													<img src="/assets/imgs/service-3/icon-2.svg" alt="limpiar" />
												</div>
											</div>
											<h5 className="my-3">Control</h5>
											<p className="mb-6">Access data you need to make informed decisions and maintain full control over every aspect of your property operations.</p>
											{/* <Link href="#" className="text-primary fs-7 fw-bold">
												Learn More
												<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
													<g clipPath="url(#clip0_399_9647)">
														<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
													</g>
													<defs>
														<clipPath>
															<rect width={18} height={18} fill="white" transform="translate(0.5)" />
														</clipPath>
													</defs>
												</svg>
											</Link> */}
											<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
										</div>
									</SwiperSlide>
							
								</div>
							</Swiper>
							<div className="swiper-button-prev d-none d-lg-flex shadow-2 position-absolute top-50 translate-middle-y bg-white ms-lg-7">
								<i className="bi bi-arrow-left" />
							</div>
							<div className="swiper-button-next d-none d-lg-flex shadow-2 position-absolute top-50 translate-middle-y bg-white">
								<i className="bi bi-arrow-right" />
							</div>
						</div>
					</div>
				</section>

        <section className="howitwork-2 section-padding position-relative fix">
          <div className="container position-relative z-1">
            <div className="text-center mb-8">
              <div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
                <img src="/assets/imgs/features-1/dots.png" alt="limpiar" />
                <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                  working process
                </span>
              </div>
              <h3 className="ds-3 my-3 fw-black">How It Works</h3>
              <p className="fs-5 mb-0">
                Connect, Automate and Optimize Your Operations
              </p>
            </div>
          </div>
          <div className="position-absolute top-0 start-50 translate-middle-x z-0">
            <img src="/assets/imgs/howitwork-2/img-bg-line.png" alt="limpiar" />
          </div>
          <div className="container">
            <div className="row position-relative justify-content-center">
              <div className="col-lg-4 text-center px-md-10">
                <div className="card-service-4 text-center mt-2">
                  <div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
                    <div className="icon">
                      <img
                        src="/assets/imgs/howitwork-2/icon-1.svg"
                        alt="limpiar"
                      />
                    </div>
                  </div>
                  <h5 className="my-3">Connect</h5>
                  <p className="mb-6">
                   Connect with vetted service providers on one single platform.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-center px-md-10">
                <div className="card-service-4 text-center mt-2">
                  <div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
                    <div className="icon">
                      <img
                        src="/assets/imgs/howitwork-2/icon-2.svg"
                        alt="limpiar"
                      />
                    </div>
                  </div>
                  <h5 className="my-3">Automate</h5>
                  <p className="mb-6">
                  Leverage our AI-driven workflows to automate routine and respond to operations instantly.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-center px-md-10">
                <div className="card-service-4 text-center mt-2">
                  <div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
                    <div className="icon">
                      <img
                        src="/assets/imgs/howitwork-2/icon-3.svg"
                        alt="limpiar"
                      />
                    </div>
                  </div>
                  <h5 className="my-3">Optimise</h5>
                  <p className="mb-6">
                    Use the power of our data analytics to continuously improve your property operations performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="navigation-arrow-1 d-none d-lg-block position-absolute top-50">
              <img src="/assets/imgs/howitwork-2/arrow-1.png" alt="limpiar" />
            </div>
            <div className="navigation-arrow-2 d-none d-lg-block position-absolute">
              <img src="/assets/imgs/howitwork-2/arrow-2.png" alt="limpiar" />
            </div>
            <div className="row">
              <div className="text-center mt-6">
                <p className="text-900 fw-bold">
                  {" "}
                  Need more help? Go to our{" "}
                  <Link
                    href="/contact"
                    className="text-primary text-decoration-underline"
                  >
                    Support Center
                  </Link>
                </p>
              </div>
            </div>
            <div className="bouncing-blobs-container">
              <div className="bouncing-blobs-glass" />
              <div className="bouncing-blobs">
                <div className="bouncing-blob bouncing-blob--green" />
                <div className="bouncing-blob bouncing-blob--primary" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-static-1 position-relative fix z-0 section-padding">
          <div className="container">
            <div className="inner">
              <div className="row justify-content-between">
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="counter-item-cover counter-item">
                    <div className="content text-center mx-auto">
                      <h6>
                        Faster <br /> Work orders
                      </h6>
                      <span className="h1 count fw-black text-primary my-0">
                        <span className="odometer" />
                        <CountUp end={92} enableScrollSpy={true} />
                        <span>%</span>
                      </span>
                      {/* <p className="fs-5">New accounts</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="counter-item-cover counter-item">
                    <div className="content text-center mx-auto">
                      <h6>
                        Cost <br /> Savings
                      </h6>
                      <span className="h1 count fw-black text-primary my-0">
                        <span className="odometer" />
                        <CountUp end={37} enableScrollSpy={true} />
                             <span>%</span>
                      </span>
                      {/* <p className="fs-5">Finished projects</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="counter-item-cover counter-item">
                    <div className="content text-center mx-auto">
                      <h6>
                        Jobs <br /> processed
                      </h6>
                      <span className="h1 count fw-black text-primary my-0">
                        +<span className="odometer" />
                        <CountUp end={500} enableScrollSpy={true} />
                         <span>k</span>
                      </span>
                          
                      {/* <p className="fs-5">Skilled experts</p> */}
                    </div>
                  </div>
                </div>
                {/* <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="counter-item-cover counter-item">
                    <div className="content text-center mx-auto">
                      <h6>
                        Increase internet <br /> awareness
                      </h6>
                      <span className="h1 count fw-black text-primary my-0">
                        +<span className="odometer" />
                        <CountUp end={168} enableScrollSpy={true} />
                        <span>k</span>
                      </span>
                      <p className="fs-5">Media posts</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section className="section-logo-cloud section-logo-cloud-5 position-relative">
          <div className="container-fluid pt-110 pb-110 mt-lg-0 border-top border-bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-3 pb-lg-0 pb-8">
                  <h4 className="text-nowrap ">
                    Industries<br />
                    We serve
                  </h4>
                  {/* <p className="pt-2 pb-4">
                    We helped these brands turn online assessments into success
                    stories.{" "}
                  </p> */}
                  <Link
                    href="https://api.leadconnectorhq.com/widget/form/c3PUsJgtYjyol6QQfUdM"
                    className="mt-5 shadow-1 btn text-start bg-white d-inline-block text-primary hover-up"
                  >
                    Request a demo
                    <svg
                      className="ms-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={14}
                      viewBox="0 0 24 14"
                      fill="none"
                    >
                      <path
                        className="fill-dark"
                        d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="col-lg-9 ps-lg-8 ">
                  <div className="py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                   <img
                    className="rounded-4"
                    src="/rimberio-fit.webp"
                    alt="limpiar"
                    style={{ height: 100, width: 100 }}
                  />
                  </div>
                  <div className=" py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                    <img
                      className="rounded-4"
                      src="/rimberio-rest.webp"
                      alt="limpiar"
                      style={{ height: 100, width: 100 }}
                    />
                  </div>
                  <div className=" py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                      <img
                    className="rounded-4"
                    src="/restaurant.webp"
                    alt="limpiar"
                    style={{ height: 80, width: 100 }}
                  />
                  </div>
                  <div className=" py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                    <img
                    className="rounded-4"
                    src="/underground.png"
                    alt="limpiar"
                    style={{ height: 100, width: 100 }}
                  />
                  </div>
                  <div className=" py-4 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                    {/* <img src="/assets/imgs/logo-cloud-3/logo-5.svg" alt="limpiar"> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={95}
                      height={16}
                      viewBox="0 0 95 16"
                      fill="none"
                    >
                      <path
                        d="M50.3764 0.182129C45.952 0.182129 42.3623 3.63852 42.3623 7.90437C42.3623 12.4397 45.796 15.83 50.3764 15.83C54.8424 15.83 58.3686 12.3949 58.3686 7.99341C58.3686 3.61815 54.866 0.182129 50.3764 0.182129Z"
                        fill="url(#paint0_linear_815_29731)"
                      />
                      <path
                        className="fill-dark"
                        d="M4.87963 0.463976H0.571289V15.4912H4.85722C7.13112 15.4912 8.77566 14.9523 10.2183 13.7573C11.93 12.3377 12.9452 10.1971 12.9452 7.98487C12.9452 3.54822 9.63081 0.463976 4.87963 0.463976ZM8.30604 11.7503C7.37961 12.5862 6.18694 12.9473 4.29158 12.9473H3.50423V3.00848H4.29158C6.18694 3.00848 7.33392 3.34687 8.30604 4.22471C9.31977 5.12613 9.9244 6.52189 9.9244 7.96334C9.9244 9.40769 9.31977 10.8523 8.30604 11.7503ZM14.2982 15.4912H17.2262V0.463976H14.2982V15.4912ZM24.3947 6.22831C22.635 5.57625 22.117 5.1462 22.117 4.3379C22.117 3.3908 23.0391 2.67037 24.3031 2.67037C25.1818 2.67037 25.9028 3.03059 26.6712 3.88428L28.2014 1.88214C26.9398 0.7756 25.4303 0.213163 23.7837 0.213163C21.1275 0.213163 19.098 2.06167 19.098 4.51539C19.098 6.59027 20.0436 7.64822 22.7935 8.64216C23.9434 9.04573 24.528 9.31488 24.8216 9.49877C25.4073 9.88197 25.7015 10.4208 25.7015 11.0514C25.7015 12.2699 24.7317 13.1699 23.4229 13.1699C22.0257 13.1699 20.9002 12.4722 20.2237 11.1654L18.3333 12.9927C19.6825 14.9727 21.3052 15.8543 23.5384 15.8543C26.5802 15.8543 28.7196 13.8237 28.7196 10.9178C28.7196 8.52898 27.7307 7.44658 24.3947 6.22831ZM29.6432 7.98487C29.6432 12.4061 33.1144 15.8302 37.5772 15.8302C38.8389 15.8302 39.9204 15.5808 41.2513 14.9523V11.5029C40.0778 12.6758 39.0411 13.1478 37.7111 13.1478C34.7598 13.1478 32.6628 11.0066 32.6628 7.96334C32.6628 5.08045 34.8253 2.80422 37.5772 2.80422C38.9721 2.80422 40.033 3.29973 41.2513 4.49386V1.04474C39.9669 0.393271 38.9061 0.125 37.6442 0.125C33.204 0.125 29.6432 3.61834 29.6432 7.98487ZM65.0005 10.5582L60.9893 0.463976H57.7892L64.1686 15.875H65.7448L72.2357 0.463976H69.0592L65.0005 10.5582ZM73.568 15.4912H81.8821V12.9473H76.4972V8.88832H81.6761V6.34382H76.4972V3.00848H81.8821V0.463976H73.568V15.4912ZM93.4844 4.89888C93.4844 2.08378 91.5491 0.463976 88.1669 0.463976H83.8173V15.4912H86.7496V9.45163H87.1334L91.1875 15.4912H94.7931L90.0579 9.16125C92.2696 8.70908 93.4844 7.19868 93.4844 4.89888ZM87.6025 7.38053H86.7496V2.82691H87.6493C89.4786 2.82691 90.4697 3.59535 90.4697 5.05775C90.4697 6.56641 89.4786 7.38053 87.6025 7.38053Z"
                        fill="black"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_815_29731"
                          x1="45.4698"
                          y1="1.60032"
                          x2="56.2854"
                          y2="13.0234"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset={1} stopColor="#F34F26" />
                          <stop offset={1} stopColor="#F69E35" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className=" py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                    <img
                    className="rounded-4"
                    src="/SUDDATH.png"
                    alt="limpiar"
                    style={{ height: 100, width: 100 }}
                  />
                  </div>
                  
                  <div className=" py-3 mt-8 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                      <img
                    className="rounded-4"
                    src="/pf-changs.png"
                    alt="limpiar"
                    style={{ height: 100, width: 100 }}
                  />
                  </div>
                  <div className="mt-8 py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                     <img
                        className="rounded-4"
                        src="/aldena.webp"
                        alt="limpiar"
                        style={{ height: 100, width: 100 }}
                      />
                  </div>
                  <div className="mt-8 py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                  <img
                        className="rounded-4"
                        src="/PRIDE-INDUSTRIES.png"
                        alt="limpiar"
                        style={{ height: 100, width: 100 }}
                      />
                  </div>
                  <div className="mt-8 py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                <img
                        className="rounded-4"
                        src="/LA-FITNESS.png"
                        alt="limpiar"
                        style={{ height: 100, width: 100 }}
                      />
                  </div>
                  <div className="mt-8 py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                     <img
                        className="rounded-4"
                        src="/PETSMART.png"
                        alt="limpiar"
                        style={{ height: 120, width: 100 }}
                      />
                  </div>
                  <div className="mt-8 py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                    <img
                        className="rounded-4"
                        src="/restaurant.webp"
                        alt="limpiar"
                        style={{ height: 100, width: 100 }}
                      />
                  </div>
                  <div className="mt-8 py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                    {/* <img
                      src="/assets/imgs/logo-cloud-3/logo-7.svg"
                      alt="limpiar"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="bouncing-blobs-container rounded-4 fix">
              <div className="bouncing-blobs-glass rounded-4" />
              <div className="bouncing-blobs">
                <div className="bouncing-blob bouncing-blob--green" />
                <div className="bouncing-blob bouncing-blob--primary" />
                <div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
              </div>
            </div>
          </div>
        </section>
  
    </Layout>
  );
};

export default page;
