import React from 'react';

const Opportunity = (props) => {

    return (
        <td className="Opportunity">
            <h5>
                <a href={props.link}>
                    {props.opportunity}
                </a>
            </h5>
            <img
                src={props.image}
                alt="logo"
                width="80"
            />
            <h5>{props.description}</h5>
        </td>
    )
}

export default Opportunity;