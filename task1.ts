const name: string = "Александр";

const text: string = `Я, ${name}, учу TYPESCRIPT`;

//Написать программу, которая выводит text в нижнем регистре с вашим именем, если имя не совпадает, то заменить его

const yourName: string = "Настя";
if (text.includes(yourName)) {
  console.log(text.toLowerCase());
} else {
  const newText: string = text
    .slice(0, text.indexOf(name))
    .concat(yourName)
    .concat(text.slice(text.indexOf(name) + name.length));
  console.log(newText);
}
