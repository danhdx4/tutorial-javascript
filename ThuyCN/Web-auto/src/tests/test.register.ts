import test, {expect} from "@playwright/test";
import { Register } from "../page/register.page";
import { PageUrl } from "../utils/constants";
import { registerData } from "../test_data/register.data"

registerData.forEach((data) => {
    test(`${data.title}`, async ({ page }) => {
        const registerPage = new Register(page);
        await registerPage.dgoto()

        await registerPage.fillFormRegister(data)

        await registerPage.btn.click({ force: true })

        await registerPage.isShowMsg(data.message)
    });
});

// check từng data nhỏ:
// async function gotoRegisterPage(page : any){
//     const registerPage = new Register(page);
//     await registerPage.dgoto();
//     return registerPage;
// }
// test('login success', async ({ page }) => {
//     const registerData1 = registerData[5];
//         const registerPage = new Register(page);
//         await registerPage.dgoto()

//         await registerPage.fillFormRegister(registerData1)
//         await registerPage.clickHeader()
//         await registerPage.btn.click({ force: true })

//         await registerPage.isShowMsg(registerData1.message)
//     });


