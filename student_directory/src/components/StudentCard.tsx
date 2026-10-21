type StudentCardProps = {
    name: string;
    department: string;
    email:string;
};

export default function StudentCard(props: StudentCardProps){
    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.department}</p>
            <p>{props.email}</p>
        </div>

    )
}