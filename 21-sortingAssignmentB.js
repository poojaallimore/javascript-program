
class Employee {

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){

        this.emp_id = emp_id;

        this.emp_name = emp_name;

        this.emp_dept = emp_dept;

        this.emp_salary = emp_salary;

        this.emp_company = emp_company;

    }

}

 

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");

const emp_radha = new Employee(33, "Radha", "HR", 74000, "wipro");

const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");

const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");

const emp_monika = new Employee(77, "Monika", "IT", 40000, "wipro");

const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");

const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

 

let arrayEmployee =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`===== List the employee by their ID in descending order============`);

const arrayEmployeeId = arrayEmployee.sort((n1,n2)=> {
     
    return n1.emp_id>n2.emp_id? -1 : 1;

});
for (const element of arrayEmployeeId) {

    console.log(`Employee Id:${element.emp_id},Employee Name:${element.emp_name},Employee Dept:${element.emp_dept}`);
      
}
console.log(`===== List the employee by their department in ascending order============`);

const arrayEmployeeDpt =arrayEmployee.sort((d1,d2)=> {

    return d1.emp_dept>d2.emp_dept?1:-1;
});
for (const element of arrayEmployeeDpt) {

    console.log(`Employee Id :${element.emp_id},Employee Dept.:${element.emp_dept},Company:${element.emp_company}`);
}

console.log(`===== List the employee by their salary in descending order============`);

const employeeSalary = arrayEmployee.sort((s1,s2)=> {

   return s1.emp_salary>s2.emp_salary?-1:1;
});

for (const element of employeeSalary) {
    
    console.log(`Employee Name:${element.emp_name},Employee Salary:${element.emp_salary},Company:${element.emp_company}`);
    
}


