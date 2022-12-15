const timeSince = (date: Date) => {
  let seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + ' years';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' months';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' days';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' hours';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' minutes';
  }
  return Math.floor(seconds) + ' seconds';
};
/* console.log(new Intl.DateTimeFormat('default',{ hour: "numeric", minute: 'numeric', second:'numeric',  hour12: true,} ).format(date)); */

export const convertFormatEpochToLocal = (num: number) => {
  const date = new Date(num * 1000);
  const dateConvert = new Intl.DateTimeFormat('sv', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(date);

  return `${timeSince(new Date(dateConvert))} ago`;
};
