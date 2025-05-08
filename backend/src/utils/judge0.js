export function get_judge0_language_id(language) {
  const available_language = {
    JAVASCRIPT: 63,
    PYTHON: 71,
    JAVA: 62,
  };
  return available_language[language] || null;
}

export function judge0_sleep(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
}

export async function send_submissions(submissions) {
  const response = await fetch(
    `${process.env.JUDGE_0_URL}/submissions/batch?base64_encoded=false`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ submissions }),
    }
  );
  const data = await response.json();
  return data;
}

export async function test_cases_results(tokens) {
  while (true) {
    const tokens_response = await fetch(
      `${process.env.JUDGE_0_URL}/submissions/batch?${new URLSearchParams({
        tokens: tokens.join(","),
        base64_encoded: false,
      }).toString()}`,
      {
        method: "GET",
      }
    );
    const tokens_data = await tokens_response.json();
    const results = tokens_data.submissions;
    const is_all_submitted = results.every((item) => item.status.id !== 1 && item.status.id !== 2);
    if (is_all_submitted) {
      return results;
    }
    await judge0_sleep(1000);
  }
}
