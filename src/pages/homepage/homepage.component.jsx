import React from 'react';
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component';

const Homepage = (props) => (
  <div className='homepage'>
    {/* <button onClick={() => props.history.push('/hat')}>Hats</button><br /> */}
    <Directory />
  </div>
)

export default Homepage