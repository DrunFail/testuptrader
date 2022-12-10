import { StateType, ActionType } from 'typesafe-actions';

declare module 'MyTypes' {
    export type Store = StateType<typeof import('./store').default>;
    export type RootState = StateType<
        ReturnType<typeof import('./rootReducer').default>
    >;
}