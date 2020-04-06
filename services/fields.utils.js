import { trim } from 'rambda'

const emailRe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const alphCharsRe = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/
const invalidCharsRe = /[A-Za-zÀ-ÖØ-öø-ÿ]+/g

const isNotEmpty = field => 
field && 
(
  (typeof field === 'number' && field > -1) ||
  (typeof field === 'string' && field !== '')
)

const isEmailValid = email => emailRe.test(email)
const isPasswordValid = password => typeof password === 'string' && password.length >= 6

const isNotValidName = (firstName) => {
  const trimmed = trim(firstName).replace(/ /g,'')
  const isValid = alphCharsRe.test(trimmed)
  if (!isValid) {
    console.log('IS NAME VALID', trimmed)
    const invalidCharacters = trimmed.replace(invalidCharsRe, '')
    console.log('INVALID CHARS: ', invalidCharacters)
    return invalidCharacters
  } else {
    return false
  }
}

export {
  isNotEmpty,
  isPasswordValid,
  isEmailValid,
  isNotValidName,
}