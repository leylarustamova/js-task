
const people = ["Leman", "Leyla", "Aynur", "Zinyet", "Mehemmed"];
const animals = ["Nere baliqi", "At", "Rakun", "Tisbaqa"];

people.forEach(person => {
    if (person.length === 5) { 
        const lastLetter = person.slice(-1).toLowerCase(); 
        const foundAnimal = animals.find(animal => animal[0].toLowerCase() === lastLetter); 
        console.log(`${person} -> ${foundAnimal || "Heyvan tapilmadi"}`);
    }
});

