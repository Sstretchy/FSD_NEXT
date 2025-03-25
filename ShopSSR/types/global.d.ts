declare global {
  declare type RootState = import('../src/1--app/providers/ReduxProvider/config/store').RootState;
  declare type AppDispatch = import('../src/1--app/providers/ReduxProvider/config/store').AppDispatch;
}

export {};
