import { ref } from "vue";

const isAuthenticated = ref(!!localStorage.getItem("ticketapp_session"));

export function useAuth() {
  const login = (user) => {
    localStorage.setItem("ticketapp_session", JSON.stringify(user));
    isAuthenticated.value = true;
    return true;
  };

  const logout = () => {
    localStorage.removeItem("ticketapp_session");
    isAuthenticated.value = false;
  };

  return { isAuthenticated, login, logout };
}
