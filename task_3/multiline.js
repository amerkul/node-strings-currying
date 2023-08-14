function multiline(strings) {
    const lines = strings.join('').trim().split(/\n/);
    return lines.map((value, i) => `${i + 1} ${value}`).join('\n');
}

export {multiline}; 
