import { createSelector } from 'reselect'

const selectClientsDomain = (state) => state.clients;

export const selectClients = () => createSelector(selectClientsDomain, subdomain =>  subdomain.clients );
export const selectClientSelectedIndex = () => createSelector(selectClientsDomain, subdomain =>  subdomain.selectedIndex );
export const selectLoader = () => createSelector(selectClientsDomain, subdomain =>  subdomain.loader );
export const selectClientDetails = () => createSelector(selectClientsDomain, subdomain => subdomain.clients[subdomain.selectedIndex] );