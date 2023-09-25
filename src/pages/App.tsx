import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/main/App.scss';

function App() {
	return (
		<div className='App'>
			<div className='banner is-flex is-align-items-center'>
				<div className='bd-content'>
					<div className='columns'>
						<div className='column is-three-fifths'></div>
						<div className='column'>
							<h1>A sua <b>visão</b>,<br/> o nosso <b>código</b>.</h1>
							<p>
								Se você está procurando soluções de software inovadoras,
								confiáveis e personalizadas para impulsionar o seu negócio,
								você veio ao lugar certo. Na <b>Capiware</b>, somos apaixonados por
								criar sistemas de software de <b>alta qualidade</b> que atendam às
								necessidades específicas de cada cliente.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
