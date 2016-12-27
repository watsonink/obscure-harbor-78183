import { expect } from 'chai';
import {
  CLEAR_COMPLETED,
  clearCompleted,
  APPLY_FILTER,
  applyFilter
} from './navigationActions';

const DUMMY_FILTER = 'DUMMY_FILTER';

describe('NavBar Actions', () => {
  it('clearCompleted should create CLEAR_COMPLETED action', () => {
    expect(clearCompleted()).to.deep.equal({
      type: CLEAR_COMPLETED
    });
  });

  it('applyFilter should create APPLY_FILTER action', () => {
    expect(applyFilter(DUMMY_FILTER)).to.deep.equal({
      type: APPLY_FILTER,
      filter: DUMMY_FILTER
    });
  });
});
