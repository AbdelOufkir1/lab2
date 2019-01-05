
const fs = require('fs');

const load = (filename, cb) => {
    // console.log('in load');
    fs.readFile(`./classes/${filename}.json`, 'utf8', (err,data) => {
        
        if (!data){
            cb([])
            return;
        }

        const students = data.split('\n');
        // console.log('students are:', students);
        cb(students);
        for (let student of students) {
            // console.log('one student is:Elyas2015 ', student);
        }
    })    
}

const save = (className, data, cb) => {

    fs.writeFile(`./classes/${className}.json`, JSON.stringify(data), (err,res)=> {
        // console.log('inSave', data);
        cb(data);
        })

} 


const add = (className, data, cb ) => {
    // console.log('in add class fn');
    // console.log('className is: ', className);
    // console.log('data is: ', data);
    
    // fs.writeFile(`./classes/${className}.json`, JSON.stringify(data), (err,res)=> {
    //     cb(err,res)
    //     load(`${className}`, studentsData =>  {
    //         studentsData.push(data)
    //         // console.log(data);
    //     })
    // })
    
    load(`${className}`, studentsData =>  {
            studentsData.push(data);
            save(className, studentsData,(err, res) => {
                console.log(res)
            })
    })
    
}

module.exports = {
    add,
    load,
}