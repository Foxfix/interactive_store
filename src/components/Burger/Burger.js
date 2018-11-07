import React from 'react';
import BurgerIgredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {
  console.log(props)
  let transformedIngredient = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIgredient key={igKey + i} type={igKey}/>
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);
  if (transformedIngredient.length === 0 ) {
  transformedIngredient = <p>Please start adding ingredients!</p>
  }
// console.log(transformedIngredient);
  return (
    <div className={classes.Burger}>
      <BurgerIgredient type='bread-top'/>
      {transformedIngredient}
      <BurgerIgredient type='bread-bottom'/>
    </div>
  )
};

export default burger;

