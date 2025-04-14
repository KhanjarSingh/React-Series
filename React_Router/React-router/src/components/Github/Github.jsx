
import {useLoaderData} from "react-router-dom";


export default function Github() {
    const name =useLoaderData()
    // const { username } = useParams();
    // const [name , setName] = useState("");
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/${username}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setName(data)
    // })},[username])

    return (

    <div className="text-center m-4 bg-gray-700 text-white text-3xl p-5">GitHub Followes: {name.followers}</div>
    )

}
