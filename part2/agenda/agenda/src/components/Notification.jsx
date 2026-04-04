

const Notification = ({notification}) => {

    const success = {
        color: 'green',
        background: 'lightgray',
        fontsize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const error = {
        color: 'red',
        background: 'lightgrey',
        fontsize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if (!notification){
        return null
    } else if (notification.type === 'success'){
        return(
            <div style={success}>
                {notification.message}
            </div>
        )
    } else if (notification.type === 'error'){
        return (
            <div style={error}>
                {notification.message}
            </div>
        )
    }

}

export default Notification