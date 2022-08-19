import request from '../utils/request';

const machineUrl = ''

export function connectionInfo(tag) {
  return request({
    url: machineUrl + '/connectionInfo',
    method: 'get',
    params: { tag }
  })
}

export function dialOutToGather(outboundPhoneNumber) {
  return request({
    url: machineUrl + '/dialOutToGather',
    method: 'get',
    params: { outboundPhoneNumber }
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

export function getParticipant() {
  return request({
    url: machineUrl + '/getParticipant',
    method: 'get'
  })
}

export function quitSession(data) {
  return request({
    url: machineUrl + '/quitSession',
    method: 'post',
    data
  })
}
export function resetSession() {
  return request({
    url: machineUrl + '/resetSession',
    method: 'post',
  })
}

export function sendDTMF(data) {
  return request({
    url: machineUrl + '/sendDTMF',
    method: 'post',
    data
  })
}


