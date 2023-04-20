import { createStore } from 'redux';

interface BetAction {
  type: string;
  payload: number;
}

interface WinBetAction {
  type: string;
  payload: number;
}

interface BetState {
  bet: number;
  sumWon: number;
}

const initialState: BetState = {
  bet: 10,
  sumWon: 0,
};

export function betReducer(state = initialState, action: BetAction | WinBetAction): BetState {
  switch (action.type) {
    case 'CHANGE_BET':
      return { ...state, bet: action.payload };
    case 'WIN_BET':
      return { ...state, sumWon: state.sumWon + state.bet * 2 };
    default:
      return state;
  }
}

export const store = createStore(betReducer);
