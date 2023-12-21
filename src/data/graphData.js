const graphData = {
    nodes: [
      // Root Node
      { id: 'essential-eight-maturity', label: 'Essential 8', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/introduction.html', group: 1 },

      // Themes
      { id: 'theme-1', label: 'Managed Services', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-1.html', group: 2 },
      { id: 'theme-2', label: 'Immutable infrastructure', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-2.html', group: 2 },
      { id: 'theme-3', label: 'Mutable infrastructure', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-3.html', group: 2 },
      { id: 'theme-4', label: 'Identities', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-4.html', group: 2 },
      { id: 'theme-5', label: 'Data perimeter', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-5.html', group: 2 },
      { id: 'theme-6', label: 'Backups', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-6.html', group: 2 },
      { id: 'theme-7', label: 'Logging and monitoring', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-7.html', group: 2 },
      { id: 'theme-8', label: 'Mechanisms for manual processes', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-8.html', group: 2 },

      // Managed Services
      { id: 'theme-1-enable-patching', label: 'Enable patching', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-1.html#theme-1-implementation', group: 3 },
      { id: 'theme-1-scan-for-vulnerabilities', label: 'Scan for vulnerabilities', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-1.html#theme-1-implementation', group: 3 },
      { id: 'theme-1-implement-governance-checks', label: 'Implement governance checks', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-1.html#theme-1-implementation', group: 3 },
      { id: 'theme-1-monitor-amazon-inspector', label: 'Monitor Amazon Inspector', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-1.html#theme-1-implementation', group: 3 },
      { id: 'theme-1-implement-the-following-aws-config-rules', label: 'Implement the following AWS Config rules', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-1.html#theme-1-implementation', group: 3 },

      // Immutable infrastructure
      { id: 'theme-2-implement-ami-and-container-build-pipelines', label: 'Implement AMI and container build pipelines', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-2.html#theme-2-implementation', group: 3 },
      { id: 'theme-2-implement-secure-application-build-pipelines', label: 'Implement secure application build pipelines', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-2.html#theme-2-implementation', group: 3 },
      { id: 'theme-2-implement-vulnerability-scanning', label: 'Implement vulnerability scanning', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-2.html#theme-2-implementation', group: 3 },
      { id: 'theme-2-monitor-iam-and-logs-on-an-ongoing-basis', label: 'Monitor IAM and logs on an ongoing basis', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-2.html#theme-2-implementation', group: 3 },
      { id: 'theme-2-implement-the-following-aws-config-rules', label: 'Implement the following AWS Config rules', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-2.html#theme-2-implementation', group: 3 },

      // Mutable infrastructure
      { id: 'theme-3-automate-patching', label: 'Automate patching', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-3.html#theme-3-implementation', group: 3 },
      { id: 'theme-3-use-automation-rather-than-manual-processes', label: 'Use automation rather than manual processes', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-3.html#theme-3-implementation', group: 3 },
      { id: 'theme-3-use automation-to-install-the-following-on-ec2-instances', label: 'Use automation to install the following on EC2 instances', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-3.html#theme-3-implementation', group: 3 },
      { id: 'theme-3-use peer-review-before-any-release-to-ensure-that-changes-are-meeting-best-practices', label: 'Use peer review before any release to ensure that changes are meeting best practices', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-3.html#theme-3-implementation', group: 3 },
      { id: 'theme-3-use identity-level-controls', label: 'Use identity-level controls', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-3.html#theme-3-implementation', group: 3 },
      { id: 'theme-3-implement-vulnerability-scanning', label: 'Implement vulnerability scanning', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-3.html#theme-3-implementation', group: 3 },
      { id: 'theme-3-monitor-patch-compliance-on-an-ongoing-basis', label: 'Monitor patch compliance on an ongoing basis', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-3.html#theme-3-implementation', group: 3 },
      { id: 'theme-3-monitor-iam-and-logs-on-an-ongoing-basis', label: 'Monitor IAM and logs on an ongoing basis', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-3.html#theme-3-implementation', group: 3 },
      { id: 'theme-3-implement-the-following-aws-config-rules', label: 'Implement the following AWS Config rules', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-3.html#theme-3-implementation', group: 3 },

      // Identities
      { id: 'theme-4-implement-identity-federation', label: 'Implement identity federation', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-4.html#theme-4-implementation', group: 3 },
      { id: 'theme-4-apply-least-privilege-permissions', label: 'Apply least privilege permissions', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-4.html#theme-4-implementation', group: 3 },
      { id: 'theme-4-rotate-credentials', label: 'Rotate credentials', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-4.html#theme-4-implementation', group: 3 },
      { id: 'theme-4-enforce-mfa', label: 'Enforce MFA', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-4.html#theme-4-implementation', group: 3 },
      { id: 'theme-4-monitor-least-privilege-access', label: 'Monitor least privilege access', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-4.html#theme-4-implementation', group: 3 },
      { id: 'theme-4-implement-the-following-aws-config-rules', label: 'Implement the following AWS Config rules', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-4.html#theme-4-implementation', group: 3 },

      // Data perimeter
      { id: 'theme-5-implement-identity-controls', label: 'Implement identity controls', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-5.html#theme-5-implementation', group: 3 },
      { id: 'theme-5-implement-resource-controls', label: 'Implement resource controls', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-5.html#theme-5-implementation', group: 3 },
      { id: 'theme-5-implement-network-controls', label: 'Implement network controls', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-5.html#theme-5-implementation', group: 3 },
      { id: 'theme-5-monitor-policies', label: 'Monitor policies', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-5.html#theme-5-implementation', group: 3 },
      { id: 'theme-5-implement-the-following-aws-config-rules', label: 'Implement the following AWS Config rules', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-5.html#theme-5-implementation', group: 3 },

      // Backups
      { id: 'theme-6-automate-data-backup-and-recovery', label: 'Automate data backup and recovery', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-6.html#theme-6-implementation', group: 3 },
      { id: 'theme-6-implement-governance-across-your-aws-backup-outcomes', label: 'Implement governance across your AWS Backup outcomes', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-6.html#theme-6-implementation', group: 3 },
      { id: 'theme-6-implement-the-following-aws-config-rules', label: 'Implement the following AWS Config rules', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-6.html#theme-6-implementation', group: 3 },
      
      // Logging and monitoring
      { id: 'theme-7-enable-logging', label: 'Enable logging', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-7.html#theme-7-implementation', group: 3 },
      { id: 'theme-7-implement-logging-security-best-practices', label: 'Implement logging security best practices', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-7.html#theme-7-implementation', group: 3 },
      { id: 'theme-7-centralise-logs', label: 'Centralise logs', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-7.html#theme-7-implementation', group: 3 },
      { id: 'theme-7-implement-mechanisms', label: 'Implement mechanisms', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-7.html#theme-7-implementation', group: 3 },
      { id: 'theme-7-implement-the-following-aws-config-rules', label: 'Implement the following AWS Config rules', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-7.html#theme-7-implementation', group: 3 },

      // Mechanisms for manual processes
    ],
    links: [
      { source: 'essential-eight-maturity', target: 'theme-1' },
      { source: 'essential-eight-maturity', target: 'theme-2' },
      { source: 'essential-eight-maturity', target: 'theme-3' },
      { source: 'essential-eight-maturity', target: 'theme-4' },
      { source: 'essential-eight-maturity', target: 'theme-5' },
      { source: 'essential-eight-maturity', target: 'theme-6' },
      { source: 'essential-eight-maturity', target: 'theme-7' },
      { source: 'essential-eight-maturity', target: 'theme-8' },

      // Managed Services
      { source: 'theme-1', target: 'theme-1-enable-patching' },
      { source: 'theme-1', target: 'theme-1-scan-for-vulnerabilities' },
      { source: 'theme-1', target: 'theme-1-implement-governance-checks' },
      { source: 'theme-1', target: 'theme-1-monitor-amazon-inspector' },
      { source: 'theme-1', target: 'theme-1-implement-the-following-aws-config-rules' },

      // Immutable infrastructure
      { source: 'theme-2', target: 'theme-2-implement-ami-and-container-build-pipelines' },
      { source: 'theme-2', target: 'theme-2-implement-secure-application-build-pipelines' },
      { source: 'theme-2', target: 'theme-2-implement-vulnerability-scanning' },
      { source: 'theme-2', target: 'theme-2-monitor-iam-and-logs-on-an-ongoing-basis' },
      { source: 'theme-2', target: 'theme-2-implement-the-following-aws-config-rules' },

      // Mutable infrastructure
      { source: 'theme-3', target: 'theme-3-automate-patching' },
      { source: 'theme-3', target: 'theme-3-use-automation-rather-than-manual-processes' },
      { source: 'theme-3', target: 'theme-3-use automation-to-install-the-following-on-ec2-instances' },
      { source: 'theme-3', target: 'theme-3-use peer-review-before-any-release-to-ensure-that-changes-are-meeting-best-practices' },
      { source: 'theme-3', target: 'theme-3-use identity-level-controls' },
      { source: 'theme-3', target: 'theme-3-implement-vulnerability-scanning' },
      { source: 'theme-3', target: 'theme-3-monitor-patch-compliance-on-an-ongoing-basis' },
      { source: 'theme-3', target: 'theme-3-monitor-iam-and-logs-on-an-ongoing-basis' },
      { source: 'theme-3', target: 'theme-3-implement-the-following-aws-config-rules' },

      // Identities
      { source: 'theme-4', target: 'theme-4-implement-identity-federation' },
      { source: 'theme-4', target: 'theme-4-apply-least-privilege-permissions' },
      { source: 'theme-4', target: 'theme-4-rotate-credentials' },
      { source: 'theme-4', target: 'theme-4-enforce-mfa' },
      { source: 'theme-4', target: 'theme-4-monitor-least-privilege-access' },
      { source: 'theme-4', target: 'theme-4-implement-the-following-aws-config-rules' },

      // Data perimeter
      { source: 'theme-5', target: 'theme-5-implement-identity-controls' },
      { source: 'theme-5', target: 'theme-5-implement-resource-controls' },
      { source: 'theme-5', target: 'theme-5-implement-network-controls' },
      { source: 'theme-5', target: 'theme-5-monitor-policies' },
      { source: 'theme-5', target: 'theme-5-implement-the-following-aws-config-rules' },

      // Backups
      { source: 'theme-6', target: 'theme-6-automate-data-backup-and-recovery' },
      { source: 'theme-6', target: 'theme-6-implement-governance-across-your-aws-backup-outcomes' },
      { source: 'theme-6', target: 'theme-6-implement-the-following-aws-config-rules' },

      // Logging and monitoring
      { source: 'theme-7', target: 'theme-7-enable-logging' },
      { source: 'theme-7', target: 'theme-7-implement-logging-security-best-practices' },
      { source: 'theme-7', target: 'theme-7-centralise-logs' },
      { source: 'theme-7', target: 'theme-7-implement-mechanisms' },
      { source: 'theme-7', target: 'theme-7-implement-the-following-aws-config-rules' },

      // Mechanisms for manual processes
    ]
  };
  
  export default graphData;
