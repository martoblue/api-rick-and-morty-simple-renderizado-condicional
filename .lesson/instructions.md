# Instrucciones:

```
Objetivo del ejercicio: El objetivo de este ejercicio es que los estudiantes apliquen los conceptos de React relacionados con el manejo de estado, efectos secundarios, comunicación entre componentes y renderizado condicional. Los estudiantes deben crear una aplicación que muestre personajes de la serie "Rick and Morty" y permita al usuario filtrarlos según estén vivos o muertos.
```

### Paso 1: Configuración del proyecto

Configura un proyecto de React utilizando create-react-app o cualquier otra herramienta de tu elección.

### Paso 2: Componentes React

Crea dos componentes funcionales: CharacterList y CharacterItem.

### Paso 3: Uso de useState y useEffect

En el componente CharacterList, utiliza el hook useState para mantener un estado que almacene la lista de personajes y otro estado para indicar si se deben mostrar personajes vivos o muertos.

Utiliza el hook useEffect para realizar una petición fetch a la API de Rick and Morty (https://rickandmortyapi.com/api/character) y actualiza el estado con la lista de personajes cuando se obtengan los datos.

### Paso 4: Comunicación entre componentes

El componente CharacterList debe pasar la lista de personajes como una prop al componente CharacterItem.

### Paso 5: Renderizado condicional por personaje vivo o muerto

En el componente CharacterItem, utiliza una lógica de renderizado condicional para mostrar o no mostrar un personaje según su estado (vivo o muerto). Puedes usar el operador ternario para decidir si se renderiza el componente.

```
// Ejemplo de renderizado condicional en CharacterItem
{character.status === 'Alive' ? (
  // Renderizar el componente si el personaje está vivo
) : (
  // Renderizar el componente si el personaje está muerto
)}
```

### Paso 6: Agregar controles de filtro

En el componente CharacterList, agrega botones o controles que permitan al usuario cambiar entre ver personajes vivos y muertos. Para esto, utiliza el estado showAlive para determinar qué personajes mostrar.

### Paso 7: Estilos

```
Personaliza el estilo de tu aplicación y considera agregar funcionalidades adicionales como paginación o búsqueda de personajes.
```

Este ejercicio permitirá a los estudiantes aplicar de manera práctica los conceptos de React relacionados con el manejo de estado, comunicación entre componentes y el uso de datos de una API externa. Les dará una comprensión más sólida de cómo trabajar con React en aplicaciones del mundo real.