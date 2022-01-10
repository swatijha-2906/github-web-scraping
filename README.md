# github-web-scraping
## using nodejs

### About
This is a web scraping project which scraps the [github website](https://github.com/topics) to get all issues from top 8 repositories present inside each of the given 3 topics in this page (these 3 topics are randomly listed each time we refresh this page)
The following  activities are carried out when we run this project-
1. Separate directories are created for each of these 3 topics.
2. Different pdf files  are created, one for each repository inside the topic directory
3. In each of these pdf files, the links for all issues of the particular repository are listed. 


### How to run this project
1. Clone this repository in your local environment.
2. Run command `npm install` to install all the required packages.
3. Run command `node main.js` to get all the required directories and files.




### Insights-

1. Cheerio module used here for web scraping.
2. Limitation: cheerio module only parses and extracts initial loaded html. Since all repositories are not loaded at once, we are extracting issues only from top 8 repositories.

