const isNotEmpty = (field) => 
field && 
(
  (typeof field === 'number' && field > -1) ||
  (typeof field === 'string' && field !== '')
)

export {
  isNotEmpty,
}