import { useParams } from 'react-router-dom';

const ProfileDetails = () => {
  const { userId } = useParams();

  return <div>User Details {userId}</div>;
};

export default ProfileDetails;
