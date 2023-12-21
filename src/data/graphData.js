const graphData = {
    nodes: [
      { id: 'Essential 8', expanded: false, url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/introduction.html', group: 1 },
      { id: 'Managed Services', expanded: false, url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-1.html', group: 2 },
      { id: 'Immutable infrastructure', expanded: false, url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-2.html', group: 2 },
      { id: 'Mutable infrastructure', expanded: false, url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-3.html', group: 2 },
      { id: 'Identities', expanded: false, url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-4.html', group: 2 },
      { id: 'Data perimeter', expanded: false, url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-5.html', group: 2 },
      { id: 'Backups', expanded: false, url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-6.html', group: 2 },
      { id: 'Logging and monitoring', expanded: false, url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-7.html', group: 2 },
      { id: 'Mechanisms for manual processes', expanded: false, url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-8.html', group: 2 }
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
