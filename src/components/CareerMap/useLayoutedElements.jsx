import dagre from 'dagre';

const useLayoutedElements = () => {
    const getLayoutedElements = (
        nodes,
        edges,
        direction = 'TB',
        nodeWidth = 200,
        nodeHeight = 60,
    ) => {
        const dagreGraph = new dagre.graphlib.Graph();
        dagreGraph.setDefaultEdgeLabel(() => ({}));

        const isHorizontal = direction === 'LR';
        dagreGraph.setGraph({ rankdir: direction, ranksep: 50, nodesep: 50 });

        nodes.forEach((node) => {
            dagreGraph.setNode(node.id, {
                width: nodeWidth,
                height: nodeHeight,
            });
        });

        edges.forEach((edge) => {
            dagreGraph.setEdge(edge.source, edge.target);
        });

        dagre.layout(dagreGraph);

        nodes.forEach((node) => {
            const nodeWithPosition = dagreGraph.node(node.id);
            node.targetPosition = isHorizontal ? 'left' : 'top';
            node.sourcePosition = isHorizontal ? 'right' : 'bottom';

            // We are shifting the dagre node position (anchor=center center) to the top left
            // so it matches the React Flow node anchor point (top left).
            node.position = {
                x: nodeWithPosition.x - nodeWidth / 2,
                y: nodeWithPosition.y - nodeHeight / 2,
            };

            return node;
        });

        return { nodes, edges };
    };

    return { getLayoutedElements };
};

export default useLayoutedElements;
