import { createApp } from "vue";
import Toast from "vue-toastification";
import { useToast } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const app = createApp();

app.use(Toast);

export const toast = function toast(massage, type) {
  const toast = useToast();
  toast(massage, {
    type: type, // or "success", "error", "default", "info" and "warning"
  });
};
