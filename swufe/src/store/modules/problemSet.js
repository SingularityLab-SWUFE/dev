import {getProblemSet, getProblemDetail} from "../../api/problem"

// 题目列表
export default {
    //独立作用域
    namespaced:true,
    state:() => {
        return {
            //相当于数据唯一的公共数据源，共享的数据存放在这
            problemSet:[],
            problemData:[]
        }
    },
    mutations:{
        // 为数据赋值，参数state是必须的
        setProblemSet(state, problemSetData) {
            state.problemSet = problemSetData
        },
        setProblem(state, problemData){
            state.problemData = problemData
        }
    },
    actions:{
        // 获取数据，并自动保存在vuex中
        async useProblemSet(context){
            // 调用接口取数据
            const problemSet = await getProblemSet().then((res) =>{
                return res.data
            }).catch((res) => {
                console.log(res);
            });

            // 测试假数据
            
            // 为state中的problemSet赋值
            context.commit('setProblemSet', problemSet)
        },
        
        async useProblemData(context, problemID){
            // 调用接口取数据
            // const problemData = await getProblemDetail(problemID).then((res) =>{
            //     return res.data
            // }).catch((res) => {
            //     console.log(res);
            // });

            // 测试假数据
            const problemData = [
                {
                    "id": 3,
                    "title": "Hello SWUFE OJ!",
                    "is_remote": false,
                    "remote_id": null,
                    "source": null,
                    "difficulty": "Easy",
                    "description": "奇点工作室开发部的同学很高兴, 自己学校的 OJ 系统终于上线了. 现在需要你输出一个字符串表达奇点小伙伴们的心情.",
                    "input": "本题无输入.",
                    "output": "输出 `Hello SWUFE OJ!` 即可.",
                    "samples": "[{\"input\": None, \"output\": \"Hello SWUFE OJ!\"}]",
                    "test_case_id": null,
                    "hint": null,
                    "total_submission_number": 0,
                    "solved_submission_number": 0,
                    "standard_time_limit": 1000,
                    "standard_memory_limit": 65536,
                    "other_time_limit": 2000,
                    "other_memory_limit": 65536,
                    "tag": []
                }
            ]
            
            // 为state中的event赋值
            context.commit('setProblem', problemData)
        },
        
    }
}