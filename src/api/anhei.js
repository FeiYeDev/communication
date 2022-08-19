import request from '@/utils/request'

const baseUrl = '/api'
export function getServerData() {
  return request({
    url: baseUrl + '/getServerData',
    method: 'get'
  })
}

export function setServerData(data) {
  return request({
    url: baseUrl + '/setServerData',
    method: 'post',
    data
  })
}

export function setClientIni(data) {
  return request({
    url: baseUrl + '/setClientIni',
    method: 'post',
    data
  })
}

export function getClientIni() {
  return request({
    url: baseUrl + '/getClientIni',
    method: 'get'
  })
}

export function getCount(timeBegin, timeEnd, record) {
  return request({
    url: baseUrl + '/getCount',
    method: 'get',
    params: { timeBegin, timeEnd, record }
  })
}

export function getGroup(timeBegin, timeEnd) {
  return request({
    url: baseUrl + '/getGroup',
    method: 'get',
    params: { timeBegin, timeEnd }
  })
}

export function getDetail(timeBegin, timeEnd, itemName) {
  return request({
    url: baseUrl + '/getDetail',
    method: 'get',
    params: { timeBegin, timeEnd, itemName }
  })
}

