export const loginUser = async (email, password) => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    throw error;
  }
};