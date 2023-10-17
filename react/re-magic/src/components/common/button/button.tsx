import { useMemo } from "react";
import styled from "styled-components";

type Props = {
  onClick: () => void;
  disabled?: boolean;
  disabledStyle?: "checked";
  buttonType: "forward" | "forward-reverse" | "back" | "delete" | "stress" | "powerful" | "powerful-reverse" | "powerful-red" | "powerful-red-reverse" | "powerful-red-white-shadow" | "default-red" | "default-red-white-shadow" | "default-red-red-shadow" | "default-powerful" | "checked";
  transform?: "parallelogram"
  label: string | JSX.Element;
  width?: number;
};

const Button = (props: Props) => {

  const components = useMemo(() => {
    return (
      <ButtonStyle>
        <div 
          onClick={props.disabled ? () => {} : () => {
            props.onClick();
          }}
          className={props.disabled ? props.disabledStyle || 'disabled' : props.buttonType}
          style={{
            width: props.width || "120px",
          }}
        >
          {props.buttonType === "checked" ? <div className="checked-icon">✔︎</div> : <></>}
            {props.label}
        </div>
      </ButtonStyle>
    );
  }, [props]);

  return components;
};

const ButtonStyle = styled.div`
  div {
    position: relative;
    padding: 0 10px 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: auto;
    height: 45px;
    font-size: 14px;
    cursor: pointer;
  }
  .parallelogram {
    padding: 0 20px 0 20px;
    clip-path: polygon(0% 100%, 10% 0%, 100% 0%, 90% 100%);
  }
  .disabled {
    background-color: gray;
    cursor: default;
  }
  .checked {
    position: relative;
    background-color: white;
    border: 3px solid red;
    color: red;
    .checked-icon {
      position: absolute;
      left: -20px;
      top: -10px;
      font-size: 60px;
    }
  }
  .delete {
    cursor: pointer;
    color: white;
    background-color: red;
    &:hover {
      color: red;
      background: white;
    }
  }
  .forward {
    cursor: pointer;
    color: white;
    background-color: black;
    &:hover {
      opacity: 70%;
    }
  }
  .forward-reverse {
    cursor: pointer;
    color: black;
    background-color: white;
    &:hover{
      opacity: 70%;
    }
  }
  .powerful {
    cursor: pointer;
    color: white;
    background-color: black;
    &:hover {
      color: black;
      background-color: white;
      border: 3px solid black;
    }
  }
  .powerful-red {
    cursor: pointer;
    color: white;
    background-color: black;
    &:hover {
      box-shadow: 5px 5px 0 0 black;
      color: white;
      background-color: red;
    }
  }
  .powerful-red-white-shadow {
    cursor: pointer;
    color: black;
    background-color: white;
    &:hover {
      box-shadow: 5px 5px 0 0 white;
      color: white;
      background-color: red;
    }
  }
  .powerful-reverse {
    cursor: pointer;
    color: black;
    background-color: white;
    &:hover {
      color: white;
      background-color: black;
      border: 3px solid white;
    }
  }
  .powerful-red-reverse {
    cursor: pointer;
    color: black;
    background-color: white;
    &:hover {
      box-shadow: 5px 5px 0 0 black;
      color: white;
      background-color: red;
    }
  }
  .default-red {
    box-shadow: 5px 5px 0 0 black;
    color: white;
    background-color: red;
  }

  .default-red-white-shadow {
    box-shadow: 5px 5px 0 0 white;
    color: white;
    background-color: red;
  }


  .default-red-red-shadow {
    box-shadow: 5px 5px 0 0 black;
    color: white;
    background-color: red;
    &:hover {
      box-shadow: 5px 5px 0 0 red;
      color: black;
      background-color: white;
    }
  }
  .default-powerful {
    box-shadow: 5px 5px 0 0 black;
      color: black;
      background-color: white;
  }
  .back {
    cursor: pointer;
    color: white;
    background-color: #808080;
    &:hover {
      color: #808080;
      background-color: white;
    }
  }
  .stress {
    cursor: pointer;
    color: white;
    background-color: red;
    &:hover {
      color: red;
      background-color: white;
    }
  }
`;

export default Button;
