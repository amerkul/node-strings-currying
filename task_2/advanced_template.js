function highlightKeywords(template, keywords) {
    const strings = template.split(/\${\w*}/);
    let result = "";
    keywords.forEach((value, i) => {
        result += `${strings[i]}<span class='highlight'>${value}</span>`;
    });
    return result += template.at(-1);
}

export {highlightKeywords};

  