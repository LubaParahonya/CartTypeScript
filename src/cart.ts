import Buyable from './buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void{
        this._items.push(item);
    };

    get items(): Buyable[] {
        return [...this._items]
    };

    sumCost():number{
        const sum = this._items.reduce((accumulator, currentValue) =>{
            accumulator + (currentValue.amount * currentValue.price)
        }, 0);
        return sum;
    };

    sumCostDiscont(discont: number): number{
        const sum = this._items.reduce((accumulator, currentValue) =>{
            accumulator + (currentValue.amount * currentValue.price)
        }, 0);
        const sumDiscont = sum * (discont/100);

        return sum - sumDiscont
    };

    deleteItem(item: Buyable):void{
        const arrId = [];
        this._items.forEach(i => {
            arrId.push(i.id)
        });
        if(arrId.indexOf(item.id)){
            this._items.slice(this._items.findIndex(n => n.id === item.id), 1)
        }

    }

}