import { Button } from '../models';

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
   active: true
};

export const ButtonActiveMockDark: Button = {
   ...ButtonDarkModeMock,
   active: true
};
