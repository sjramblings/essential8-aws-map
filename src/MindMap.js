import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const MindMap = ({ data }) => {
    const d3Container = useRef(null);
    const width = 800;
    const height = 600;
    const margin = { top: 20, right: 120, bottom: 20, left: 120 };

    useEffect(() => {
        if (data && d3Container.current) {
            const svg = d3.select(d3Container.current)
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", `translate(${margin.left}, ${margin.top})`);

            // Create the tree layout
            const tree = d3.tree().size([height - margin.top - margin.bottom, width - margin.left - margin.right]);
            const root = d3.hierarchy(data);
            tree(root);

            // Create links
            const link = svg.selectAll(".link")
                .data(root.descendants().slice(1))
                .enter().append("path")
                .attr("class", "link")
                .attr("d", d => {
                    return `M${d.y},${d.x}C${(d.y + d.parent.y) / 2},${d.x} ${(d.y + d.parent.y) / 2},${d.parent.x} ${d.parent.y},${d.parent.x}`;
                });

            // Create nodes
            const node = svg.selectAll(".node")
                .data(root.descendants())
                .enter().append("g")
                .attr("class", "node")
                .attr("transform", d => `translate(${d.y},${d.x})`);

            // Add circles to the nodes
            node.append("circle")
                .attr("r", 10);

            // Add labels to the nodes
            node.append("text")
                .attr("dy", ".35em")
                .attr("x", d => d.children ? -13 : 13)
                .style("text-anchor", d => d.children ? "end" : "start")
                .text(d => d.data.name);
        }
    }, [data]);

    return <svg className="d3-component" ref={d3Container} />;
};

export default MindMap;
