import React, { memo } from 'react'

export const ShowIncrement = memo(({increment}) => {
    console.log("genera");
    return (
        <button className="btn btn-primary" onClick={() => {
            increment(7);
        }}>
            Incrementar
        </button>
    )
})
