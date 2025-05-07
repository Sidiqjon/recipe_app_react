import React, { memo } from "react"

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div
      className="w-72 bg-white p-4 rounded-lg shadow hover:shadow-lg cursor-pointer transition"
      onClick={onClick}
    >
      <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2 text-blue-600 text-center">{recipe.name}</h3>
      <p className="text-sm text-gray-600 mt-1 text-center">{recipe.cuisine}</p>
      <p className="text-sm text-green-600 mt-1 text-center">{recipe.difficulty}</p>
    </div>
  )
}

export default memo(RecipeCard)