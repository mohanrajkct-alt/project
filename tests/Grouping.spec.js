import {test,expect} from '@playwright/test'
test.beforeAll(async()=>{
    console.log('this is beforeAll .....')
})

test.afterAll(async()=>{
    console.log('this is afterAll .....')
})

test.beforeEach(async()=>{
    console.log('this is beforeEach .....')
})

test.afterEach(async()=>{
    console.log('this is afterEach .....')
})


test.describe('grouping1',()=>{
  test('test1',async({page})=>{
    console.log('test number 1......')
  })

  test('test2',async({page})=>{
    console.log('test number 2......')
  })
})

test.describe('grouping2',()=>{
  test('test3',async({page})=>{
    console.log('test number 3......')
  })


 test('test4',async({page})=>{
    console.log('test number 4......')
  })
})
  