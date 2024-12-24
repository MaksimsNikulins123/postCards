import React, { useState } from 'react';

// type CategoriesProps = {
//   value: number;
//   onChangeCategory: (idx: number) => void;
// };

const categories = ['All', 'Retro', 'Social', 'Modern', 'Comics', 'New'];

export const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCategory = (i) => {
    setActiveIndex(i)
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={activeIndex === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}