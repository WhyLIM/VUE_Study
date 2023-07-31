// 创建一个对象
const obj = {
    name: "孙悟空",
    age: 18
}

/* 
    如果直接修改对象属性，那么仅仅是修改了属性，没做其他事，此操作只会影响对象自身，不会导致元素的重新渲染
    希望在修改一个属性的同时可以进行一些其他操作，例如触发元素重新渲染
    对对象改造：vue3 中使用的是代理模式来完成对象的改造
    设置代理时不会对原对象产生影响
*/
// obj.name = "猪八戒"

// 为对象创建一个代理
// handler 用来指定代理的行为
const handler = {
    // get() 用来指定读取数据时的行为，他的返回值就是最终读取到的值
    // 指定 get() 后，在通过代理读取对象属性时，就会调用 get() 方法来获取值
    get(target, prop, receiver) {

        // 返回值之前做一些其他操作
        // 在 vue 中，data() 返回的对象会被 vue 代理
        // vue 代理后，当我们通过代理去读属性时，返回值之前它会先做一个跟踪的操作
        // track() 追踪谁使用了我这个属性
        // 当通过代理去修改属性时，修改后会通知之前所有用到该值的位置进行更新
        /* 
            3 个参数：
                1. target：被代理的对象
                2. prop：读取的属性
                3. receiver：代理对象
        */
        return target[prop]
    },

    // set() 会在通过代理修改对象时调用
    set(target, prop, value, receiver) {
        target[prop] = value

        // trigger() 触发所有的使用该值的位置进行更新
        // 值修改之后做一些其他操作
    }
}

// 创建代理
const proxy = new Proxy(obj, handler)

console.log(proxy.name)