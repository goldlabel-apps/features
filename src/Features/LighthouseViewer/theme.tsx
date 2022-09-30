export const theme = () => {
  const themeObj = {
    paperBg: "#FFFFFF",
    primaryMain: "rgba(2,65,105,1)",
    secondaryMain: "#0062a7",
  };
  const { paperBg, primaryMain, secondaryMain } = themeObj
  return ({
    palette: {
      background:{
        default: "#eee",
        paper: paperBg,
      },
      primary: {
        main: primaryMain,
      },
      secondary: {
        main: secondaryMain,
      },
    }
  })
}
