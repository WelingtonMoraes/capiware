import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main/index.scss';
import App from './pages/App';
import Header from './components/headerComponent';
import Footer from './components/footerComponent';
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

reportWebVitals();
