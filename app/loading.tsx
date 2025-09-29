"use client"
export default function Preloader() {
	return (
		<>
			<div id="preloader">
				<div id="loader" className="loader">
					<div className="loader-container">
						<div className="spiral-loader">
							<div className="wave-circle wave-1"></div>
							<div className="wave-circle wave-2"></div>
							<div className="wave-circle wave-3"></div>
							<div className="wave-circle wave-4"></div>
							<div className="wave-circle wave-5"></div>
							<div className="center-pulse"></div>
						</div>
						{/* <p className="loading-text">Loading...</p> */}
					</div>
				</div>
			</div>

			<style jsx>{`
				#preloader {
					position: fixed;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					// background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
					display: flex;
					align-items: center;
					justify-content: center;
					z-index: 9999;
				}

				.loader {
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.loader-container {
					text-align: center;
				}

				.spiral-loader {
					position: relative;
					width: 120px;
					height: 120px;
					margin: 0 auto 30px;
				}

				.wave-circle {
					position: absolute;
					border: 3px solid transparent;
					border-radius: 50%;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					animation: spiralWave 3s ease-in-out infinite;
				}

				.wave-1 {
					width: 30px;
					height: 30px;
					border-top-color: #4fc3f7;
					border-right-color: #4fc3f7;
					animation-delay: 0s;
					box-shadow: 0 0 20px rgba(79, 195, 247, 0.6);
				}

				.wave-2 {
					width: 50px;
					height: 50px;
					border-top-color: #29b6f6;
					border-right-color: #29b6f6;
					animation-delay: 0.3s;
					box-shadow: 0 0 25px rgba(41, 182, 246, 0.5);
				}

				.wave-3 {
					width: 70px;
					height: 70px;
					border-top-color: #03a9f4;
					border-right-color: #03a9f4;
					animation-delay: 0.6s;
					box-shadow: 0 0 30px rgba(3, 169, 244, 0.4);
				}

				.wave-4 {
					width: 90px;
					height: 90px;
					border-top-color: #0288d1;
					border-right-color: #0288d1;
					animation-delay: 0.9s;
					box-shadow: 0 0 35px rgba(2, 136, 209, 0.3);
				}

				.wave-5 {
					width: 110px;
					height: 110px;
					border-top-color: #0277bd;
					border-right-color: #0277bd;
					animation-delay: 1.2s;
					box-shadow: 0 0 40px rgba(2, 119, 189, 0.2);
				}

				.center-pulse {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 20px;
					height: 20px;
					background: radial-gradient(circle, #4fc3f7, #0277bd);
					border-radius: 50%;
					animation: centerPulse 2s ease-in-out infinite;
					box-shadow: 
						0 0 20px rgba(79, 195, 247, 0.8),
						0 0 40px rgba(79, 195, 247, 0.6),
						0 0 60px rgba(79, 195, 247, 0.4);
				}

				@keyframes spiralWave {
					0% {
						transform: translate(-50%, -50%) rotate(0deg) scale(0.8);
						opacity: 1;
					}
					50% {
						transform: translate(-50%, -50%) rotate(180deg) scale(1.1);
						opacity: 0.7;
					}
					100% {
						transform: translate(-50%, -50%) rotate(360deg) scale(0.8);
						opacity: 1;
					}
				}

				@keyframes centerPulse {
					0%, 100% {
						transform: translate(-50%, -50%) scale(1);
						opacity: 1;
					}
					50% {
						transform: translate(-50%, -50%) scale(1.5);
						opacity: 0.7;
					}
				}

				.loading-text {
					color: #ffffff;
					font-size: 18px;
					font-weight: 600;
					margin: 0;
					letter-spacing: 2px;
					text-transform: uppercase;
					animation: textPulse 2s ease-in-out infinite;
					text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
				}

				@keyframes textPulse {
					0%, 100% {
						opacity: 0.8;
						transform: scale(1);
					}
					50% {
						opacity: 1;
						transform: scale(1.05);
					}
				}

				/* Responsive adjustments */
				@media (max-width: 768px) {
					.spiral-loader {
						width: 100px;
						height: 100px;
					}

					.wave-1 { width: 25px; height: 25px; }
					.wave-2 { width: 40px; height: 40px; }
					.wave-3 { width: 55px; height: 55px; }
					.wave-4 { width: 70px; height: 70px; }
					.wave-5 { width: 85px; height: 85px; }

					.center-pulse {
						width: 15px;
						height: 15px;
					}

					.loading-text {
						font-size: 16px;
						letter-spacing: 1px;
					}
				}
			`}</style>
		</>
	)
}
