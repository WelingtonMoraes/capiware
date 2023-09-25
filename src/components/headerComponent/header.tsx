import React, {Component} from 'react';
import Typewriter from 'typewriter-effect';
import './style.scss';
import ButtonPrimary from '../button/ButtonPrimary';
import logoEmpresa from '../../assets/logos/logo_empresa.png';

const Header: React.FC = () => (
	<header>
		<div className='bd-content'>
			<nav className='navbar' role='navigation' aria-label='main navigation'>
				<div className='navbar-start'>
					<a className='navbar-item' href=''>
						<img src={logoEmpresa} alt='' />
						<Typewriter
							options={{
								strings: ['Capi', 'Software', 'Capiware'],
								autoStart: true,
								loop: true,
							}}
						/>
					</a>
				</div>

				<div id='navbarBasicExample' className='navbar-end'>
					<div className='navbar-menu'>
						<a className='navbar-item'>Sobre nós</a>
						<a className='navbar-item'>Contato</a>
					</div>

					{/* <div className='navbar-end'>
						<div className='navbar-item'>
							<ButtonPrimary text={'Let’s Talk'}/>
						</div>
					</div> */}
				</div>
			</nav>
		</div>
	</header>
);

export default Header;
