const request= require("request");
const cheerio= require("cheerio");
const path= require("path");
let createFiles= require("./files");

function getAllIssues(url, repoName, topicName){
    request(url, function(err, response, html){
        if(err){
            console.error(err);
        }
        else if(response.statusCode == 404){
            console.log("Page not found");
        }
        else{
            
           extractIssuesLink(html, url, repoName, topicName);
        }
    });
}
module.exports={
    getAllIssuesKey: getAllIssues
}

function extractIssuesLink(html, url, repoName, topicName){
    let $=cheerio.load(html);
    //let issuesLink= $("a#issues-tab").attr("href");
    //issuesLink= "https://github.com" + issuesLink;
    //console.log(issuesLink);
    let issuesLink= url + "/issues";
    request(issuesLink, function(err, response, html){
        if(err){
            console.error(err);
        }
        else if(response.statusCode == 404){
            console.log("Page not found");
        }
        else{
            
            extractIssues(html, repoName, topicName);
        }
    });
}

function extractIssues(html, repoName, topicName){
    let $=cheerio.load(html);
    let allIssues=$(".js-issue-row a[data-hovercard-type='issue']");
    let issuesList=[];
    for(let i=0;i<allIssues.length;i++){
        let currentIssueLink= $(allIssues[i]).attr("href");
        currentIssueLink= "https://github.com" + currentIssueLink;
        issuesList.push(currentIssueLink);
    }
    //console.log(issuesList);
    //console.log(topicName + " ..." + repoName );

    createFiles(topicName, repoName, issuesList);

}