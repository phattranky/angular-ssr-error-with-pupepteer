const puppeteer = require('puppeteer');

const fiveMinutes = 300000;
const TASK_TIMEOUT = process.env.TASK_TIMEOUT || fiveMinutes;
const PUPPETEER_DEFAULT_TIMEOUT =
  Number(process.env.PUPPETEER_DEFAULT_TIMEOUT) || fiveMinutes;
export interface ExportPDFData {
  reportId: string;
  orgId: string;
  token: string;
  isSimplified: boolean;
}

export interface ExportPDFResult {
  data?: {
    caseNumber: string;
    coverFilePath: string;
    contentFilePath: string;
    reportStatus: string;
  };
  error?: any;
}

export class GeneratePDFClusterService {
  public static async init(): Promise<void> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({ path: 'example.png' });

    await browser.close();
  }
}
