import React from 'react'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ user, children }) {
    return user.email ? children : <Navigate to="/" />;
}
