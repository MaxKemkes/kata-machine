type Node = {
    value?: string;
    children: (Node| undefined) [];
    isWord?: boolean;
};



export default class Trie<T> {
    private head: Node;

    constructor() {
        this.head = {value: undefined, children: [], isWord: false}
    }

    insert(item: string): void {
        let curr = this.head

        for (let i = 0; i < item.length; ++i){
            const c = item[i]
            const cIdx = this.strIdx(c)
            const next = curr.children[cIdx]
            if (next){
                curr = next
            } else{
                const newNode = this.createNode(c)
                curr.children[cIdx] = newNode
                curr = newNode
            }
        }
        curr.isWord = true

    }
    delete(item: string): void {
        let curr = this.head

        

        this.deleteTraverse(curr, item)
        //recurse
        // 
        // base has hit last element ==> no children delete Node; if children isWord = false
    }

    find(partial: string): string[] {
        const lastNode = this.getFindLastNode(this.head, partial)
        const possibleStrs: string[] = [];

        if (lastNode){
            for (let i = 0; i < lastNode.children.length; ++i){
                const nextNode = lastNode.children[i]
                if (nextNode){
                    this.findTraverse(nextNode, possibleStrs, partial)
                }
            }
        }

        return possibleStrs;
    }

    private createNode(item:string){
        return {value: item, children: [], isWord: false} as Node
    }

    private zeroIdx = "a".charCodeAt(0)
    private strIdx(str: string): number{
        return str.charCodeAt(0) - this.zeroIdx
    }

    private checkForChildNode(node:Node){
        for (let i = 0; i < node.children.length; ++i) {
            const child = node.children[i];
            if (child) {
                return true;
            }
        }
        return false;
    }

    private deleteTraverse(node: Node, str: string){
        //recurse
        //base: Hit last element
        if (str.length <= 0){
            const hasChild = this.checkForChildNode(node)
            // dont delete if there are subchildren but change isWord to false
            if (hasChild){
                node.isWord = false
            }
            //delete from parent.children array if no sub children
            return !hasChild
        }

        // get next Node
        const childIdx = this.strIdx(str[0])
        const next = node.children[childIdx]

        //base: if next does not exist return false ==> word does not exist
        if (!next){
            return false
        }
        
        //recurse
        const deleteChild = this.deleteTraverse(next, str.slice(1))

        // post
        if (deleteChild) {
            node.children[childIdx] = undefined;
        }
        
        // check for child
        const hasChild = this.checkForChildNode(node)

        // if Child exists dont delete
        return !hasChild
    }

    private getFindLastNode(node:Node, str: string): Node| undefined{
        // base
        // str has no length ==> reached last Node
        if (str.length === 0){
            return node
        }
        
        const next = node.children[this.strIdx(str[0])]

        if (!next){
            return undefined
        }

        return this.getFindLastNode(next, str.slice(1))
    }

    private findTraverse(curr: Node, possibleStrs: string[], partial:string){
        if (curr.isWord){
            possibleStrs.push(partial+curr.value)
        }

        for (let i = 0; i < curr.children.length; ++i){
            const next = curr.children[i]
            if (next){
                this.findTraverse(next, possibleStrs, partial+curr.value)
            }
        }
    }
}
