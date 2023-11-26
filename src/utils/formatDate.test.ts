import formatDate from './formatDate'

describe(formatDate, () => {
  const TEST_DATE = new Date(2019, 2, 11, 14, 12, 59)
  it('retrieves formatted date from dictionary', () => {
    expect(formatDate(TEST_DATE, 'landing-testimonial')).toBe('2:12 PM · Mar 11, 2019')
  })

  it('retrieves formatted date from dateFormat', () => {
    expect(formatDate(TEST_DATE, 'MM/dd/yyyy hh:mm:ss')).toBe('03/11/2019 02:12:59')
  })

  it('returns undefined when passed dateFormat is invalid', () => {
    expect(formatDate(TEST_DATE, 'BAD FORMAT')).toBeUndefined()
  })
})
