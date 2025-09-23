
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function PageBlog1() {

	return (
		<>

			<Layout >

				{/*Blog 5*/}
				{/* <section className="section-blog-1 section-padding position-relative border-top border-bottom mt-10">
					<div className="container position-relative z-2">
						<div className="row align-items-end">
							<div className="col-lg-7 me-auto">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="limpiar" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">From Blog</span>
								</div>
								<h3 className="ds-3 mt-3 mb-3">Our Latest Articles</h3>
								<span className="fs-5 fw-medium text-900">Explore the insights and trends shaping our industry</span>
							</div>
							<div className="col-lg-auto">
								<Link href="#" className="fw-bold text-primary btn bg-white hover-up shadow-2 mt-lg-0 mt-5 ms-lg-auto">Subscribe our newsletter
									<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
										<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
									</svg>
								</Link>
							</div>
						</div>
						<div className="row mt-8 align-items-center">
							<div className="col-lg-7">
								<div className="card-team position-relative d-flex flex-lg-row flex-column align-items-center rounded-3 border  card-hover shadow-2 mb-lg-0 mb-8">
									<img className="rounded rounded-bottom-0 rounded-start-lg rounded-end-lg-0 w-50 " src="/commercial.webp" alt="limpiar" />
									<div className="bg-white align-self-stretch rounded rounded-start-lg-0 p-5">
										<Link href="https://blogs.limpiar.online/post/best-commercial-building-maintenance-checklist-of-2025" className="z-1 position-relative bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1 mb-2">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Commercial</span>
										</Link>
										<h6 className="mb-3">Best Commercial Building Maintenance Checklist of 2025</h6>
										<p>How do you keep your commercial property in top shape all year long? Use this complete checklist to stay ahead of costly repairs and downtime.</p>
										<div className="d-flex align-items-center justify-content-between mt-5 pt-5 border-top">
											<div className="d-flex align-items-center position-relative z-1">
												<div className="icon-shape rounded-circle border border-2 border-white">
													<img className="rounded-circle" src="/assets/imgs/blog-4/avatar-1.png" alt="limpiar" />
												</div>
										
												<Link href="https://blogs.limpiar.online/post/best-commercial-building-maintenance-checklist-of-2025" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
											</div>
									
										</div>
										<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
									</div>
								</div>
							</div>
							<div className="col-lg-5">
								<div>
									<Link href="https://blogs.limpiar.online/post/what-is-facility-management-software" className="d-flex flex-column flex-md-row align-items-center hover-up">
										<img className="rounded-3 w-100 w-md-auto" src="/fms.webp" alt="limpiar" />
										<div className="content ms-5 mt-4 mt-md-0">
											<h6 className="mb-2">What is a Facility Management Software?</h6>
											<p className="mb-0">  What can facilities management software do for your
                          buildings and teams? Schedule a consultation today to
                          streamline your operations and save costs.</p>
										</div>
									</Link>
									<Link href="#" className="d-flex flex-column flex-md-row align-items-center mt-7 hover-up">
										<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-5/img-3.png" alt="limpiar" />
										<div className="content ms-5 mt-4 mt-md-0">
											<h6 className="mb-2">The Importance of Data Security in Your SaaS Projects</h6>
											<p className="mb-0">As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="bouncing-blobs-container">
						<div className="bouncing-blobs-glass" />
						<div className="bouncing-blobs">
							<div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
						</div>
					</div>
				</section> */}
				{/*Blog 6*/}
				<section className="section-blog-6 section-padding mt-10 border-bottom">
					<div className="container">
						<div className="row align-items-end">
							<div className="col">
								<h5 className="ds-5 mt-3 mb-3">Trending News</h5>
								<span className="fs-5 fw-medium">Explore the insights and trends shaping our industry</span>
							</div>
						</div>
						<div className="row">
							{/* prettier-ignore */}
							<div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/commercial.webp" alt="limpiar" />
									<div className="card-body bg-white p-0">
										<Link href="https://blogs.limpiar.online/post/best-commercial-building-maintenance-checklist-of-2025" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Commercial</span>
										</Link>
										<h6 className="my-3">Best Commercial Building Maintenance Checklist of 2025</h6>
										<p>How do you keep your commercial property in top shape all year long? Use this complete checklist to stay ahead of costly repairs and downtime.</p>
									</div>
									<Link href="https://blogs.limpiar.online/post/best-commercial-building-maintenance-checklist-of-2025" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
							<div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/fms.webp" alt="limpiar" />
									<div className="card-body bg-white p-0">
										<Link href="https://blogs.limpiar.online/post/what-is-facility-management-software" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">software</span>
										</Link>
										<h6 className="my-3">What is a Facility Management Software?</h6>
										<p>    What can facilities management software do for your
                          buildings and teams? Schedule a consultation today to
                          streamline your operations and save costs.</p>
									</div>
									<Link href="https://blogs.limpiar.online/post/what-is-facility-management-software" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>



							<div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/house-sold.webp" alt="limpiar" />
									<div className="card-body bg-white p-0">
										<Link href="https://blogs.limpiar.online/post/5-things-to-consider-when-hiring-a-service-provider-company-as-a-property-manager" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Facility Management</span>
										</Link>
										<h6 className="my-3">5 Things to Consider When Hiring a Service Provider Company as a Property Manager</h6>
										<p> Hiring the right service provider can make or break your property operations. Discover 5 key things every property manager must check before signing a contract.</p>
									</div>
									<Link href="https://blogs.limpiar.online/post/5-things-to-consider-when-hiring-a-service-provider-company-as-a-property-manager" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>



							<div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/estate.webp" alt="limpiar" />
									<div className="card-body bg-white p-0">
										<Link href="https://blogs.limpiar.online/post/technology-in-facility-management-is-it-worth-the-investment" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase"> Facility Management</span>
										</Link>
										<h6 className="my-3">Technology in Facility Management: Is it Worth the Investment? </h6>
										<p> Discover how modern technology is transforming facility management. Learn the costs, benefits, and real ROI including how platforms like Limpiar help property managers save time, reduce costs, and improve tenant satisfaction...</p>
									</div>
									<Link href="https://blogs.limpiar.online/post/technology-in-facility-management-is-it-worth-the-investment" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>



							<div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/choose.webp" alt="limpiar" />
									<div className="card-body bg-white p-0">
										<Link href="https://blogs.limpiar.online/post/how-to-choose-and-manage-service-providers-as-a-property-manager" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Education</span>
										</Link>
										<h6 className="my-3">How to Choose and Manage Service Providers as a Property Manager | Limpiar</h6>
										<p> Learn how to find, vet, and manage reliable service providers as a property manager. Discover practical tips for booking, tracking, and ensuring transparency without the usual stress.</p>
									</div>
									<Link href="https://blogs.limpiar.online/post/how-to-choose-and-manage-service-providers-as-a-property-manager" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
							{/* <div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/assets/imgs/blog-6/img-6.png" alt="limpiar" />
									<div className="card-body bg-white p-0">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Technology</span>
										</Link>
										<h6 className="my-3">Choosing the Right SaaS Solution for Your Business</h6>
										<p>Selecting the right SaaS solution can be a daunting task with so many options available. This guide breaks down the key...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div> */}
							{/* <div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/assets/imgs/blog-6/img-7.png" alt="limpiar" />
									<div className="card-body bg-white p-0">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">security</span>
										</Link>
										<h6 className="my-3">The Importance of Data Security in Your SaaS Projects</h6>
										<p>Data security is a top priority for businesses adopting SaaS solutions. With increasing cyber threats, it's essential to understand...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div> */}
							{/* <div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/assets/imgs/blog-6/img-8.png" alt="limpiar" />
									<div className="card-body bg-white p-0">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Technology</span>
										</Link>
										<h6 className="my-3">Choosing the Right SaaS Solution for Your Business</h6>
										<p>Selecting the right SaaS solution can be a daunting task with so many options available. This guide breaks down the key...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div> */}
							{/* <div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/assets/imgs/blog-6/img-9.png" alt="limpiar" />
									<div className="card-body bg-white p-0">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">security</span>
										</Link>
										<h6 className="my-3">The Importance of Data Security in Your SaaS Projects</h6>
										<p>Data security is a top priority for businesses adopting SaaS solutions. With increasing cyber threats, it's essential to understand...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div> */}
							{/* <div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/assets/imgs/blog-6/img-10.png" alt="limpiar" />
									<div className="card-body bg-white p-0">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Technology</span>
										</Link>
										<h6 className="my-3">Choosing the Right SaaS Solution for Your Business</h6>
										<p>Selecting the right SaaS solution can be a daunting task with so many options available. This guide breaks down the key...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div> */}
							{/* <div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/assets/imgs/blog-6/img-11.png" alt="limpiar" />
									<div className="card-body bg-white p-0">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">security</span>
										</Link>
										<h6 className="my-3">The Importance of Data Security in Your SaaS Projects</h6>
										<p>Data security is a top priority for businesses adopting SaaS solutions. With increasing cyber threats, it's essential to understand...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div> */}
							{/* <div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/assets/imgs/blog-6/img-12.png" alt="limpiar" />
									<div className="card-body bg-white p-0">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">security</span>
										</Link>
										<h6 className="my-3">The Importance of Data Security in Your SaaS Projects</h6>
										<p>Data security is a top priority for businesses adopting SaaS solutions. With increasing cyber threats, it's essential to understand...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div> */}
						</div>
					</div>

					{/* Pagination */}

					{/* <div className="container">
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
					</div> */}
				</section>
				{/* Newsletter 1 */}
				<section className="section-newsletter-1 pb-120 pt-120 fix position-relative">
					<div className="container position-relative fix">
						<div className="row align-items-center fix text-center border rounded-4 position-relative z-1">
							<div className="col-lg-6 my-4">
								<div className="row">
									<div className="ms-lg-4">
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-1.png" alt="limpiar" />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-2.png" alt="limpiar" data-aos="fade-zoom-in" data-aos-delay={50} />
										<img className="rounded-4 border border-3 border-white me-3 mb-3 d-none d-md-inline" src="/assets/imgs/newsletter-1/img-3.png" alt="limpiar" />
									</div>
								</div>
								<div className="row">
									<div>
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-4.png" alt="limpiar" />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-5.png" alt="limpiar" data-aos="fade-zoom-in" data-aos-delay={100} />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-6.png" alt="limpiar" />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-7.png" alt="limpiar" data-aos="fade-zoom-in" data-aos-delay={100} />
									</div>
								</div>
								<div className="row d-none d-lg-flex">
									<div className="me-lg-0">
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-8.png" alt="limpiar" data-aos="fade-zoom-in" data-aos-delay={50} />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-9.png" alt="limpiar" data-aos="fade-zoom-in" data-aos-delay={100} />
										<img className="rounded-4 border border-3 border-white me-3 mb-3 d-none d-md-inline" src="/assets/imgs/newsletter-1/img-10.png" alt="limpiar" />
									</div>
								</div>
							</div>
							<div className="col-lg-6 mt-lg-0 mt-5">
								<div className="px-lg-5 text-lg-start text-center">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="limpiar" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Stay Updated</span>
									</div>
									<h4 className="mt-3 mb-3" data-aos="fade-zoom-in" data-aos-delay={100}>Subscribe to our Newsletter!</h4>
									<span className="fs-6 fw-medium" data-aos="fade-zoom-in" data-aos-delay={200}>Join 52,000+ people on our newsletter</span>
									<div className="input-group mb-3 mt-4 position-relative">
										<input type="text" className="ps-5 py-3 form-control bg-neutral-100 rounded-start-pill border-2 border-end-0 border-white" name="name" placeholder="Enter your mail .." />
										<div className="bg-neutral-100 border-2 border border-start-0 border-white rounded-end-pill">
											<button className="btn btn-gradient px-3 py-3 m-3 fs-7 fw-bold border-0 rounded-pill" type="button" data-aos="fade-zoom-in" data-aos-delay={100}>Join Now</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="position-absolute top-50 start-50 translate-middle z-0">
							<img src="/assets/imgs/newsletter-1/bg-line.png" alt="limpiar" />
						</div>
						<div className="bouncing-blobs-container rounded-4 fix">
							<div className="bouncing-blobs-glass rounded-4" />
							<div className="bouncing-blobs">
								<div className="bouncing-blob bouncing-blob--green" />
								<div className="bouncing-blob bouncing-blob--primary" />
							</div>
						</div>
					</div>
				</section>

			</Layout>
		</>
	)
}