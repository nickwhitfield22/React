import { HiUser } from 'react-icons/hi2';
import { IoIosLogOut, IoMdSettings } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import IconButton from '../../ui/IconButton';

function ProfileOperations() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-3">
      <IconButton onClick={() => navigate('/profile')}>
        <HiUser size={28} color="#ff8080" />
      </IconButton>
      <IconButton>
        <IoMdSettings size={28} color="#ff8080" />
      </IconButton>
      <IconButton onClick={() => navigate('/login')}>
        <IoIosLogOut size={28} color="#ff8080" />
      </IconButton>
    </div>
  );
}

export default ProfileOperations;
