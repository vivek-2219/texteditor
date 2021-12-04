import React from 'react'

export default function Alert(props) {
    return (
        <>
            <div className={`alert alert-${props.mode} alert-dismissible fade show`} style={{display: props.display, position: 'absolute', width: '100vw'}} role="alert">
                <strong>{props.alertType}</strong> : {props.alert}
            </div>
        </>
    )
}
