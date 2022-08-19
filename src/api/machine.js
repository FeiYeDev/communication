import request from '@/utils/request'

const machineUrl = '/machine'

export function getMachineList(record) {
  return request({
    url: machineUrl + '/getMachineList',
    method: 'get',
    params: { record }
  })
}

export function getOrderList(timeBegin, timeEnd, record) {
  return request({
    url: machineUrl + '/getOrderList',
    method: 'get',
    params: { timeBegin, timeEnd, record }
  })
}

export function addMachine(data) {
  return request({
    url: machineUrl + '/addMachine',
    method: 'post',
    data: { data }
  })
}

export function addOrder(data) {
  return request({
    url: machineUrl + '/addOrder',
    method: 'post',
    data: { data }
  })
}

export function continueRent(data) {
  return request({
    url: machineUrl + '/continueRent',
    method: 'post',
    data: { data }
  })
}

export function quitRent(data) {
  return request({
    url: machineUrl + '/quitRent',
    method: 'post',
    data: { data }
  })
}
export function deleteMachine(data) {
  return request({
    url: machineUrl + '/delMachine',
    method: 'post',
    data: { data }
  })
}
