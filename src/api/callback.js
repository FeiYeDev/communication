import request from '@/utils/request'

const machineUrl = '/callbacks'

export function inBoundConnectionInfo() {
  return request({
    url: '/inBoundConnectionInfo',
    method: 'get'
  })
}

export function callBackType() {
  return request({
    url: machineUrl + '/callBackType',
    method: 'get'
  })
}

export function switchCallbackType(data) {
  return request({
    url: machineUrl + '/switchCallbackType',
    method: 'post',
    data
  })
}

export function dialOut(outboundPhoneNumber) {
  return request({
    url: machineUrl + '/callPhone',
    method: 'get',
    params: { outboundPhoneNumber }
  })
}

export function endCall(data) {
  return request({
    url: machineUrl + '/endCall',
    method: 'post',
    data
  })
}
