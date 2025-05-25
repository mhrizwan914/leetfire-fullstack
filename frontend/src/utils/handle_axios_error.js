export default function handle_axios_error(error, toast) {
  const messages = {
    ERR_NETWORK:
      "Network error - unable to reach the server. Please check your internet or try again later.",
    ECONNABORTED: "Request timed out - the server took too long to respond.",
    ERR_BAD_RESPONSE: "Server responded with unexpected data.",
  };

  const msg = messages[error?.code];

  toast({
    variant: !error?.success && "destructive",
    description: msg || error?.response?.data?.message || error?.message,
  });
}
