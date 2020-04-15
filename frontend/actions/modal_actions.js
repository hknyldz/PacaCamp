export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, reviewId) => ({
    type: OPEN_MODAL,
    modal,
    reviewId
});

export const closeModal = () => ({
    type: CLOSE_MODAL
});