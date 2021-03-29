import { useState } from "react";

const Categories = (props) => {
  const [activeItem, setActiveItem] = useState([0, 1]);
  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div>
      <div className="categories">
        <ul>
          <li>Все</li>
          {props.items.map((name, index) => (
            <li
              className={activeItem === index ? "active" : ""}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
