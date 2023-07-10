import { useEffect, useState } from 'react';
import { ReactFlow, useEdgesState, useNodesState } from 'reactflow';
import CourseNode from './CourseNode';
import useDAG from './useDAG';

const nodeTypes = { course: CourseNode };

const CareerMap = ({ initialNodes, initialEdges }) => {
    const {
        nodes: layoutedNodes,
        edges: layoutedEdges,
        path,
    } = useDAG({
        initialNodes,
        initialEdges,
    });

    const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

    const [pathview, setPathview] = useState(true);
    const [clickedCourse, setClickedCourse] = useState('');

    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    //const [fitView, setFitView] = useState((e) => {console.log(e)});

    const updateNodes = (id, reducedView) => {
        setPathview(reducedView);
        if (reducedView) {
            setNodes(initialNodes.filter((node) => path(id).includes(node.id)));
            //setNodes(years.concat(filterNodesByID(id)));
        } else {
            setNodes(initialNodes);
        }
        setEdges(initialEdges);
    };

    const nodeClick = (_, element) => {
        if (element.type === 'course') {
            if (clickedCourse !== element.id) {
                setClickedCourse(element.id);
                updateNodes(element.id, true);
                setClickedCourse(element.id);
            } else {
                reset();
                setClickedCourse('');
            }
        } else if (element.type === 'year') {
            setEdges(initialEdges);
        }
    };

    const reset = () => {
        updateNodes(null, false);
    };

    useEffect(() => {
        if (reactFlowInstance) {
            reactFlowInstance.fitView({
                duration: 800,
                padding: 0.1,
                // center: true,
            });
        }
    }, [nodes, reactFlowInstance]);

    return (
        <div style={{
            height: '500px',
            width: '100%',
        }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodesDraggable={false}
                nodesConnectable={false}
                panOnDrag={false}
                onInit={(instance) => setReactFlowInstance(instance)}
                attributionPosition="top-right"
                nodeTypes={nodeTypes}
                onClick={(e) => {
                    // Esto es un hack horrible, habría que ver cómo hacerlo bien
                    if (e.target.className === 'react-flow__pane') {
                        reset();
                    }
                }}
                onNodeClick={nodeClick}
                zoomOnScroll={false}
                zoomOnDoubleClick={false}
                zoomOnPinch={false}
                fitView
            />
        </div>
    );
};

export default CareerMap;