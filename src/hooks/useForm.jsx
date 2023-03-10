// Reglas para crear un hook personalizado:
// 1. El nombre del hook debe empezar con la palabra use (useForm)
// 2. Siempre deben ser funciones.

import { useState, useEffect } from 'react'

function useForm (callback, defaults) {
  // Estado unico para guardar los datos del formulario en un objeto

  const [input, setInput] = useState(defaults)

  // Cargar los valores del formulario en el estado
  // useEffect se utiliza para manejar los efectos secundarios (llamadas a APIs, Cosas asíncronas, etc)
  useEffect(() => {
    setInput(defaults)
  }, [])

  // Funcion para manejar los cambios en los inputs
  const handleImputChange = (e) => {
    const { name, value } = e.target
    console.log()
    setInput({ ...input, [name]: value })
  }
}
