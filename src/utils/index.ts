export const headersWithAuthorization = {
  'Content-Type': 'application/json',
  Autorization: `${localStorage.getItem('token')}`
}

export const headersWithoutAuthorization = {
  'Content-Type': 'application/json'
}