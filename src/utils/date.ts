export const parseDate = (t: number, todayDate?: number) => {
  const dt = new Date(t * 1000)
  const dateNow = todayDate ? new Date(todayDate) : new Date();

  var prefix;
  if (dateNow.getDate() - dt.getDate() == 0 && dateNow.getMonth() - dt.getMonth() == 0 && dateNow.getFullYear() - dt.getFullYear() == 0) {
    prefix = 'Hari ini'
  } else if (dateNow.getDate() - dt.getDate() == 1 && dateNow.getMonth() - dt.getMonth() == 0 && dateNow.getFullYear() - dt.getFullYear() == 0) {
    prefix = 'Kemarin'
  } else {
    const day = dt.getDate().toString().padStart(2, '0')
    const month = (dt.getMonth() + 1).toString().padStart(2, '0')
    const year = dt.getFullYear()
    prefix = `${day}-${month}-${year}`
  }
  const hour = dt.getHours().toString().padStart(2, '0')
  const minute = dt.getMinutes().toString().padStart(2, '0')
  return `${prefix} ${hour}:${minute}`
}
