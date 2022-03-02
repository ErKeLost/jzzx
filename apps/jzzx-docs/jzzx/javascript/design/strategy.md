# 设计模式之策略模式 - 优化 if else 地狱问题

## 类型单条件模式（一）

```js
const orderType = 1
if (orderType === 1) {
  console.log('全部')
  // ...
} else if (orderType === 2) {
  console.log('舆情情感')
  // ...
} else if (orderType === 3) {
  console.log('敏感信息来源')
  //   ...
} else {
  console.log('非敏感来源')
  //   ...
}

const orderTypeSet = {
  1() {
    console.log('全部舆情')
  },
  2() {
    console.log('舆情情感')
  },
  3() {
    console.log('敏感信息来源')
  },
  4() {
    conosle.log('非敏感信息来源')
  }
}

orderTypeSet[orderType]()
```

## 多层条件嵌套逻辑 （一）

:::tip 多层条件嵌套
如果条件越来越多并且出现嵌套的条件层级
:::

```js
const orderType = 1 // 1: 美妆，2：电器，3：家具
const orderWay = 2 // 1：h5，2：app，3：小程序

const strategy = () => { // 订单类型+环境类型策略
  const map = new Map([
    [{
      orderType: 1,
      orderWay: 1
    }, () => {
      console.log('美妆订单h5')
    }],
    [{
      orderType: 1,
      orderWay: 2
    }, () => {
      console.log('美妆订单app')
    }],
    [{
      orderType: 1,
      orderWay: 3
    }, () => {
      console.log('美妆订单小程序')
    }],
    [{
      orderType: 2,
      orderWay: 1
    }, () => {
      console.log('电器订单h5')
    }],
    [{
      orderType: 2,
      orderWay: 2
    }, () => {
      console.log('电器订单app')
    }],
    [{
      orderType: 2,
      orderWay: 3
    }, () => {
      console.log('电器订单小程序')
    }],
    [{
      orderType: 3,
      orderWay: 1
    }, () => {
      console.log('家具订单h5')
    }],
    [{
      orderType: 3,
      orderWay: 2
    }, () => {
      console.log('家具订单app')
    }],
    [{
      orderType: 3,
      orderWay: 3
    }, () => {
      console.log('家具订单小程序')
    }],
  ])
  return map
}

const run = (orderType, orderWay) => {
  let action = [...strategy()].filter(([key, value]) => (key.orderType === orderType && key.orderWay === orderWay))
  action.forEach(([key, value]) => value.call(this))
}

run(orderType, orderWay)
```
