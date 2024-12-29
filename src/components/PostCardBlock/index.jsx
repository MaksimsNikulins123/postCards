import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectCartItemById } from '../../redux/cart/selectors';
// import { CartItem } from '../../redux/cart/types';
// import { addItem } from '../../redux/cart/slice';

const typeNames = ['color', 'black & white'];

// type PizzaBlockProps = {
//   id: string;
//   title: string;
//   price: number;
//   imageUrl: string;
//   sizes: number[];
//   types: number[];
//   rating: number;
// };

export const PostCardBlock = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
}) => {
  const [count, setCount] = useState(0)
  // const dispatch = useDispatch();
  // const cartItem = useSelector(selectCartItemById(id));
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  // const addedCount = cartItem ? cartItem.count : 0;

  // const onClickAdd = () => {
  //   const item: CartItem = {
  //     id,
  //     title,
  //     price,
  //     imageUrl,
  //     type: typeNames[activeType],
  //     size: sizes[activeSize],
  //     count: 0,
  //   };
  //   dispatch(addItem(item));
  // };

  // console.log('PostCard block render')

  return (
    <div className="postCard-block-wrapper">
      <div className="postCard-block">
        {/* <Link key={id} to={`/pizza/${id}`}> */}
          <img className="postCard-block__image" src={imageUrl} alt="PostCard" />
          <h4 className="postCard-block__title">{title}</h4>
        {/* </Link> */}
        <div className="postCard-block__selector">
          <ul>
            {types.map((typeId) => (
              <li
                key={typeId}
                onClick={() => setActiveType(typeId)}
                className={activeType === typeId || types.length === 1 ? 'active' : ''}>
                {typeNames[typeId]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, i) => (
              <li
                key={size}
                onClick={() => setActiveSize(i)}
                className={activeSize === i ? 'active' : ''}>
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div className="postCard-block__bottom">
          <div className="postCard-block__price">from {price}$</div>
          <button  className="button button--outline button--add" onClick={() => setCount(count + 1)}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span >Add to cart</span>
            <i>{count}</i>
            {/* {addedCount > 0 && <i>{addedCount}</i>} */}
          </button>
        </div>
      </div>
    </div>
  );
};
