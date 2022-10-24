import { parseDate } from './date';

describe('it can parse', () => {
  it('should takes today\'s date and return it as today\'s', () => {
    var input = 1665657169
    var today = 1665657832968
    var output = 'Hari ini'
    expect(parseDate(input, today)).toContain(output)
  })

  it('should takes yesterday\'s date and return it as yesterday\'s', () => {
    var input = 1665504000
    var today = 1665657832968
    var output = 'Kemarin'
    expect(parseDate(input, today)).toContain(output)
  })

  it('should takes not yesterday\'s date or today\'s date and return it as is', () => {
    var input = 1665331200
    var today = 1665657832968
    var output = '10-10-2022 00:00'
    expect(parseDate(input, today)).toBe(output)
  })
})