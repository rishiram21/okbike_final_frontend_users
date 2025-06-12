// src/hooks/useApiInterceptor.js
import { useAuth } from "../context/AuthContext";
import axios from "axios";
 
const useApiInterceptor = () => {
  const { token } = useAuth();
 
  const apiInterceptor = async (url, data = {}, method = "POST") => {
    const publicUrls = import.meta.env.VITE_PUBLIC_URLS.split(',');
    const authenticatedUrls = import.meta.env.VITE_AUTHENTICATED_URLS.split(',');
 
    const isPublicUrl = publicUrls.some(publicUrl => url.includes(publicUrl));
    const isAuthenticatedUrl = authenticatedUrls.some(authUrl => url.includes(authUrl));
 
    if (!isPublicUrl && isAuthenticatedUrl && !token) {
      throw new Error("Authentication required. Please log in.");
    }
 
    const config = {
      method,
      url,
      headers: isPublicUrl ? {} : { Authorization: `Bearer ${token}` },
      data: ["POST", "PUT"].includes(method) ? data : undefined,
      params: method === "GET" ? data : undefined,
    };
 
    const response = await axios(config);
    return response.data;
  };
 
  return apiInterceptor;
};
 
export default useApiInterceptor;
 
 