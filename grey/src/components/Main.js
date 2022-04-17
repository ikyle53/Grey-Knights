import React from 'react';
import Strategems from '../Strategems.js';
import './styles/Main.css'

class Main extends React.Component {
    render () {
        let strategemCards = this.props.gkdata.map((strats, idx) => {
            return <Strategems 
            name = {strats.name}
            phase = {strats.phase}
            quickRef = {strats.quickRef}
            strat = {strats.strat}
            costs = {strats.costs}
            key = {idx}
            />
        })

        return(
            <>
                <main>
                    {strategemCards}
                </main>
                
            </>
        )
    }
}

export default Main;