import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {useHistory} from 'react-router-dom'
import { Table } from '../components/Table/table'

export const CreatePage = () => {
  // const history = useHistory()
  const auth = useContext(AuthContext)
  const {request} = useHttp()
  const [file, setFile] = useState(null);
  const [table, setTable] = useState([]);
  const {token} = useContext(AuthContext)

  useEffect(() => {
    window.M.updateTextFields()
  }, [])



  const changeHandler = (e) => {
    setFile(e.currentTarget.files[0]);  
  };

  const submitHandler = async(e) => {
    //e.preventDefault();
    const formData = new FormData();
    formData.append('file', file, file.name);
    
    axios.post('/api/table/upload', formData, {headers: {
      Authorization: `Bearer ${token}`
    }
    }).then((res) => {
      setTable(res.data);
    });
    
   
    //history.push(`/detail/${data.link._id}`)
  };

  return (
    <>
    <div className="row">
      <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
 
        <div className="file-field input-field">
          <div className="btn">
            <span>File</span>
            <input type="file" 
              onChange={changeHandler}
            />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
          <div className="file-field input-field">
            <div className="btn" onClick={submitHandler}>
            upload
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <Table data={table} />
    </div>
    </>
  )
}
