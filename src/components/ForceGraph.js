import React, { useRef, useEffect } from 'react';
import { ForceGraph2D } from 'react-force-graph';

const ForceGraph = ({ data }) => {
    const fgRef = useRef();

    useEffect(() => {
        // Setup force graph configuration
        const forceGraph = fgRef.current;
        forceGraph.d3Force('charge').strength(-300); // Increased repulsive force
        // You can also adjust other forces as needed
    }, []);

    const handleNodePaint = (node, ctx) => {
        // draw the node (a circle)
        ctx.beginPath();
        ctx.arc(node.x, node.y, 10, 0, 2 * Math.PI, false);
        ctx.fillStyle = node.color;
        ctx.fill();

        // draw the label
        ctx.font = '8px Sans-Serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'black';
        ctx.fillText(node.id, node.x, node.y - 15);
    };

    const handleNodeClick = node => {
        // Open a new tab with the URL from the node data
        if (node.url) {
            window.open(node.url, '_blank');
        }
    };

    return (
        <ForceGraph2D
            ref={fgRef}
            graphData={data}
            nodeCanvasObject={handleNodePaint}
            nodeAutoColorBy="group"
            onNodeClick={handleNodeClick}
            linkDirectionalParticles="value"
            linkDirectionalParticleSpeed={d => d.value * 0.001}
        />
    );
};

export default ForceGraph;
