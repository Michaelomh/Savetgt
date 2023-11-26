import format from 'date-fns/format'

const getDateFormatFromDictionary = (dateFormat: string) => {
  switch (dateFormat) {
    case 'landing-testimonial':
      return 'p · PP'
    default:
      return undefined
  }
}

/**
 * Takes a date object and converts it into the specified date format
 * either by looking up dictionary of known formats
 * or passing the date format to the function.
 *
 * @param date {Date} date to be converted
 * @param dateFormat {string} date format from date-fns or a known date format dictionary
 * @returns string of the date passed in proper date format or undefined if date format provided is invalid
 */
const formatDate = (date: Date, dateFormat: string): string | undefined => {
  // check if dateFormat is from dictionary
  const dateFormatFromDictionary = getDateFormatFromDictionary(dateFormat)
  if (dateFormatFromDictionary) return format(date, dateFormatFromDictionary)

  try {
    // attempt to format date with provided dateFormat
    return format(date, dateFormat)
  } catch (error) {
    // handle invalid dateFormat
    return undefined
  }
}

export default formatDate
