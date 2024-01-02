import { Suspense, lazy } from 'react';

const ShopPageAsync = lazy(() => import('./ShopPage'));

const ShopPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
	<Suspense fallback={null}>
		<ShopPageAsync {...props} />
	</Suspense>
);

export default ShopPage;