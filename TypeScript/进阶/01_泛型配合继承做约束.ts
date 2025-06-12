class Order {
    orderId: number
    orderNmae: string
    static count: number
    printOrd() {}
    static getCount() {}
}

// 泛型配合继承做约束
type InstancePropKeys<T extends object> = keyof T
// good
type OrdPropKeys = InstancePropKeys<Order>

// bad
// type OrdPropKeys2 = InstancePropKeys<string>

export {}
