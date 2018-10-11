import React from 'react';

const Randomizer = (PassedComponent) => {

    const color = ['pink', 'red', 'blue', 'black', 'purple'];
    const classN =  color[Math.floor(Math.random()*5)] + "-text";

    return(props) => {


        return(

        <div className={classN}>
        <PassedComponent {...props} />
        </div>

        )

    }


}

export default Randomizer;
