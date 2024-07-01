import CareerMap from './CareerMap';
import { ReactFlowProvider } from 'reactflow';

export function GraphMap({ nodes, edges }) {
    return (
        <ReactFlowProvider>
            <CareerMap initialNodes={nodes} initialEdges={edges} />
        </ReactFlowProvider>
    );
}

