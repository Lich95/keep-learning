<template>
    <div>
    </div>
</template>
<script setup lang="ts">


let arr: number[] = [1, 2, 3]
let arr2: Array<string> = ['a', 'b']
let arr3: [number, string, boolean?] = [3, 'c']


let nums = [1, 2, 3, 4]
const result = nums.find(x => x > 2) as number //断言 有可能是undefined
//find返回查找到的第一个 
//filter返回符合条件的数组
//map返回处理过后的值或boolean 长度相同
let b = result * 2

let a1: 1 | 2 | 3 = 3;

let fun: (p1: number, p2: string) => string = (a: number, b: string): string => {
    return a + b
}

let fun2 = (a: number, b?: string): string => {
    if (b) b = '1'; else b = '2'
    return a + b
}

interface Idata {
    readonly message: string;
    code: number;
    data?: { id: number, msg: string }[]
}

interface Ires extends Idata {
    newMsg: {}[]
} //包含所有



class Person {
    userName: string;
    userAge: number;
    constructor(name: string, age: number) {
        this.userName = name;
        this.userAge = age
    }
    run(): void {

    }
}
new Person('张', 20).run()


function fn1<T>(arg: T[], n:T) {
    arg.push(n)
}
fn1<string>( ['c','l'] , 'x')


function fn11<T extends [],U>(arg: T, n:U) {
    arg.push(n)
}
fn11<[],string>( [] , 'x')

function fn2<T>(arg: T):T {
    return arg
}
fn2<string>('2');


let data:IallData = {
    pageSize:2,
    pageNum:3
}



</script>
<style scoped></style> 