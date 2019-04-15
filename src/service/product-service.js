/*
* @Author: Rosen
* @Date:   2017-05-27 18:26:52
* @Last Modified by:   skye
* @Last Modified time: 2019-04-10 20:45:12
*/

'use strict';

var _mm = require('util/mm.js');

var _product = {
    // 获取商品列表
    getProductList : function(listParam, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/product/list'),
            data    : listParam,
            success : resolve,
            error   : reject
        });
    },
    // 获取商品详细信息
    getProductDetail : function(productId, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/product/detail'),
            data    : {
                productId : productId
            },
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _product;