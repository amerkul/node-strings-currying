function localize(strings, ...expressions) {
    let result = "";
    expressions.forEach((value, i) => {
            result += `${strings[i]}${translations[language][value]}`
    });
    return result += strings.at(-1);
}

function setLanguage(value) {
    language = value;
}

const translations = {  
	en: {  
	greet: "Hello",  
	intro: "Welcome to our website"  
},  
	fr: {  
	greet: "Bonjour",  
	intro: "Bienvenue sur notre site web"  
}  
};  
	  
let language = "fr"; // Change to "en" for English  
  
export {localize, setLanguage};