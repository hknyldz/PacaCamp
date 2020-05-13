export const APPLY_FILTER = 'APPLY_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const REMOVE_ALL_FILTERS = 'REMOVE_ALL_FILTERS';

export const applyFilter = (filter) => ({
    type: APPLY_FILTER,
    filter: filter
});

export const removeFilter = (filter) => ({
    type: REMOVE_FILTER,
    filter: filter  
});

export const removeAllFilters = () => ({
    type: REMOVE_ALL_FILTERS 
});