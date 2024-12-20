import React from 'react';
import { WalletMultiButton } from '@tiplink/wallet-adapter-react-ui';
import { LiaWalletSolid } from "react-icons/lia";

const BuyButton = () => {
  return (
    <button className="overflow-hidden flex z-[99999999] self-start ">
    

      <WalletMultiButton   style={{
          background: "#A9F605",
          color: "black",
          borderRadius: "1000px",

        }} />
       <div className='md:hidden absolute ml-2'>  <LiaWalletSolid color='black' /> </div> 
    </button>
  );
};

export default BuyButton;