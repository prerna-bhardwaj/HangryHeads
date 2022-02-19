import { ADD_AUTOMATION, FETCH_AUTOMATION_LIST } from "./automationTypes";

const initialState = {
  automationList: [],
};

const automationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AUTOMATION:
      return {
        ...state,
        automationList: state.automationList.concat({
          deviceId: action.deviceId,
          applianceId: action.applianceId,
          time: action.time,
          repeat: action.repeat,
          operation: action.operation,
        }),
      };

    case FETCH_AUTOMATION_LIST:
      return {
        ...state,
        automationList: action.automationList,
      };

    default:
      return state;
  }
};

export default automationReducer;
