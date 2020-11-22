export const themeObject = {
  screens: {
    // max-widths in px
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280
  },
  colors: {
    background: '#ffffff',
    darkGray: '#2e2e2e',
    marine: '#14D1C5',
    blue: '#3683D0',
    darkBlue: '#32469F',
    lightBlue: '#CCE2F6'
  },
  opacity: {
    0: 0,
    25: 0.25,
    50: 0.5,
    75: 0.75,
    100: 1
  },
  py: (value: number | string) =>
    `padding-top: ${value}; padding-bottom: ${value};`
  // Extend your theme here
};
