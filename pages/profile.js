import { useSession } from 'next-auth/react';

const Profile = () => {
    
    const { data: session, status, loading } = useSession();
    if (loading) return <div>loading...</div>;
    if (!session) return <div>no session</div>;

  return (
    <>
        <p className="m-b-10"></p>
      {session && (
        <>
          <img src={session.user.image} className="avatar" />
          <h1>{session.user.name}</h1>
        </>
      )}

      <style jsx>{`
        .avatar {
          width: 220px;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default Profile;