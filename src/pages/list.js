import { InputList } from '../component/inputList';
import '../style/style.scss'


export function UserList({list, onDelete, setData}) {



    return(
        <>
            <InputList
            AddData={(firstName, lastName, email, age) => {
            setData([
                ...list,
                {
                firstName: firstName,
                lastName: lastName,
                Email: email,
                age: age,
                id: list?.length + 1,
                },
            ]);
            }}
        />


            <div className="user_list">
            <table className='table'>
                <thead>
                    <tr >
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>User Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((elem, i) => (
                            <tr key={elem.id} style={{background:'#F2F2F2'}}>
                                <td>{elem.firstName}</td>
                                <td>{elem.lastName}</td>
                                <td>{elem.Email}</td>
                                <td>{elem.age}</td>
                                <td style={{display:'flex', gap: 5 }}>
                                    <button className='blueButton'>Edit</button>
                                    <button className='redButton' onClick={() => onDelete(elem.id)}>Delete</button>
                                    <button className='blueButton'>View</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        </>
    )
}