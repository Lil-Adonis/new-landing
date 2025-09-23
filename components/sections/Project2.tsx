"use client";
import Link from "next/link";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Project2() {
  const swiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
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
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };

  return (
    <>
      <section className="section-project-2 pt-120 pb-8">
        <div className="container">
          <div className="row mb-8">
            <div className="col-lg-6">
              {/* <div className="d-flex align-items-center justify-text-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
								<img src="/assets/imgs/features-1/dots.png" alt="limpiar" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Recent work</span>
							</div> */}
              <h3 className="ds-3 mt-3 mb-3">
                Insights for Smarter Operations
              </h3>
              <p className="fs-5 fw-medium">
                ⚡Articles, resources, and research to help you cut costs and
                run smarter facilities
              </p>
            </div>
            <div className="col-lg-2 col-md-3 col-6 ms-auto align-self-end mb-lg-7 mt-lg-0 mt-4">
              <div className="position-relative z-0">
                <div className="swiper-button-prev shadow bg-white ms-lg-7">
                  <i className="bi bi-arrow-left" />
                </div>
                <div className="swiper-button-next shadow bg-white">
                  <i className="bi bi-arrow-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <Swiper
              {...swiperOptions}
              className="swiper slider-1 pt-2 pb-8"
              modules={[Keyboard, Autoplay, Pagination, Navigation]}
            >
              <div className="swiper-wrapper">
                {/* prettier-ignore */}
                <SwiperSlide className="swiper-slide">
									<div className="text-center">
										<div className="zoom-img position-relative d-inline-block z-1">
											<div className="rounded-3 fix">
												{/* <img className="img-fluid w-100" src="/commercial.webp" alt="limpiar" /> */}



																	<Image
													src="/commercial.webp"
													alt="Facility Management Software dashboard screenshot"
													width={400}
													height={800}
													style={{ objectFit: "cover", height: "550px", width: "100%", maxHeight: "800px" }}
													className="img-fluid w-100"
												/>
											</div>
											<Link href="https://blogs.limpiar.online/post/best-commercial-building-maintenance-checklist-of-2025" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
												{/* <p className="fs-7 text-primary mb-1">Predictive maintanace at scale</p> */}
												<h6>Best Commercial Building Maintenance Checklist of 2025</h6>
												<p className="text-900">How do you keep your commercial property in top shape all year long? Use this complete checklist to stay ahead of costly repairs and downtime</p>
											</Link>
											<Link href="https://blogs.limpiar.online/post/best-commercial-building-maintenance-checklist-of-2025" className="badge text-primary bg-white px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1">Commercial</Link>
										</div>
									</div>
								</SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="text-center">
                    <div className="zoom-img position-relative d-inline-block z-1">
                      <div className="rounded-3 fix">
                        {/* <img className="img-fluid w-100" src="/fms.webp" alt="limpiar" /> */}

                        <Image
                          src="/fms.webp"
                          alt="Facility Management Software dashboard screenshot"
                          width={400}
                          height={800}
                          style={{
                            objectFit: "cover",
                            height: "550px",
                            width: "100%",
                            maxHeight: "800px",
                          }}
                          className="img-fluid w-100"
                        />
                      </div>
                      <Link
                        href="https://blogs.limpiar.online/post/what-is-facility-management-software"
                        className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up"
                      >
                        {/* <p className="fs-7 text-primary mb-1">Pioneer Enterprises</p> */}
                        <h6>What is a Facility Management Software?</h6>
                        <p className="text-900">
                          What can facilities management software do for your
                          buildings and teams? Schedule a consultation today to
                          streamline your operations and save costs.
                        </p>
                      </Link>
                      <Link
                        href="https://blogs.limpiar.online/post/what-is-facility-management-software"
                        className="badge text-primary bg-white px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1"
                      >
                        software
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>


			
					
					     <SwiperSlide className="swiper-slide">
                  <div className="text-center">
                    <div className="zoom-img position-relative d-inline-block z-1">
                      <div className="rounded-3 fix">
                        {/* <img
                          className="img-fluid w-100"
                          src="/house-sold.webp"
                          alt="limpiar"
                        /> */}

						    <Image
                          src="/house-sold.webp"
                          alt="Facility Management Software dashboard screenshot"
                          width={400}
                          height={800}
                          style={{
                            objectFit: "cover",
                            height: "550px",
                            width: "100%",
                            maxHeight: "800px",
                          }}
                          className="img-fluid w-100"
                        />
                      </div>
                      <Link
                        href="https://blogs.limpiar.online/post/5-things-to-consider-when-hiring-a-service-provider-company-as-a-property-manager"
                        className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up"
                      >
                        
                        <h6>5 Things to Consider When Hiring a Service Provider Company as a Property Manager</h6>
                        <p className="text-900">
                         Hiring the right service provider can make or break your property operations. Discover 5 key things every property manager must check before signing a contract.
                        </p>
                      </Link>
                      <Link
                        href="https://blogs.limpiar.online/post/5-things-to-consider-when-hiring-a-service-provider-company-as-a-property-manager"
                        className="badge text-primary bg-white px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1"
                      >
                        Facility Management
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>



                <SwiperSlide className="swiper-slide">
                  <div className="text-center">
                    <div className="zoom-img position-relative d-inline-block z-1">
                      <div className="rounded-3 fix">
                        {/* <img
                          className="img-fluid w-100"
                          src="/assets/imgs/project-2/img-1.png"
                          alt="limpiar"
                        /> */}
						                <Image
                          src="/estate.webp"
                          alt="Facility Management Software dashboard screenshot"
                          width={400}
                          height={800}
                          style={{
                            objectFit: "cover",
                            height: "550px",
                            width: "100%",
                            maxHeight: "800px",
                          }}
                          className="img-fluid w-100"
                        />
                      </div>
                      <Link
                        href="https://blogs.limpiar.online/post/technology-in-facility-management-is-it-worth-the-investment"
                        className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up"
                      >
              
                        <h6>Technology in Facility Management: Is it Worth the Investment? </h6>
                        <p className="text-900">
                          Discover how modern technology is transforming facility management. Learn the costs, benefits, and real ROI including how platforms like Limpiar help property managers save time, reduce costs, and improve tenant satisfaction.
                        </p>
                      </Link>
                      <Link
                        href="https://blogs.limpiar.online/post/technology-in-facility-management-is-it-worth-the-investment"
                        className="badge text-primary bg-white px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1"
                      >
                        Facility Management
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="text-center">
                    <div className="zoom-img position-relative d-inline-block z-1">
                      <div className="rounded-3 fix">
                        {/* <img
                          className="img-fluid w-100"
                          src="/assets/imgs/project-2/img-2.png"
                          alt="limpiar"
                        /> */}


						            <Image
                          src="/choose.webp"
                          alt="Facility Management Software dashboard screenshot"
                          width={400}
                          height={800}
                          style={{
                            objectFit: "cover",
                            height: "550px",
                            width: "100%",
                            maxHeight: "800px",
                          }}
                          className="img-fluid w-100"
                        />
                      </div>
                      <Link
                        href="https://blogs.limpiar.online/post/how-to-choose-and-manage-service-providers-as-a-property-manager"
                        className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up"
                      >
      
                        <h6>How to Choose and Manage Service Providers as a Property Manager | Limpiar </h6>
                        <p className="text-900">
                          Learn how to find, vet, and manage reliable service providers as a property manager. Discover practical tips for booking, tracking, and ensuring transparency without the usual stress.
                        </p>
                      </Link>
                      <Link
                        href="https://blogs.limpiar.online/post/how-to-choose-and-manage-service-providers-as-a-property-manager"
                        className="badge text-primary bg-white px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1"
                      >
                        Education
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                {/* <SwiperSlide className="swiper-slide">
                  <div className="text-center">
                    <div className="zoom-img position-relative d-inline-block z-1">
                      <div className="rounded-3 fix">
                        <img
                          className="img-fluid w-100"
                          src="/assets/imgs/project-2/img-3.png"
                          alt="limpiar"
                        />
                      </div>
                      <Link
                        href="#"
                        className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up"
                      >
                     
                        <h6>Ai powered asset monitoring</h6>
                        <p className="text-900">
                          Iot-enabled monioring enables proactive maintenance
                          and fewer equipment failure{" "}
                        </p>
                      </Link>
                      <Link
                        href="#"
                        className="badge text-primary bg-white px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1"
                      >
                        Facility Management
                      </Link>
                    </div>
                  </div>
                </SwiperSlide> */}

                {/* <SwiperSlide className="swiper-slide">
                  <div className="text-center">
                    <div className="zoom-img position-relative d-inline-block z-1">
                      <div className="rounded-3 fix">
                        <img
                          className="img-fluid w-100"
                          src="/assets/imgs/project-2/img-1.png"
                          alt="limpiar"
                        />
                      </div>
                      <Link
                        href="#"
                        className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up"
                      >
                     
                        <h6>Transparent job status tracking</h6>
                        <p className="text-900">
                          Track every service request in real time for full
                          operational transparency
                        </p>
                      </Link>
                      <Link
                        href="#"
                        className="badge text-primary bg-white px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1"
                      >
                        Sustainability
                      </Link>
                    </div>
                  </div>
                </SwiperSlide> */}

                {/* <SwiperSlide className="swiper-slide">
                  <div className="text-center">
                    <div className="zoom-img position-relative d-inline-block z-1">
                      <div className="rounded-3 fix">
                        <img
                          className="img-fluid w-100"
                          src="/assets/imgs/project-2/img-2.png"
                          alt="limpiar"
                        />
                      </div>
                      <Link
                        href="#"
                        className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up"
                      >
                    
                        <h6>Autonomous property management</h6>
                        <p className="text-900">
                          Explore self-optimizing properties with Ai-driven
                          scheduling, monitoring and reporting.
                        </p>
                      </Link>
                      <Link
                        href="#"
                        className="badge text-primary bg-white px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1"
                      >
                        Case Studies
                      </Link>
                    </div>
                  </div>
                </SwiperSlide> */}

                {/* <SwiperSlide className="swiper-slide">
                  <div className="text-center">
                    <div className="zoom-img position-relative d-inline-block z-1">
                      <div className="rounded-3 fix">
                        <img
                          className="img-fluid w-100"
                          src="/assets/imgs/project-2/img-3.png"
                          alt="limpiar"
                        />
                      </div>
                      <Link
                        href="#"
                        className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up"
                      >
                 
                        <h6>Data driven inventory control</h6>
                        <p className="text-900">
                          Use real-time data to forecast needs, reduce waste and
                          streamline procurement{" "}
                        </p>
                      </Link>
                      <Link
                        href="#"
                        className="badge text-primary bg-white px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1"
                      >
                        Facility Management
                      </Link>
                    </div>
                  </div>
                </SwiperSlide> */}

                {/* <SwiperSlide className="swiper-slide">
                  <div className="text-center">
                    <div className="zoom-img position-relative d-inline-block z-1">
                      <div className="rounded-3 fix">
                        <img
                          className="img-fluid w-100"
                          src="/assets/imgs/project-2/img-1.png"
                          alt="limpiar"
                        />
                      </div>
                      <Link
                        href="#"
                        className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up"
                      >
     
                        <h6>Reduce Downtime with Ai</h6>
                        <p className="text-900">
                          Automated alerts and proactive workflow cut downtime
                          and boost reliability
                        </p>
                      </Link>
                      <Link
                        href="#"
                        className="badge text-primary bg-white px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1"
                      >
                        Sustainability
                      </Link>
                    </div>
                  </div>
                </SwiperSlide> */}

                {/* <SwiperSlide className="swiper-slide">
                  <div className="text-center">
                    <div className="zoom-img position-relative d-inline-block z-1">
                      <div className="rounded-3 fix">
                        <img
                          className="img-fluid w-100"
                          src="/assets/imgs/project-2/img-2.png"
                          alt="limpiar"
                        />
                      </div>
                      <Link
                        href="#"
                        className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up"
                      >
                
                        <h6>Smart vendor selection </h6>
                        <p className="text-900">
                          Ai matches the right vendors to each job improving
                          quality and speed
                        </p>
                      </Link>
                      <Link
                        href="#"
                        className="badge text-primary bg-white px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1"
                      >
                        Consulting
                      </Link>
                    </div>
                  </div>
                </SwiperSlide> */}
			

           
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
