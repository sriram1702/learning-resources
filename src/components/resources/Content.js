import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Content = () => {
    const {  user } = useAuth0();
    
  const languageData = [
    {
      language: 'Core Java ',
      youtubeLink: 'https://www.youtube.com/watch?v=BGTx91t8q50&pp=ygUJY29yZSBqYXZh',
      docLink: 'https://www.w3schools.com/java/',
      description:"To know about all the core java topics which includes Core concepts,methods and classes"
    },
    {
      language: 'Java OOPS',
      youtubeLink: 'https://www.youtube.com/watch?v=BSVKUk58K6U&list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk',
      docLink: 'https://www.javatpoint.com/java-oops-concepts',
      description:"In this you will learn about OOPS concept and this doc link will cover almost all java topics"
    },
    {
      language: 'Java DSA',
      youtubeLink: 'https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ%22',
      docLink: 'https://www.tutorialspoint.com/dsa_using_java/index.htm',
      description:"Array, Linked List, Stack, Queue, Binary Tree, Binary Search Tree, Heap, Hashing, Graph."
    },
    {
        language: 'JAVA Collections',
        youtubeLink: 'https://youtu.be/GdAon80-0KA',
        docLink: 'https://www.javatpoint.com/collections-in-java',
        description:"ArrayList,Vector,Set,Hashset,Treeset,queue,dequeue,priorityqueue and so on"
      },
      {
        language: 'MySQL',
        youtubeLink: 'https://www.youtube.com/watch?v=5OdVJbNCSso&pp=ygUFbXlzcWw%3D',
        docLink: 'https://www.geeksforgeeks.org/sql-ddl-dql-dml-dcl-tcl-commands/',
        description:"DDL,DQL,DML,DCL,TCL and also see w3 schools for sql tutorials like SQL DB and also about JOINS"
      },
      {
        language: 'Operating System',
        youtubeLink: 'https://www.youtube.com/watch?v=RozoeWzT7IM&list=PLdo5W4Nhv31a5ucW_S1K3-x6ztBRD-PNa',
        docLink: 'https://www.interviewbit.com/operating-system-interview-questions/',
        description:"Operating system interview questions like OS core concepts,deadlocks,SMP"
      },
     
    
    
    // Add more language objects as needed
  ];

  return (
    <div>
        {
                
        <h5 className="text-center">Hi, {user.name}👋</h5>
                    }
      {languageData.map((languageObj, index) => (
        <div key={index} className="card" style={{ width: '18rem' ,display:"inline-flex",margin:"10px",overflow:"auto",}}>
          <div className="card-body">
            <h5 className="card-title">{languageObj.language}</h5>
            {/* <h6 className="card-subtitle mb-2 text-muted"> {languageObj.language}</h6> */}
            <p className="card-text">{languageObj.description}.</p>
            <a href={languageObj.docLink} target="__blank" className="card-link">Doc Link</a>
            <a href={languageObj.youtubeLink}target="__blank" className="card-link">Youtube Link</a>
          </div>
       
                        
        </div>
      ))}
    </div>
  );
};

export default Content;
