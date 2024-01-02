import { Suspense, lazy } from 'react';

const AboutPageAsync = lazy(() => import('./AboutPage'));

const AboutPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
	<Suspense fallback={null}>
		<AboutPageAsync {...props} />
	</Suspense>
);

export default AboutPage;