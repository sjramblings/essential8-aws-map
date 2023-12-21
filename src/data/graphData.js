const graphData = {
    nodes: [
      { id: 'Essential 8', group: 1 },
      { id: 'Managed Services', group: 2 },
      { id: 'Immutable infrastructure', group: 2 },
      { id: 'Mutable infrastructure', group: 2 },
      { id: 'Identities', group: 2 },
      { id: 'Data perimeter', group: 2 },
      { id: 'Backups', group: 2 },
      { id: 'Logging and monitoring', group: 2 },
      { id: 'Mechanisms for manual processes', group: 2 }
    ],
    links: [
      { source: 'Essential 8', target: 'Managed Services' },
      { source: 'Essential 8', target: 'Immutable infrastructure' },
      { source: 'Essential 8', target: 'Mutable infrastructure' },
      { source: 'Essential 8', target: 'Identities' },
      { source: 'Essential 8', target: 'Data perimeter' },
      { source: 'Essential 8', target: 'Backups' },
      { source: 'Essential 8', target: 'Logging and monitoring' },
      { source: 'Essential 8', target: 'Mechanisms for manual processes' }
    ]
  };
  
  export default graphData;
  