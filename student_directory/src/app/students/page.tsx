import StudentCard from '@/components/StudentCard';
import { students } from '@/data/students';

export default function StudentPage() {
  return (
    <main>
        <h2>students</h2>
        <p>this is student directory</p>

        <div>   
            {students.map((student)=> (
                <StudentCard 
                    key={student.id}
                    name={student.name}
                    department={student.department}
                    email={student.email}
                />
            ))}
        </div>
    </main>
  );
}
