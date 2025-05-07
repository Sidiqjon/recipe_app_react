import React, {memo} from 'react'

const RecipeModal = ({ recipe, onClose }) => {
  return (
    <>
      <div onClick={onClose} className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-40"></div>
      <div className="fixed top-1/2 left-1/2 bg-white z-50 p-6 rounded-lg shadow w-[95%] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-[5px] right-[6px] text-[15px] bg-transparent border-none cursor-pointer transition-transform duration-200 ease-in-out hover:scale-125 hover:text-red-600">
          ❌
        </button>

        <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover rounded mb-4" />
        <h2 className="text-2xl font-bold text-blue-600 mb-2">{recipe.name}</h2>
        <p className="text-sm text-gray-600 mb-3">
          {recipe.cuisine} • {recipe.difficulty}
        </p>
        <p className="text-sm mb-4">
          Prep: {recipe.prepTimeMinutes} min • Cook: {recipe.cookTimeMinutes} min • Servings: {recipe.servings}
        </p>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Ingredients</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {recipe.ingredients.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Instructions</h3>
          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
            {recipe.instructions.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
        </div>
      </div>
    </>
  )
}

export default memo(RecipeModal)