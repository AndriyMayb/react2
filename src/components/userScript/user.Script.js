export default function User (props) {
const {name,age,isMarried} = props
    return(
        <div>
            <h1>{name}</h1>
            <div>
                {age} {isMarried.toString()}
            </div>
        </div>
    )
}