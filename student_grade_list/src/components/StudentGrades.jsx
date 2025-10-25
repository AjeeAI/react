import { useState } from "react"
import "../App.css"

function StudentGrades(){
    const [studentList, setStudentList] = useState("");
    const studentDetails = [
        {name: "Adesoji Ajijolaoluwa", score: 90, subject: "React"},
        {name: "Felicia Adefarasin", score: 40, subject: "Python Basics"},
        {name: "Adejare Evans", score: 79, subject: "Laboratory Technology"},
        {name: "Adeoye Enoch", score: 78, subject: "Verbal Reasoning"}

    ]

function getPassedLength(){
        let count = 0;
        studentDetails.forEach((student) => {
            if (student.score >= 50){
                count ++;
            }
        })

        return count;
    }
const passedLength = getPassedLength();

    console.log("The number of students that passed is", passedLength);
    function filterPassed(){
        {studentDetails.filter(student => student.score >= 50
        )
        .map(student => {
            <div key={student.name} className="card"> 
                <p>{student.name} - {student.subject}: {student.score} </p>

                <span className= "pass">{student.score >= 50? "Pass": "Fail"}</span>
                </div>
        })
     }}

     function filterByAll(){
         {studentDetails.map((student, index) => (
                <div key={student.name} className="card"> 
                <p>{student.name} - {student.subject}: {student.score} </p>

                <span className={student.score >= 50? "pass": "fail"}>{student.score >= 50? "Pass": "Fail"}</span>
                </div>
            ))}

     }

    return (
        <div className="student-list">
            <div className="buttons">
                <button onClick={filterByAll} className="btn">
                    All
                </button>
                <button onClick={filterPassed} className="btn pass">
                    Passed
                </button>
                <button className="btn fail" >
                    Failed
                </button>


            </div>
            {studentDetails.map((student, index) => (
                <div key={student.name} className="card"> 
                <p>{student.name} - {student.subject}: {student.score} </p>

                <span className={student.score >= 50? "pass": "fail"}>{student.score >= 50? "Pass": "Fail"}</span>
                </div>
            ))}
            <p className="info">Total Students: {studentDetails.length} | Passed: {passedLength}| Failed: {studentDetails.length - passedLength}</p>
        </div>
    );
} 

export default StudentGrades;