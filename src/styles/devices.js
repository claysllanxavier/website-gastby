const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "575.98px",
  tablet: "767.98px",
  laptop: "991.98px",
  desktop: "1199.98px",
}

const devices = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
}

export default devices
