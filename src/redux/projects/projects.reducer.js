import { mergeItems } from "../redux.utils";
import ProjectsTypes from "./projects.types";

const INITIAL_STATE = {
  projects: [],
  error: null,
  total: 0,
  isLoading: false,
  selectedListOption: 0,
};

const projectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProjectsTypes.PROJECTS_FETCH_SUCCESS:
      return {
        ...state,
        projects: mergeItems(state.projects, action.payload.items),
        total: action.payload.total ? action.payload.total : state.total,
        error: null,
        isLoading: false,
      };
    case ProjectsTypes.PROJECTS_FETCH_FAILURE:
      return {
        ...state,
        total: 0,
        error: action.payload,
        isLoading: false,
      };
    case ProjectsTypes.PROJECTS_FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case ProjectsTypes.CHANGE_SELECTED_PROJECT_LIST_OPTION:
      return {
        ...state,
        selectedListOption: action.payload.option,
      };
    default:
      return state;
  }
};

export default projectsReducer;
