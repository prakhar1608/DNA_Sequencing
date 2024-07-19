function startSearch() {
    var text = document.getElementById('text-input').value;
    var pattern = document.getElementById('pattern-input').value;
    var visualizationDiv = document.getElementById('visualization');
    var shiftTableDiv = document.getElementById('shift-table');
    
    visualizationDiv.innerHTML = ""; 
    shiftTableDiv.innerHTML = ""; 

    var result = [];
    var index = horspoolSearch(text, pattern, result);
    var shiftTable = preprocessPattern(pattern); // Get the shift table

    // Display shift table
    var shiftTableHTML = '<table>';
    shiftTableHTML += '<tr><th>Character</th><th>Shift</th></tr>';
    for (var char in shiftTable) {
        shiftTableHTML += '<tr><td>' + char + '</td><td>' + shiftTable[char] + '</td></tr>';
    }
    shiftTableHTML += '</table>';
    shiftTableDiv.innerHTML = shiftTableHTML;

    if (index !== -1) {
        visualizeSearch(text, pattern, result, index);
    } else {
        visualizationDiv.textContent = "Pattern not found in the text.";
    }
}

function preprocessPattern(pattern) {
    var table = {};
    var patternLength = pattern.length;
    for (var i = 0; i < patternLength - 1; i++) {
        table[pattern[i]] = patternLength - 1 - i;
    }
    return table;
}

function horspoolSearch(text, pattern, result) {
    var textLength = text.length;
    var patternLength = pattern.length;
    var badMatchTable = preprocessPattern(pattern);
    var i = patternLength - 1;

    while (i < textLength) {
        var k = 0;
        while (k < patternLength && pattern[patternLength - 1 - k] === text[i - k]) {
            k++;
        }
        result.push({
            index: i - patternLength + 1,
            match: k === patternLength,
            patternShift: badMatchTable[text[i]] || patternLength,
            patternValue: pattern.substring(i - patternLength + 1, i - patternLength + 1 + patternLength)
        });
        if (k === patternLength) {
            return i - patternLength + 1; 
        } else {
            var skip = badMatchTable[text[i]] || patternLength;
            i += skip;
        }
    }

    return -1; 
}

function visualizeSearch(text, pattern, result, index) {
    var visualizationDiv = document.getElementById('visualization');
    var html = '';

    for (var step = 0; step < result.length; step++) {
        var stepInfo = result[step];
        html += '<div class="step">';
        html += '<p>Index: ' + stepInfo.index + '</p>';
        html += '<p>Text: ' + text + '</p>';
        html += '<p>Pattern: ' + pattern + '</p>';
        html += '<p>Pattern Shift: ' + stepInfo.patternShift + '</p>';
        if (stepInfo.match) {
            var highlightedText = text.substring(0, stepInfo.index) +
                                  '<span class="highlight">' + text.substring(stepInfo.index, stepInfo.index + pattern.length) + '</span>' +
                                  text.substring(stepInfo.index + pattern.length);
            html += '<p>Match Found</p>';
            html += '<p>Matched Text: ' + highlightedText + '</p>';
        } else {
            var textSlice = text.slice(stepInfo.index - pattern.length + 1, stepInfo.index + 1);
            var mismatchIndex = textSlice.lastIndexOf(stepInfo.patternValue.charAt(stepInfo.patternValue.length - 1));
            html += '<p>No Match</p>';
            html += '<p>Mismatched Text: ' + textSlice + '</p>';
            html += '<p>Character Compared: ' + stepInfo.patternValue.charAt(mismatchIndex) + '</p>';
        }
        html += '</div>';
    }

    visualizationDiv.innerHTML = html;
}
