'use client'
import Link from "next/link"
import CountUp from 'react-countup'

export default function Static1() {
	return (
		<>

			<section className="section-static-1 position-relative  fix z-0 section-padding" style={{ backgroundColor: '#0d6efd' }}>
				<div className="container position-relative z-3">
					<div className="row border-bottom border-primary-light pb-8">
						<div className="col-lg-6 me-lg-auto">
							<h5 className="ds-5 text-100 m-0">By the Numbers</h5>
						</div>
						{/* <div className="col-auto align-self-end mt-lg-0 mt-5">
							<Link href="#" className="btn btn-outline-secondary hover-up bg-transparent text-100">
								Get a Quote
								<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
									<path d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</Link>
						</div> */}
					</div>
				</div>
				<div className="container mt-8">
					<div className="inner">
						<div className="row justify-content-center">
							<div className="col-xl-3 col-lg-4 col-sm-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto">
									<span className="fw-bold lh-sm count ds-2 text-100">92%</span>
										<p className="fs-5 text-100">Faster work order processing.</p>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto">
										<span className="count lh-sm ds-2 fw-bold text-100"><span className="odometer" /><CountUp end={37} enableScrollSpy={true} />%</span>
										<p className="fs-5 text-100">Average maintenance cost savings.</p>
									</div>
								</div>
							</div>



								<div className="col-xl-3 col-lg-4 col-sm-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto">
										<span className="count lh-sm ds-2 fw-bold text-100"><span className="odometer" /><CountUp end={10} enableScrollSpy={true} />x</span>
										<p className="fs-5 text-100">Faster issue resolution with AI dispatch.</p>
									</div>
								</div>
							</div>



							<div className="col-xl-3 col-lg-4 col-sm-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto">
										<span className="count lh-sm ds-2 fw-bold text-100"><span className="odometer" /><CountUp end={200} enableScrollSpy={true} />%</span>
										<p className="fs-5 text-100"> More real-time visibility for smarter decisions.</p>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto">
										<span className="count lh-sm ds-2 fw-bold text-100"><span className="odometer" /><CountUp end={65} enableScrollSpy={true} />%</span>
										<p className="fs-5 text-100"> Less downtime with predictive maintenance.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="img-decorate position-absolute top-0 start-0">
					<img src="/assets/imgs/static-1/img-decorate.png" alt="limpiar" />
				</div>
				<div className="bouncing-blobs-container">
					<div className="bouncing-blobs-glass bg-transparent" />
					<div className="bouncing-blobs">
						<div className="bouncing-blob bouncing-blob--white" />
					</div>
				</div>
			</section>


		</>
	)
}
