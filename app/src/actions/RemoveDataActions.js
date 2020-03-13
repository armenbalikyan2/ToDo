export const REMOVE_DATA_LOADING = "REMOVE_DATA_LOADING";
export const REMOVE_DATA_SUCCESS = "REMOVE_DATA_SUCCESS";
export const REMOVE_DATA_FAILURE = "REMOVE_DATA_FAILURE";


export const removeDataLoading = {
    type: REMOVE_DATA_LOADING,
};

export const removeDataSuccess = (data) => ({
    type: REMOVE_DATA_SUCCESS,
    payload: data,
});

export const removeDataFailure = {
    type: REMOVE_DATA_FAILURE,
};

