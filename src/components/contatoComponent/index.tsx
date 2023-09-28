import React, {Component} from 'react';
import './style.scss';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ButtonPrimary from '../button/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck, faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';

const contato: React.FC = () => (
	<div className='contato'>
		<div className='field'>

			<div className='columns is-multiline'>

				<div className='column is-6 mb-4'>
					<label className='label'>Nome</label>
					<div className='control'>
						<input className='input contato__inputText' type='text' placeholder='seu nome' />
					</div>
				</div>

				<div className='column is-6 mb-4'>
					<label className='label'>E-mail</label>
					<div className='control'>
						<input className='input contato__inputText' type='email' placeholder='exemplo@gmail.com' />
					</div>
					{/* <p className='help is-danger'>This email is invalid</p> */}
				</div>

				<div className='column is-12 mb-4'>
					<label className='label'>Telefone</label>
					<div className='field is-expanded'>
						<PhoneInput
							country='br'
							regions={['america']}
						/>
						{/* <p className='help'>Do not enter the first zero</p> */}
					</div>
				</div>

				<div className='column is-12 mb-4'>
					<label className='label'>Empresa</label>
					<div className='control'>
						<input className='input contato__inputText' type='text' placeholder='Capiware' />
					</div>
				</div>

				<div className='column is-12 is-flex is-justify-content-center mb-3'>
					<ButtonPrimary text={'Entre em Contato'} shadow={false} />
				</div>

			</div>
		</div>
	</div>
);

export default contato;
