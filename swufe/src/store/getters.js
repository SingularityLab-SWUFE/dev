import problemSet from "./modules/problemSet";

export default  {
    //数据源
    // problemSet，第一个problemSet是modules，第二个是modules中的state
    problemSet: (state)=>state.problemSet.problemSet,
    problemData: (state)=>state.problemSet.problemData,
    
    //获取token方法
    //判断是否有token,如果没有重新赋值，返回给state的token
    // getToken(state) {
    //     if (!state.token) {
    //         state.token = localStorage.getItem('token')
    //     }
    //     return state.token
    // }
}