// import logo from './logo.svg';
import './App.css';
import React, { Fragment, useState } from 'react';
import First from './component/first'

function App() {
  const css = { display: 'flex', direction: "ltr" };
  const [first, setFirst] = useState('ajay');
  const [sec, setSec] = useState(false);

  React.useEffect(() => {
    console.log("dfvdflnn");
    setTimeout(() => {
      setSec(true)
    }, 2500);
  }, [sec]);
  console.log(sec, "sec");
  return (
    <Fragment>
      Hi Dekh le bhai meri value {sec}
      <font style={styles.section}> Hi . Welcome Here</font>
      <div style={css} className='main_box'>
        {!sec ? <>
          <First keyName={first} setfirst={setFirst} value={first} />
          <First />
          <First />
        </>
          : ""}

      </div>
    </Fragment>
  );
}
const styles = {
  section: {
    fontFamily: "-apple-system",
    fontSize: "1rem",
    fontWeight: 1.5,
    lineHeight: 1.5,
    color: "#292b2c",
    backgroundColor: "#fff",
    padding: "0 2em"
  },
}
export default App;
