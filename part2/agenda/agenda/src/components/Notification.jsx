

const Notification = ({message}) => {

    const notification = {
        color: 'green',
        background: 'lightgray',
        fontsize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if (message === null){
        return null
    }
    return (
        <div style={notification}>
            {message}
        </div>
    )
}

export default Notification