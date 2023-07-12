import Mock from 'mockjs'

Mock.mock('check.php', function (options) {
    // let json = JSON.parse(options.body)
    console.log(options)
    // let userName = json.userName
    // let pwd = json.pwd
    // if (userName === 'tom' && pwd === '123') {
    //     return Mock.mock({
    //         code: "10001",
    //         msg: "ok"
    //     })
    // } else {
    //     return Mock.mock({
    //         code: "20001",
    //         msg: "用户名或密码错误  "
    //     })
    // }
})