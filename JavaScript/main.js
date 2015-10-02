//Setting an Angular module: myApp
angular.module('myApp',['dndLists']) // dndlists is a dependency module



//Defining the Controller function: mainControllerFunc
var mainControllerFunc = function ($scope, studentFactory) {

	$scope.studentList = studentFactory.studentFactoryList
	console.log('total Number of Students: ', $scope.studentList.length)

	$scope.gradeLevel = studentFactory.schoolGradeFactoryList[0]

	console.log($scope.gradeLevel.grade)
	console.log($scope.gradeLevel.id)
	console.log($scope.gradeLevel.classRoomList.length)
	console.log($scope.gradeLevel.classRoomList[0].teacher)
	console.log($scope.gradeLevel.classRoomList[0].expand)
	console.log('academic:', $scope.gradeLevel.classRoomList[0].academic)
	console.log('lifeSkills:',$scope.gradeLevel.classRoomList[0].lifeSkills)
	console.log($scope.gradeLevel.classRoomList[0].tags)
	console.log($scope.gradeLevel.classRoomList[0].lastTeacher)
	console.log('studentBlocks:',$scope.gradeLevel.classRoomList[0].studentBlocks)
	console.log('studentBlocks label:',$scope.gradeLevel.classRoomList[0].studentBlocks[0].label)
	console.log('studentBlocks allowed Gender:',$scope.gradeLevel.classRoomList[0].studentBlocks[0].allowedGender)
	console.log('studentList size inside of a Block:',$scope.gradeLevel.classRoomList[0].studentBlocks[0].studentList)


	

	
// 	$scope.gradeLevel =  {
// 		grade: 'Grade 3',
// 		id : 3,
// 		classRoomList : [ 
// 		{	teacher : 'teacher1',
// 			expand	: true,
// 			academic : {
// 				academicAvg : 6.4,
// 				read : 8,
// 				math : 6,
// 				writing : 7,
// 			},
// 			lifeSkills : {
// 				lifeSkillsAvg : 7.4,
// 				behavior : 8.1,
// 				workSkills : 7,
// 			},
// 			tags : [],
// 			lastTeacher : [],
// 			studentBlocks : [
				
// 				{
// 					label : 'Boys',
// 					allowedGender : ['boy'],
// 					studentList : [
// 						{
// 							id: 0,
// 							gender: 'boy'
// 						},
// 						{
// 							id: 2,
// 							gender: 'boy'
// 						},
// 						{
// 							id: 4,
// 							gender: 'boy'
// 						},
// 					],
// 				},
// 				{
// 					label : 'Girls',
// 					allowedGender : ['girl'],
// 					studentList : [
// 						{
// 							id: 1,
// 							gender: 'girl'
// 						},
// 						{
// 							id: 3,
// 							gender: 'girl'
// 						},
// 						{
// 						id: 5,
// 						gender: 'girl'
// 						},
// 					],
// 				},
// 			],
// 		},
// 		{	teacher : 'teacher2',
// 			expand	: true,
// 			academicAvg : {
// 				academicScore : 6.4,
// 				read : 8,
// 				math : 6,
// 				writing : 7,
// 			},
// 			lifeSkillsAvg : {
// 				lifeSkillsScores : 7.4,
// 				behavior : 8.1,
// 				workSkills : 7
// 			},
// 			tags : [],
// 			lastTeacher : [],
// 			studentBlocks : [
				
// 				{
// 					label : 'Boys',
// 					allowedGender : ['boy'],
// 					studentList : [
// 						{
// 							id: 6,
// 							gender: 'boy'
// 						},
// 						{
// 							id: 7,
// 							gender: 'boy'
// 						},
// 						{
// 							id: 8,
// 							gender: 'boy'
// 						},
// 					],
// 				},
// 				{
// 					label : 'Girls',
// 					allowedGender : ['girl'],
// 					studentList : [
// 						{
// 							id: 9,
// 							gender: 'girl'
// 						},
// 						{
// 							id: 10,
// 							gender: 'girl'
// 						},
// 						{
// 						id: 11,
// 						gender: 'girl'
// 						},
// 					],
// 				},
// 			],
				
// 		},
// 		{	teacher : 'teacher3',
// 			expand	: true,
// 			academicAvg : {
// 				academicScore : 6.4,
// 				read : 8,
// 				math : 6,
// 				writing : 7,
// 			},
// 			lifeSkillsAvg : {
// 				lifeSkillsScores : 7.4,
// 				behavior : 8.1,
// 				workSkills : 7
// 			},
// 			tags : [],
// 			lastTeacher : [],
// 			studentBlocks : [
				
// 				{
// 					label : 'Boys',
// 					allowedGender : ['boy'],
// 					studentList : [
// 						{
// 							id: 12,
// 							gender: 'boy'
// 						},
// 						{
// 							id: 13,
// 							gender: 'boy'
// 						},
// 						{
// 							id: 14,
// 							gender: 'boy'
// 						},
// 					],
// 				},
// 				{
// 					label : 'Girls',
// 					allowedGender : ['girl'],
// 					studentList : [
// 						{
// 							id: 15,
// 							gender: 'girl'
// 						},
// 						{
// 							id: 16,
// 							gender: 'girl'
// 						},
// 						{
// 						id: 17,
// 						gender: 'girl'
// 						},
// 					],
// 				},
// 			],
				
// 		},
// 		{	teacher : 'teacher4',
// 			expand	: true,
// 			academicAvg : {
// 				academicScore : 6.4,
// 				read : 8,
// 				math : 6,
// 				writing : 7,
// 			},
// 			lifeSkillsAvg : {
// 				lifeSkillsScores : 7.4,
// 				behavior : 8.1,
// 				workSkills : 7
// 			},
// 			tags : [],
// 			lastTeacher : [],
// 			studentBlocks : [
				
// 				{
// 					label : 'Boys',
// 					allowedGender : ['boy'],
// 					studentList : [
// 						{
// 							id: 18,
// 							gender: 'boy'
// 						},
// 						{
// 							id: 19,
// 							gender: 'boy'
// 						},
// 						{
// 							id: 20,
// 							gender: 'boy'
// 						},
// 					],
// 				},
// 				{
// 					label : 'Girls',
// 					allowedGender : ['girl'],
// 					studentList : [
// 						{
// 							id: 21,
// 							gender: 'girl'
// 						},
// 						{
// 							id: 22,
// 							gender: 'girl'
// 						},
// 						{
// 						id: 23,
// 						gender: 'girl'
// 						},
// 					],
// 				},
// 			],
				
// 		},
// 	], //end of classRoomList array
// }//end of GradeLevel


	$scope.classRoomExpand = function (index) {
		$scope.gradeLevel.classRoomList[index].expand = !$scope.gradeLevel.classRoomList[index].expand
	}

	$scope.classRoomExpanded = function(classRoom) {
		return classRoom.expand === true
	}

	$scope.logEvent = function(message, event, index, listByGender) {
        console.log(message, '(triggered by the following', event.type, 'event)');
        console.log(event);
        console.log(listByGender[index])
    };

    $scope.onMove = function(passedId, listByGender){
    		var selectedIndex;
    		var selectedChild = listByGender.filter(
        	function(child, index){
            		if(child.id === passedId){
                		selectedIndex = index
                		return true
    	        		}
        		})[0]
    		listByGender.splice(selectedIndex, 1) //splice to remove from Array.

    		updateStats()
    		console.log(selectedIndex, selectedChild)
    		// newList.push(selectedChild)
    		// oldList.splice(selectedIndex, 1)

	}

	var updateStats =function () {

		$scope.gradeLevel.classRoomList.forEach(function(classRoom){
    				
    		console.log('hello:', classRoom)

    		var academicCalc = function (students) {
                        var academicAvg = 0
                        var read = 0
                        var math = 0
                        var writing = 0

                        students.forEach(function(element){
                            read    += element.scores['Reading']
                            math    += element.scores['Writing']
                            writing += element.scores['Math']
                        })
                        academicAvg = Math.round( (read + math + writing)/ (3 * students.length) *10) /10

                        return {
                            academicAvg : academicAvg,
                            read : Math.round (read/students.length *10) /10 ,
                            math : Math.round (math/students.length * 10) /10,
                            writing : Math.round(writing/students.length * 10) /10,
                            }
                    }

                    var studentRoaster = []
                    classRoom.studentBlocks.forEach(function(block){
                    	block.studentList.forEach(function(student){
                    			studentRoaster.push(student) 
                    	})
                    })
                    classRoom.academic = academicCalc(studentRoaster)
                    console.log('hi:',classRoom.academic)

   		}) //end of $scope.gradeLevel.classRoomList.forEach
   			
    }     
    

} //end of mainControllerFunc

//Registering the controller: mainController
angular.module('myApp').controller('mainController',['$scope','studentFactory',mainControllerFunc])
