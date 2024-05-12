import { IToastService } from "../types";
import ToastAdaptor from "./toast.adaptor";

class ToastService {
  private readonly toast: IToastService;

  constructor(_toast: IToastService) {
    this.toast = _toast;
  }

  success(msg: string, id?: string) {
    this.toast.success(msg, id);
  }

  error(msg: string, id?: string) {
    this.toast.error(msg, id);
  }
}

export const toastService = new ToastService(new ToastAdaptor());
