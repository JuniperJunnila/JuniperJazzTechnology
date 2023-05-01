export const __switchTheme = (theme, setTheme) => {
  const newTheme = theme.endsWith("dark")
    ? `${theme.split("-")[0]}-light`
    : `${theme.split("-")[0]}-dark`;
  setTheme(newTheme);
};

export const __alternateTheme = (theme, setTheme) => {
  const splitArr = theme.split("-");
  const value = splitArr[0];
  const shade = splitArr[1];
  const list = ["default", "gold", "green", "greyscale"];
  const currentIndex = list.indexOf(value);
  const nextIndex = currentIndex === 3 ? 0 : currentIndex + 1;

  setTheme(`${list[nextIndex]}-${shade}`);
};
