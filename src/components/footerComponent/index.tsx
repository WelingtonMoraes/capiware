import React, {Component} from 'react';
import './style.scss';
import logoEmpresa from '../../assets/logos/logo_footer.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSquareInstagram, faSquareFacebook, faSquareXTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => (
	<footer className='footer'>
		<div className='bd-content'>
			<div className='columns'>
				<div className='column is-6'>
					<div className='empresa'>
						<div className='empresa__logo is-full is-flex mb-1'>
							<img src={logoEmpresa} alt='' />
							<span className='is-flex is-align-items-center'>Capiware</span>
						</div>
						<div className='is-full'>
							<p><b>Capiware 2023.</b> Todos os direitos reservados.</p>
						</div>
					</div>
				</div>
				<div className='column is-6'>
					<div className='social'>
						<div className='social__redes is-full is-flex is-align-items-center is-justify-content-end mb-1'>
							<div className='social__redes-item'>
								<a href='https://bulma.io/'>
									<FontAwesomeIcon className='fa-xl' icon={faLinkedin} />
								</a>
							</div>
							<div className='social__redes-item'>
								<a href='https://bulma.io/'>
									<FontAwesomeIcon className='fa-xl' icon={faSquareXTwitter} />
								</a>
							</div>
							<div className='social__redes-item'>
								<a href='https://bulma.io/'>
									<FontAwesomeIcon className='fa-xl' icon={faSquareFacebook} />
								</a>
							</div>
							<div className='social__redes-item'>
								<a href='https://bulma.io/'>
									<FontAwesomeIcon className='fa-xl' icon={faSquareInstagram} />
								</a>
							</div>
						</div>
						<div className='social__links is-full is-flex is-align-items-center is-justify-content-end'>
							<a href='#idQuemSomos'>Sobre nós</a>
							<a href='#idContatos'>Contato</a>
							<a href=''>Políticas de privacidade</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
