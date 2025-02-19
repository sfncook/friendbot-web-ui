import {useState, useEffect} from "react";
import {AvatarPickerItem} from "./AvatarPickerItem.jsx";
import {FaArrowRight} from "react-icons/fa";
import {useAvatar} from "../hooks/useAvatar.jsx";
import {useChat} from "../hooks/useChat.jsx";
import {useNavigate} from "react-router-dom";

let initialized = false
export const AvatarPickerPage = () => {
  const {
    resetAvatarResponse,
  } = useChat()

  const {
    avatars,
    selectedAvatar,
    setSelectedAvatar,
  } = useAvatar()

  const navigate = useNavigate();

  const [tempSelectedAvatar, setTempSelectedAvatar] = useState()

  const _setSelectedAvatar = avatar => {
    resetAvatarResponse(avatar)
    setSelectedAvatar(avatar)
    navigate('/intake')
  }

  useEffect(() => {
    if(!initialized && selectedAvatar) {
      initialized = true
      resetAvatarResponse(selectedAvatar)
    }
  }, [selectedAvatar]);

  return (
    <div className="h-screen overflow-y-scroll flex flex-col justify-start items-center">
      <div className="text-blue-800 font-extrabold text-2xl border-yellow-300 border-2 bg-amber-100 rounded-xl p-2 m-1">Pick your new friend</div>
      <button
        className={`md:fixed top-1 right-1 text-amber-100 font-extrabold text-2xl border-yellow-300 border-2 bg-blue-500 rounded-xl p-2 m-1 ${tempSelectedAvatar ? 'block' : 'hidden'}`}
        onClick={()=>_setSelectedAvatar(tempSelectedAvatar)}
      >
        <div className="flex flex-row items-center">Done <FaArrowRight/></div>
      </button>
      <div className="flex flex-row flex-wrap justify-center items-start">
        {avatars.map(avatar =>
          <AvatarPickerItem
            avatar={avatar}
            onClick={()=>setTempSelectedAvatar(avatar)}
            selected={tempSelectedAvatar && tempSelectedAvatar.id===avatar.id}
            key={avatar.id}
          />
        )}
      </div>
    </div>
  );

};
