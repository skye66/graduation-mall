/*
* @Author: Rosen
* @Date:   2017-05-17 17:04:32
* @Last Modified by:   skye
* @Last Modified time: 2019-04-10 19:33:33
*/

'use strict';

var _mm = require('util/mm.js');

var _user = {
    // 用户登录
    login : function(userInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/login'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 检查用户名
    checkUsername : function(username, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/check_valid'),
            data    : {
                type    : 'username',
                value   : username
            },
            method  : 'GET',
            success : resolve,
            error   : reject
        });
    },
    // 用户注册
    register : function(userInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/register'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 检查登录状态
    checkLogin : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/get_information'),
            method  : 'GET',
            success : resolve,
            error   : reject
        });
    },
   
   
    // 获取用户信息
    getUserInfo : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/get_information'),
            method  : 'GET',
            success : resolve,
            error   : reject
        });
    },
    // 更新个人信息
    updateUserInfo : function(userInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/update'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 登录状态下更新密码
    updatePassword : function(userInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/reset_password'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 登出
    logout : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/logout'),
            method  : 'GET',
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _user;