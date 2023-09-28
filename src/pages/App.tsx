import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/main/App.scss';
import ButtonPrimary from '../components/button';
import Contato from '../components/contatoComponent';
import {NavHashLink} from 'react-router-hash-link';

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
							<a href='#idContatos'>
								<ButtonPrimary text={'Entre em Contato'} shadow={true} />
							</a>
						</div>
					</div>
				</div>
			</div>

			<div id='idQuemSomos' className='quemSomos is-flex is-align-items-center'>
				<div className='bd-content'>
					<div className='columns'>
						<div className='column is-6'>
							<div className='columns is-multiline'>
								<div className='column is-6 is-flex is-justify-content-center'>
									<img src='https://bulma.io/images/placeholders/256x256.png'/>
								</div>
								<div className='column is-6 is-flex is-justify-content-center'>
									<img src='https://bulma.io/images/placeholders/256x256.png'/>
								</div>
								<div className='column is-6 is-flex is-justify-content-center'>
									<img src='https://bulma.io/images/placeholders/256x256.png'/>
								</div>
								<div className='column is-6 is-flex is-justify-content-center'>
									<img src='https://bulma.io/images/placeholders/256x256.png'/>
								</div>
							</div>
						</div>
						<div className='column is-6 is-flex is-align-items-center'>
							<div className='quemSomos__descricao'>
								<h2>Quem somos</h2>

								<p className='mb-4 mt-4'>
                                    Somos uma equipe de especialistas dedicados ao <b>desenvolvimento de software</b>,
                                    com anos de experiência e um histórico comprovado de sucesso. Nosso compromisso
                                    é entregar produtos que não apenas atendam, mas também <b>superem</b> as expectativas
                                    de nossos clientes.
								</p>

								<div className='is-flex is-align-items-center'>
									<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
										<path d='M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.99545 11.4139C4.6047 11.024 4.60391 10.3912 4.99369 10.0003C5.38371 9.60918 6.01701 9.60846 6.40793 9.9987L7.999 11.587L12.586 7C12.9765 6.60953 13.6095 6.60953 14 7C14.3905 7.39047 14.3905 8.02353 14 8.414L8.001 14.413Z' fill='#2FAB73'/>
									</svg>
									<p className='quemSomos__descricao--item'>Criação de site</p>
								</div>

								<div className='is-flex is-align-items-center'>
									<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
										<path d='M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.99545 11.4139C4.6047 11.024 4.60391 10.3912 4.99369 10.0003C5.38371 9.60918 6.01701 9.60846 6.40793 9.9987L7.999 11.587L12.586 7C12.9765 6.60953 13.6095 6.60953 14 7C14.3905 7.39047 14.3905 8.02353 14 8.414L8.001 14.413Z' fill='#2FAB73'/>
									</svg>
									<p className='quemSomos__descricao--item'>Manutenção de sistemas</p>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>

			<div id='idContatos' className='faleConosco'>
				<div className='bd-content is-flex is-flex-wrap-wrap is-justify-content-center'>
					<h2 className='mb-5'>Entre em contato conosco</h2>
					<div className='faleConosco__form is-flex is-justify-content-center'>
						<Contato />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
