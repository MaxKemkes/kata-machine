import dfs from "@code/DFSGraphMatrix";
import { matrix2 } from "./graph";

test("dfs - graph", function () {
    expect(dfs(matrix2, 0, 6)).toEqual([
        0,
        1,
        4,
        5,
        6,
    ]);

    expect(dfs(matrix2, 6, 0)).toEqual(null);
});

