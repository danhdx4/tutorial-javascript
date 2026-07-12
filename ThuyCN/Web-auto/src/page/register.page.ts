// Tạo kịch bản test page Register sử dụng Page Object Model.
// Gợi ý:
// - Tạo class RegisterPage trong lanhnt/web-auto/src/pages/register.page.ts

import { expect, Page as PlaywrightPage } from "@playwright/test";
import { Page } from "./base.page";
import { PageUrl } from "../utils/constants";
import { RegisterData, registerData } from "../test_data/register.data"

export class Register extends Page {
    readonly pageUrl : string;
    readonly pageUrl1 : string;
    constructor(page: PlaywrightPage) {
        super(page)
        this.pageUrl = PageUrl.REGISTER_URL;
        this.pageUrl1 = PageUrl.HOME_URL;
    }

// Locators
nameField = this.page.getByPlaceholder('Full name');
emailField = this.page.getByPlaceholder('Email address');
pwField = this.page.locator('#input-password');
repeatpwField = this.page.getByPlaceholder('Confirm Password');
checkboxValue = this.page.getByRole('checkbox', {name : 'Agree to Terms & Conditions'}) 
btn = this.page.getByRole('button', { name: 'REGISTER' });
msgWarning = this.page.locator('.caption.status-danger');
title = this.page.getByRole('heading', { name: 'Register' });

//Action & Assertion functions
    async dgoto() {
        const response = await this.page.goto(this.pageUrl);
        expect(response?.status()).toBeLessThan(400);
    }

    async fillFormRegister(data : RegisterData){
        await this.nameField.fill(data.fullname);
        await this.emailField.fill(data.email);
        await this.pwField.fill(data.password);
        await this.repeatpwField.fill(data.confirm);
        await this.isAgree(data.agree);
        await this.isShowMsg(data.message)
        await this.btnStt(data.isEnableRegister)
    }

    async isAgree (agree: any) {
        if (agree) {
            await this.checkboxValue.check({ force: true });
    }
}

    async isShowMsg(errorMsg : string){
        if (errorMsg) {
            await expect(this.msgWarning).toHaveText(errorMsg)
        } else {
            await expect(this.msgWarning).not.toBeVisible()
        }
    }

    async btnStt(stt : boolean){
        if (stt) {
            await expect(this.btn).toBeEnabled()
        } else {
            await expect(this.btn).toBeDisabled()
        }
    }

    async clickHeader(){
            await this.title.click()
        }
    }


