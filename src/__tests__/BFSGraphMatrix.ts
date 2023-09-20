import bfs, { bfs_v2 } from "@code/BFSGraphMatrix";
import { matrix2 } from "./graph";

test("bfs - graph matrix", function () {
    expect(bfs(matrix2, 0, 6)).toEqual([
        0,
        1,
        4,
        5,
        6,
    ]);

    expect(bfs(matrix2, 6, 0)).toEqual(null);
});

test("bfs - graph matrix", function () {
    expect(bfs_v2(matrix2, 0, 6)).toEqual([
        0,
        1,
        4,
        5,
        6,
    ]);

    expect(bfs_v2(matrix2, 6, 0)).toEqual(null);
});
