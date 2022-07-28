import React from 'react'
import { useSelector } from "react-redux"

import { Container } from 'react-bootstrap';

const ListSession = () => {
    const {sessionList} = useSelector((store) => store.session);
    //const dispatch = useDispatch(); //use dispatch for edit, delete, and add notes
    //console.log(sessionList)

    //No item in the session list
    if(!sessionList) {
        return (
            <h4 classname='text-center my-5'>Session is empty</h4>
        )
    }

    //List all items in the session list
    return (
        <div>
        <h4 className='mt-3'>Activity Log</h4>
        <Container className='d-flex justify-content-center'>

        
        <table className="table mt-3">
            <thead>
            <tr>
                {/* <th scope="col">Date</th> */}
                <th scope="col">Location</th>
                {/* <th scope="col">Description</th> */}
                <th scope="col"># of CLimb</th>
                <th scope="col">See Detail</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            {sessionList.map(session => (
                <tr key={session.id}>
                {/* <td>{session.date.slice(0,10)}</td> */}
                <td>Location</td>
                {/* <td>{session.description}</td> */}
                <td>#of Climb</td>
                <td>
                    <button>See Detail</button>
                </td>
                <td>
                    {/* <button className='btn btn-danger'
                    onClick={() => deleteTodo(todo.id)}>
                    Delete
                    </button> */}
                    <button>Delete</button>
                    
                    </td>
            </tr>
            ))
            }
            </tbody>
        </table>
        </Container>
        </div>
    )
}

//Export component
export default ListSession