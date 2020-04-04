const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const isNotEmpty = field => 
field && 
(
  (typeof field === 'number' && field > -1) ||
  (typeof field === 'string' && field !== '')
)

const isEmailValid = email => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
const isPasswordValid = password => typeof password === 'string' && password.length >= 6

export {
  isNotEmpty,
  isPasswordValid,
  isEmailValid,
}