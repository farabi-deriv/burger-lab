import React, { useState } from "react";
import "./burger.css";

const BurgerLab = () => {
  const [ingredients, setIngredients] = useState({
    lettuce: 0,
    tomato: 0,
    cheese: 0,
    meat: 0,
  });

  const addRemoveIngredient = (action, ingredient) => {
    let stateValue = ingredients[ingredient];

    if (action === "add") {
      stateValue = stateValue + 1;
    } else {
      stateValue = stateValue - 1;
    }
    setIngredients({
      ...ingredients,
      [ingredient]: stateValue >= 0 ? stateValue : 0,
    });
  };

  const burgerContent = () => {
    const { lettuce, tomato, cheese, meat } = ingredients;
    let burger = [];

    for (let i = 0; i < cheese; i++) {
      burger.push(<div key={burger.length} className="cheese"></div>);
    }
    for (let i = 0; i < meat; i++) {
      burger.push(<div key={burger.length} className="meat"></div>);
    }
    for (let i = 0; i < tomato; i++) {
      burger.push(<div key={burger.length} className="tomato"></div>);
    }
    for (let i = 0; i < lettuce; i++) {
      burger.push(<div key={burger.length} className="lettuce"></div>);
    }
    return burger;
  };

  return (
    <>
      <div className="burger-ingredients">
        <div className="topSide"></div>
        {burgerContent()}
        <div className="bottomside"></div>
      </div>
      <div className="ingredients-list">
        <p>Lettuce</p>
        <div className="btns-ingredient">
          <button
            onClick={() => addRemoveIngredient("add", "lettuce")}
            className="btn-ingredient"
          >
            Add
          </button>
          <button
            onClick={() => addRemoveIngredient("remove", "lettuce")}
            className="btn-ingredient"
          >
            Remove
          </button>
        </div>
        <p>Tomato</p>
        <div className="btns-ingredient">
          <button
            onClick={() => addRemoveIngredient("add", "tomato")}
            className="btn-ingredient"
          >
            Add
          </button>
          <button
            onClick={() => addRemoveIngredient("remove", "tomato")}
            className="btn-ingredient"
          >
            Remove
          </button>
        </div>
        <p>Meat</p>
        <div className="btns-ingredient">
          <button
            onClick={() => addRemoveIngredient("add", "meat")}
            className="btn-ingredient"
          >
            Add
          </button>
          <button
            onClick={() => addRemoveIngredient("remove", "meat")}
            className="btn-ingredient"
          >
            Remove
          </button>
        </div>
        <p>Cheese</p>
        <div className="btns-ingredient">
          <button
            onClick={() => addRemoveIngredient("add", "cheese")}
            className="btn-ingredient"
          >
            Add
          </button>
          <button
            onClick={() => addRemoveIngredient("remove", "cheese")}
            className="btn-ingredient"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default BurgerLab;
