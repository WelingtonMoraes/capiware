import React from 'react';
import './style.scss';

type Props = {
	text: string;
};

const ButtonPrimary: React.FC<Props> = ({text}) => (
	<div className='buttons'>
		<a className='button is-light'>{text}</a>
	</div>
);

export default ButtonPrimary;
