function search(curr: BinaryNode<number> | null, needle: number): boolean {

    // base cases
    // no more node
    if(!curr){
        return false
    }
    // node with searched value
    if(curr.value === needle){
        return true
    }

    //recurse
    // if value smaller than search value ==> go right
    if(curr.value < needle){
        return search(curr.right, needle)
    }
    // if value bigger than search value ==> go left
    return search(curr.left, needle)

}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return search(head, needle)
}