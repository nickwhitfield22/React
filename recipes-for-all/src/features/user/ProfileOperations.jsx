import { HiUser } from "react-icons/hi2";
import { IoIosLogOut, IoMdSettings } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import IconButton from "../../ui/IconButton";
import { useUser } from "../authentication/useUser";

function ProfileOperations() {
  const navigate = useNavigate();
  const {
    user: {
      user_metadata: { fullName },
    },
  } = useUser();

  return (
    <div className="flex gap-3 text-center">
      <p className="text-md mt-2 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text font-normal text-[#ff8080] text-transparent ">
        Welcome, {fullName.split(" ")[0]}!
      </p>
      <IconButton onClick={() => navigate("/profile")}>
        <HiUser size={28} color="#ff8080" />
      </IconButton>
      <IconButton onClick={() => navigate("/settings")}>
        <IoMdSettings size={28} color="#ff8080" />
      </IconButton>
      <IconButton onClick={() => navigate("/login")}>
        <IoIosLogOut size={28} color="#ff8080" />
      </IconButton>
    </div>
  );
}

export default ProfileOperations;
