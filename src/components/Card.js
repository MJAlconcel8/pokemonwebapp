import React from 'react';

function Card({ pokemon }) {
    return (
        <div className='card'>
            <div className='cardImg'>
                <img src={pokemon.sprites.front_default} alt=""/>
            </div>
            <div className='cardName'>
                {pokemon.name}
            </div>
            <div className='cardTypes'>
                {pokemon.types.map(type =>{
                    return(
                        <div className='cardType'>
                            {type.type.name}
                        </div>
                    )
                })}
            </div>
            <div className='cardInfo'>
                <div className='cardData cardDataWeight'>
                    <p className='title'>Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className='cardData cardDataHeight'>
                    <p className='Height'>Height</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className='cardData cardDataAbility'>
                    <p className='title'>Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
    );
}
export default Card;
