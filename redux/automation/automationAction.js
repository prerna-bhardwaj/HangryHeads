import { ADD_AUTOMATION, FETCH_AUTOMATION_LIST } from "./automationTypes";

export const addAutomation = (deviceId, applianceId, time, repeat, operation) => {
    return {
        type: ADD_AUTOMATION,
        deviceId, applianceId, time, repeat, operation
    };
};

export const fetchAutomationList = (automationList) => {
    return {
        type: FETCH_AUTOMATION_LIST,
        automationList,
    }
};