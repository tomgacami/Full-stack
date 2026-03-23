
const Course = ({course}) => {
    return (
        <div>
            <Header title={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

const Total = ({parts}) => {

    const totalExercises = parts.reduce((total, actual) => total + actual.exercises, 0)
    return(
        <p><strong>Total of {totalExercises} exercises</strong></p>
    )

}

const Content = ({parts}) => {
    return(
        <div>
            {parts.map(part =>
                <Part key={part.id} part={part}/>
            )}
        </div>
    )
}

const Part = ({part}) => {
    return(
        <p>{part.name + ' '} {part.exercises}</p>
    )
}

const Header = ({title}) =>{
    return(
        <h1>{title}</h1>
    )
}

export default Course