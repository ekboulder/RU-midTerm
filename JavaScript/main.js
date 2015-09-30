//Setting an Angular module: myApp
angular.module('myApp',['dndLists']) // dndlists is a dependency module



//Defining the Controller function: mainControllerFunc
var mainControllerFunc = function ($scope, studentFactory) {

	$scope.studentList = studentFactory.studentFactoryList


	
	$scope.gradeLevel =  {
		grade: 'Grade 3',
		id : 3,
		classRoomList : [ 
		{	teacher : 'teacher1',
			expand	: true,
			academic : {
				academicAvg : 6.4,
				read : 8,
				math : 6,
				writing : 7,
			},
			lifeSkills : {
				lifeSkillsAvg : 7.4,
				behavior : 8.1,
				workSkills : 7,
			},
			tags : [],
			lastTeacher : [],
			studentBlocks : [
				
				{
					label : 'Boys',
					allowedGender : ['boy'],
					studentList : [
						{
							id: 0,
							gender: 'boy'
						},
						{
							id: 2,
							gender: 'boy'
						},
						{
							id: 4,
							gender: 'boy'
						},
					],
				},
				{
					label : 'Girls',
					allowedGender : ['girl'],
					studentList : [
						{
							id: 1,
							gender: 'girl'
						},
						{
							id: 3,
							gender: 'girl'
						},
						{
						id: 5,
						gender: 'girl'
						},
					],
				},
			],
		},
		{	teacher : 'teacher2',
			expand	: true,
			academicAvg : {
				academicScore : 6.4,
				read : 8,
				math : 6,
				writing : 7,
			},
			lifeSkillsAvg : {
				lifeSkillsScores : 7.4,
				behavior : 8.1,
				workSkills : 7
			},
			tags : [],
			lastTeacher : [],
			studentBlocks : [
				
				{
					label : 'Boys',
					allowedGender : ['boy'],
					studentList : [
						{
							id: 6,
							gender: 'boy'
						},
						{
							id: 7,
							gender: 'boy'
						},
						{
							id: 8,
							gender: 'boy'
						},
					],
				},
				{
					label : 'Girls',
					allowedGender : ['girl'],
					studentList : [
						{
							id: 9,
							gender: 'girl'
						},
						{
							id: 10,
							gender: 'girl'
						},
						{
						id: 11,
						gender: 'girl'
						},
					],
				},
			],
				
		},
		{	teacher : 'teacher3',
			expand	: true,
			academicAvg : {
				academicScore : 6.4,
				read : 8,
				math : 6,
				writing : 7,
			},
			lifeSkillsAvg : {
				lifeSkillsScores : 7.4,
				behavior : 8.1,
				workSkills : 7
			},
			tags : [],
			lastTeacher : [],
			studentBlocks : [
				
				{
					label : 'Boys',
					allowedGender : ['boy'],
					studentList : [
						{
							id: 12,
							gender: 'boy'
						},
						{
							id: 13,
							gender: 'boy'
						},
						{
							id: 14,
							gender: 'boy'
						},
					],
				},
				{
					label : 'Girls',
					allowedGender : ['girl'],
					studentList : [
						{
							id: 15,
							gender: 'girl'
						},
						{
							id: 16,
							gender: 'girl'
						},
						{
						id: 17,
						gender: 'girl'
						},
					],
				},
			],
				
		},
		{	teacher : 'teacher4',
			expand	: true,
			academicAvg : {
				academicScore : 6.4,
				read : 8,
				math : 6,
				writing : 7,
			},
			lifeSkillsAvg : {
				lifeSkillsScores : 7.4,
				behavior : 8.1,
				workSkills : 7
			},
			tags : [],
			lastTeacher : [],
			studentBlocks : [
				
				{
					label : 'Boys',
					allowedGender : ['boy'],
					studentList : [
						{
							id: 18,
							gender: 'boy'
						},
						{
							id: 19,
							gender: 'boy'
						},
						{
							id: 20,
							gender: 'boy'
						},
					],
				},
				{
					label : 'Girls',
					allowedGender : ['girl'],
					studentList : [
						{
							id: 21,
							gender: 'girl'
						},
						{
							id: 22,
							gender: 'girl'
						},
						{
						id: 23,
						gender: 'girl'
						},
					],
				},
			],
				
		},
	], //end of classRoomList array
}//end of GradeLevel


$scope.classRoomExpand = function (index) {
	$scope.gradeLevel.classRoomList[index].expand = !$scope.gradeLevel.classRoomList[index].expand
}

$scope.classRoomExpanded = function(classRoom) {
	return classRoom.expand === true
}

} //end of mainControllerFunc

//Registering the controller: mainController
angular.module('myApp').controller('mainController',['$scope','studentFactory',mainControllerFunc])
