// TODO: Refactor into multiple components
import './App.css';
import { BiCog } from "react-icons/bi";
import { FaGoogleDrive, FaFolder } from "react-icons/fa";
import { CgGoogleTasks } from "react-icons/cg";
import { MdLaptopWindows } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { AiOutlineStar, AiOutlineMinus } from "react-icons/ai";
import { SiGooglecalendar, SiGooglekeep, SiGooglesheets } from "react-icons/si";
import { RiHardDrive2Line, RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlinePlus, AiOutlineQuestionCircle, AiOutlineArrowUp } from "react-icons/ai";
import { BsClock, BsCloud, BsFileSpreadsheet, BsCheckCircle, BsGrid3X3Gap } from "react-icons/bs";
import { IoMdArrowDropright, IoMdArrowDropdown, IoMdInformationCircleOutline } from "react-icons/io";

function App () {
  return (
    <div className="window">
      {/* Top bar */ }
      <div className="topbar">
        <div className="logo">
          <FaGoogleDrive className="icon-logo" />
          <h1>Drive</h1>
        </div>
        <div>
          <input type="text" placeholder="Search in Drive" />
        </div>
        <div className="topbar-icons">
          <BsCheckCircle />
          <AiOutlineQuestionCircle />
          <BiCog />
          <BsGrid3X3Gap />
          <div>
            <img className="profile" src="https://pbs.twimg.com/profile_images/590032796267085824/9zWq4o1U_400x400.jpg" alt="profile-" />
          </div>
        </div>
      </div>

      {/* Side bar */ }
      <div className="flow-right">
        <div className="sidebar">
          <button className="button-round"><AiOutlinePlus className="icon" />New</button>
          <ul>
            <li className="active"><IoMdArrowDropright className="icon" /><RiHardDrive2Line className="icon" />My Drive</li>
            <li><IoMdArrowDropright className="icon" /><MdLaptopWindows className="icon" />Computers</li>
            <li><IoPeopleOutline className="icon" />Shared with me</li>
            <li><BsClock className="icon" />Recent</li>
            <li><AiOutlineStar className="icon" />Starred</li>
            <li><RiDeleteBin6Line className="icon" />Bin</li>
          </ul>
          <hr className="break" />
          <ul>
            <li><BsCloud className="icon" />Storage</li>
          </ul>
          <div className="progress-bar">
            <div className="progress-bar-inner"></div>
          </div>
          <p>8.1GB of 17GB used</p>
          <button className="buy-button">Buy storage</button>
        </div>

        {/* Main section */ }
        <div className="main">
          <div className="drive-bar">

            <div className="drive-left">
              My Drive
              <IoMdArrowDropdown />
            </div>

            <div className="drive-right">
              <BsFileSpreadsheet />
              <IoMdInformationCircleOutline />
            </div>
          </div>

          <div className="main-nav">
            <div>Folders</div>
            <div>Name <AiOutlineArrowUp /></div>
          </div>

          <div className="main-top-folders">
            <div className="card-short">
              <FaFolder className="icon" />
              Folder One
            </div>

            <div className="card-short">
              <FaFolder className="icon" />
              Folder Two
            </div>

            <div className="card-short">
              <FaFolder className="icon" />
              Folder Three
            </div>

            <div className="card-short">
              <FaFolder className="icon" />
              Folder Four
            </div>

            <div className="card-short">
              <FaFolder className="icon" />
              Folder Five
            </div>

            <div className="card-short">
              <FaFolder className="icon" />
              Folder Six
            </div>

            <div className="card-short">
              <FaFolder className="icon" />
              Folder Seven
            </div>

            <div className="card-short">
              <FaFolder className="icon" />
              Folder Eight
            </div>
          </div>

          <div className="main-nav">
            <div>Files</div>
          </div>
          <div className="main-top-folders">
            <div className="card-full">
              <div>
                <SiGooglesheets className="icon" />
                File One
              </div>
            </div>

            <div className="card-full">
              <div>
                <SiGooglesheets className="icon" />
                File Two
              </div>
            </div>

            <div className="card-full">
              <div>
                <SiGooglesheets className="icon" />
                File Three
              </div>
            </div>

            <div className="card-full">
              <div>
                <SiGooglesheets className="icon" />
                File Four
              </div>
            </div>

            <div className="card-full">
              <div>
                <SiGooglesheets className="icon" />
                File Five
              </div>
            </div>

            <div className="card-full">
              <div>
                <SiGooglesheets className="icon" />
                File Six
              </div>
            </div>

            <div className="card-full">
              <div>
                <SiGooglesheets className="icon" />
                File Seven
              </div>
            </div>

            <div className="card-full">
              <div>
                <SiGooglesheets className="icon" />
                File Eight
              </div>
            </div>
          </div>
        </div>

        {/* Rightbar */ }
        <div className="rightbar-container">
          <div className="rightbar">
            <SiGooglecalendar />
            <SiGooglekeep />
            <CgGoogleTasks />
            <AiOutlineMinus />
            <AiOutlinePlus />
          </div>
          <div className="rightbar-bottom">
            <IoMdArrowDropright className="rightbar-icon" />
          </div>
        </div>
      </div>

      {/* Toast */ }
      <div className="rightbar-container"></div>
      <div className="toast">
        <p>Get notifications on your computer for shared files and important events.</p>
        <button>TURN ON</button>
      </div>
    </div >
  );
}

export default App;