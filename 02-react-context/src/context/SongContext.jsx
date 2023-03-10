import { createContext, useState, useEffect, useContext } from 'react'
import canciones from '../assets/listaCanciones.json'

// Manejador de contexto del estado global de react
// para poder compartir la misma información entre componentes sin tener que pasarla por props

// para usar CONTEXT se deben seguir los siguientes pasos:

// Paso 1 - Crear el contexto vacio despues de importar el componente createContext de react

const SongContext = createContext()

// Paso 2 - Crear el provider del contexto
// el provider maneja desde donde se obtiene y como se pasa la información hacia los componentes que los consuman

function SongProvider (props) {
  const [list, setList] = useState([]) // La lista de canciones
  const [loading, setLoading] = useState(true)
  const [selectedSong, setSelectedSong] = useState({}) // La canción seleccionada

  // simular llamada a la API de lista de canciones
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  const contextValues = {
    list,
    loading,
    selectedSong,
    setSelectedSong // se pasan los valores que se quieren compartir
  }

  return (
    <SongContext.Provider value={contextValues} {...props} />
  )
}

// Paso 3 - Consumidor del contexto es el que brinda acceso a los componentes que lo consuman
const useSongContext = () => {
  const context = useContext(SongContext)
  return context
}

export { SongProvider, useSongContext }

/*
 * Paso 5  - Debemos de ir a un componente superior al que queremos compartir la información
* para que todos los componentes hijos puedan tomarlo
*/

/*
* Paso 6 - Importar el contexto en el componente que queremos consumir la información (SongList.jsx)
*/
