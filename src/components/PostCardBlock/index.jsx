import React, { useState } from "react";
// import { ItemAddedCountContext } from '../../App';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
// import { selectCartItemById } from '../../redux/cart/selectors';
// import { CartItem } from '../../redux/cart/types';
// import { addItem } from '../../redux/cart/slice';

// const typeNames = ["color", "black & white"];


// type PizzaBlockProps = {
//   id: string;
//   title: string;
//   price: number;
//   imageUrl: string;
//   sizes: number[];
//   types: number[];
//   rating: number;
// };

export const PostCardBlock = ({ id, title, price, imageUrl, sizes, types }) => {
  const [count, setCount] = useState(0);
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  // const typeNames = useSelector((state) => state.settings.postCardColorTypeNames);
  // const items = useSelector((state) => state.cart.items)

  const dispatch = useDispatch();

  // useEffect(() => {

  // },[count])

  const addItemToCart = (t) => {

    // console.log(sizes, types)
    // console.log(activeSize, activeType)
    
    setCount(count + 1);

    const postCardsCountToCart = count + 1;
    
    // console.log(items.filter((item) => item.id === id))
    
      dispatch(addItem({ id, title, type: types[activeType], size: sizes[activeSize], price, count: postCardsCountToCart, imageUrl}));
    

    
  
  };

  return (
    <div className="postCard-block-wrapper">
      <div className="postCard-block">
        {/* <Link key={id} to={`/pizza/${id}`}> */}
        <img className="postCard-block__image" src={imageUrl} alt="PostCard" />
        <h4 className="postCard-block__title">{title}</h4>
        {/* </Link> */}
        <div className="postCard-block__selector">
          <ul>
            {types.map((type, i) => (
              <li
                key={i}
                onClick={() => setActiveType(i)}
                className={
                  activeType === i || types.length === 1 ? "active" : ""
                }
              >
                {type}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, i) => (
              <li
                key={i}
                onClick={() => setActiveSize(i)}
                className={activeSize === i ? "active" : ""}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div className="postCard-block__bottom">
          <div className="postCard-block__price">from {price}$</div>
          <button
            className="button button--outline button--add"
            onClick={() => addItemToCart()}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Add to cart</span>
            {count > 0 && <i>{count}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};
