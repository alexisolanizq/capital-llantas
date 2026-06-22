import React from 'react'
import { useLocation } from 'react-router-dom';

const CheckoutFailurePage = () => {

  const location = useLocation();

  console.log(location.pathname);

  return (
    <div>CheckoutFailurePage</div>
  )
}

export default CheckoutFailurePage