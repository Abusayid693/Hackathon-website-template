import React from "react";
import Typed from 'react-typed';
import "./typing.css"



export default function MytypedComponent(){
    return (
        <div className="typing-div">
         <span>&lt;&quot;</span>
            <Typed
                strings={[
                'A Developer',
                'A Researcher',
                'AI Enthusiest'
                
                ]}
                typeSpeed={80}
                loop
            />
          <span>&quot;/&gt;</span>
            

        
        </div>
    );
}