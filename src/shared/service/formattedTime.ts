
const formattedTime = ( options: Intl.DateTimeFormatOptions) => {
  return new Intl.DateTimeFormat('ru', options)
}

const getHourMin = (time: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    minute: '2-digit',
    hour: '2-digit'
  }
  return formattedTime(options).format(new Date(time).getTime())
}

const getDayMonthYear = (time: string): string => {
  const options: Intl.DateTimeFormatOptions = {

    day: 'numeric',
    month: '2-digit',
    year: 'numeric',
  }
  return formattedTime(options).format(new Date(time).getTime())
}

export const TimeServices = {
  getHourMin,
  getDayMonthYear,
}