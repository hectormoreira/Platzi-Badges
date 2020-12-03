# Platzi-Badges
Course React.js - Platzi: PlatziBadges

## Global create-react-app
```
npm install -g create-react-app
```

## Install Node Modules
```
cd Platzi-Bages
npm install
```

## Install React Router (Browser)
```
npm install react-router-dom
```

## Run server
```
npm run start
```

## Notes
### Life cycle component
```
Constructor(props){
	/*Este método se ejecuta cuando se instancia un componente. Nos permite definir el estado inicial del componente,
    hacer bind de métodos y definir propiedades internas en las que podemos guardar muchos datos diferente*/
}

componentWillMount(){
	/*Este método se ejecuta cuando el componente se está por renderizar.
	En este punto es posible modificar el estado del componente sin causar una actualización
	(y por lo tanto no renderizar dos veces el componente).*/
}

render(){
	/*En este momento de la fase de montado se van a tomar las propiedades, el estado y el contexto y 
    se va a generar la UI inicial de este componente*/
}

componentDidMount(){
	/*Este último método de la fase de montado se ejecuta una vez el componente se renderizó en el navegador y 
    nos permite interactuar con el DOM o las otras APIs del navegador (geolocation, navigator, notificaciones, etc.).*/
}

componentWillReceiveProps(nextProps){
	/*Este método se ejecuta inmediatamente después que el componente reciba nuevas propiedades. En este punto es posible 
    actualizar el estado para que refleje el cambio de propiedades, ya sea reiniciando su valor inicial o cambiándolo por uno nuevo.*/
}

shouldComponentUpdate(nextProps, nextState){
	/*Este método (el cual debe ser puro) se ejecuta antes de empezar a actualizar un componente, cuando llegan las 
    nuevas propiedades (nextProps) y el nuevo estado (nextState). Acá es posible validar que estos datos sean diferentes de los anteriores (this.props y this.state) y devolver true o false dependiendo de si queremos volver a renderizar o no el componente.*/
}

componentWillUpdate(nextProps, nextState){
	/*Una vez el método anterior devolvió true se ejecuta este método, acá es posible realizar cualquier tipo de preparación antes de que se actualice de la UI*/
}	
```


### State request to API
- Loading
- Error
- Data

## Install faker api
```
npm install faker --save-dev
npm install json-server --save-dev
npm install npm-run-all --save-dev
```

Package JSON
```
"scripts": {
"start": "npm-run-all -p client server",
"client": "react-scripts start",
"server": "json-server --port 3001 --watch server/db.json",
"seed": "node server/seed.js",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
}
```

## Install other dependencies
```
npm install bootstrap
npm install md5
```
