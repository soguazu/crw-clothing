import { createSelector } from 'reselect';

const selectSection = (state) => state.directory;

export const selectDirectorySection = createSelector(
  [selectSection],
  (directory) => directory.sections,
);

