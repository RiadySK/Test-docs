export const formatNumberShort = (value: number): string => {
  var formattedValue = value.toString();
  if (value >= 1000) {
    var suffixes = ['', 'K', 'M', 'B', 'T'];
    var suffixNum = Math.floor((value.toString().length - 1) / 3);
    if (suffixNum > 4) {
      var shortValue = parseFloat((value / Math.pow(1000, 4)).toFixed(1));
      formattedValue = shortValue + 'T';
    } else {
      var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toFixed(1));
      formattedValue = shortValue + (suffixes[suffixNum] || 'T');
    }
  }
  return formattedValue;
}