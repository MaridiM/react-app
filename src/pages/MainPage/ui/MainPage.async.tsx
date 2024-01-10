import { Suspense, lazy } from 'react';

const MainPageAsync = lazy(() => import('./MainPage'));

const MainPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
    <Suspense fallback={null}>
        <MainPageAsync {...props} />
    </Suspense>
);

export default MainPage;
