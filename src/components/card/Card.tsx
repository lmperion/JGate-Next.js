
"use client"
import { useState } from 'react';
import classes from '@/styles/Card.module.scss';
import clsx from 'clsx';
import Button from '../button/Button';
import Image from 'next/image'
import { Product } from '@/types/interface';

import redHeadPhone from '@/img/imageHeadPhone.png';
import blueHeadPhone from '@/img/blueHeadPhone.jpg';
import blackHeadPhone from '@/img/blackHeadPhone.jpg';


interface Props {
  product: Product;
}

export default function Card(props: Props) {
  const {product} = props;
  const [color, setColor] = useState('red');

  const getImage = (color: string) => {
  
  switch(color) {
    case 'red': return redHeadPhone;
    case 'blue': return blueHeadPhone;
    case 'black': return blackHeadPhone;
    default: return redHeadPhone;
  }};

  return (
    <li key={product.id} className={classes.card}>
      <div className={classes.logo}>
        <Image 
          src={getImage(color)}
          alt='HeadPhone'
          width={258}
          height={258}
        />
      </div>
      <div className={classes.content}>
        <h2 className={classes.price}>{product.price}</h2>
        <h3 className={classes.name}>{product.name}</h3>
        <p className={classes.description}>{product.description}</p>
        <span className={classes.text}>Choose your colour</span>
        <div className={classes.ellipses}>
          <div 
            className={clsx({[
              classes.ellipse]: true, 
              [classes.activeColor]: color === 'red',
            })} 
            onClick={() => setColor('red')}>  
          </div>
          <div 
            className={clsx({
              [classes.ellipse]: true, 
              [classes.ellipseBlue]: true,
              [classes.activeColor]: color === 'blue',
            })} 
            onClick={() => setColor('blue')}>  
          </div>
          <div 
            className={clsx({
              [classes.ellipse]: true, 
              [classes.ellipseBlack]: true,
              [classes.activeColor]: color === 'black',
            })} 
            onClick={() => setColor('black')}>  
          </div>
        </div>
        <div className={classes.actions}>
          <Button primery='primery' text='Add to cart'/>
          <Button second='second' text='Buy now'/>
        </div>
        <a href='#' className={classes.link}>Read reviews</a>
      </div>
    </li>
  );
}
  