import { useEffect, useState } from "react";
import "./Counter.css";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0,
  });
  console.log(inView);
  useEffect(() => {
    if (inView === true) {
      let interval = setInterval(() => {
        setCount(count + 20);
      }, 20);
      let interval2 = setInterval(() => {
        setCount2(count2 + 20);
      }, 20);
      let interval3 = setInterval(() => {
        setCount3(count3 + 20);
      }, 20);
      let interval4 = setInterval(() => {
        setCount4(count4 + 20);
      }, 20);

      if (count4 === 4000) {
        clearInterval(interval4);
      }
      if (count === 6000) {
        clearInterval(interval);
      }
      if (count3 === 7500) {
        clearInterval(interval3);
      }
      if (count2 === 8500) {
        clearInterval(interval2);
      }

      return () => {
        clearInterval(interval);
        clearInterval(interval2);
        clearInterval(interval3);
        clearInterval(interval4);
      };
    }
  });

  return (
    <div ref={ref} className="bg-img">
    
      <div className="backgroundimg">
        <p className="vision-text1">
          SUCCESS IS NOT FINAL; FAILURE IS NOT A FATAL: IT IS THE COURAGE TO
          CONTINUE THAT COUNTS.
        </p>
        <div className="client">
          <div className="amount1">
            <div class="counter-numbers">
              {count}+
            </div>
            <div className="b2b counter__Heading">B2B</div>
          </div>
          <div className="amount2">
            <div  class="counter-numbers">
              {count2}+
            </div>
            <div className="b2b counter__Heading">B2C</div>
          </div>
          <div className="amount3">
            <div data-number="8000" class="counter-numbers">
              {count3}+
            </div>
            <div className="b2b counter__Heading">SUPPLIER</div>
          </div>
          <div className="amount4">
            <div data-number="7000" class="counter-numbers">
              {count4}+
            </div>
            <div className="b2b counter__Heading">DISTRIBUTER</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;