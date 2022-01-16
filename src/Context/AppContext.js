import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
const initialState = {
  budget: 2000,
  expenses: [
    { id: 11, name: "Flight Tickets", cost: 1200 },
    { id: 12, name: "Hotel Fees", cost: 800 },
    { id: 13, name: "Shopping", cost: 1500 },
    { id: 14, name: "Amenities", cost: 1000 },
    { id: 15, name: "Food", cost: 700 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
