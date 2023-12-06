import { useRef } from "react";
import "./style.css";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="input" onSubmit={(e) =>{ 
      handleAdd(e)
      inputRef.current?.blur()
      
      }}>
      <input
        type="input"
        ref={inputRef}
        className="input__box"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
