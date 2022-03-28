type Combine = number | string;

// typeof

function add(a: Combine, b: Combine): Combine {
  if (typeof a === 'string' || typeof b === 'string') {
    return '' + a + b;
  }
  return a + b;
}

interface TeacherInterface {
  name: string;
  role: string[];
}

interface StudentInterface {
  name: string;
  id: number;
}

type People = Teacher | Student;

class Teacher implements TeacherInterface {
  name: string;
  role: string[];
  constructor(n: string, r: string[]) {
    this.name = n;
    this.role = r;
  }
}

class Student implements StudentInterface {
  name: string;
  id: number;
  constructor(n: string, i: number) {
    this.name = n;
    this.id = i;
  }
}

// instanceof , in

function print(obj: People) {
  console.log(obj.name);
  //   console.log(obj.id);
  //   console.log(obj.role)
  if (obj instanceof Teacher) {
    console.log(obj.role);
  }
  if ('id' in obj) {
    console.log(obj.id);
  }
}

print(new Student('A', 11));
