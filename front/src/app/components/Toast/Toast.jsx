
import { Toast } from 'primereact/toast';

const ErrorToast = ({ message }) => {
  return (
    <Toast severity="error" life={5000} summary="Erreur" detail={message} />
  );
};