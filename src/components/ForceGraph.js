import React from 'react';
import { ForceGraph2D } from 'react-force-graph';

const ForceGraph = ({ data }) => {
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

        // You can add more complex drawing here if needed
    };


    return (
        <ForceGraph2D
            graphData={data}
            nodeCanvasObject={handleNodePaint}
            nodeAutoColorBy="group"
            linkDirectionalParticles="value"
            linkDirectionalParticleSpeed={d => d.value * 0.001}
        />
    );
};

export default ForceGraph;
