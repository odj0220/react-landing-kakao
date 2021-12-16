import React from 'react';
import './App.scss';
import {RecoilRoot, useRecoilValue} from "recoil";
import {CardCompnent} from "./components/CardComponent";
import {topCardsState, bottomCardsState} from "./atorms";

function App() {
  const TopCards = () => {
    const cards = useRecoilValue(topCardsState);
    const right = cards.map((card, index) => (
        <CardCompnent item={card}></CardCompnent>
    ));
    return (
        <div className="section-top-card">
          <div className="wrap-item">

          </div>
          <div className="wrap-item">
            {right}
          </div>
        </div>
    )
  }

  const BottomCards = () => {
    const cards = useRecoilValue(bottomCardsState);
    return (
        <>
          {cards.map(card => (
              <CardCompnent item={card}></CardCompnent>
          ))}
        </>
    )
  }


  return (
    <RecoilRoot>
      <div className="App">
        <header className="App-header">


        </header>
        <main className="App-main">
          <TopCards />
        </main>
      </div>
    </RecoilRoot>
  );
}

export default App;
