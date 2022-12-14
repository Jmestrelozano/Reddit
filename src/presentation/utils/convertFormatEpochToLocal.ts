export const convertFormatEpochToLocal = (num: number) => {
  const date = new Date(num * 1000);
  const dateConvert = new Intl.DateTimeFormat('default').format(date);
  return dateConvert;
};

/* console.log(new Intl.DateTimeFormat('default',{ hour: "numeric", minute: 'numeric', second:'numeric',  hour12: true,} ).format(date)); */
