import CareerMap from './CareerMap/CareerMap';
import { ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';

function Welcome({ children, nodes, edges }) {
    return (
        <div className="content">
            {children}
            <ReactFlowProvider>
                <CareerMap initialNodes={nodes} initialEdges={edges} />
            </ReactFlowProvider>
        </div>
    );
}

export default Welcome;
