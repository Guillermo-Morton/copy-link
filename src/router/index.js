import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import routes from './routes'

const ComponentWrapper = ({ Component, position }) => (
    <div className={`p-5 min-h-screen pt-20 flex items-stretch bg-slate-900 text-white`}>
      <Component {...{position}}/>
    </div>
  )
const Router = () => {
    return (
        <Routes>
            {routes.map(({route, as, Component, position, params}) => (
                <Route key={as} path={route + params} element={<ComponentWrapper {...{position, Component}} />} />
            ))}
             <Route path="*" element={<Navigate to={routes[0].route} replace />} />
        </Routes>
    );
};

export default Router;