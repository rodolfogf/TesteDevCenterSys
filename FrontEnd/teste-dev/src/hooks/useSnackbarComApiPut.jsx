import { useState } from 'react';
import ApiService from '../services/ApiService';

const useSnackbarWithApiPut = (successMessage, errorMessage) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const handleApiCall = async (url, id, data) => {
        try {
            const response = await ApiService.put(url, id, data);
            console.log("response", response);
            if (response.status === 204) {
                setSnackbarMessage(successMessage);
                setSnackbarSeverity("success");
            } else {
                const responseErrorMessage = response.data?.message || response.statusText || 'Erro desconhecido';
                setSnackbarMessage(`${errorMessage}: ${responseErrorMessage}`);
                setSnackbarSeverity("error");
            }
        } catch (error) {
            const catchError = error.response?.data?.message || error.message || 'Erro desconhecido';
            setSnackbarMessage(`${errorMessage}: ${catchError}`);
            setSnackbarSeverity("error");
        } finally {
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return {
        openSnackbar,
        snackbarMessage,
        snackbarSeverity,
        handleApiCall,
        handleCloseSnackbar,
    };
};

export default useSnackbarWithApiPut;
