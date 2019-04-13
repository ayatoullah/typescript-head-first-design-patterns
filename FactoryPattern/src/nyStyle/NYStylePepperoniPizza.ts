import Pizza from "../Pizza";

export default class NYStylePepperoniPizza extends Pizza  {
    
    constructor() {
        super();
        
        this.name = "NY Style Pepperoni Pizza";
        this.dough = "Thin Crust Dough";
        this.sauce = "Plum Tomato Sauce";

        this.toppings.push("Shredded Mozzarella Cheese");
        this.toppings.push("Black Olives");
        this.toppings.push("Spinach");
        this.toppings.push("Eggplant");
        this.toppings.push("Sliced Pepperoni");
    }

    cut():void {
        console.log("Cutting the pizza into wedge slices");
    }
}