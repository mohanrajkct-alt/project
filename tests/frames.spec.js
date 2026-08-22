import{test,expect} from '@playwright/test'
test('frames',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
// FRAME COUNT

const allFrames=await page.frames()
console.log("TotalFrames:",allFrames.length)

// FRAME 1

const Frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1'})
await Frame1.fill('input[name="mytext1"]','mohan')

// FRAME 3

const Frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3'})
await Frame3.fill('input[name="mytext3"]','Raj')


// NESTED FRAME

const Iframe=await Frame3.childFrames()
await Iframe[0].locator('#i12').check()
// await Iframe[0].locator('#i21').check()

 const multiCheckBox=[
    '#i21',
    '#i24',
    '#i27',
    ]

    for(const checkBox of multiCheckBox){
        await Iframe[0].locator(checkBox).check()
    }
  await Iframe[0].getByText('Next').click()
  await Iframe[0].locator('input[jsname="YPqjbf"]').fill('Play Wright')

await page.waitForTimeout(5000)



// const IFrame=await page.frame({url:'https://docs.google.com/forms/d/e/1FAIpQLSf5WiH3jEQApYku0Rl_nreU6_YMuLKAH5ffHuASyykQSIBjmg/viewform?embedded=true'})
// await IFrame.locator('#i6').check()

//  await IFrame.locator('#i21').check()
//   await IFrame.getByText('Next').click()

//   await page.waitForTimeout(5000)



})