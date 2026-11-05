type UserNameProps = {
  username: string;
};

export function UserName({ username }: UserNameProps) {
  return <div>hello {username}</div>;
}
