import { combineEpics } from 'redux-observable';

import { cartEpic } from './cart/epics';


const epic = combineEpics(

  cartEpic,
  // imagesRequestEpic,
);

export default epic;
