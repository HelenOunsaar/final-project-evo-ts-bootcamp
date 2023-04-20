import { createStore } from 'redux';

interface BetAction {
    type: string;
    payload: number;
  }

interface WinBetAction {
    type: string;
    payload: number;
}

const initialState = {
  bet: 10
};

export function betReducer(state = initialState, action: BetAction | WinBetAction) {
    switch (action.type) {
      case 'CHANGE_BET':
        return { ...state, bet: action.payload };
      case 'WIN_BET':
        return { ...state, bet: state.bet * 2 };
      default:
        return state;
    }
  }
  
export const store = createStore(betReducer);