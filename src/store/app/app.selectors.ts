import { createSelector } from 'reselect';
import _get from 'lodash/get';

export const appSelector = state => state.app;

export const sessionSelector = createSelector(appSelector, app => _get(app, 'session'));

export const userTierSelector = createSelector(sessionSelector, session => _get(session, 'tier'));

export const avatarSelector = createSelector(sessionSelector, session => _get(session, 'picture'));
