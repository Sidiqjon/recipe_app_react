import { useEffect, useState, memo } from 'react'
import RecipeCard from './RecipeCard'
import TagFilter from './TagFilter'
import RecipeModal from './RecipeModal'

import line from "../../assets/Line.png"

const BASE_URL = 'https://dummyjson.com/recipes'

const Main = () => {
  const [recipes, setRecipes] = useState([])
  const [tags, setTags] = useState([])
  const [selectedTag, setSelectedTag] = useState('All')
  const [offset, setOffset] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [activeRecipe, setActiveRecipe] = useState(null)

  useEffect(() => {
    fetch(`${BASE_URL}/tags`)
      .then(res => res.json())
      .then(data => setTags(['All', ...data]))
  }, [])

  useEffect(() => {
    loadRecipes(0, true)
  }, [selectedTag])

  const loadRecipes = (skip, replace = false) => {
    const url = selectedTag === 'All'
      ? `${BASE_URL}?limit=10&skip=${skip}`
      : `${BASE_URL}/tag/${selectedTag}?limit=10&skip=${skip}`

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const items = data.recipes || []
        setRecipes(prev => replace ? items : [...prev, ...items])
        setOffset(skip + 10)
      })
  }

  const openModal = recipe => {
    setActiveRecipe(recipe)
    setShowModal(true)
  }

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Our Recipes</h1>
      <TagFilter tags={tags} selected={selectedTag} setSelected={setSelectedTag} />

      <div className="flex flex-wrap gap-4 justify-center mt-6">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} onClick={() => openModal(recipe)} />
        ))}
      </div>

      {recipes.length >= 10 && (
        <button
          className="mt-8 mx-auto flex items-center gap-2 border border-gray-300 px-6 py-2 rounded-full bg-white hover:bg-gray-100 transition"
          onClick={() => loadRecipes(offset)}
        >
          <p className="font-semibold">Show more</p>
          <img src={line} alt="arrow" />
        </button>
      )}

      {showModal && activeRecipe && (
        <RecipeModal recipe={activeRecipe} onClose={() => setShowModal(false)} />
      )}
    </div>
  )
}

export default memo(Main)