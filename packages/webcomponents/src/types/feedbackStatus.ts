const FeedbackStatus = {
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info',
    SUCCESS: 'success'
} as const;

export type FeedbackStatusTypes = typeof FeedbackStatus[keyof typeof FeedbackStatus] 