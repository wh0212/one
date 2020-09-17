export function param (data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}

/**
 *
 * @param second 秒数
 * 返回换算后的时间 00:00:00 格式
 */
export function conversionTime (second) {
  let iH = isAddZero(Math.floor(second / 3600))
  let iM = isAddZero(Math.floor(second % 3600 / 60))
  let iS = isAddZero(Math.floor(second % 60))

  return iH + ':' + iM + ':' + iS
}

/**
 * 是否在前面添加0
 * @param num
 */
function isAddZero (num) {
  if (num <= 9) {
    return '0' + num
  } else {
    return '' + num
  }
}
