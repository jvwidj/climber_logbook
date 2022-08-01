import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"

import { Container } from 'react-bootstrap';
import { deleteSession, getSessionList } from '../Redux/SessionSlice';
import { deleteBySession } from '../Redux/SessionClimbSlice';
import { useNavigate } from 'react-router-dom';
import { getSelectedClimb } from '../Redux/SelectedSessionClimb';
import { addSelectedSession } from '../Redux/SelectedSession';

const ListSession = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {sessionList} = useSelector((store) => store.session);
    //const dispatch = useDispatch(); //use dispatch for edit, delete, and add notes
    //console.log(sessionList)
    
    //Delete button
    async function deleteSessionButton(id) {
        try {
            //TODO: need to dispatch(deleteSessionClimb) to avoid error
            dispatch(deleteBySession(id))
            .then(() => {
                dispatch(deleteSession(id))
                .then(() => {
                    dispatch(getSessionList())
                })
            })

        } catch (error) {
            console.log(error)
        }
    }

    //Detail Button
    async function detailButton(id) {
        try {
            dispatch(getSelectedClimb(id))
            .then(() => {
                navigate("/session_detail")
            })
        } catch (error) {
            console.log(error)
        }
    }


    //No item in the session list
    if(!sessionList) {
        return (
            <h4 className='text-center my-5'>Session is empty</h4>
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
                <th scope="col">id</th>
                {/* <th scope="col">Description</th> */}
                <th scope="col">climb</th>
                <th scope="col">See Detail</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            {sessionList.map(session => (
                <tr key={session.id}>
                {/* <td>{session.date.slice(0,10)}</td> */}
                <td>{session.id}</td>
                {/* <td>{session.description}</td> */}
                <td>TODO</td>
                <td>
                    <button className='btn btn-secondary btn-sm'
                        onClick={() => {
                            dispatch(addSelectedSession(session))
                            detailButton(session.id)}}
                    >
                    Detail
                    </button>
                </td>
                <td>
                    {/* <button className='btn btn-danger'
                    onClick={() => deleteTodo(todo.id)}>
                    Delete
                    </button> */}
                    <button className='btn btn-danger btn-sm'
                        onClick={() => {deleteSessionButton(session.id)}}
                    >
                    Delete
                    </button>
                    
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