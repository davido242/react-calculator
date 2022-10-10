import {React, useState} from "react";

const App = () => {
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState(0);

  const display = (symbol) => {
    setExpression(prev => prev + symbol);
    if(expression[expression.length-1] === "=") {
      if(/[0-9]/.test(symbol)) {
        setExpression(symbol)
      }else {
        setExpression(answer + symbol);
      }
    }
  };

  const calculate = () => {
    setAnswer(eval(expression));
    setExpression((prev) => prev + "=");
  };

  const allClear = () => {
    setExpression("");
    setAnswer(0);
  };
 
  const clear = () => {
    setExpression((prev) => prev.split('').slice(0, prev.length - 1).join(''));
    setAnswer('0');
  };


  return (
    <div className="container">
     <div className="grid">
      <div id="display" className="dis">
        <input type="text" value={expression}/>
        <div className="total">{answer}</div>
      </div>
      <div id="allClear" onClick={allClear} className="padButton ac tomatoe">AC</div>
      <div id="clear" onClick={clear} className="padButton c tomatoe">C</div>
      <div id="divide" onClick={() => display("/")} className="padButton div">/</div>
      <div id="multiply" onClick={() => display("*")} className="padButton times">X</div>
      <div id="seven" onClick={() => display("7")} className="padButton dark-grey seven">7</div>
      <div id="eight" onClick={() => display("8")} className="padButton dark-grey eight">8</div>
      <div id="nine" onClick={() => display("9")} className="padButton dark-grey nine">9</div>
      <div id="subtract" onClick={() => display("-")} className="padButton minus">-</div>
      <div id="four" onClick={() => display("4")} className="padButton dark-grey four">4</div>
      <div id="five" onClick={() => display("5")} className="padButton dark-grey five">5</div>
      <div id="six" onClick={() => display("6")} className="padButton dark-grey six">6</div>
      <div id="add" onClick={() => display("+")} className="padButton plus">+</div>
      <div id="one" onClick={() => display("1")} className="padButton dark-grey one">1</div>
      <div id="two" onClick={() => display("2")} className="padButton dark-grey two">2</div>
      <div id="three" onClick={() => display("3")} className="padButton dark-grey three">3</div>
      <div id="equals" onClick={() => calculate("=")} className="padButton equal blue">=</div>
      <div id="zero" onClick={() => display("0")} className="padButton dark-grey zero">0</div>
      <div id="decimal" onClick={() => display(".")} className="padButton dark-grey dot">.</div>
     </div>
    </div>
  );
}

export default App;
