import React, { useReducer } from "react";
import axios from "axios";
import {useState, useEffect} from "react";
import reducer from "../../utils/reducer";

export const ProjectInfo= (props) => {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    });

    const fetchProject = async () => {
        dispatch({type : 'LOADING'});
        try {
            const response = await axios.get(
                'http://localhost:3001/api/project', {params: {title: props.title}}
            );
            dispatch({type:'SUCCESS', data:response.data});
        } catch (e) {
            dispatch({type :'ERROR', error:e})
        }
    };

    useEffect(()=> {
        fetchProject(props.title);
    },[]);

    const {loading, data:projects, error } = state;

    if (loading) console.log("loading..");
    if (error) return <div>에러가 발생했습니다</div>;
    if (!projects) return <div> no data </div>;

    return( 
        <>
            {projects.map(project => (
                <li key = {project.id}>
                    {project.title}
                </li>
            ))}
        </>
    )

}