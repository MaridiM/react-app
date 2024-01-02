import { Suspense, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'shared';
import { useLanguage, useTranslate } from 'shared/config';
import { ThemeContext } from './providers';
import { PageLayout } from './ui';

import 'shared/config/i18n/i18n';
import './styles/index.sass';

const App = () => {
	const { theme } = useContext(ThemeContext);
    
	const { value, changeLanguage } = useLanguage();
	const { translation: { login } } = useTranslate('auth', [
		['login', true],
	]);
	
	return (
		<div className={`app ${theme}`} data-theme={theme} data-testid='App.testDataId'>
			<Suspense fallback={<div>Loading...</div>}>
				<Link to='/'>Main</Link>
				<Link to='/about'>About</Link>
				<Link to='/shop'>Shop</Link>

				<button onClick={(e) => changeLanguage(e)}>{ value }</button>
                
				<h3>{ login.title }</h3>
				<Button text='Button' />
				
				{/* SHOW FROM  ELEMENT */}
				<PageLayout />
			</Suspense>
		</div> 
	);
};

export default App;
