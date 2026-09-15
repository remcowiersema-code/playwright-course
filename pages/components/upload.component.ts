import { Page, Locator } from '@playwright/test';

class UploadComponent {
    private page: Page;
    uploadInput: Locator;
    submitBtn: Locator;
    succesTxt: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uploadInput = page.locator('input#upfile_1');
        this.submitBtn = page.locator('#upload_1');
        this.succesTxt = page.locator('#wfu_messageblock_header_1_label_1');
    }

    async uploadFile(filePath: string) {
        await this.uploadInput.setInputFiles(filePath);
        await this.submitBtn.click();
    }

}

export default UploadComponent;