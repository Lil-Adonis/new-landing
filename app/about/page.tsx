"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
export default function PageAbout3() {
  return (
    <>
      <Layout>
        {/*CTA 15*/}
        <section className="section-testimonial-13 position-relative pt-120 pb-80 fix ">
          <div className="container position-relative z-1">
            <div className="row pb-9">
              <div className="col-lg-10 mx-lg-auto section-padding-mini">
                <div className="text-center mb-lg-0 mb-5">
                  <div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
                    <img src="/assets/imgs/features-1/dots.png" alt="limpiar" />
                    <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                      About us
                    </span>
                  </div>
                  <h3 className="ds-3 my-3 fw-regular">
                    Redefining{" "}
                    <span className="fw-bold">Property Operations </span>
                    <span className="fw-bold">.</span>
                  </h3>
                </div>
              </div>
            </div>
            <img
              className="position-absolute z-2 top-0 end-0 pe-10 pe-lg-10"
              src="/assets/imgs/cta-15/star-2.svg"
              alt="limpiar"
            />
            <img
              className="position-absolute z-2 bottom-0 start-0 ps-10 ms-10"
              src="/assets/imgs/cta-15/star-1.svg"
              alt="limpiar"
            />
          </div>
          <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-center position-relative">
              <div className="pe-3 position-relative z-1 d-none d-md-block">
                <img
                  className="rounded-3 border border-3 border-white"
                  src="/assets/imgs/cta-15/img-1.png"
                  alt="limpiar"
                />
              </div>
              <div className="pe-3 position-relative z-1">
                <img
                  className="rounded-3 border border-3 border-white"
                  src="/assets/imgs/cta-15/img-2.png"
                  alt="limpiar"
                />
              </div>
              <div className="pe-3 position-relative z-1">
                <Image
                  className="rounded-3 border border-3 border-white"
                  src="/bfet.png"
                  alt="limpiar"
                  width={700}
                  height= {300}
                />
              </div>
              <div className="pe-3 position-relative z-1">
                <img
                  className="rounded-3 border border-3 border-white"
                  src="/assets/imgs/cta-15/img-4.png"
                  alt="limpiar"
                />
              </div>
              <div className="pe-3 position-relative z-1 d-none d-md-block">
                <img
                  className="rounded-3 border border-3 border-white"
                  src="/assets/imgs/cta-15/img-5.png"
                  alt="limpiar"
                />
              </div>
              <img
                className="position-absolute top-50 end-50 translate-middle-y z-0"
                src="/assets/imgs/cta-15/bg-ellipse.png"
                alt="limpiar"
              />
            </div>
            <div className="text-center mt-5">
              <div className="socials bg-white px-3 shadow-1 py-2 border rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
                <p className="text-900 mb-0">Follow us:</p>
                <ul className="list-unstyled d-flex mb-0">
                  <li className="ms-3">
                    <Link href="https://www.facebook.com/share/18TQVwN43S/?mibextid=wwXIfr" target="_blank">
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                        </svg>
                      </span>
                    </Link>
                  </li>
                  <li className="ms-3">
                    <Link href="https://www.instagram.com/limpiaronline/" target="_blank">
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </span>
                    </Link>
                  </li>
                  <li className="ms-3">
                    <Link href="https://www.linkedin.com/company/limpiaronline/ ">
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                      </span>
                    </Link>
                  </li>
                  <li className="ms-3">
                    <Link href="https://www.youtube.com/@limpiarOnline">
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                        </svg>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rotate-center ellipse-rotate-success position-absolute z-0" />
            <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
          </div>
        </section>
        {/* feature-12 */}
        <section className="section-feature-12 border-bottom pb-120 pt-110">
          <div className="container">
            <div className="text-center">
              <h5 className="ds-5 mb-5">Our Core Values</h5>
              {/* <p className="fs-5 pb-4">
								We break down barriers so teams can focus on what matters – working together <br className="d-none d-lg-block" />
								to create products their customers love.
							</p> */}
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
                  <div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                    <div className="icon">
                      <img
                        className="filter-invert"
                        src="/assets/imgs/service-1/icon-6.svg"
                        alt="limpiar"
                      />
                    </div>
                  </div>
                  <h4>Collaboration</h4>
                  <p>
                    We believe the best outcomes come from working together.
                    <br />
                    By partnering closely with our clients, vendors, and
                    communities, <br />
                    we build solutions that create lasting impact.
                  </p>
                  {/* <Link href="#" className="text-primary fs-7 fw-bold">
										Learn More
										<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
											<g clipPath="url(#clip0_399_9647)">
												<path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={18} height={18} fill="white" transform="translate(0.5)" />
												</clipPath>
											</defs>
										</svg>
									</Link> */}
                </div>
                <div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
                  <div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                    <div className="icon">
                      <img
                        className="filter-invert"
                        src="/assets/imgs/service-1/icon-5.svg"
                        alt="limpiar"
                      />
                    </div>
                  </div>
                  <h4>Bias for Action</h4>
                  <p>
                    Your operations can’t wait. We move with urgency and
                    precision, <br />
                    solving challenges quickly and ensuring your properties
                    <br />
                    run smoothly at all times.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
                  <div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                    <div className="icon">
                      <img
                        className="filter-invert"
                        src="/assets/imgs/service-1/icon-4.svg"
                        alt="limpiar"
                      />
                    </div>
                  </div>
                  <h4>Entrepreneurship</h4>
                  <p>
                    We think like owners. Every decision we make is guided by
                    innovation, <br />
                    resourcefulness, and a commitment to delivering smarter,{" "}
                    <br />
                    more sustainable solutions.
                  </p>
                </div>
                <div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
                  <div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                    <div className="icon">
                      <img
                        className="filter-invert"
                        src="/assets/imgs/service-1/icon-3.svg"
                        alt="limpiar"
                      />
                    </div>
                  </div>
                  <h4>Grit</h4>
                  <p>
                    Property operations are complex, but we thrive in
                    complexity. <br />
                    Our team brings resilience and determination to every
                    challenge, <br />
                    so your facilities stay efficient and reliable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-cta-11 position-relative section-padding fix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="d-flex justify-content-md-between justify-content-center position-relative">
                  <div className="d-flex flex-column align-items-end d-none d-md-flex">
                    <div className="zoom-img rounded-3">
                      <img
                        className="rounded-3"
                        src="/assets/imgs/cta-11/img-1.png"
                        alt=""
                      />
                    </div>
                    <div className="zoom-img rounded-3 mt-2">
                      {/* <img
                        className="rounded-3"
                        src="/assets/imgs/cta-11/img-3.png"
                        alt=""
                      /> */}
                    </div>
                  </div>
                  <div>
                    {/* <div className="d-flex justify-content-between mt-5">
                      <div className="alltuchtopdown tag-year backdrop-filter bg-success rounded-4 px-3 py-4 text-center z-1">
                        <h5 className="count fw-bold mb-2 text-900 text-nowrap">
                          <span className="odometer" />
                          <CountUp enableScrollSpy={true} end={92} />
                          %
                        </h5>
                        <p className="text-600-keep text-nowrap mb-0">
                          Faster work order . <br />
                          processing
                        </p>
                      </div>
                      <div className="alltuchtopdown tag-year backdrop-filter bg-primary rounded-4 px-3 py-4 text-center z-1">
                        <h5 className="count fw-bold mb-2 text-white text-nowrap">
                          <span className="odometer" />
                          <CountUp enableScrollSpy={true} end={10} />
                          x
                        </h5>
                        <p className="text-white text-nowrap mb-0">
                          AI-powered <br />
                          issue resolution
                        </p>
                      </div>
                    </div> */}
                    <div className="zoom-img rounded-3">
                      <img
                        className="rounded-3 mw-lg-310"
                        src="/variety.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="position-absolute bottom-0 start-0 flickering ms-6 mb-4 z-0 d-none d-md-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={86}
                      height={86}
                      viewBox="0 0 86 86"
                      fill="none"
                    >
                      <path
                        d="M0.235352 64.6171C23.6511 58.8609 27.3738 62.5843 21.6183 86C31.9666 62.5843 45.1375 62.5843 55.4859 86C49.7296 62.5843 53.4531 58.8615 76.8688 64.6171C53.4531 54.2688 53.4531 41.0978 76.8688 30.7495C53.4531 36.5057 49.7303 32.7823 55.4859 9.36658C45.1375 32.7823 31.9666 32.7823 21.6183 9.36658C27.3745 32.7823 23.6511 36.5051 0.235352 30.7495C23.6511 41.0978 23.6511 54.2688 0.235352 64.6171Z"
                        fill="#64E1B0"
                      />
                      <path
                        d="M85.7917 4.74567C80.5949 6.02293 79.7687 5.19679 81.046 0C78.7493 5.19679 75.8266 5.19679 73.5298 0C74.8071 5.19679 73.981 6.02293 68.7842 4.74567C73.981 7.0424 73.981 9.96508 68.7842 12.2618C73.981 10.9846 74.8071 11.8107 73.5298 17.0075C75.8266 11.8107 78.7493 11.8107 81.046 17.0075C79.7687 11.8107 80.5949 10.9846 85.7917 12.2618C80.5949 9.96508 80.5949 7.0424 85.7917 4.74567Z"
                        fill="#64E1B0"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 ps-lg-8 mt-lg-0 mt-5">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <img src="/assets/imgs/features-1/dots.png" alt="limpiar" />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    Our Mission
                  </span>
                </div>
                <h5 className="ds-5 my-3">
                  Redefining Property Operations for People and Communities
                </h5>
                <p className="fs-5 text-500 mb-8">
                  We started Limpiar with one mission: to simplify property
                  operations while creating real impact for the people behind
                  the work. From facility managers to service providers, we
                  believe technology should empower teams, reduce barriers, and
                  unlock opportunities.
                </p>
                <div className="d-flex flex-column flex-md-row">
                  <div className="evaluate-1 me-2">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        src="/assets/imgs/cta-11/avatar-1.png"
                        alt=""
                      />
                      <div className="d-flex flex-column ps-3">
                        <div className="d-flex">
                          {/* <img src="/assets/imgs/hero-4/star-yellow.svg" alt="limpiar" />
													<img src="/assets/imgs/hero-4/star-yellow.svg" alt="limpiar" />
													<img src="/assets/imgs/hero-4/star-yellow.svg" alt="limpiar" />
													<img src="/assets/imgs/hero-4/star-yellow.svg" alt="limpiar" />
													<img src="/assets/imgs/hero-4/star-yellow.svg" alt="limpiar" /> */}
                          Facilities Director
                        </div>
                        <h6 className="mt-2 mb-0 fs-6"> National Gym Chain</h6>
                      </div>
                    </div>
                    <p className="text-500 mt-3">
                      Limpiar helped us cut downtime by 20% across all our
                      facilities.
                    </p>
                  </div>
                  <div className="evaluate-2 ms-2 mt-md-0 mt-5">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        src="/assets/imgs/cta-11/avatar-2.png"
                        alt=""
                      />
                      <div className="d-flex flex-column ps-3">
                        <div className="d-flex">
                          {/* <img src="/assets/imgs/hero-4/star-yellow.svg" alt="limpiar" />
													<img src="/assets/imgs/hero-4/star-yellow.svg" alt="limpiar" />
													<img src="/assets/imgs/hero-4/star-yellow.svg" alt="limpiar" />
													<img src="/assets/imgs/hero-4/star-yellow.svg" alt="limpiar" />
													<img src="/assets/imgs/hero-4/star-yellow.svg" alt="limpiar" /> */}
                          Operations Manager
                        </div>
                        <h6 className="mt-2 mb-0 fs-6">Healthcare Facility</h6>
                      </div>
                    </div>
                    <p className="text-500 mt-3">
                      The platform gives our team real-time visibility we never
                      had before
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-cta-12 bg-3 position-relative section-padding fix">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <img src="/assets/imgs/features-1/dots.png" alt="limpiar" />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    A NOTE FROM OUR FOUNDER
                  </span>
                </div>
                <h5 className="ds-333 my-3">
                  At Limpiar, <br /> we know the challenges{" "}
                  <br className="d-none d-md-inline" />
                  facility managers face because we’ve lived them
                </h5>
                {/* <p className="fs-5 text-500 mb-8">Loved By Developers Trusted By Enterprises</p> */}
                <div className="d-flex align-items-center mt-5">
                  <Link href="/careers" className="btn btn-gradient">
                   Join the team
                    <svg
                      className="ms-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="stroke-white"
                        d="M17.25 15.25V6.75H8.75"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        className="stroke-white"
                        d="M17 7L6.75 17.25"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  {/* <Link href="#" className="ms-5 fw-bold">
                    How We Work
                  </Link> */}
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-8">
                <p className="fs-5 text-900 mb-5">
                  Properties today are complex, juggling vendors, reducing
                  costs, and keeping operations running smoothly can feel like
                  an uphill battle. Limpiar was built to change that. Our
                  platform turns buildings into{" "}
                  <span className="fw-bold">self-operating ecosystems.</span>{" "}
                  From automating work orders to predicting maintenance and
                  simplifying vendor management, we help you save time, cut
                  costs, and stay ahead of problems before they happen. But what
                  drives us isn’t just technology, it’s people. We’re committed
                  to giving managers the visibility they need, vendors the
                  opportunity to grow, and owners the confidence that their
                  properties are performing at their best.
                </p>
                <p className="fs-5 text-900 mb-5">
                  <span className="fw-bold">Our promise:</span> Limpiar will be
                  your partner in building smarter, more resilient operations.
                </p>
                <div className="d-flex">
                  <img
                    className="rounded-circle border border-5 border-primary-light"
                    src="/assets/imgs/cta-12/avatar-1.png"
                    alt=""
                  />
                  <div className="ms-2">
                    <img
                      className="filter-invert"
                      src="/assets/imgs/cta-12/name.svg"
                      alt=""
                    />
                    <h6 className="mt-1 mb-0">
                      Demi Oloyede{" "}
                      <span className="text-500 fs-6">
                        , Founder & CEO, Limpiar
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Blog 1*/}
        {/* <section className="section-blog-1 section-padding">
					<div className="container">
						<div className="row align-items-end">
							<div className="col-12 col-md-6 me-auto">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="limpiar" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">From Blog</span>
								</div>
								<h3 className="ds-3 mt-3 mb-3" data-aos="fade-zoom-in" data-aos-delay={100}>Our Latest Articles</h3>
								<span className="fs-5 fw-medium" data-aos="fade-zoom-in" data-aos-delay={200}>Explore the insights and trends shaping our industry</span>
							</div>
							<div className="col-12 col-md-6 mt-3 mt-md-0">
								<Link href="#" className="ms-md-5 fw-bold text-primary">See all articles
									<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
										<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
									</svg>
								</Link>
							</div>
						</div>
						<div className="row">
							
							<div className="col-lg-4 text-start">
								<div className="card border-0 rounded-3 mt-8 position-relative d-inline-flex" data-aos="fade-zoom-in" data-aos-delay={100}>
									<img className="rounded-3" src="/assets/imgs/blog-1/card-img-1.png" alt="limpiar" />
									<div className="card-body p-0 bg-white">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Business</span>
										</Link>
										<h6 className="my-3">The Future of SaaS: Emerging Trends to Watch</h6>
										<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
							<div className="col-lg-4 text-start">
								<div className="card border-0 rounded-3 mt-8 position-relative d-inline-flex" data-aos="fade-zoom-in" data-aos-delay={200}>
									<img className="rounded-3" src="/assets/imgs/blog-1/card-img-2.png" alt="limpiar" />
									<div className="card-body p-0 bg-white">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Technology</span>
										</Link>
										<h6 className="my-3">Choosing the Right SaaS Solution for Your Business</h6>
										<p>Selecting the right SaaS solution can be a daunting task with so many options available. This guide breaks down the key...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
							<div className="col-lg-4 text-start">
								<div className="card border-0 rounded-3 mt-8 position-relative d-inline-flex" data-aos="fade-zoom-in" data-aos-delay={300}>
									<img className="rounded-3" src="/assets/imgs/blog-1/card-img-3.png" alt="limpiar" />
									<div className="card-body p-0 bg-white">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">security</span>
										</Link>
										<h6 className="my-3">The Importance of Data Security in Your SaaS Projects</h6>
										<p>Data security is a top priority for businesses adopting SaaS solutions. With increasing cyber threats, it's essential to understand...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
						</div>
					</div>
				</section> */}
      </Layout>
    </>
  );
}
