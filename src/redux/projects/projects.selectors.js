import { createSelector } from "reselect";

export const selectProjects = (state) => state.projects;

export const selectProjectList = createSelector([selectProjects], (state) =>
  state.projects.filter(
    (project) => project.tags.indexOf(state.selectedListOption) !== -1
  )
);

export const selectProjectsTotal = createSelector(
  [selectProjects],
  (state) => state.total
);

export const selectProjectsIsLoading = createSelector(
  [selectProjects],
  (state) => state.isLoading
);

export const getProjectSelectedListOption = createSelector(
  [selectProjects],
  (state) => state.selectedListOption
);
