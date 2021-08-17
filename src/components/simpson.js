export default function Simpson({name, surname, age, info, photo}) {

    return(
        <div className={'Simpson'}>
            <h2>{name} {surname}, age: {age}</h2>
            <div>
                <img src={photo} alt="simpson"/>
            </div>
            <p>{info}</p>
        </div>
    );
}
