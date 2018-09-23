const shoppingCart ={

    fName : "Lou",
    lName : "Tennant",
    items : [],
    prices : [],
    
    addToCart(item, price){
        this.items.push(item);
        this.prices.push(price);      
    },
    cartTotal(){
        var total = 0;
        for(let i = 0; i < this.prices.length; i++){
            total += this.prices[i];
        }
        return total.toFixed(2);
    },
    printShoppingCart(){
        console.log(`Name: ${this.fName} ${this.lName}`);
        console.log(`Items Purchased:`);        
        for(let i = 0; i < this.items.length; i++  ){
            console.log(`${this.items[i]} $${this.prices[i]}`);
        }
        console.log(`Total Purchase: $${this.cartTotal()}`);
    }    
}
shoppingCart.addToCart("Rubber Duck", 15.95);
shoppingCart.addToCart("Stitch Erase", 1.95);

shoppingCart.printShoppingCart();