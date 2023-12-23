import { toast } from "react-toastify";

type ToastType = {
  type: "success" | "warn" | "error" | "info";
  text: string;
};

export default function ToastEmitter({ type, text }: ToastType) {
  {
    switch (type) {
      case "success":
        toast.success(text, {
          icon: "😆",
        });
        break;
      case "warn":
        toast.warn(text, {
          icon: "🫤",
        });
        break;
      case "error":
        toast.error(text, {
          icon: "😡",
        });
        break;
      case "info":
        toast.info(text, {
          icon: "😗",
        });
        break;
    }
  }
}
