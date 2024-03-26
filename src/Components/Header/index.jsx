
import React from 'react';
  import Image from 'next/image';

function Header({

}) {
  
   
  return (
    <div className='header__container'>
        <div className="header__top">
            <div className="header__top__items">Help</div>
            <div className="header__top__items">Orders & Returns</div>
            <div className="header__top__items">Hi, John</div>
        </div>
        <div className="header__mid">
            <div className="header__mid__left">
                ECOMMERCE
            </div>
            <div className="header__mid__mid">
                <div className="header__mid__mid__items">Categories</div>
                <div className="header__mid__mid__items">Sale</div>
                <div className="header__mid__mid__items">Clearance</div>
                <div className="header__mid__mid__items">New stock</div>
                <div className="header__mid__mid__items">Trending</div>
            </div>
            <div className="header__mid__right">
            <Image src='/icons/seach.svg' width={19} height={19} /> 
            <Image src='/icons/cart.svg' width={19} height={19} /> 
</div>
        </div>
 
        <div className="header__bottom">
            <span className="header__bottom__left"><Image src='/icons/left.svg' width={6} height={11} />
          
            </span>
        Get 10% off on business sign up
        <span className="header__bottom__right"><Image src='/icons/right.svg' width={6} height={11} /></span>

        </div>
    </div>
  );
}



export default (Header);
