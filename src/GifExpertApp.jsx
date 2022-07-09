import { useState } from "react"

import { AddCategory, GifGrid } from "./components";

// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Pokemon' ]);

  const onAddCategory = ( newCategory ) => {
    // si existe en el objeto la misma caterogia dihitada en el input
    // que no haga nada
    if (categories.includes(newCategory)) {
      return
    }
    
    // se agraga la nuea categoria
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory 
        onNewCategory={ (event) => onAddCategory(event) }
      />

      {/* listado de Gif */}
      { 
        categories.map( (category) => (
          <GifGrid key={ category } category={ category } />
        )) 
      }
    </>
  )
}
