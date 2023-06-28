export const whiteColor = '#ffffff'
export const goldColor = 'rgb(243, 202, 47)'
export const backgroundColor = '#272727'
// export const red = '#f44336'
// export const darkBlue = '#16003D'
// export const popUpColor = '#4D16C9'
// export const purpleDark = '#1D004F'

const size = {
  mobileS: '320px',
  mobileSM: '350px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  tabletM: '824px',
  tabletL: '920px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileSM: `(max-width: ${size.mobileSM})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  mobileLD: `(min-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletM: `(max-width: ${size.tabletM})`,
  tabletL: `(max-width: ${size.tabletL})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
}

export { NavLink } from './NavLink/NavLink'
export { Button } from './Button/Button'
export { Icon } from './Icon/Icon'
export { PageTitle } from './PageTitle/PageTitle'
export { BackgroundImage } from './BackgroundImage/BackgroundImage'
export { Input } from './Input/Input'
export { ScrollButton } from './ScrollButton'
export { SortButton } from './SortButton'
export { Spinner } from './Spinner'
