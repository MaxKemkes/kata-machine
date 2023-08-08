export default class ArrayList<T> {
    public length: number;
    public capacity: number;
    public arr:Array<T | undefined>;
    

    constructor(x:number) {
        this.length = 0
        this.capacity = x
        this.arr = new Array<T>(x)
    }

    prepend(item: T): void {
        this.length++;
        const temp = this.arr
        if (this.length === this.capacity){
            //create new Array
            this.arr = new Array(this.capacity * 2)
        }

        for (let i = 0; i <= this.length; i++){
            this.arr[i + 1] = temp[i]
        }

        this.arr[0] = item
    }

    insertAt(item: T, idx: number): void {
        this.length++;
        const temp = this.arr
        if(this.length === this.capacity){
            this.arr = new Array(this.capacity * 2)
        }

        this.arr[idx] = item

        if (idx > 0){
            for (let i = 0; i < idx; i++){
                this.arr[i] = temp[i]
            }
        }

        for (let i = idx; i < this.length - 1; i++){
            this.arr[i + 1] = temp[i]
        }
    }

    append(item: T): void {
        if(this.length === this.capacity){
            //create new Array
            const arr = new Array(this.capacity * 2)
            for (let i = 0; i < this.length; i++){
                arr[i] = this.arr[i]
            }
            
            this.arr = arr
        }
        this.arr[this.length] = item
        this.length++;
    }

    remove(item: T): T | undefined {
        for (let i = 0; i < this.length; i++ ){
            if ( this.arr[i] === item){
                for ( let j = i ; i < this.length - 1; i++){
                    this.arr[j] = this.arr[j+1]
                }

                this.length --
                this.arr[this.length] = undefined

                return item
            }
        }
        return undefined
    }

    get(idx: number): T | undefined {
        return idx < this.length ? this.arr[idx] : undefined
    }

    removeAt(idx: number): T | undefined {
        if (idx >= this.length){
            return undefined
        }

        const val = this.arr[idx]
        this.length--;
        for (let i = idx; i < this.length; i++){
            this.arr[i] = this.arr[i+1]
        }
        this.arr[this.length] = undefined
        return val
    }
}