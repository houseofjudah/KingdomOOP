const Butterfly = require("./kingdom.js");

class Egg extends Butterfly {
    constructor() {
        super()
        this.stage = 'Stationary Egg'
      }
      lifestage1() {
       const lifestage1  = (this.stage) 
        return lifestage1
        
      }
}
const egg = new Egg


class Catepillar extends Butterfly {
    constructor() {
        super()
        this.stage = 'Vegetative catepillar'
    }
    lifestage2() {
     const lifestage2  = (this.stage) 
      return lifestage2
        
    }
}

const catepillar = new Catepillar

class Puppa extends Butterfly {
    constructor() {
        super()
        this.stage = 'A carcooned puppa in hibanation'
    }
    lifestage3() {
     const lifestage3  = (this.stage) 
      return lifestage3
        
    }
}
const puppa = new Puppa

class Adult extends Butterfly {
    constructor() {
        super()
        this.stage = " Emerged butterfly with wings"
    }
    lifestage4() {
        const lifestage4 = (this.stage)
        return lifestage4
    }
}
const  butterflies = new Adult
