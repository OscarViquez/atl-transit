import { Button, Tab } from '../models';

export const ButtonLightModeMock: Button = {
   text: 'More Details',
   mode: 'light'
};

export const ButtonDarkModeMock: Button = {
   text: 'More Details',
   mode: 'dark'
};

export const ButtonWithIconMock: Button = {
   text: 'More Details',
   mode: 'light',
   icon: '/warning.png'
};

export const ButtonActiveMockLight: Button = {
   ...ButtonLightModeMock,
};

export const ButtonActiveMockDark: Button = {
   ...ButtonDarkModeMock,
};

export const NearestStationMock: Button = {
   text: 'Nearest Stations',
   mode: 'light'
};

export const SavedStationMock: Button = {
   text: 'Saved Stations',
   mode: 'light'
};

