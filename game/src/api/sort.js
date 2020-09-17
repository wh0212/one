import axios from 'axios'
import {param} from 'common/js/util'

export function getSortList(listName) {
  let url = 'http://app.bluestacks.cn/bs/get_app_center_home_data_by_list'

  const data = {
    list_name: listName,
    partner: 'bscn',
    location: 'China',
    num_per_page: 7,
    page_num: 1,
    signature: '5c1013eeb57e9262029a9d5c95a4bb50',
    timestamp: '1508458228940'
  }

  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    axios.get(url, null).then((res) => {
      resolve(res)
    }).catch((res) => {
      reject(res)
    })
  })
}

export function getSortDetail(id) {
  let url = 'http://app.bluestacks.cn/bs/app_detail_data'

  const data = {
    id: id,
    partner: 'bscn',
    signature: '33a3b96eb85a373af0bf24ffa95ad22f',
    timestamp: '1508479493399'
  }

  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    axios.get(url, null).then((res) => {
      resolve(res)
    }).catch((res) => {
      reject(res)
    })
  })
}
