import React from 'react';

const Card = (props) => {
    const { countries } = props;

    const lisible = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        <li className='card'> 
            <img src={countries.flag} alt='flag' />
            <div className='data-container'>
                <ul>
                    <li>{countries.name}</li>
                    <li>{countries.capital}</li>
                    <li>{lisible(countries.population)} habitants</li>
                </ul>
            </div>
        </li>
    );
};

export default Card;