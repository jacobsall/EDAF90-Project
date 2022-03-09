interface Pizza {
  ingredients: string[],
  price: number
};

interface Restaurant {
  location: string, // will be a geopoint, change later
  menu: {
    [index: string] : Pizza
  },
  name: string
}

interface Data {
  [index: string]: Restaurant
}

export const MOCK_DATA: Data  = {
  0: {
    location: "here",
    menu: {
      Barbone: {
        ingredients: ["skinka", "lök", "köttfärssås", "färsk vitlök"],
        price: 90
      },
      "La Maffia": {
        ingredients: ["skinka", "bacon", "lök", "ägg", "svartpeppar"],
        price: 90
      }  
    },
    name: "Palmyra pizzeria & restaurang"
  },
  1: {
    location: "there",
    menu: {
      Margherita: {
        ingredients: ["tomatsås", "ost"],
        price: 75
      },
      Vesuvio: {
        ingredients: ["tomatsås", "ost", "skinka"],
        price: 75
      }  
    },
    name: "Sesam"
  },
  2: {
    location: "there",
    menu: {
      Margherita: {
        ingredients: ["tomatsås", "ost"],
        price: 75
      },
      Vesuvio: {
        ingredients: ["tomatsås", "ost", "skinka"],
        price: 75
      }  
    },
    name: "Sesam"
  },
  3: {
    location: "there",
    menu: {
      Margherita: {
        ingredients: ["tomatsås", "ost"],
        price: 75
      },
      Vesuvio: {
        ingredients: ["tomatsås", "ost", "skinka"],
        price: 75
      }  
    },
    name: "Sesam"
  },
  4: {
    location: "there",
    menu: {
      Margherita: {
        ingredients: ["tomatsås", "ost"],
        price: 75
      },
      Vesuvio: {
        ingredients: ["tomatsås", "ost", "skinka"],
        price: 75
      }  
    },
    name: "Sesam"
  }
};