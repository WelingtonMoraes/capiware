import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/main/App.scss';
import ButtonPrimary from '../components/button/ButtonPrimary';

function App() {
	return (
		<div className='App'>
			<div className='banner is-flex is-align-items-center'>
				<div className='bd-content'>
					<div className='columns'>
						<div className='column is-three-fifths'></div>
						<div className='column'>
							<h1>
                                A sua <b>visão</b>,<br /> o nosso <b>código</b>.
							</h1>
							<p>
                                Se você está procurando soluções de software
                                inovadoras, confiáveis e personalizadas para
                                impulsionar o seu negócio, você veio ao lugar
                                certo. Na <b>Capiware</b>, somos apaixonados por
                                criar sistemas de software de <b>alta qualidade</b>
                                que atendam às necessidades específicas de cada cliente.
							</p>
							<ButtonPrimary text={'Entre em Contato'} shadow={true} />
						</div>
					</div>
				</div>
			</div>
			<div className='quemSomos is-flex is-align-items-center'>
				<div className='bd-content'>
					<div className='columns'>
						<div className='column is-half'>teste</div>
						<div className='column'>teste</div>
					</div>
				</div>
			</div>

			<footer className='footer'>
				<div className='content has-text-centered'>
					<p>
						<strong>Bulma</strong> by <a href='https://jgthms.com'>Jeremy Thomas</a>. The source code is licensed
						<a href='http://opensource.org/licenses/mit-license.php'>MIT</a>. The website content is licensed <a href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY NC SA 4.0</a>.
					</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
