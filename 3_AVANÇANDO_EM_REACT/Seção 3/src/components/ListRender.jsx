import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Le", "an", "drinho"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Leandro", age: 22},
        {id: 2, name: "Fábio", age: 30},
        {id: 3, name: "Rafaela", age: 250}
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        //gera um número aleatório de 0 a 3

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Deletar item aleatório</button>
    </div>
  )
}

export default ListRender