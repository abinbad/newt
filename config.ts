import type { TConfig } from '$lib/types/config.types';
const config: TConfig = {
  name: 'abinbad',
  locale: 'en',
  midgap: 24, // Gap between buttons and the time/weather (in Tailwind size units)
  colors: {
    baseBg: '#cba6f7',
    darkBg: '#c6a0f6',
    accent: '#f4b8e4',
    textPrimary: '#f4dbd6',
    textSecondary: '#1E1E2E',
  },

  // Defines the buttons that get rendered.
  // Uses lucide for icons. Define up to 12.
  buttons: {
    gap: 6, // Gap between buttons (in Tailwind size units)
    buttons: [
      {
        name: 'Gmail',
        href: 'https://mail.google.com',
        icon: 'mail',
      },
      {
        name: 'Google',
        href: 'https://google.com',
        icon: 'search',
      },
      {
        name: 'Schoology',
        href: 'kingsway.schoology.com',
        icon: 'graduation-cap',
      },
      {
        name: 'Google Calendar',
        href: 'https://calendar.google.com',
        icon: 'calendar',
      },
      {
        name: 'Spotify',
        href: 'https://open.spotify.com',
        icon: 'music',
      },
      {
        name: 'YouTube',
        href: 'https://youtube.com',
        icon: 'youtube',
      },
    ],
  },

  // Config for an optional background image
  image: {
    enabled: true,
    src: 'https://raw.githubusercontent.com/D3Ext/aesthetic-wallpapers/main/images/purple_car_girl.png',
  },

  // The greetings that get displayed
  // depending on the time of day
  greetings: {
    morning: 'GET OFF YOYR LAZY ASS',
    evening: 'Keep smelling they/them roses girlie pop!!!11!!1',
    night: 'GO TO FUCKING SLEEP',
    late: 'WHY AREN"T YOU ASLEEP YOU FUCKING COMMIE',
    punc: '!!!!!!(faggot)!!!!!!!!', // Punctiation at the end of the greeting (Use '' to disable)
  },

  // Date formatting options (Uses the same syntax as the
  // Date().toLocaleDateString() options)
  dateFormat: {
    era: 'short',
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    second: '2-digit',
    weekday: 'short',
  },

  // Clock config
  time: {
    seconds: true,
    twelveHour: true,
  },

  // Weather config. Requires your geo coordinates and
  // an OpenWeatherMap API key (It's free!)
  weather: {
    coordinates: {
      // Find yout coordinates at https://www.latlong.net
      lat: '39.789053', // Your latitude
      long: '-75.242527', // Your longitude
    },
    units: 'standard', // metric = C°, imperial = F°, standard = K
  },
};

export default config;
