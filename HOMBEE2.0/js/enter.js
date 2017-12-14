$(document).ready(function() {
    //-----------点击登录
    $('.table .btn').click(function() {
        if ($('.table .user').val() == "" || $('.table .pass').val() == "") {
            alert("用户名或者密码不能为空！")
        } else if(!(/^1[34578]\d{9}$/.test($('.table .user').val()))){
            alert("手机号码格式有误，请输入正确格式");
            return
        }else {
            var login = {
                username: $('.table .user').val(),
                password: $('.table .pass').val()
            }
            $.post("http://"+dn+"/site/i-login", login, function(res) {
                var data;
                if (typeof(res) != "object"){
                    data = JSON.parse(res)
                } else {
                    data  = res
                }
                // console.log(data);return
                var loginMsg = data.data
                if (data.statusCode == 200) {
                    // ---------本地会话储存登录yonghu信息
                    sessionStorage.setItem('loginMsg', JSON.stringify(loginMsg))
                    location.href = "http://"+dn+"/home/home"
                } else if (data.statusCode == 90015) {
                    alert(data.msg)
                } else if(data.statusCode == 90014){
                    alert(data.msg)
                }else {
                    alert("服务器内部错误！")
                }
            })
        }
    })
    //----------按下键盘enter键登录
    window.onkeydown = function(e) {
        var e = e || window.event
        if (e.keyCode == 13) {
            if ($('.table .user').val() == "" || $('.table .pass').val() == "") {
                alert("用户名或者密码不能为空！")
            }else if(!(/^1[34578]\d{9}$/.test($('.table .user').val()))){
                alert("手机号码格式有误，请输入正确格式");
                return
            } else {
                var login = {
                    username: $('.table .user').val(),
                    password: $('.table .pass').val()
                }
                $.post("http://"+dn+"/site/i-login", login, function(res) {
                    var data;
                    if (typeof(res) != "object"){
                        data = JSON.parse(res)
                    } else {
                        data  = res
                    }
                    var loginMsg = data.data
                    if (data.statusCode == 200) {
                        // ---------本地会话储存登录yonghu信息
                        sessionStorage.setItem('loginMsg', JSON.stringify(loginMsg))
                        location.href = "http://"+dn+"/home/home"
                    } else if (data.statusCode == 90015) {
                        alert(data.msg)
                    } else if(data.statusCode == 90014){
                        alert(data.msg)
                    }else {
                        alert("服务器内部错误！")
                    }
                })
            }
        }
    }
}) //-------ready() 函数