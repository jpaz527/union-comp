import { useState } from 'react'
import './App.css'
import unionComp from "./assets/unionComp.json";
import DeckSelection from './components/DeckSelection.jsx'
import { getRandomIntInclusive } from './utils/random.js'

const PLAYER_TURN = {
  NONE: 'none',
  RED: 'red',
  BLUE: 'blue',
};

function App() {
  const [deckList, setDeckList] = useState([...unionComp])
  const [playerTurn, setPlayerTurn] = useState(PLAYER_TURN.RED)
  const [goCount, setGoCount] = useState(1)

  const pickDeck = (selectedId) => {
    const newDeckList = [...deckList]
    for (let index = 0; index < newDeckList.length; index++) {
      const deck = newDeckList[index];
      if (selectedId === deck.id) {
        deck.player = playerTurn
        deck.alreadyPicked = true
        deck.round = Math.round(goCount / 2)
        console.log(Math.round(goCount / 2))
        break;
      }
    }
    console.log('Updated deck list', newDeckList);

    setGoCount(goCount + 1)
    setDeckList([...newDeckList])
    setPlayerTurn(playerTurn === PLAYER_TURN.RED ? PLAYER_TURN.BLUE : PLAYER_TURN.RED)
  }

  const addDeckHandler = (selectedId) => {
    const newDeckList = [...deckList]
    for (let index = 0; index < newDeckList.length; index++) {
      const deck = newDeckList[index];
      if (selectedId === deck.id) {
        deck.isEnabled = true
        break;
      }
    }
    setDeckList([...newDeckList])
  }

  const addAllDeckHandler = () => {
    const newDeckList = [...deckList]

    setDeckList([...newDeckList.map(deck => {
      deck.isEnabled = true
      return deck
    })])
  }

  const resetDeckHandler = () => {
    const newDeckList = [...deckList]

    setDeckList([...newDeckList.map(deck => {
      deck.isEnabled = false
      deck.alreadyPicked = false
      deck.player = PLAYER_TURN.NONE
      deck.round = 0
      setGoCount(1)
      return deck
    })])
  }

  const randomDeckSelection = () => {
    const selectedDecks = deckList.filter(deck => (deck.isEnabled && !deck.alreadyPicked))
    const randomDeckSelectionIndex = getRandomIntInclusive(0, (selectedDecks.length - 1))

    const selectedId = selectedDecks[randomDeckSelectionIndex].id
    console.log('Random selected ID: ', selectedId);

    pickDeck(selectedId)
  }

  return (
    <>
      <div className="@container">
        {/* Title Component */}
        <div className='text-6xl text-center mb-6 text-teal-700 font-bold'>Union Comp</div>
        {/* Input List Component */}
        <DeckSelection deckList={unionComp} addDeckHandler={addDeckHandler} addAllDeckHandler={addAllDeckHandler} resetDeckHandler={resetDeckHandler} randomDeckSelection={randomDeckSelection} />
        {/* Decks List */}
        <div className='flex justify-center mb-4 text-2xl'>
          <ul>
            {deckList.filter(deck => deck.isEnabled).map(filteredDeck => {
              const css = filteredDeck.alreadyPicked ? 'mb-1 line-through' : 'mb-1'
              const icon = filteredDeck.player === PLAYER_TURN.NONE ? '🔘' : filteredDeck.player === PLAYER_TURN.RED ? '🔴' : '🔵'
              return (<div key={filteredDeck.id} className='flex'> <span>{icon}</span><li className={css}>{filteredDeck.title}<span>{filteredDeck.round === 0 ? '' : `(${filteredDeck.round})`}</span></li></div>)
            })}
          </ul>
        </div>

        {/* RANDOMIZER */}
        {/* <div className='flex justify-center gap-2 flex-wrap'>
          <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 border-4 rounded-lg border-teal-700">
            <img class="mx-auto block h-32 rounded-full sm:mx-0 sm:shrink-0" src={unionComp.sao[0].thumbnail} alt={unionComp.sao[0].title} />
            <div class="space-y-2 text-center sm:text-left">
              <div class="space-y-0.5">
                <p class="text-lg font-semibold text-black">{unionComp.sao[0].title}</p>
                <p class="font-medium text-gray-500">{unionComp.sao[0].anime}</p>
              </div>
              <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700">
                Message
              </button>
            </div>
          </div>
          <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 border-4 rounded-lg border-red-400">
            <img class="mx-auto block h-32 rounded-full sm:mx-0 sm:shrink-0" src={unionComp.demonSlayer[0].thumbnail} alt={unionComp.demonSlayer[0].title} />
            <div class="space-y-2 text-center sm:text-left">
              <div class="space-y-0.5">
                <p class="text-lg font-semibold text-black line-through">{unionComp.demonSlayer[0].title}</p>
                <p class="font-medium text-gray-500 line-through">{unionComp.demonSlayer[0].anime}</p>
              </div>
              <div>😵</div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default App
