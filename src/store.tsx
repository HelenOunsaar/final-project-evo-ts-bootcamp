import { createStore } from 'redux';

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

interface BetState {
  bet: number;
  sumWon: number;
}

const initialState: BetState = {
  bet: 10,
  sumWon: 0,
};

export function betReducer(state = initialState, action: BetAction | WinBetAction | LoseBetAction): BetState {
  switch (action.type) {
    case 'CHANGE_BET':
      return { ...state, bet: action.payload };
    case 'WIN_BET':
      return { ...state, sumWon: state.sumWon + state.bet * 2 };
    case 'LOSE_BET':
      return { ...state, sumWon: Math.max(0, state.sumWon - state.bet) };
    default:
      return state;
  }
}

export const store = createStore(betReducer);
