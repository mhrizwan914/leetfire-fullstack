export function get_judge0_language_id(language) {
  const available_language = {
    JAVA: 62,
    JAVASCRIPT: 63,
    PYTHON: 71,
  };
  return available_language[language] || null;
}

export function judge0_sleep(ms) {
  return new Promise((resolve) => setTimeout(() => resolve, ms));
}
