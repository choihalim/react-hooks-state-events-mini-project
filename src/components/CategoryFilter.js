import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {

  const categoryButtons = categories.map(category => {
    const className = category === selectedCategory ? "selected" : null;
    return (
      <button
        onClick={() => onSelectCategory(category)}
        className={className}
        key={category}
      >
        {category}
      </button>
    );
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
