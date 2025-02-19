import { FaComment, FaKeyboard } from 'react-icons/fa';
import {ModeToggleBtn} from "./ModeToggleBtn.jsx";

export const SpeechTypeToggle = ({inputMode, setMode}) => {

  return (
    <div className="flex-shrink-0 flex justify-around p-0.5 md:ml-5 md:mr-1 flex-row">
      <ModeToggleBtn onClick={()=>setMode('speech')} active={inputMode==='speech'} icon={<FaComment/>} text='Talk' />
      <ModeToggleBtn onClick={()=>setMode('text')} active={inputMode==='text'} icon={<FaKeyboard/>} text='Type' />
    </div>
  )

};
