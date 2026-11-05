import { useGetMe, UserName } from '../../../entities/user';
import { LoginForm } from '../../../features/user-login';
import LogoutButton from '../../../features/user-logout/ui/LogoutButton';

function AuthForm() {
  const { data, isLoading, isError } = useGetMe();

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        <LoginForm />
      </div>
    );

  return (
    <div>
      <UserName username={data?.username || ''} />
      <LogoutButton />
    </div>
  );
}

export default AuthForm;
