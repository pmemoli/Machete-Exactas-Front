import useLayoutedElements from './useLayoutedElements';

// Graph nodes after node n
function forward_path(n, edges) {
    const nodes = [];
    edges.forEach((edge) => {
        if (edge[0] === n) {
            nodes.push(edge[1]);
            forward_path(edge[1], edges).forEach((node) => {
                nodes.push(node);
            });
        }
    });
    return nodes.filter((value, index, self) => self.indexOf(value) === index);
}

// Graph nodes before node n
function backward_path(n, edges) {
    const nodes = [];
    edges.forEach((edge) => {
        if (edge[1] === n) {
            nodes.push(edge[0]);
            backward_path(edge[0], edges).forEach((node) => {
                nodes.push(node);
            });
        }
    });
    return nodes.filter((value, index, self) => self.indexOf(value) === index);
}

const useDAG = ({ initialNodes, initialEdges }) => {
    const { getLayoutedElements } = useLayoutedElements();

    const lefts = [];
    const rights = [];
    const full_edges = [];
    initialEdges.forEach((e) => {
        full_edges.push([e.source, e.target]);
        lefts.push(e.target);
        rights.push(e.source);
    });

    const ids = [];
    initialNodes.forEach((n) => {
        ids.push(n.id);
        if (lefts.includes(n.id)) {
            n.data.hasLeft = true;
        }
        if (rights.includes(n.id)) {
            n.data.hasRight = true;
        }
    });

    const { nodes, edges } = getLayoutedElements(initialNodes, initialEdges);

    // Graph nodes before and after node n
    const path = (n) => {
        return forward_path(n, full_edges)
            .concat(backward_path(n, full_edges))
            .concat([n]);
    };

    return {
        nodes,
        edges,
        path,
    };
};

export default useDAG;
