import React, { Component } from 'react';
import './App.css';

//component
import NavBar from './component/NavBar';
import Search from './component/Search';
import PokeVis from './component/poke';
import Footer from './component/Footer';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      isFound: false,
      pokeId: 1,
      pokeData: null
    }

    this.searchHandler = this.searchHandler.bind(this);
    this.search = this.search.bind(this);
    this.nextPokemon = this.nextPokemon.bind(this);
    this.prevPokemon = this.prevPokemon.bind(this);

  }

  searchHandler(e){
    e.preventDefault();
    const {target} = e;

    this.search(target.username.value)
    
  }

  search(id_name) {
    const API_URI = "https://pokeapi.co/api/v2/";

    this.setState({
      isFound: false
    })

    fetch(API_URI + "pokemon/" + id_name + "/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          pokeData: data,
          pokeId: data.id
        })

        fetch(data.types[0].type.url)
          .then(response => response.json())
          .then(data2 => {
            this.setState({
              pokeType: data2,
              isFound: true
            })
          })
      })
  }

  nextPokemon(){
    if (this.state.pokeId < 802) {
      this.setState({
        pokeId: this.state.pokeId+1
      })
      this.search(this.state.pokeId+1)
    }
  }

  prevPokemon() {
    if(this.state.pokeId > 1){
      this.setState({
        pokeId: this.state.pokeId - 1
      })
      this.search(this.state.pokeId - 1)
    }
  }

  componentDidMount(){
    this.search(this.state.pokeId);
  }

  render() {
    const {pokeData, pokeType, isFound} = this.state;

    return (
      <div>
        <NavBar Name="PokeFinder" />
        <Search loginHandler={this.searchHandler} nextPokemon={this.nextPokemon} prevPokemon={this.prevPokemon}/> 
        {isFound ? <PokeVis data={pokeData} pokeType={pokeType}/>  : null}
        <Footer />
      </div>
      
    );
  }
}

export default App;
