var page = require('webpage').create();
phantom.cutputEncoding = 'gbk';
page.open("https://www.jianshu.com", function(status) {
  if(status === "success") {
    page.render("jianshu.png");
  } else {
    console.log("Page failed to load.");
  };
phantom.exit();
});