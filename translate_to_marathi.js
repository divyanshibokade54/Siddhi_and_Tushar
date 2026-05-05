const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');
console.log('File read. Size:', content.length);

// Backup
fs.writeFileSync('index_backup_marathi.html', content, 'utf8');
console.log('Backup created: index_backup_marathi.html');

let count = 0;
function rep(from, to) {
    if (content.includes(from)) {
        content = content.replace(from, to);
        count++;
        console.log(`✅ [${count}] Replaced`);
    } else {
        console.log(`❌ Not found: "${from.substring(0, 60)}..."`);
    }
}

// 1. Curtain prompt - "Enter · प्रवेश करा" → "प्रवेश करा"
rep('&#8595;&nbsp;Enter &middot; प्रवेश करा&nbsp;&#8595;',
    '&#8595;&nbsp;प्रवेश करा&nbsp;&#8595;');

// 2. Hero section - "Shubh Vivah" → "शुभ विवाह" (remove English duplicate)
rep('<h1 class="hero-ten" id="hTEn">Shubh Vivah</h1>',
    '<h1 class="hero-ten" id="hTEn">शुभ विवाह</h1>');

// 3. Hero names - English to Marathi
rep('<span class="gn">Tushar Moholkar</span><span class="amp">&amp;</span><span class="gn">Siddhi Waghule</span>',
    '<span class="gn">तुषार मोहोलकर</span><span class="amp">&amp;</span><span class="gn">सिद्धी वाघुळे</span>');

// 4. Hero date - English month to Marathi
rep('10 &middot; May &middot; 2026',
    '१० &middot; मे &middot; २०२६');

// 5. Scroll text
rep('&#8595; Scroll &#8595;',
    '&#8595; खाली सरकवा &#8595;');

// 6. Section heading - "The Invitation"
rep('<span class="en">The Invitation</span><span class="mr">आमंत्रण पत्रिका</span>',
    '<span class="en">आमंत्रण पत्रिका</span><span class="mr">आमंत्रण पत्रिका</span>');

// 7. English invitation paragraph
rep('With the blessings of our ancestors and the divine grace of Lord Ganesha, we joyfully invite you to celebrate the auspicious wedding of our beloved children. Your presence and blessings are our greatest treasures.',
    'आमच्या पूर्वजांच्या आशीर्वादाने आणि श्री गणेशाच्या कृपेने, आमच्या लाडक्या मुलांच्या शुभ विवाह सोहळ्यासाठी आपणास सहकुटुंब सहपरिवार सादर आमंत्रित करत आहोत. आपली उपस्थिती आणि आशीर्वाद हीच आमची सर्वात मोठी संपत्ती आहे.');

// 8. Scroll paper names - English to Marathi
rep('<div class="sp-names">Tushar Moholkar &amp; Siddhi Waghule</div>',
    '<div class="sp-names">तुषार मोहोलकर &amp; सिद्धी वाघुळे</div>');

// 9. Section heading - "The Couple"
rep('<span class="en">The Couple</span><span class="mr">वधू-वर</span>',
    '<span class="en">वधू-वर</span><span class="mr">वधू-वर</span>');

// 10. Section heading - "Reveal Your Akshata"
rep('<span class="en">Reveal Your Akshata</span><span class="mr">अक्षता &mdash; तारीख उघड करा</span>',
    '<span class="en">अक्षता उघड करा</span><span class="mr">अक्षता &mdash; तारीख उघड करा</span>');

// 11. Scratch section - English subtitle
rep('Scratch the gold foil to reveal the wedding date',
    'लग्नाची तारीख पाहण्यासाठी सोनेरी फॉइल स्क्रॅच करा');

// 12. Scratch section - date reveal
rep('<div class="sc-date-big">10 May<br/>2026</div>',
    '<div class="sc-date-big">१० मे<br/>२०२६</div>');

// 13. Scratch section - detail
rep('Sunday &middot; Shubh Muhurta &middot; 6:58 PM',
    'रविवार &middot; शुभ मुहूर्त &middot; सायंकाळी ६:५८');

// 14. Section heading - "Wedding Moments"
rep('<span class="en">Wedding Moments</span><span class="mr">लग्नाचे क्षण</span>',
    '<span class="en">लग्नाचे क्षण</span><span class="mr">लग्नाचे क्षण</span>');

// 15. RSVP section - "/ Full Name"
rep('<span class="le">/ Full Name</span>',
    '<span class="le">/ पूर्ण नाव</span>');

// 16. RSVP - "/ Phone or Email"
rep('<span class="le">/ Phone or Email</span>',
    '<span class="le">/ फोन किंवा ईमेल</span>');

// 17. RSVP - "/ No. of Guests"
rep('<span class="le">/ No. of Guests</span>',
    '<span class="le">/ पाहुण्यांची संख्या</span>');

// 18. RSVP - "/ Which Events?"
rep('<span class="le">/ Which Events?</span>',
    '<span class="le">/ कोणते समारंभ?</span>');

// 19. RSVP - "/ Will You Attend?"
rep('<span class="le">/ Will You Attend?</span>',
    '<span class="le">/ आपण येणार का?</span>');

// 20. RSVP - Event options
rep('All Events', 'सर्व समारंभ');
rep('Wedding Only', 'फक्त लग्न');
rep('Reception Only', 'फक्त स्वागत');

// 21. RSVP - Confirm button
rep('Confirm RSVP &middot; प्रतिसाद पाठवा',
    'प्रतिसाद पाठवा &middot; RSVP');

// 22. RSVP success message
rep('We look forward to celebrating with you.',
    'आपल्याबरोबर हा सोहळा साजरा करण्याची आम्ही आतुरतेने वाट पाहत आहोत.');

// 23. Footer names
rep('Tushar Moholkar &amp; Siddhi Waghule &middot; 10 May 2026 &middot; रविवार, सायंकाळी ६:५८ वा.',
    'तुषार मोहोलकर &amp; सिद्धी वाघुळे &middot; १० मे २०२६ &middot; रविवार, सायंकाळी ६:५८ वा.');

// 24. RSVP section heading (if exists)
rep('<span class="en">RSVP</span>', '<span class="en">प्रतिसाद</span>');

// Write file
fs.writeFileSync('index.html', content, 'utf8');
console.log(`\n✅ Done! Total replacements: ${count}`);
console.log('Open index.html to verify. Backup: index_backup_marathi.html');
