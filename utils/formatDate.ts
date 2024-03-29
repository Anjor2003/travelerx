export const formatDate = (dateTime: string) => {
  const dateObj = new Date(dateTime)
  // Convert String to date Object
  const date = dateObj.getDate()
  const month = dateObj.getMonth() + 1
  const year = dateObj.getFullYear()
  // const hours = dateObj.getHours()
  // const minutes = dateObj.getMinutes()
  // const meridiem = hours >= 12 ? "pm" : "am"
  // const formattedHours = hours % 12 === 0 ? 12 : hours % 12
  // const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

  return `${date}-${month}-${year}`
}