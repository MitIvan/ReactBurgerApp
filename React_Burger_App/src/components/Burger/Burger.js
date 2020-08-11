import React from 'react'


import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'


const burger = (props) => {
    // *1 objasnuvnje 
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
               return <BurgerIngredient key={igKey + i} type={igKey} />   
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, [])
//console.log(transformedIngredients);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }

return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger


// *1 objasnuvnje 
//Go pretvarame props.ingredients od object vo arr ["salad", "bacon", "cheese", "meat"]
        
// [...Array(props.ingredients[igKey])] ni vrakja Array so array so prazni mesta kolku sto ima ingredients pr. Array(3) vrakja array so tri prazni mesta vo zagradata pisuvame kolku elementi da ima

//.map((_, i) => {return <BurgerIngredient key={igKey + i} type={igKey} />}) stavame "_" zasto ne ni e vazen elementot ni treba samo indexsot. I se predavame na BurgerIngredient 

//type = Array [Array ["salad"], Array ["bacon", "bacon"], Array ["cheese", "cheese"], Array ["meat", "meat"]] sto se vrakja na kraj

//.reduce((arr, el) => {return arr.concat(el)}) vrakja eden array so site elementi (predhodno vrakjase array so array vnatre) ova go pravime za da se ispise <p>Please start adding ingredients</p>
//----------------------------------------------------------