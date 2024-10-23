// JavaScript Program to Check if a String Starts With Another String

const string = 'hello world';

const toCheckString = 'he';

if (string.startsWith(toCheckString)) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}