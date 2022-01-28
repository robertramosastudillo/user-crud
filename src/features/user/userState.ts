export interface IUserState {
  users: [];
  isLoading: boolean;
  error: string;
}

export const initialState: IUserState = {
  users: [],
  isLoading: false,
  error: "",
};
