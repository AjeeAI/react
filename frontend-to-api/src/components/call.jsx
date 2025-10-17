import React, { useState } from "react";

function Call() {
    const [students, setStudents] = useState([]);

    async function makeCall() {
        try {
            const response = await fetch('http://127.0.0.1:8000/students');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('API Response:', data);

            setStudents(data); // ✅ Update state with fetched data
        } catch (error) {
            console.error('Error making API call:', error);
        }
    }
    window.onload = function() {
        makeCall();
        // {students.length > 0 && (
        //         <div className="cards">
        //             {students.map(student => (
        //                 <div key={student.name} className="card">
        //                     <h1>{student.name}</h1>
        //                     <h2>{student.age}</h2>
        //                     <p>{student.course}</p>
        //                 </div>
        //             ))}
        //         </div>
        //     )}
    };
    return (
        <div>
            {/* <h1>Make API Call</h1>
            
            <button onClick={makeCall}>Call API</button> */}

            {/* ✅ Render students after fetch */}
            {students.length > 0 && (
                <div className="cards">
                    {students.map(student => (
                        <div key={student.name} className="card">
                            <h1>{student.name}</h1>
                            <h2>{student.age}</h2>
                            <p>{student.course}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Call;
