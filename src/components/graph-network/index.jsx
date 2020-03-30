import React from 'react';
import { Graph } from 'react-d3-graph';
import myConfig from '../../config';
import data from '../../data';


const onClickGraph = function() {
    console.log(`Clicked the graph background`);
};

const onClickNode = function(nodeId) {
    console.log(`Clicked node ${nodeId}`);
};

const onRightClickNode = function(event, nodeId) {
    console.log(`Right clicked node ${nodeId}`);
};

const onMouseOverNode = function(nodeId) {
    console.log(`Mouse over node ${nodeId}`);
};

const onMouseOutNode = function(nodeId) {
    console.log(`Mouse out node ${nodeId}`);
};

const onClickLink = function(source, target) {
    console.log(`Clicked link between ${source} and ${target}`);
};

const onRightClickLink = function(event, source, target) {
    console.log(`Right clicked link between ${source} and ${target}`);
};

const onMouseOverLink = function(source, target) {
    console.log(`Mouse over in link between ${source} and ${target}`);
};

const onMouseOutLink = function(source, target) {
    console.log(`Mouse out link between ${source} and ${target}`);
};

const GraphNetwork =  () => (
<Graph
    id="graph-id"
    data={data}
    config={myConfig}
    onClickNode={onClickNode}
    onRightClickNode={onRightClickNode}
    onClickGraph={onClickGraph}
    onClickLink={onClickLink}
    onRightClickLink={onRightClickLink}
    onMouseOverNode={onMouseOverNode}
    onMouseOutNode={onMouseOutNode}
    onMouseOverLink={onMouseOverLink}
    onMouseOutLink={onMouseOutLink}
/>
);

export default GraphNetwork;
