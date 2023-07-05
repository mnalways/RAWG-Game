import { UseGenre } from "../../Hooks/UseGenere";

export const GenereList = () => {
    const {data} = UseGenre();
    return (
        <ul>
            {data.map((gen) => <li key={gen.name}>{gen.name}</li>)}
        </ul>
    );
}