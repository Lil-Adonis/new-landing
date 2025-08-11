import Link from 'next/link'
import MobileMenu from '../MobileMenu'
import Search from '../Search'
import OffCanvas from '../OffCanvas'
import ThemeSwitch from '@/components/elements/ThemeSwitch'
import Menu from '../Menu'

export default function Header4({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, isOffCanvas, handleOffCanvas }: any) {
	return (
		<>
			<header>
				<nav className={`navbar navbar-expand-lg navbar-light w-100 z-999 header-4 ${scroll ? 'navbar-stick' : ''}`} style={{ position: `${scroll? "fixed" : "relative"}`, top: `${scroll? "0" : "auto"}`, bottom: `${scroll? "auto" : "0"}` }}>
					<div className="container">
						<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
    <img src="assets/imgs/template/logo.png" alt="infinia" style={{ width: '150px', height: 'auto' }} />
</Link>
						<Menu />
						<div className="d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
			
							<ThemeSwitch />
							<a  className="menu-tigger icon-shape icon-md rounded-2 d-none d-md-flex cursor-pointer"     style={{ backgroundColor: '#0d6efd' }} onClick={handleOffCanvas}>
								<img src="assets/imgs/logo/icon-menu.svg" alt="infinia" />
							</a>
							{/* <div className="burger-icon burger-icon-white border rounded-3" onClick={handleMobileMenu}>
								<span className="burger-icon-top" />
								<span className="burger-icon-mid" />
								<span className="burger-icon-bottom" />
							</div> */}
						</div>
					</div>
				</nav>
				
				<OffCanvas handleOffCanvas={handleOffCanvas} isOffCanvas={isOffCanvas} />
				{/* <Search isSearch={isSearch} handleSearch={handleSearch} /> */}
				{/* <MobileMenu handleMobileMenu={handleMobileMenu} isMobileMenu={isMobileMenu} /> */}
			</header>



		</>
	)
}
