import React from 'react'
import ResumeData from './ResumeData'
import ResummedAta from './ResummedAta'

const Resume = () => {
  return (
    <div className='resume_wrapper'>
      <h2>PROFESSHIONAL SUMMARY</h2>
      <div className='res_des'>
        <div className='res_cont'>
          <p> Seeking a beginner role to enhance and explore my technical knowledge
            gained at Chandra Sekhar Azad University of agriculture and technology (Kanpur) in the 
            last four years and an year of my professional exeperience.<br />
            I hold a B.Tech degree
            from Baba Sahab Dr. Bhim Rao Ambedkar college of agricultural engineering and technology,
            Etawah. And won the quiz challenge held at the campus.<br />
            I have done an internship in Pepcoding.com which is an Ed-tech start-up where I have learn
            t the fundamentals of Web development. <br />
            after that done a job as a front-end developer in socialpubli.co.in by using technology l
            ike React. <br />
            Right Now , I am working as a Associate Software Engineer in Luminoguru.com which is a Mohali,Punjab
            based company .
            Here I work on React collaborating with backend team.  </p>
        </div>
        <div className='res_lang'>
          <h3>Language Knowledge</h3>
          <ul>
            <li>
              ENGLISH
            </li>
            <li>
              HINDI
            </li>
          </ul>
        </div>
      </div>
      <div className='work_edu_wrapper'>
        <div className='title_wrapper'>
          <div className='work_title'>
            <h3>WORK HISTORY</h3>
          </div>
          <div className='education_tile'>
            <h3>EDUCATION</h3>
          </div>
        </div>
        <div className='grid_item'>
          {
            ResumeData.map((val, ind) => {
              return (
                <ResummedAta
                  key={ind}
                  Name={val.Name}
                  button={val.button}
                  subtitle={val.subtitle}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Resume
