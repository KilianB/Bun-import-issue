import { minify } from "html-minifier";

const result = minify('<p title="blah" id="moo">foo</p>', {
  removeAttributeQuotes: true,
});

console.log(result);
