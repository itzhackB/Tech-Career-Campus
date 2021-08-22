import React, { useEffect, useState } from 'react'
import { fetchSyllabus } from '../../../FetchFunctions/FetchFunctions'
import SyllabusTimeline from '../../Features/SyllabusTimeline/SyllabusTimeline'

const SyllabusComponent = () => {
  const [syllabusData, setSyllabusData] = useState()

  useEffect(() => {

    fetchSyllabus()
      .then(data => {
        setSyllabusData(data.data[0]);
      })
  }, [])

  return (
    <>
      <h1>סילבוס</h1>
      <SyllabusTimeline syllabusData={syllabusData} role={"admin"} />

    </>
  )
};
export default SyllabusComponent;