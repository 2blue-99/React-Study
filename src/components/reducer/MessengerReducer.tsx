export type InitialState = {
  selectedId: number;
  message: Record<number, string>;
};

export const initialState = {
  selectedId: 0,
  message: {
    0: "Hello, Taylor",
    1: "Hello, Alice",
    2: "Hello, Bob",
  },
};

export type Action =
  | { type: "changed_selection"; contactId: number; message: string }
  | { type: "edited_message"; message: string }
  | { type: "send_message" };

export function messengerReducer(state: InitialState, action: Action) {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }
    case "edited_message": {
      return {
        ...state,
        message: {
          ...state.message,
          [state.selectedId]: action.message,
        },
      };
    }
    case "send_message": {
      return {
        ...state,
        message: "",
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
