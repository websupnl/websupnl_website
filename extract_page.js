const fs = require('fs');

const filepath = process.argv[2];
let html = fs.readFileSync(filepath, 'utf8');

// Strip scripts and styles
html = html.replace(/<script[\s\S]*?<\/script>/gi, '');
html = html.replace(/<style[\s\S]*?<\/style>/gi, '');

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
    .replace(/&mdash;/g, '--').replace(/&euro;/g, '€')
    .replace(/&#8364;/g, '€').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}

function extractTagContent(html, tag) {
  const re = new RegExp('<' + tag + '[\\s>][\\s\\S]*?<\\/' + tag + '>', 'gi');
  const results = [];
  let m;
  while ((m = re.exec(html)) !== null) {
    let text = m[0].replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    text = decodeEntities(text);
    if (text.length > 3) results.push(text);
  }
  return results;
}

function extractSelfClosingTag(html, tag) {
  // For tags that might be self-closing like h1 without closing tag
  return extractTagContent(html, tag);
}

function printUnique(label, items, minLen = 5) {
  console.log('\n=== ' + label + ' ===');
  const seen = new Set();
  items.forEach(t => {
    if (!seen.has(t) && t.length >= minLen) {
      seen.add(t);
      console.log(t);
    }
  });
}

printUnique('H1', extractTagContent(html, 'h1'), 3);
printUnique('H2', extractTagContent(html, 'h2'), 3);
printUnique('H3', extractTagContent(html, 'h3'), 3);
printUnique('H4', extractTagContent(html, 'h4'), 3);
printUnique('H5', extractTagContent(html, 'h5'), 3);
printUnique('PARAGRAPHS', extractTagContent(html, 'p'), 20);
printUnique('LIST ITEMS', extractTagContent(html, 'li'), 5);

// Extract button text
const buttons = [];
const btnRe = /<a[^>]*class="[^"]*elementor-button[^"]*"[^>]*>([\s\S]*?)<\/a>/gi;
let bm;
while ((bm = btnRe.exec(html)) !== null) {
  let text = bm[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  text = decodeEntities(text);
  if (text.length > 2) buttons.push(text);
}
printUnique('BUTTONS/CTAs', buttons, 3);

// Also look for data-settings with title/editor/text fields
const settingsMatches = [];
const settRe = /data-settings="([^"]+)"/g;
let sm;
while ((sm = settRe.exec(html)) !== null) {
  try {
    const raw = sm[1].replace(/&quot;/g, '"').replace(/&#034;/g, '"');
    const obj = JSON.parse(raw);
    ['title', 'editor', 'text', 'description', 'html', 'inner_text', 'button_text'].forEach(key => {
      if (obj[key] && typeof obj[key] === 'string' && obj[key].length > 5) {
        const cleaned = obj[key].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
        if (cleaned.length > 5) settingsMatches.push('[' + key + '] ' + decodeEntities(cleaned));
      }
    });
  } catch(e) {}
}
printUnique('DATA-SETTINGS CONTENT', settingsMatches, 5);
