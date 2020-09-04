import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {Loader} from '../components/Loader'
import { Table } from '../components/Table/table'

export const LinksPage = () => {
  const [links, setLinks] = useState([])
  const {loading, request} = useHttp()
  const {token} = useContext(AuthContext)

  const fetchLinks = useCallback(async () => {
    try {
      const reports = await request('/api/table/', 'GET', null, {
        Authorization: `Bearer ${token}`
      })
   
      setLinks(reports[0].reports)
    } catch (e) {}
  }, [token, request])

  useEffect(() => {
    fetchLinks()
  }, [fetchLinks])

  if (loading) {
    return <Loader/>
  }

  return (
    <>
      {!loading && <Table data={links} />}
    </>
  )
}
