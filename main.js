import {localize, setLanguage } from "./task_1/tagged-template.js";
import { highlightKeywords } from "./task_2/advanced_template.js";
import { multiline } from "./task_3/multiline.js";
import { curry, multiply, extendCurry } from "./task_6/currying-fn.js";

const greeting = "greet";  
const introduction = "intro";  

const localizedGreeting = localize`${greeting}`;  
const localizedIntroduction = localize`${introduction}`;  
  
console.log(localizedGreeting); // Expected: "Bonjour" (for language "fr")  
console.log(localizedIntroduction); // Expected: "Bienvenue sur notre site web" (for language "fr")

setLanguage("en")
console.log(localize`${greeting}`);
console.log(localize`${introduction}`); 

const keywords = ["JavaScript", "template", "tagged"];  
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";  

const highlighted = highlightKeywords(template, keywords);  
  
console.log(highlighted);

const code = multiline`  
function add(a, b) {  
return a + b;  
}`;  
  
console.log(code); 

      
const curriedMultiply = curry(multiply, 3);  
      
let step1 = curriedMultiply(2); // Returns a curried function  
let step2 = step1(3); // Returns a curried function  
let result = step2(4); // Returns the final result: 2 * 3 * 4 = 24  
console.log("Result:", result); // Expected: 24
      
const ExtendCurriedMultiply = extendCurry(multiply);  
      
step1 = ExtendCurriedMultiply('_'); 
step2 = step1('_'); 
let addMissingArgs = step2(4);
let step3 = addMissingArgs(2)
let result2 = step3(3)
 // Returns the final result: 2 * 3 * 4 = 24  
console.log("Result:", result2); // Expected: 24


