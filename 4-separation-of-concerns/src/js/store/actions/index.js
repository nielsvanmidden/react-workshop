export * from './toaster';

export const DISMISS_TOAST = 'DISMISS_TOAST';
export const DISMISS_TOAST_LAST_ITEM = 'DISMISS_TOAST_LAST_ITEM';
export const onDismissToast = uiId => ({ uiId, type: DISMISS_TOAST });
export const onDismissToastLastItem = () => ({
  type: DISMISS_TOAST_LAST_ITEM
});