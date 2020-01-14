import React, {useState} from "react";
 
function MemberTable({ members }) {
  return (
    members.length > 0 && (
        <table className='text-left'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {members.map(p => (
                    <tr>
                        <td>{p.name}</td>
                        <td>{p.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
  );
}
 
function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4><MemberTable members={props.members} />
    </div>
  );
}
 
export default function App() {
  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Jan", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Martin", age: 22}];
  const [members,setMembers] = useState(initialMembers)
  
  return (<MemberDemo members={members} />);
}

