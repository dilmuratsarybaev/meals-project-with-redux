import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchApi } from "../../lib/fatchApi";
import { getMeals, mealsActionTypes } from "../../store/meals/mealsReducer";
import { MealItem } from "./meal-Item/MealItem";

// const DUMMY_MEALS = [
//   {
//     id: Date.now().toString(),
//     title: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: Math.random().toString(),
//     title: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.99,
//   },
//   {
//     id: Math.random().toString(),
//     title: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: Math.random().toString(),
//     title: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 19.99,
//   },
// ];
export const Meals = () => {
  const dispatch = useDispatch();
  const { meals, isLoading, error } = useSelector((state) => state.meals);

  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  return (
    <Card>
      {isLoading && !error && <p>Loading ..........</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {meals.map((meal) => {
          return <MealItem meal={meal} key={meal._id} />;
        })}
      </ul>
    </Card>
  );
};

const Card = styled.div`
  width: 64.9375rem;
  background: #ffffff;
  border-radius: 16px;
  margin: 135px auto;
  padding: 18px 40px 10px 40px;
`;
