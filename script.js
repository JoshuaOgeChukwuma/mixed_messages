//Code to display random facts about Cristiano Ronaldo
let randomMessage = {
    greeting : ['Hello!', 'Hi!', 'Bonjour!', 'Salut!', 'Guten Tag', 'Que tal?', 'Konnichiwa', 'shalom', 'Hoi, Hallo'],
    didyouknow : ['did you know that', 'did you notice that', 'did you know it', 'brief news', 'fast facts', 'did you know', 'did you realize', 'were you aware'],
    //Array containing random facts about cristiano Ronaldo
    ronaldofacts : [
        'His actual name is Cristiano Ronaldo dos Santos Aveiro. You may have known that, but what you may not have known is he was named after Ronald Regan, a former U.S President who was greatly loved by Ronaldo\'s father',
        'He was referred to by two popular nicknames, \'crybaby\' and \'little bee\'',
        'Sir. Alex Furgerson insisted that Ronaldo takes up the jersey number 7, so he could fill in the shoes and work into the panache of his predecessors holding the same number such as Eric Cantona, George Best, and David Beckham.',
        'In 2014, Ronaldo was ranked top of the list of the world\'s highest-paid players',
        'The Puskas award was created in 2009 to reward the best goal of the year. Cristiano Ronaldo was the first to win the coveted award in 2009',
        'When Ronaldo moved to Real Madrid, he was greeted by 80,000 fans at the Santiago Bernabeu.',
        'Cristiano Ronaldo jumps at 5G -for contextual purposes, G-force is the power it takes to jump, and Ronaldo shares his record with a cheetah',
        'When Cristiano Ronaldo was a teenager at just 15 years, he was diagnosed with a racing heart',
        'Fourth-year sociology students at the University of British Columbia Okanagan study the life and career of Cristiano Ronaldo.',
        'Real Madrid star, Cristiano Ronaldo has no single tattoo on his body and doesn\'t plan on having any in the foreseeable future.',
        'Cristiano Ronaldo was born on 5th February 1985'
    ],
    //Method that generates the random message
    generatefacts () {
        const x = this.greeting[Math.floor(Math.random() * this.greeting.length)]
        const y = this.didyouknow[Math.floor(Math.random() * this.didyouknow.length)]
        const z = this.ronaldofacts[Math.floor(Math.random() * this.ronaldofacts.length)]
//Using string interpolation, this would return a random mixture of greeting, didyouknow and ronaldofacts
        return `${x}, ${y}: ${z}`
    }

};

console.log(randomMessage.generatefacts())
