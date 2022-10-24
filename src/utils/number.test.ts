import { formatNumberShort } from './number';

describe('it can format number', () => {
  it('should takes a number less than 1,000 and return it as is', () => {
    var input = [0, 1, 10, 999];
    var mappedTest = input.map((value) => [value, value.toString()]);
    mappedTest.forEach((value) => {
      expect(formatNumberShort(value[0] as number)).toBe(value[1]);
    });
  });

  it('should takes a number between 1,000 and 1,000,000 returns it as K', () => {
    var mappedTest = [
      [1000, '1K'],
      [1200, '1.2K'],
      [1224, '1.2K'],
      [10000, '10K'],
      [13000, '13K'],
      [13123, '13.1K'],
      [100000, '100K'],
      [140000, '140K'],
      [141000, '141K'],
      [141231, '141.2K'],
    ];
    mappedTest.forEach((value, i) => {
      expect(formatNumberShort(value[0] as number)).toBe(value[1]);
    });
  });

  it('should takes a number between 1,000,000 and 1,000,000,000 returns it as M', () => {
    var mappedTest = [
      [1000000, '1M'],
      [1200000, '1.2M'],
      [1224000, '1.2M'],
      [10000000, '10M'],
      [13000000, '13M'],
      [13123345, '13.1M'],
      [100000000, '100M'],
      [140000000, '140M'],
      [141000000, '141M'],
      [141231241, '141.2M'],
    ];
    mappedTest.forEach((value, i) => {
      expect(formatNumberShort(value[0] as number)).toBe(value[1]);
    });
  });

  it('should takes a number between 1,000,000,000 and 1,000,000,000,000 returns it as B', () => {
    var mappedTest = [
      [1000000000, '1B'],
      [1200000000, '1.2B'],
      [1224000000, '1.2B'],
      [10000000000, '10B'],
      [13000000000, '13B'],
      [13123345321, '13.1B'],
      [100000000000, '100B'],
      [140000000000, '140B'],
      [141000000000, '141B'],
      [141231241573, '141.2B'],
    ];
    mappedTest.forEach((value, i) => {
      expect(formatNumberShort(value[0] as number)).toBe(value[1]);
    });
  });

  it('should takes a number between 1,000,000,000,000 and 1,000,000,000,000,000 returns it as T', () => {
    var mappedTest = [
      [1000000000000, '1T'],
      [1200000000000, '1.2T'],
      [1224000000000, '1.2T'],
      [10000000000000, '10T'],
      [13000000000000, '13T'],
      [13123345321124, '13.1T'],
      [100000000000000, '100T'],
      [140000000000000, '140T'],
      [141000000000000, '141T'],
      [141231241573351, '141.2T'],
    ];
    mappedTest.forEach((value, i) => {
      expect(formatNumberShort(value[0] as number)).toBe(value[1]);
    });
  });

  it('should takes a number more than 1,000,000,000,000,000 returns it as T', () => {
    var mappedTest = [
      [1000000000000000, '1000T'],
      [1200000000000000, '1200T'],
      [1230000000000000, '1230T'],
      [1234000000000000, '1234T'],
      [1234500000000000, '1234.5T'],
      [1234532123123141, '1234.5T']
    ];
    mappedTest.forEach((value, i) => {
      expect(formatNumberShort(value[0] as number)).toBe(value[1]);
    });
  });
})