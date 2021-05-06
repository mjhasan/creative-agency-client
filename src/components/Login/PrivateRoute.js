import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [user, updateUser] = useContext(UserContext)
    const auth = user.emailVerified;
    return (
        <>
            <Route
                {...rest}
                render={({ location }) =>
                    auth ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </>
    );
};

export default PrivateRoute;