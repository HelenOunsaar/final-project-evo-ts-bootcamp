import { createStore } from 'redux';

// Define interfaces for different types of actions
interface BetAction {
  type: string;
  payload: number;
}

interface WinBetAction {
  type: string;
  payload: number;
}

interface LoseBetAction {
  type: string;
  payload: number;
}

// Define interface for state
interface BetState {
  bet: number;
  sumWon: number;
}

// Set initial state
const initialState: BetState = {
  bet: 10,
  sumWon: 0,
};

// Define reducer function
export function betReducer(state = initialState, action: BetAction | WinBetAction | LoseBetAction): BetState {
  // Handle different types of actions
  switch (action.type) {
    case 'CHANGE_BET':
      // Return new state object with updated bet value
      return { ...state, bet: action.payload };
    case 'WIN_BET':
      // Return new state object with updated sumWon value
      return { ...state, sumWon: state.sumWon + state.bet * 2 };
    case 'LOSE_BET':
      // Return new state object with updated sumWon value, ensuring that it cannot be negative
      return { ...state, sumWon: Math.max(0, state.sumWon - state.bet) };
    default:
      // Return current state if action is not recognized
      return state;
  }
}

// Create store using the reducer function
export const store = createStore(betReducer);