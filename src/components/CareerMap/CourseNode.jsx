import { Handle, Position } from 'reactflow';

// data: {
//     label: string;
//     hasLeft: boolean;
//     hasRight: boolean;
//     background: string;
//     foreground: string;
// };

const CourseNode = ({ data }) => {
    return (
        <>
            {data.hasLeft ? (
                <Handle type="target" position={Position.Top} />
            ) : null}
            <div
                style={{
                    width: '200px',
                    minHeight: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    fontWeight: 600,
                    padding: 10,
                    color: data.foreground,
                    background: data.background,
                    borderRadius: 14,
                    border: '1px solid #000',
                    fontSize: '14px',
                }}
            >
                {data.label}
            </div>
            {data.hasRight ? (
                <Handle type="source" position={Position.Bottom} />
            ) : null}
        </>
    );
};

export default CourseNode;
