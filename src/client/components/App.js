import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header.js'
import Container from './Container.js'
import Favs from './Favorites.js'
import axios from 'axios'
import Login from './Login.js'
import Signup from './Signup.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      recipes:[],
      ingredients:[
            {
              id: 1,
              foodName : 'Milk',
              checked : false,
              category : 'dairy'
            },
            {
              id: 2,
              foodName : 'Cheese',
              checked : false,
              category : 'dairy'
            },
            {
              id : 3,
              foodName : 'Chicken',
              checked : false,
              category : 'meat'
            },
            {
              id : 4,
              foodName : 'Beef',
              checked : false,
              category : 'meat'
            },
            {
              id : 5,
              foodName : 'Pork',
              checked : false,
              category : 'meat'
            },
            {
              id : 6,
              foodName : 'Sausage',
              checked : false,
              category : 'meat'
            },
            {
              id : 7,
              foodName : 'Cumin',
              checked : false,
              category : 'spice'
            },
            {
              id : 8,
              foodName : 'Chili Pepper',
              checked : false,
              category : 'spice'
            },
            {
              id : 9,
              foodName : 'Pepper',
              checked : false,
              category : 'spice'
            },
            {
              id : 10,
              foodName : 'Salt',
              checked : false,
              category : 'spice'
            },
            {
              id : 11,
              foodName : 'Broccoli',
              checked : false,
              category : 'vegetable'
            },
            {
              id : 12,
              foodName : 'Cauliflower',
              checked : false,
              category : 'vegetable'
            },
            {
              id : 13,
              foodName : 'Green beans',
              checked : false,
              category : 'vegetable'
            },
            {
              id : 14,
              foodName : 'Sour cream',
              checked : false,
              category : 'dairy'
            },
            {
              id : 15,
              foodName : 'Butter',
              checked : false,
              category : 'dairy'
            },
            {
              id : 16,
              foodName : 'Romaine',
              checked : false,
              category : 'vegetable'
            },
            {
              id : 17,
              foodName : 'Asparagus',
              checked : false,
              category : 'vegetable'
            },
            {
              id : 18,
              foodName : 'Zuchini',
              checked : false,
              category : 'vegetable'
            },
            {
              id : 19,
              foodName : 'Brussel Sprouts',
              checked : false,
              category : 'vegetable'
            },
            {
              id : 20,
              foodName : 'Parsley',
              checked : false,
              category : 'spice'
            },
            {
              id : 21,
              foodName : 'Basil',
              checked : false,
              category : 'spice'
            },
            {
              id : 22,
              foodName : 'Oregano',
              checked : false,
              category : 'spice'
            },
            {
              id : 23,
              foodName : 'Cayenne',
              checked : false,
              category : 'spice'
            },
            {
              id : 24,
              foodName : 'Bacon',
              checked : false,
              category : 'meat'
            },
            {
              id : 25,
              foodName : 'Steak',
              checked : false,
              category : 'meat'
            },
            {
              id : 26,
              foodName : 'Whipped cream',
              checked : false,
              category : 'dairy'
            },
            {
              id : 27,
              foodName : 'Half-n-half',
              checked : false,
              category : 'dairy'
            },
            {
              id : 28,
              foodName : 'Eggs',
              checked : false,
              category : 'dairy'
            },
            {
              id : 29,
              foodName : 'Cod',
              checked : false,
              category : 'fish'
            },
            {
              id : 30,
              foodName : 'Herring',
              checked : false,
              category : 'fish'
            },
            {
              id : 31,
              foodName : 'Tilapia',
              checked : false,
              category : 'fish'
            },
            {
              id : 32,
              foodName : 'Tuna',
              checked : false,
              category : 'fish'
            },
            {
              id : 33,
              foodName : 'Salmon',
              checked : false,
              category : 'fish'
            },
      ],
      autoSearch : false
    }
  }

  componentDidUpdate() {
    console.log("New state after updating App.js -> ", this.state)
  }
  componentDidMount() {
    this.searchRecipes('Default')
  }

  //Send a fetch request to backend to query the Recipe API based on the inputted search value.
  searchRecipes = (searchParams) => {
    // console.log('Entering search recipe')
    console.log('These are the searchParams -> ', searchParams)
    if (searchParams.length > 0) {
    axios.post('/api/recipes', {
      searchParams : searchParams
    })
      // .then(res => res.json())
      .then(recipeData => {
        console.log('This is the data received on in App.js from the server -> ', recipeData.data)
        this.setState({recipes: recipeData.data})
      })
      .catch( err => console.log('Search Recipe error: ', err))
    }
  }

  //Mark an ingredient as checked off
  markChecked = (id) => {
    console.log('This is the ID in markChecked -> ', id)
    const checkedArray = []
    this.setState({
      ingredients: this.state.ingredients.map( ingredient => {
        if (ingredient.id === id) {
          ingredient.checked = !ingredient.checked
        }
        if (ingredient.checked === true) checkedArray.push(ingredient.foodName)
        return ingredient
      })
    })

    console.log('This is the checkedArray in markChecked, App.js -> ', checkedArray)
    console.log('This is autoSearch toggle -> ', this.state.autoSearch)
    if (this.state.autoSearch === true){
      this.searchRecipes(checkedArray)
    }
  }

  toggleAuto = () => {
    this.setState({
      autoSearch: !this.state.autoSearch
    })
    const enabled = this.state.autoSearch === true ?  'disabled': 'enabled' //Opposite than what you'd expect because state hasn't actually updated yet
    console.log(`Auto searching ${enabled}`)

    if (this.state.autoSearch === false){
      const checkedArray = []
      this.state.ingredients.forEach( ingredient => {
        if (ingredient.checked === true) checkedArray.push(ingredient.foodName)
      })
      this.searchRecipes(checkedArray)
    }
  }
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Route exact path='/' render={props => (
            <React.Fragment>
              <Container recipes={this.state.recipes} ingredients={this.state.ingredients} searchRecipes={this.searchRecipes} markChecked={this.markChecked} toggleAuto={this.toggleAuto} />
            </React.Fragment>
          )} />
          <Route path='/favs' component={Favs} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </div>
      </Router>
    )
  }
}

export default App