const puppeteer = require("puppeteer");

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:8000/", {
    waitUntil: ["domcontentloaded", "networkidle0"],
  });
  // await page.screenshot({path: 'screenshot.png'});
  await page.pdf({
    path: "plz2.pdf",
    format: "a4",
    printBackground: true,
    margin: { left: "1cm", top: "1cm", right: "1cm", bottom: "1cm" },
//     displayHeaderFooter: true,
//     headerTemplate: '<span style="font-size: 10px; height: 20px; background-color: black; color: white;">Header 1</span>',
// footerTemplate: '<span style="font-size: 10px; height: 50px; background-color: red; color:black; ">Footer</span>'
  });
  browser.close();
}
run();
