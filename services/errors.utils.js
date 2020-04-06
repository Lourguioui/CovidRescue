import { pathOr } from 'rambda'

const ERROR_MESSAGE_PATH = ['response', 'data', 'content']
const getErrorMessage = error => pathOr(null, ERROR_MESSAGE_PATH, error)

export {
  getErrorMessage,
}