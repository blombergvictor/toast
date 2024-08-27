

export const TimeInMs = () => {
  const currentDateTime = new Date();

  const date = currentDateTime.getFullYear() + '-' +
              (currentDateTime.getMonth() + 1).toString().padStart(2, '0') + '-' +
              currentDateTime.getDate().toString().padStart(2, '0');

  const time = currentDateTime.getHours().toString().padStart(2, '0') + '-' +
              currentDateTime.getMinutes().toString().padStart(2, '0') + '-' +
              currentDateTime.getSeconds().toString().padStart(2, '0') + '.' +
              currentDateTime.getMilliseconds().toString().padStart(3, '0');

  const fullDateTime = date + '-' + time;

  return fullDateTime
}