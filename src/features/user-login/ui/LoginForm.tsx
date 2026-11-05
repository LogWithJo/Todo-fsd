import { useState, type FormEvent } from 'react';
import { useUserLogin } from '../api/mutations';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const { mutate, isPending } = useUserLogin();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    mutate(username, {
      onSuccess: () => setUsername(''),
    });
  }

  return (
    <form>
      <h3>Login</h3>
      <input
        type="text"
        name="username"
        placeholder="username"
        id=""
        value={username}
        disabled={isPending}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button type="submit" disabled={isPending} onClick={handleSubmit}>
        submit
      </button>
    </form>
  );
}

export default LoginForm;
