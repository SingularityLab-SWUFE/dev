import service from '@/utils/serviceAPI'

const config = require('../config.js')

// 题目列表
export function getProblemSet() {
    return service({
        url:config.APIURL+'/api/problem_set/',
        method:'get'
    })
}

// 题目详情
export function getProblemDetail(problemID) {
    return service({
        url:config.APIURL+'/api/problem_set/' + problemID,
        method:'get'
    })
}

// 提交代码
export function postCode(problemId, data) {
    return service({
        method:'post',
        url:config.APIURL + '/api/problem_set/' + problemID + '/submit_code',
        data:data
    })
}
