import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config';

const AppRouter = () => (
    <div>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route key={path} path={path} element={<div className='page'>{element}</div>} />
                ))}
            </Routes>
        </Suspense>
    </div>
);

export default AppRouter;
