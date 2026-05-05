const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');
console.log('File read. Size:', content.length);

// Find and remove the GALLERY section including the pband before it
const galleryStart = content.indexOf('<div class="pband"></div>\r\n<section id="GALLERY"');
if (galleryStart === -1) {
    // Try without \r\n
    const alt = content.indexOf('<div class="pband"></div>\n<section id="GALLERY"');
    if (alt === -1) {
        console.log('Gallery section not found!');
        process.exit(1);
    }
}

// Find the end of the gallery section (</div></section> followed by a newline)
const sectionEnd = content.indexOf('</div></section>', galleryStart + 10);
if (sectionEnd === -1) {
    console.log('Gallery section end not found!');
    process.exit(1);
}

// Find the actual end (after </div></section> and newline)
const afterSection = content.indexOf('\n', sectionEnd) + 1;

const before = content.substring(0, galleryStart);
const after = content.substring(afterSection);

content = before + after;

fs.writeFileSync('index.html', content, 'utf8');
console.log('✅ Gallery/लग्नाचे क्षण section removed!');
console.log('New size:', content.length);
