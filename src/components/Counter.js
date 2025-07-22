import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
const Counter = ({ end, decimals }) => {
    return (
    <CountUp end={end} duration={2} decimals={decimals || 0}>
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
        </ReactVisibilitySensor>
      )}
    </CountUp>
  ); 
};

export default Counter;
