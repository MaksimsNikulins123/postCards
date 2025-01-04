import React from 'react';

// type CategoriesProps = {
//   value: number;
//   onChangeCategory: (idx: number) => void;
// };

const categories = ['All', 'Retro', 'Social', 'Modern', 'Comics', 'New'];

export const Categories = ({category, onChangeCategory}) => {
  
  // console.log('Categories render')

  // const [activeIndex, setActiveIndex] = useState(0);

  // const onClickCategory = (i) => {
  //   category(i)
  // }

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={category === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}