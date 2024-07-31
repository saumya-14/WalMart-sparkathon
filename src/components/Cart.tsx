import Image from 'next/image';
import shipping from "../../public/shipping.png";
import pickup from "../../public/pickup.png";
import delivery from "../../public/delivery.png";
import React from 'react';

const Cart = () => {
  return (
    <div className="w-auto h-auto absolute p-4 rounded-md bg-[#0071DC] top-12 right-0 flex flex-col z-20">
      <div className='flex flex-col items-center gap-4'>

        {/* images */}
        <div className='flex flex-col items-center gap-2'>
          <div className='flex flex-col items-center'>
            <Image src={shipping} alt='shipping' width={50} height={50} />
            <p className='text-white mt-2'>Shipping</p>
          </div>
          <div className='flex flex-col items-center'>
            <Image src={pickup} alt='pickup' width={50} height={50} />
            <p className='text-white mt-2'>Pickup</p>
          </div>
          <div className='flex flex-col items-center'>
            <Image src={delivery} alt='shipping' width={50} height={50} />
            <p className='text-white mt-2'>Delivery</p>
          </div>
        </div>

        {/* box1 */}
        <div>
          {/* Additional content for box1 */}
        </div>

        {/* box2 */}
        <div>
          {/* Additional content for box2 */}
        </div>
      </div>
    </div>
  );
}

export default Cart;
