import { toast } from "react-toastify";

export const successMessage = (message: string) => {
  toast.success(message, {
    theme: "colored",
    position: "top-center",
    closeButton: true,
    closeOnClick: true,
  });
};

export const warningMessage = (message: string) => {
  toast.warning(message, {
    theme: "colored",
    position: "top-center",
    closeButton: true,
    closeOnClick: true,
  });
};

export const errorMessage = (message: string) => {
  toast.error(message, {
    theme: "colored",
    position: "top-center",
    closeButton: true,
    closeOnClick: true,
  });
};