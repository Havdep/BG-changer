import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState();

  const passRef = useRef(null);

  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str = str + "0123456789";
    if (charAllow) str = str + "!@#$%^&*<>|~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  const copyHandle = useCallback(() => {
    passRef.current?.select();
    //select a limited text
    const selPas = passRef.current?.setSelectionRange(0, 44);
    window.navigator.clipboard.writeText(password);
  });

  useEffect(() => {
    passGen();
  }, [length, charAllow, numAllow, passGen]);

  return (
    <>
      <div className=" flex-col min-w-full h-max m-3 p-14 rounded-[80px] bg-blue-700 ">
        <h1 className="p-4 pb-8 font-bold">Password Generator</h1>
        <div className="m-2 p-4 text-2xl">
          <input
            type="text"
            name=""
            id=""
            ref={passRef}
            placeholder="Password"
            value={password}
            readOnly
          />
          <button className="ml-2 hover:bg-slate-800 " onClick={copyHandle}>
            COPY
          </button>
        </div>
        <div className="text-lg">
          <input
            type="range"
            min={8}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="">Length:{length}</label>
        </div>
        <div className="text-lg">
          <input
            type="checkbox"
            defaultChecked={numAllow}
            id="numberInput"
            onClick={() => {
              setNumAllow((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="text-lg">
          <input
            type="checkbox"
            defaultChecked={charAllow}
            id="charInput"
            onClick={() => {
              setCharAllow((prev) => !prev);
            }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
