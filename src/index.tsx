import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main/index.scss';
import App from './pages/App';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
	document.getElementById('root')!,
);
root.render(
	<React.StrictMode>
		<Header />
		<App />
		<Footer />
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
