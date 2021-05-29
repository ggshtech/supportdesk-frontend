export const IssueType = {
  TASK: 'task',
  SUBTASK: 'subtask',
  REVIEW: 'review',
  STORY: 'story',
};

export const IssueStatus = {
  BACKLOG: 'backlog',
  INPROGRESS: 'inprogress',
  DONE: 'done',
  RESOLVED: 'resolved',
};

export const IssuePriority = {
  HIGHEST: '5',
  HIGH: '4',
  MEDIUM: '3',
  LOW: '2',
  LOWEST: '1',
};

export const IssueTypeCopy = {
  [IssueType.TASK]: 'Task',
  [IssueType.SUBTASK]: 'Subtask',
  [IssueType.REVIEW]: 'Review',
  [IssueType.STORY]: 'Story',
};

export const IssueStatusCopy = {
  [IssueStatus.BACKLOG]: 'Backlog',
  [IssueStatus.INPROGRESS]: 'In Progress',
  [IssueStatus.DONE]: 'Ready',
  [IssueStatus.RESOLVED]: 'Resolved',
};

export const IssuePriorityCopy = {
  [IssuePriority.HIGHEST]: 'Highest',
  [IssuePriority.HIGH]: 'High',
  [IssuePriority.MEDIUM]: 'Medium',
  [IssuePriority.LOW]: 'Low',
  [IssuePriority.LOWEST]: 'Lowest',
};
