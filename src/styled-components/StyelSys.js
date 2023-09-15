import styled from "styled-components";
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri";

export const Container = styled.div`
  border: 2px solid #8db2e3;
  background-color: #ffff;
  padding: 7px 20px 20px 20px;
 
  margin-bottom: 20px;
`;

export const H2 = styled.h2``;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin: 20px 15px;
`;

export const Text = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-right: 3px;
`;

export const Mode = styled.select`
  font-size: 16px;
  border: 2px solid #ccc;
  background-color: #ccc;
  border-radius: 4px;
  width: 120px;
  min-height: 2em;
  outline: none;
`;

export const Input = styled.input`
  padding: 4px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
`;

export const RadioInput = styled.input.attrs({ type: "radio" })`
  margin-right: -2px; // Adjust the spacing between the radio button and label
  padding: 4px;
  font-size: 18px;
  font-weight: 700;
`;

// Styled Label
export const Label = styled.label`
  cursor: pointer;
  font-size: 16px;
  margin-right: 15px;
`;
//list-box
export const Field = styled.fieldset`
  width: 100%;
  margin: 3px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
export const InputField = styled.div`
  width: 100%;
  margin: 20px 0;
`;
export const OutputField = styled.div`
  width: 100%;
  margin: 20px 0;
`;
export const Legend = styled.legend`
  font-size: 28px;
  font-weight: bold;
`;

export const ListBox = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow-y: auto;
  font-size: 16px;
  font-family: inherit;
  .hidden-checkbox input[type="checkbox"] {
    display: none; /* Hide the checkbox */
  }
`;

export const ListItem = styled.label`
  display: block;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0; /* Change to your desired hover background color */
    cursor: pointer; /* Change to the cursor style you prefer */
  }
`;

export const Checkbox = styled.input`
  margin-right: 8px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 40px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const Output = styled.pre`
  width: 100%;

  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  font-family: inherit;
  white-space: pre-line;
`;

export const ArrowField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  gap: 20px;
`;

export const StyledArrowLeft = styled(RiArrowLeftDoubleLine)`
  color: #4c7dbf;
  height: 40px;
  width: 60px;
  cursor: pointer;
`;
export const StyledArrowRight = styled(RiArrowRightDoubleLine)`
  color: #4c7dbf;
  height: 40px;
  width: 60px;
  cursor: pointer;
`;
export const ButtonSave = styled.div`
  display: flex;
  justify-content: flex-end;

  margin: 20px 10px 0 0;

`;