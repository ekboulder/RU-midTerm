angular.module('myApp')
	.factory('GradeFactory', [function(){

		
        //studentFactoryList comes froma different file where it is declared as aglobal variable.
        //include the js file in the index header before the factory 
        var rawStudentobjectList = studentFactoryList


        console.log('hello from the Grade Factory.')
		
		var studentFactoryList = []     //Array of student objects
		// @param id    				number
		// @param firstName   			String
		// @param lastName	   			String
		// @param gender  				String
		// @param teacherID     		Number
		// @param scores    			Object
		// @param tags					Object
		// @param targetTeacherId 		Number
		// @param combinedStudentIds 	Array
		// @param seperatedStudentIds	Array
		var Student = function(id, firstName, lastName, gender, teacherId, scores, tags, targetTeacherId, combinedStudentIds,separatedStudentIds){
			this.id                  = id
			this.firstName           = firstName
			this.lastName            = lastName
			this.gender              = gender
			this.teacherId           = teacherId
			this.scores              = scores
			this.tags                = tags	
			this.targetTeacherId     = targetTeacherId
			this.combinedStudentIds  = combinedStudentIds
			this.separatedStudentIds = separatedStudentIds
			
            this.academicAvg         = function () {
                return (this.score.Reading + this.score.Writing + this.scores.Math) /3
            }

			// Push our new student object into our list of students
			studentFactoryList.push(this) 
		}


		//new Student() to figure out parameters. 
        //new Student('id, firstName, lastname ...')

        rawStudentObjectList.ForEach(function(studentObject){
            new Student (   studentObject.id,
                            studentObject.firstName,
                            studentObject.lastName,
                            studentObject.gender,
                            studentObject.teacherId,     
                            studentObject.scores,
                            studentObject.tags,
                            studentObject.targetTeacherId,
                            studentObject.combinedStudentIds,
                            studentObject.seperatedStudentIds,
                        )


                        //example from Raw File
                        // {   "id":1,
                        //     "firstName":"Michelle",
                        //     "lastName":"Oliver",
                        //     "gender":"FEMALE",
                        //     "teacherId":1,
                        //     "scores":{"Reading":8,"Writing":8,"Math":7,"Behavior":4,"WorkSkills":6},
                        //     "tags":{"GT":0,"GPV":1,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},
                        //     "targetTeacherId":null,
                        //     "combinedStudentIds":[],
                        //     "separatedStudentIds":[6,3]
                        // },


        })
        //number and how to selection should impact classRoom Scores.


        var studentBlockFactoryList = []       //Array of 2 student Block objects
        // @param label                 String: "Boys" or "Girls"
        // @param allowedGender         Array: [ 'boy'] or ['girl']
        // @param studentList           Array: of student objects
        var StudentBlock = function (label, allowedGender, studentList) {
            this.label = label
            this.allowedGender = allowedGender
            this.studentList = studentList
            
            //push our new studentBlock object into our list of Blocks
            studentBlockList.push(this)
        }

        //new StudentBlock()
        

        new StudentBlock('Boys', [ 'boy' ], studentFactoryList ) 
        new
        //times 5

        var classRoomFactoryList = []
        //@param id             //Number
        //@param teacher        //string
        //@param expand         //boolean
        //@param academic       //object academic scores {academicAvg: ,read: ,math: , writing: ,}
        //@param lifeSkills     //object of life skills scores {lifeSkillsAvg: , behavior: , workSkills: ,}
        //@param tags                  //array of NotDefinedYet
        //@param lastTeacher           //array of NotDeinedYet
        //@param studentBlock          //array of studentBlock objects
        var ClassRoom = function (id, teacher, expand, academic, lifeSkills, tags, lastTeacher, studentBlock) {
            this.id             = id
            this.teacher        = teacher
            this.expand         = expand 
            this.academic       = academic 
            this.lifeskills     = lifeSkills
            this. tags          = tags                         //undefined
            this.lastTeacher    = lastTeacher            //undefined
            this.studentBlock   = studentBlock
            //push our new classRoom object into our list of classRooms 
            classRoomList.push(this)

        } 

        new ClassRoom(1,'teacher1', true, {}, {}, [], [], studentBlockFactoryList) 
        new ClassRoom(2, 'teacher2', true, {}, {}, [], [], studentBlockFactoryList) 
        new ClassRoom(3,'teacher3', true, {}, {}, [], [], studentBlockFactoryList) 
        new ClassRoom(4, 'teacher4', true, {}, {}, [], [], studentBlockFactoryList) 
        new ClassRoom(5, 'teacher5', true, {}, {}, [], [], studentBlockFactoryList) 

        var schoolGradeFactoryList =[]
        //@param grade              String
        //@param id                 Number
        //@param  classRoomList     Array of classRoom objects => classRoomFactoryList
        var SchoolGrade =function (grade, id, classRoomList) {
            this.grade          = grade 
            this.id             = id 
            this.classRoomList  = classRoomList

            //push our new studentGrade object into our list of studentGradeLevels
            schoolGradeFactoryList.push(this)

        }

        //if this is in a factory, we will not need $scope
       new SchoolGrade('Grade 3', 3, 5)








		return {
				SchoolGrade     : SchoolGrade,
				schoolGradeFactoryList :schoolGradeFactoryList,
				}
}])