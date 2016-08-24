import expect from 'expect';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/styles.scss'

const TrafficLight = ({state}) =>{
  let html0;
  let html1;
  let html2;

  if(state === 0){
    html0 = <div class="red light"></div>
  }
  else{
    html0 = <div class="red light off"></div>
  }

  if(state === 1){
    html1 = <div class="yellow light"></div>
  }
  else{
    html1 = <div class="yellow light off"></div>
  }

  if(state === 2){
    html2 = <div class="green light"></div>
  }
  else{
    html2 = <div class="green light off"></div>
  }

  return (
  <div>
  <div class="traffic-light">
  {html0}
  {html1}
  {html2}
  </div>
  <button onClick={() => store.dispatch({type: 'NEXT_STATE'})
    }>Change</button>
  </div>
    )
}


/*
si no hay libreria de immutable
state = []
return [...state, 0]
*/

//Reducer
const counterList = (state = 0, action) => {
 
  switch (action.type){
    case 'NEXT_STATE':
      if (state - 1 < 0){
        return 2;
      }
      return state - 1;
    case 'PREVIOUS':
      if (state + 1 > 2){
        return 0;
      }
      return state + 1 ;
    default:
      return state;
  }
}

const store = createStore(counterList);


const render = () => {
  ReactDOM.render(
    <TrafficLight state={ store.getState() } />,
    document.getElementById('root')
  );


  // ReactDOM.render(
  //   <Counter 
  //     value={999}
  //     incrementAction={()=> {alert("incremento")}}
  //     decrementAction={()=> {alert("decremento")}}
  //     removeAction={()=> {alert("borrar")}} />,
  //   document.getElementById('root')
  // );
}

store.subscribe(render);
render();
