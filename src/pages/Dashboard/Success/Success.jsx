import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';

const Success = () => {
  const [, refetch] = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the cart on the frontend after payment success
    refetch();

    // Display a success message
    Swal.fire('Success', 'Your payment was successful, and your cart has been cleared!', 'success');
  }, [refetch]);

  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase! Your transaction was successful.</p>
    </div>
  );
};

export default Success; 