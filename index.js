const request = require("request");
const cheerio = require("cheerio");
const file = require('./file.js');
const data =[];
request("https://okkhabar.com/category/bishesh/",(error,response,html)=>{
if(!error && response.statusCode ==200){
const $ = cheerio.load(html);
$('.col-sm-12 h2').each((i, el) => {
    const heading = $(el).text().trim();
    const image = $(".col-sm-12 img").first().attr("src");
    const link = $(el).find('a').attr('href');
    data.push({ heading,link,image });
  });
file.saveFile(data, "test");
}

});