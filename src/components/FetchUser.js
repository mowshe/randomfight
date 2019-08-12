import React from 'react';

class FetchUser extends React.PureComponent {

  state = {
    loading:true,
    person:null,
    min:5,
    max:100,
    hp: null,
    attack:null,
    Defense:null    
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    //const hp = "ahh";
    const hp = Math.floor(Math.random() * (+this.state.max - +this.state.min)) + +this.state.min;
    const attack = Math.floor(Math.random() * (+this.state.max - +this.state.min)) + +this.state.min;
    const defense = Math.floor(Math.random() * (+this.state.max - +this.state.min)) + +this.state.min;
    this.setState({
      person: data.results[0],
      loading: false,
      hp: hp,
      attack: attack,
      defense: defense
    });
  }

  render() {
    return (

      <div>
        {this.state.loading || !this.state.person ? (
          <div>loading...</div>
        ):(
          <div>
            <img src={this.state.person.picture.large} alt="ah" />
            <div>{this.state.person.name.first}</div>
            <div>{this.state.person.name.last}</div>
            <div>HP: {this.state.hp}</div>
            <div>Attack: {this.state.attack}</div>
            <div>Defense: {this.state.defense}</div>
          </div>
        )}
      </div>
    );
  }
}

export default FetchUser;
