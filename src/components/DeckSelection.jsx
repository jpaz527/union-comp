import { useState } from "react";

const DeckSelection = ({ deckList, addDeckHandler, addAllDeckHandler, resetDeckHandler, randomDeckSelection }) => {
    const [selectedDeck, setSelectedDeck] = useState(deckList[0].id)
    const selectDeckHandler = ({ target }) => {
        const { value } = target
        setSelectedDeck(value)
    }

    return (
        <>
            <div className='flex justify-center mb-4 text-center w-4/5 mx-auto gap-2 font-bold'>
                <button title="Add All" onClick={addAllDeckHandler}>➕➕➕</button>
                <select defaultValue={selectedDeck} title='asd' className='border-2 border-amber-950 text-center grow text-2xl' name="deck-select" id="deckSelect" value={selectedDeck} onChange={selectDeckHandler}>
                    {deckList.map(deck => {
                        const { id, title } = deck
                        return <option key={id} value={id}>{title}</option>
                    })}
                </select>
                <button title='Add from list' onClick={() => { addDeckHandler(selectedDeck) }}>➕</button>
            </div>
            <div className='flex justify-center mb-4 text-center w-1/5 mx-auto gap-2'>
                <button onClick={resetDeckHandler} className="text-red-800 border-2 hover:text-red-500 hover:font-bold p-1 rounded-lg">Reset</button>
                <button onClick={randomDeckSelection} className="text-teal-700 border-2 hover:text-teal-800 hover:font-bold grow rounded-lg">GO</button>
            </div>
        </>
    )
}

export default DeckSelection