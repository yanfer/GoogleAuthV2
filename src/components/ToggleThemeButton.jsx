//import { PiMoonStars, PiSun } from 'react-icons/pi';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { Button } from 'antd';

function ToggleThemeButton({ darkTheme, toggleTheme }) {
  return (
    <div className="toggle-theme-btn">
      <Button onClick={toggleTheme}>
        {darkTheme ? <HiOutlineSun className="white" /> : <HiOutlineMoon />}
      </Button>
    </div>
  );
}

export default ToggleThemeButton;
