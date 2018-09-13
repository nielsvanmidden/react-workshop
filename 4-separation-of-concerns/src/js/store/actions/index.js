export * from './toaster';

export const DISMISS_TOAST = 'DISMISS_TOAST';
export const onDismissToast = uiId => ({ uiId, type: DISMISS_TOAST });