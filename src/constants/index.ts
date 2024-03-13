import { ToastPosition, Bounce, Theme } from 'react-toastify';

export const toastConfigs = {
  position: 'bottom-left' as ToastPosition,
  theme: 'colored' as Theme,
  pauseOnFocusLos: false,
  hideProgressBar: false,
  newestOnTop: false,
  transition: Bounce,
  closeOnClick: true,
  pauseOnHover: true,
  autoClose: 5000,
  draggable: true,
  rtl: false,
};
