import { toast } from "react-toastify";

const toastSuccess = (title: string) => {
  toast.success(title, {
    position: "top-center",
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    hideProgressBar: true,
    theme: "light",
  });
};

const toastError = (title: string) => {
  toast.error(title, {
    position: "top-center",
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    hideProgressBar: true,
    theme: "light",
  });
};

export default {
  toastSuccess,
  toastError,
};
