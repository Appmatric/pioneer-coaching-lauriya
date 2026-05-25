import moment from 'moment-timezone';

export const setAppTimezone = (timezone) => {
  localStorage.setItem('appTimezone', timezone);
};

export const getAppTimezone = () => {
  return localStorage.getItem('appTimezone') || moment.tz.guess();
};

export const convertToAppTimezone = (date, format = 'YYYY-MM-DD HH:mm:ss') => {
  const appTimezone = getAppTimezone();
  return moment(date).tz(appTimezone).format(format);
};

export const utcToAppTimezone = (utcDate, format = 'YYYY-MM-DD HH:mm:ss') => {
  const appTimezone = getAppTimezone();
  return moment.utc(utcDate).tz(appTimezone).format(format);
};

export const formatRelativeTime = (date) => {
  const appTimezone = getAppTimezone();
  return moment(date).tz(appTimezone).fromNow();
};

export const getTimezoneOptions = () => {
  return moment.tz.names().map(tz => {
    const offset = moment.tz(tz).format('Z');
    return {
      value: tz,
      label: `(UTC${offset}) ${tz.replace(/_/g, ' ')}`
    };
  });
};