export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1)

    seen[source] = true;
    const q: number[] = [source]

    do{
        const curr = q.shift() as number;

        if (curr === needle){
            break;
        }

        
        const adjs = graph[curr]
        for (let i = 0; i < graph.length; ++i){
            // no edge 
            if (adjs[i] === 0){
                continue;
            }
            
            // already seen vertex
            if (seen[i]){
                continue;
            }
            
            seen[i] = true;
            prev[i] = curr
            q.push(i);
        }
        seen[curr] = true;

    } while (q.length)

    // build the prev backwards to a complete path

    if (prev[needle] === -1){
        return null
    }

    let curr = needle;
    const out: number[] = [];

    while (prev[curr] !== -1){
        out.push(curr);
        curr = prev[curr]
    }

    return [source].concat(out.reverse())
}

export function bfs_v2(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    
    // const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1)

    // seen[source] = true;
    const q: number[] = [source]

    do{
        const curr = q.shift() as number;

        if (curr === needle){
            break;
        }

        
        const adjs = graph[curr]
        for (let i = 0; i < graph.length; ++i){
            // no edge 
            if (adjs[i] === 0){
                continue;
            }
            
            // already seen vertex
            if (prev[i] > -1 || i === source){
                continue;
            }
            
            // seen[i] = true;
            prev[i] = curr
            q.push(i);
        }
        // seen[curr] = true;

    } while (q.length)

    // build the prev backwards to a complete path

    if (prev[needle] === -1){
        return null
    }

    let curr = needle;
    const out: number[] = [];

    while (prev[curr] !== -1){
        out.push(curr);
        curr = prev[curr]
    }

    return [source].concat(out.reverse())
}