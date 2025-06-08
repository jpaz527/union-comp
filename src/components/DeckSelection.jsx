import { useState } from "react";

const DeckSelection = ({ deckList, addDeckHandler, addAllDeckHandler }) => {
    const [selectedDeck, setSelectedDeck] = useState(deckList[0].id)
    const selectDeckHandler = ({ target }) => {
        const { value } = target
        setSelectedDeck(value)
    }

    return (
        <div className='flex justify-center mb-4 text-center w-4/5 mx-auto gap-2 font-bold'>
            <button title="Add All" onClick={addAllDeckHandler}>➕➕➕</button>
            <select defaultValue={selectedDeck} title='asd' className='border-2 border-amber-950 text-center grow text-2xl' name="deck-select" id="deckSelect" value={selectedDeck} onChange={selectDeckHandler}>
                {/* {products.map(product => {
                    const productDecks = product.map(deck => {
                        const { id, title } = deck
                        console.log(deck);
                        return <option key={id} value={id}>{title}</option>
                    })
                    return productDecks
                })} */}
                {deckList.map(deck => {
                    const { id, title } = deck
                    console.log(deck);
                    return <option key={id} value={id}>{title}</option>
                })}
            </select>
            <button title='Add from list' onClick={() => { addDeckHandler(selectedDeck) }}>➕</button>
        </div>
    )
}

export default DeckSelection