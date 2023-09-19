import React from 'react';
import '../../styles/header.scss';
import logoEmpresa from '../../assets/logos/logo_empresa.png';

const Header: React.FC = () => (
	<header>
		<div className='bd-content'>
			<nav className='navbar' role='navigation' aria-label='main navigation'>
				<div className='navbar-brand'>
					<a className='navbar-item' href=''>
						<img src={logoEmpresa} alt='' />
					</a>

					<a role='button' className='navbar-burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
						<span aria-hidden='true'></span>
						<span aria-hidden='true'></span>
						<span aria-hidden='true'></span>
					</a>
				</div>

				<div id='navbarBasicExample' className='navbar-menu'>
					<div className='navbar-start'>
						<a className='navbar-item'>Home</a>
						<a className='navbar-item'>Documentation</a>
					</div>

					<div className='navbar-end'>
						<div className='navbar-item'>
							<div className='buttons'>
								<a className='button is-primary'>
									<strong>Sign up</strong>
								</a>
								<a className='button is-light'>Log in</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	</header>
);

export default Header;
