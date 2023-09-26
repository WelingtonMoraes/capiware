import React, {Component} from 'react';
import './style.scss';
import logoEmpresa from '../../assets/logos/logo_footer.png';

const Footer: React.FC = () => (
	<footer className='footer'>
		<div className='bd-content'>
			<div className='columns'>
				<div className='column is-6'>
					<div className='empresa'>
						<div className='empresa__logo is-full is-flex'>
							<img src={logoEmpresa} alt='' />
							<span>Capiware</span>
						</div>
						<div className='is-full'>
							<p><b>Capiware 2023.</b> Todos os direitos reservados.</p>
						</div>
					</div>
				</div>
				<div className='column is-6'>teste</div>
			</div>
		</div>
	</footer>
);

export default Footer;
