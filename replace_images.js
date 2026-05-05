const fs = require('fs');

// Read the file
let content = fs.readFileSync('index.html', 'utf8');
console.log('File read successfully. Size:', content.length, 'bytes');

// Backup first
fs.writeFileSync('index.html.bak', content, 'utf8');
console.log('Backup created: index.html.bak');

// Replace the hero ganesh art image (line 336 area)
// Pattern: <img src="data:image/..." alt="Ganesh" class="ganesh-art-img"/>
const heroGaneshRegex = /(<div class="hero-ganesh-art" id="hGaneshArt">)<img src="data:image\/[^"]*" alt="Ganesh" class="ganesh-art-img"\/>/;
const heroMatch = content.match(heroGaneshRegex);

if (heroMatch) {
    content = content.replace(heroGaneshRegex, '$1<img src="dagdu_sheth.jpg" alt="Dagdusheth Ganpati" class="ganesh-art-img" style="border-radius:12px;"/>');
    console.log('✅ Replaced hero Ganesh art image with dagdu_sheth.jpg');
} else {
    console.log('❌ Hero ganesh art image not found, trying alternate pattern...');
    
    // Try a broader pattern
    const altRegex = /(<div class="hero-ganesh-art"[^>]*>)<img src="data:image[^"]*"[^/]*\/>/;
    const altMatch = content.match(altRegex);
    if (altMatch) {
        content = content.replace(altRegex, '$1<img src="dagdu_sheth.jpg" alt="Dagdusheth Ganpati" class="ganesh-art-img" style="border-radius:12px;"/>');
        console.log('✅ Replaced hero Ganesh art image (alt pattern) with dagdu_sheth.jpg');
    } else {
        console.log('❌ Could not find hero ganesh art image with any pattern');
    }
}

// Write the modified file
fs.writeFileSync('index.html', content, 'utf8');
console.log('File saved successfully. New size:', content.length, 'bytes');
console.log('\nDone! Open index.html in your browser to verify the changes.');
console.log('If something went wrong, restore from index.html.bak');
