import styled, { css } from 'styled-components';
import { MdSettingsSuggest } from 'react-icons/md';
import { RiPlayList2Fill } from 'react-icons/ri';
import { FaHome } from 'react-icons/fa';
import { CgPlayListCheck} from 'react-icons/cg';
import { FiLogOut } from 'react-icons/fi';
import {FcDataConfiguration} from 'react-icons/fc'
import {VscDebugStart} from 'react-icons/vsc'
import {AiFillTool} from 'react-icons/ai'


const disabledStyles = css`
  pointer-events: none; /* Disable pointer events */
  

  & svg {
    color: grey;
  }
  /* Change text color to grey */
  & p {
    color: grey;
  }
`;


export const MenuContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #ffff;
  padding:0 30px;
  
`;
export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
 
  background-color:${(props) => (props.active ? '#E6EEFA' : 'inherit')};
  font-weight:${(props) => (props.active ? 'bold' : '400')};
  border-bottom:${(props) => (props.active ? '3px solid #E6EEFA' : 'none')};
  border-top:${(props) => (props.active ? '2px solid #8DB2E3' : '')};
  border-right:${(props) => (props.active ? '2px solid #8DB2E3' : '')};
  border:${(props) => (props.active ? '2px solid #8DB2E3' : '')};
   /* Apply disabled styles if the item is disabled */
   ${(props) =>
    props.disabled &&
    css`
      ${disabledStyles}
    `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
 
  /* margin-bottom:-0.4px; */
  z-index:222;

 
  

  padding: 0px 55px;
 
  /* box-shadow: 0px 1px 0px 0px white; */


 
 
  
`;


export const StyledAiTwotoneTool= styled(AiFillTool)`
  color: #4C7DBF;
  width: 50px;
  height: 25px;
`;



export const StyledCgPlayListCheck = styled(CgPlayListCheck)`
  color: #4C7DBF;
  width: 50px;
  height: 25px;
`;

export const StyledVscDebugStart = styled(VscDebugStart)`
  color: #4C7DBF;
  width: 50px;
  height: 25px;
`;


export const StyledFiLogOut = styled(FiLogOut)`
  color: #4C7DBF;
  width: 50px;
  height: 25px;
`;
export const StyledMdSettingsSuggest = styled(MdSettingsSuggest)`
  color: #4C7DBF;
  width: 50px;
  height: 25px;
`;
export const StyledFaHome = styled(FaHome)`
  color: #4C7DBF;
  width: 50px;
  height: 25px;
`;

export const Textmenu = styled.p`
  color: #15428B;
  
  font-size: 14px;
  height: 10px;
 
`;
