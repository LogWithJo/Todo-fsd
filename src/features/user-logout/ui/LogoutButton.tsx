import { useUserLogout } from '../api/mutations';

function LogoutButton() {
  const { mutate, isPending } = useUserLogout();

  return (
    <div>
      <button
        onClick={() => {
          mutate();
        }}
        disabled={isPending}
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;
