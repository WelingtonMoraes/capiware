import React, {Component, useState} from 'react';
import Typewriter from 'typewriter-effect';
import './style.scss';
import logoEmpresa from '../../assets/logos/logo_empresa.png';

const Header: React.FC = () => {
	const [menuAberto, setMenuAberto] = useState(false);

	const toggleMenu = () => {
		setMenuAberto(!menuAberto);
	};

	return (
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

					<div id='navbarBasicExample' className='navbar-end menu'>
						<div className='navbar-menu'>
							<a href='#idQuemSomos' className='navbar-item'>Sobre nós</a>
							<a href='#idContatos' className='navbar-item'>Contato</a>
						</div>

						<div className={`menu-list ${menuAberto ? 'is-open' : ''}`}>
							<a href='#idQuemSomos' className='navbar-item'>Sobre nós</a>
							<a href='#idContatos' className='navbar-item'>Contato</a>
						</div>

						<div className={`navbar-burger burger ${menuAberto ? 'is-active' : ''}`} onClick={toggleMenu}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
