const fs= require("fs");
const path= require("path");
const pdfkit = require("pdfkit");

function createFiles(topicName, repoName, issuesList){
    console.log(".........................");
    console.log(issuesList);
    console.log(topicName + " ..." + repoName );
    
    dirPath= path.join(__dirname, topicName);
    if(fs.existsSync(dirPath)==false){
        fs.mkdirSync(dirPath);
    }
    //filePath= path.join(dirPath, repoName + ".json");
    //fs.writeFileSync(filePath, JSON.stringify(issuesList));

    //for creating PDFs
    filePath= path.join(dirPath, repoName + ".pdf");
    let jsonTextArr=JSON.stringify(issuesList);
    let pdfDoc = new pdfkit();
    pdfDoc.pipe(fs.createWriteStream(filePath));
    pdfDoc.list(issuesList);
    pdfDoc.moveDown(0.5);
    pdfDoc.end();


}
module.exports = createFiles