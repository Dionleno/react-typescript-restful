import React from 'react'
import { Switch, Route } from 'react-router-dom'  
import { AppRoutes as routes } from './routes' 

const Routes: React.FC = ()  => {
  return (
    <Switch>
      {routes.map((route) => {
        return (
          <Route
            path={`${route.path}`}
            component={route.component}
            key={route.path}
          />
        )
      })}
    </Switch>
  )
}

export default Routes
