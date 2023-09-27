import React from 'react';
import './style.scss';

type Props = {
	text: string;
	shadow: boolean;
};

const ButtonPrimary: React.FC<Props> = ({text, shadow = false}) => (
	<div className='buttons'>
		<a className={`buttons ${shadow ? 'buttons__boxShadow button is-light' : 'button is-light'}`}>{text}</a>
	</div>
);

export default ButtonPrimary;
