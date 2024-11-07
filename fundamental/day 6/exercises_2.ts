class ProductData {
  productName:string;
  private productPrice:number;

  constructor(pName:string,pPrice:number){
    this.productName = pName
    this.productPrice = pPrice
  }

  get item(){
    return this.productName + " " + this.productPrice 
  }
  get price(): number {
    return this.productPrice;
  }
}

const prdDt = new ProductData('Asus ROG Z Serial',18000000) 
const prdDt1 = new ProductData('Asus ROG YZ Serial',17000000) 
const prdDt2 = new ProductData('Asus ROG XMZ Serial',16000000) 

console.log(prdDt.item)

class TransactionData extends ProductData{
  private qty:number = 0
  private totalTrc:number = 0
  private products: Array<[ProductData, number]> = []

  constructor(pName:string = '',pPrice:number = 0){
    super(pName,pPrice)
    this.totalTrc = 0
  }

  addToCart(product : ProductData, qty : number){
    this.products.push([product, qty])
    this.totalTrc += product.price * qty
  }

  showTotalTrans(){
    return this.totalTrc  
  }

  checkoutMethod(){
    return {
      product : this.products,
      total : this.totalTrc
    }
  }
}

const trcDt = new TransactionData()
trcDt.addToCart(prdDt, 1)
trcDt.addToCart(prdDt1, 2)
trcDt.addToCart(prdDt2, 1)
console.log(trcDt.checkoutMethod())
console.log(trcDt.showTotalTrans())
