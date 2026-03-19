const fs = require('fs');
const filepath = process.argv[2];
let html = fs.readFileSync(filepath, 'utf8');

html = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
html = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');

function decodeEntities(t) {
  return t
    .replace(/&#8217;/g, "'").replace(/&#8216;/g, "'")
    .replace(/&#8211;/g, '-').replace(/&#8212;/g, '--')
    .replace(/&ldquo;/g, '"').replace(/&rdquo;/g, '"')
    .replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ')
    .replace(/&#038;/g, '&').replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"').replace(/&#8230;/g, '...')
    .replace(/&rsquo;/g, "'").replace(/&lsquo;/g, "'")
    .replace(/&hellip;/g, '...').replace(/&ndash;/g, '-')
    .replace(/&mdash;/g, '--');
}

function extractTag(html, tag) {
  const re = new RegExp('<' + tag + '[^>]*>([\s\S]*?)<\/' + tag + '>', 'gi');
  const results = [];
  let m;
  while ((m = re.exec(html)) !== null) {
    let text = m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    text = decodeEntities(text);
    if (text.length > 5) results.push(text);
  }
  return results;
}

console.log('=== H1 ===');
extractTag(html, 'h1').forEach(t => console.log(t));
console.log('\n=== H2 ===');
const seen2 = new Set();
extractTag(html, 'h2').forEach(t => { if(!seen2.has(t)){seen2.add(t);console.log(t);} });
console.log('\n=== H3 ===');
const seen3 = new Set();
extractTag(html, 'h3').forEach(t => { if(!seen3.has(t)){seen3.add(t);console.log(t);} });
console.log('\n=== H4 ===');
const seen4 = new Set();
extractTag(html, 'h4').forEach(t => { if(!seen4.has(t)){seen4.add(t);console.log(t);} });
console.log('\n=== PARAGRAPHS ===');
const seenP = new Set();
extractTag(html, 'p').forEach(t => { if(!seenP.has(t) && t.length > 20){seenP.add(t);console.log(t);} });
console.log('\n=== LIST ITEMS ===');
const seenLI = new Set();
extractTag(html, 'li').forEach(t => { if(!seenLI.has(t)){seenLI.add(t);console.log(t);} });
