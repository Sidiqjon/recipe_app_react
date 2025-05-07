import React, { memo } from "react"

const TagFilter = ({ tags, selected, setSelected }) => {
  return (
    <ul className="flex gap-3 overflow-auto pb-2">
      {tags.map(tag => (
        <li
          key={tag}
          className={`px-4 py-2 rounded-full cursor-pointer whitespace-nowrap text-sm ${
            selected === tag
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => setSelected(tag)}
        >
          {tag}
        </li> 
      ))}
    </ul>
  )
}

export default memo(TagFilter)