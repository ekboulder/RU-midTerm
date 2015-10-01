angular.module('myApp')
	.factory('studentFactory', [function(){

		console.log('hello form studentList file')
		
		var teachers     = [
                            {"id":1,"firstName":"Jessica","lastName":"Mitchell","color":"rgb(79,129,189)"},
                            {"id":2,"firstName":"Gordon","lastName":"Simpson","color":"rgb(192,80,77)"},
                            {"id":3,"firstName":"Gabrielle","lastName":"Kelly","color":"rgb(133,171,52)"},
                            {"id":4,"firstName":"Mary","lastName":"Roberts","color":"rgb(112,88,173)"},
                            {"id":5,"firstName":"Sonia","lastName":"Hudson","color":"rgb(233,131,58)"},
                            {"id":6,"firstName":"Steven","lastName":"Murray","color":"rgb(207,207,48)"},
                            {"id":7,"firstName":"Carolyn","lastName":"Coleman","color":"rgb(34,151,119)"},
                            {"id":8,"firstName":"Lisa","lastName":"Taylor","color":"rgb(186,103,186)"},
                        ]


		var rawStudentObjectList     = [
    {"id":1,"firstName":"Michelle","lastName":"Oliver","gender":"FEMALE","teacherId":1,"scores":{"Reading":8,"Writing":8,"Math":7,"Behavior":4,"WorkSkills":6},"tags":{"GT":0,"GPV":1,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[6,3]},
    {"id":2,"firstName":"Ethan","lastName":"Ramirez","gender":"MALE","teacherId":1,"scores":{"Reading":8,"Writing":8,"Math":8,"Behavior":4,"WorkSkills":6},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":3,"firstName":"David","lastName":"Yee","gender":"MALE","teacherId":1,"scores":{"Reading":7,"Writing":6,"Math":7,"Behavior":6,"WorkSkills":7},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[1,6]},
    {"id":4,"firstName":"Paige","lastName":"Schmidt","gender":"FEMALE","teacherId":1,"scores":{"Reading":9,"Writing":9,"Math":9,"Behavior":8,"WorkSkills":9},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":5,"firstName":"Tyler","lastName":"Wilson","gender":"MALE","teacherId":1,"scores":{"Reading":6,"Writing":5,"Math":5,"Behavior":5,"WorkSkills":4},"tags":{"GT":0,"GPV":1,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":6,"firstName":"Jonathan","lastName":"West","gender":"MALE","teacherId":1,"scores":{"Reading":3,"Writing":6,"Math":4,"Behavior":5,"WorkSkills":7},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":1,"RT":1,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[1,3]},
    {"id":7,"firstName":"Benjamin","lastName":"Cole","gender":"MALE","teacherId":1,"scores":{"Reading":5,"Writing":5,"Math":5,"Behavior":5,"WorkSkills":6},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":8,"firstName":"Camila","lastName":"Ramirez","gender":"FEMALE","teacherId":1,"scores":{"Reading":6,"Writing":5,"Math":7,"Behavior":5,"WorkSkills":4},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":1,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":6,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":9,"firstName":"Caleb","lastName":"Fisher","gender":"MALE","teacherId":1,"scores":{"Reading":3,"Writing":4,"Math":4,"Behavior":5,"WorkSkills":7},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":1,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":1,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":10,"firstName":"Kevin","lastName":"Washington","gender":"MALE","teacherId":1,"scores":{"Reading":3,"Writing":5,"Math":4,"Behavior":6,"WorkSkills":6},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":1,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":11,"firstName":"Justin","lastName":"McDonald","gender":"MALE","teacherId":1,"scores":{"Reading":6,"Writing":5,"Math":6,"Behavior":4,"WorkSkills":2},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":12,"firstName":"Jordan","lastName":"Schultz","gender":"MALE","teacherId":1,"scores":{"Reading":6,"Writing":6,"Math":6,"Behavior":1,"WorkSkills":5},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":1,"RT":0,"SPE":1,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[13]},
    {"id":13,"firstName":"Sierra","lastName":"Wood","gender":"FEMALE","teacherId":1,"scores":{"Reading":5,"Writing":4,"Math":4,"Behavior":2,"WorkSkills":3},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[12]},
    {"id":14,"firstName":"Katie","lastName":"Peterson","gender":"FEMALE","teacherId":1,"scores":{"Reading":6,"Writing":3,"Math":7,"Behavior":1,"WorkSkills":3},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":1,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":15,"firstName":"Megan","lastName":"Garcia","gender":"FEMALE","teacherId":1,"scores":{"Reading":5,"Writing":4,"Math":4,"Behavior":3,"WorkSkills":2},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":1,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":6,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":16,"firstName":"Juliana","lastName":"Padilla","gender":"FEMALE","teacherId":1,"scores":{"Reading":1,"Writing":1,"Math":1,"Behavior":3,"WorkSkills":1},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":1,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":8,"combinedStudentIds":[],"separatedStudentIds":[17]},
    {"id":17,"firstName":"Diego","lastName":"Lopez","gender":"MALE","teacherId":1,"scores":{"Reading":5,"Writing":4,"Math":5,"Behavior":3,"WorkSkills":2},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":1,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":6,"combinedStudentIds":[],"separatedStudentIds":[16]},
    {"id":18,"firstName":"Maya","lastName":"Jimenez","gender":"FEMALE","teacherId":1,"scores":{"Reading":3,"Writing":6,"Math":5,"Behavior":8,"WorkSkills":8},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[27],"separatedStudentIds":[]},
    {"id":19,"firstName":"Lesley","lastName":"Morgan","gender":"FEMALE","teacherId":1,"scores":{"Reading":6,"Writing":6,"Math":5,"Behavior":6,"WorkSkills":8},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":1,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":20,"firstName":"Kennedy","lastName":"Foster","gender":"FEMALE","teacherId":1,"scores":{"Reading":2,"Writing":4,"Math":3,"Behavior":6,"WorkSkills":5},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":1,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":21,"firstName":"Brian","lastName":"Stevens","gender":"MALE","teacherId":1,"scores":{"Reading":8,"Writing":8,"Math":7,"Behavior":9,"WorkSkills":9},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":1,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":7,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":22,"firstName":"Eva","lastName":"Long","gender":"FEMALE","teacherId":1,"scores":{"Reading":6,"Writing":8,"Math":4,"Behavior":4,"WorkSkills":7},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[71],"separatedStudentIds":[1,12,2,17]},
    {"id":23,"firstName":"Amy","lastName":"Henderson","gender":"FEMALE","teacherId":1,"scores":{"Reading":5,"Writing":5,"Math":5,"Behavior":7,"WorkSkills":7},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":24,"firstName":"Lydia","lastName":"Ross","gender":"FEMALE","teacherId":1,"scores":{"Reading":9,"Writing":9,"Math":8,"Behavior":9,"WorkSkills":9},"tags":{"GT":0,"GPV":1,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[26],"separatedStudentIds":[]},
    {"id":25,"firstName":"Shelby","lastName":"Bryant","gender":"FEMALE","teacherId":1,"scores":{"Reading":8,"Writing":9,"Math":8,"Behavior":5,"WorkSkills":9},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[28]},
    {"id":26,"firstName":"Ruby","lastName":"Sullivan","gender":"FEMALE","teacherId":1,"scores":{"Reading":9,"Writing":9,"Math":9,"Behavior":9,"WorkSkills":9},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[24],"separatedStudentIds":[]},
    {"id":27,"firstName":"Maria","lastName":"Castro","gender":"FEMALE","teacherId":1,"scores":{"Reading":9,"Writing":6,"Math":7,"Behavior":9,"WorkSkills":6},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[18,52],"separatedStudentIds":[]},
    {"id":28,"firstName":"Ian","lastName":"Hunter","gender":"MALE","teacherId":1,"scores":{"Reading":6,"Writing":5,"Math":5,"Behavior":4,"WorkSkills":6},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[25]},
    {"id":29,"firstName":"Juan","lastName":"Hernandez","gender":"MALE","teacherId":2,"scores":{"Reading":5,"Writing":3,"Math":6,"Behavior":6,"WorkSkills":6},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":1,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":6,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":30,"firstName":"Gabriella","lastName":"Reyes","gender":"FEMALE","teacherId":2,"scores":{"Reading":4,"Writing":4,"Math":4,"Behavior":9,"WorkSkills":6},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":1,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":6,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":31,"firstName":"Luis","lastName":"Sanchez","gender":"MALE","teacherId":2,"scores":{"Reading":5,"Writing":2,"Math":3,"Behavior":9,"WorkSkills":6},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":1,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":8,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":32,"firstName":"Gustavo","lastName":"Rivera","gender":"MALE","teacherId":2,"scores":{"Reading":9,"Writing":9,"Math":9,"Behavior":6,"WorkSkills":7},"tags":{"GT":1,"GPV":0,"IEP":0,"BPL":0,"ELL":1,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":33,"firstName":"Hayden","lastName":"Stewart","gender":"MALE","teacherId":2,"scores":{"Reading":6,"Writing":3,"Math":6,"Behavior":2,"WorkSkills":3},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":1,"ELL":0,"RCC":1,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":1},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":34,"firstName":"Tristan","lastName":"Jones","gender":"MALE","teacherId":2,"scores":{"Reading":1,"Writing":2,"Math":3,"Behavior":4,"WorkSkills":4},"tags":{"GT":0,"GPV":0,"IEP":1,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":35,"firstName":"Henry","lastName":"Rogers","gender":"MALE","teacherId":2,"scores":{"Reading":2,"Writing":2,"Math":3,"Behavior":7,"WorkSkills":5},"tags":{"GT":0,"GPV":1,"IEP":1,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":36,"firstName":"Madison","lastName":"Jennings","gender":"FEMALE","teacherId":2,"scores":{"Reading":7,"Writing":7,"Math":7,"Behavior":9,"WorkSkills":9},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":37,"firstName":"Isabella","lastName":"Stevens","gender":"FEMALE","teacherId":2,"scores":{"Reading":4,"Writing":5,"Math":4,"Behavior":5,"WorkSkills":5},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":1},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":38,"firstName":"Cody","lastName":"Leonard","gender":"MALE","teacherId":2,"scores":{"Reading":7,"Writing":7,"Math":7,"Behavior":3,"WorkSkills":6},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":1,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":1},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":39,"firstName":"Brady","lastName":"Glover","gender":"MALE","teacherId":2,"scores":{"Reading":1,"Writing":1,"Math":1,"Behavior":1,"WorkSkills":2},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":1,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":1},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":40,"firstName":"Sophia","lastName":"Gray","gender":"FEMALE","teacherId":2,"scores":{"Reading":8,"Writing":8,"Math":8,"Behavior":9,"WorkSkills":9},"tags":{"GT":0,"GPV":1,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[53]},
    {"id":41,"firstName":"Eduardo","lastName":"Medoza","gender":"MALE","teacherId":2,"scores":{"Reading":6,"Writing":6,"Math":8,"Behavior":7,"WorkSkills":7},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":1,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":7,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":42,"firstName":"Cooper","lastName":"Hayes","gender":"MALE","teacherId":2,"scores":{"Reading":7,"Writing":7,"Math":7,"Behavior":9,"WorkSkills":9},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":43,"firstName":"Alexis","lastName":"Warner","gender":"FEMALE","teacherId":2,"scores":{"Reading":7,"Writing":8,"Math":8,"Behavior":9,"WorkSkills":9},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":44,"firstName":"Ashton","lastName":"Higgins","gender":"MALE","teacherId":2,"scores":{"Reading":7,"Writing":6,"Math":7,"Behavior":6,"WorkSkills":3},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":45,"firstName":"Trevor","lastName":"Swanson","gender":"MALE","teacherId":2,"scores":{"Reading":6,"Writing":5,"Math":4,"Behavior":7,"WorkSkills":6},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":46,"firstName":"Connor","lastName":"Malone","gender":"MALE","teacherId":2,"scores":{"Reading":6,"Writing":7,"Math":7,"Behavior":7,"WorkSkills":8},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":1,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":47,"firstName":"Emily","lastName":"Yang","gender":"FEMALE","teacherId":2,"scores":{"Reading":4,"Writing":4,"Math":4,"Behavior":9,"WorkSkills":8},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":1,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":8,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":48,"firstName":"Grant","lastName":"Price","gender":"MALE","teacherId":2,"scores":{"Reading":1,"Writing":1,"Math":6,"Behavior":3,"WorkSkills":1},"tags":{"GT":0,"GPV":0,"IEP":1,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":6,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":49,"firstName":"Ashley","lastName":"Carlson","gender":"FEMALE","teacherId":2,"scores":{"Reading":6,"Writing":7,"Math":6,"Behavior":7,"WorkSkills":7},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":50,"firstName":"Lily","lastName":"Freeman","gender":"FEMALE","teacherId":2,"scores":{"Reading":6,"Writing":4,"Math":7,"Behavior":9,"WorkSkills":7},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":51,"firstName":"Hailey","lastName":"Shelton","gender":"FEMALE","teacherId":2,"scores":{"Reading":8,"Writing":7,"Math":8,"Behavior":9,"WorkSkills":8},"tags":{"GT":0,"GPV":1,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":52,"firstName":"Elizabeth","lastName":"Miles","gender":"FEMALE","teacherId":2,"scores":{"Reading":6,"Writing":6,"Math":7,"Behavior":9,"WorkSkills":6},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":7,"combinedStudentIds":[43],"separatedStudentIds":[]},
    {"id":53,"firstName":"Hannah","lastName":"Watts","gender":"FEMALE","teacherId":2,"scores":{"Reading":8,"Writing":8,"Math":7,"Behavior":7,"WorkSkills":7},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[40]},
    {"id":54,"firstName":"Julia","lastName":"Ramsey","gender":"FEMALE","teacherId":2,"scores":{"Reading":6,"Writing":1,"Math":7,"Behavior":5,"WorkSkills":3},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":1,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":8,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":55,"firstName":"Olivia","lastName":"Scott","gender":"FEMALE","teacherId":2,"scores":{"Reading":7,"Writing":6,"Math":7,"Behavior":9,"WorkSkills":8},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":8,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":56,"firstName":"Eli","lastName":"Scott","gender":"MALE","teacherId":3,"scores":{"Reading":4,"Writing":4,"Math":7,"Behavior":9,"WorkSkills":7},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":1,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":57,"firstName":"Laura","lastName":"Brown","gender":"FEMALE","teacherId":3,"scores":{"Reading":6,"Writing":5,"Math":5,"Behavior":6,"WorkSkills":4},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":58,"firstName":"Stephen","lastName":"Young","gender":"MALE","teacherId":3,"scores":{"Reading":9,"Writing":7,"Math":9,"Behavior":7,"WorkSkills":7},"tags":{"GT":1,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":59,"firstName":"Miles","lastName":"Green","gender":"MALE","teacherId":3,"scores":{"Reading":9,"Writing":6,"Math":8,"Behavior":2,"WorkSkills":4},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":1,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":1,"PT":0,"KLG":0,"BEN":1},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":60,"firstName":"Devon","lastName":"Carter","gender":"MALE","teacherId":3,"scores":{"Reading":5,"Writing":5,"Math":5,"Behavior":6,"WorkSkills":6},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":61,"firstName":"Mariana","lastName":"Davis","gender":"FEMALE","teacherId":3,"scores":{"Reading":4,"Writing":4,"Math":4,"Behavior":8,"WorkSkills":7},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":62,"firstName":"Jasmine","lastName":"Martin","gender":"FEMALE","teacherId":3,"scores":{"Reading":9,"Writing":8,"Math":8,"Behavior":7,"WorkSkills":7},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":63,"firstName":"Dakota","lastName":"Jackson","gender":"FEMALE","teacherId":3,"scores":{"Reading":8,"Writing":8,"Math":8,"Behavior":9,"WorkSkills":8},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":64,"firstName":"Chelsea","lastName":"Miller","gender":"FEMALE","teacherId":3,"scores":{"Reading":3,"Writing":3,"Math":3,"Behavior":1,"WorkSkills":2},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":1,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":1,"PT":0,"KLG":0,"BEN":1},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":65,"firstName":"Kyra","lastName":"Walker","gender":"FEMALE","teacherId":3,"scores":{"Reading":8,"Writing":8,"Math":8,"Behavior":9,"WorkSkills":9},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":66,"firstName":"Makenzie","lastName":"Hall","gender":"FEMALE","teacherId":3,"scores":{"Reading":4,"Writing":3,"Math":3,"Behavior":9,"WorkSkills":8},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":1,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":67,"firstName":"Veronica","lastName":"Williams","gender":"FEMALE","teacherId":3,"scores":{"Reading":8,"Writing":7,"Math":8,"Behavior":7,"WorkSkills":7},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":68,"firstName":"Cynthia","lastName":"Wright","gender":"FEMALE","teacherId":3,"scores":{"Reading":7,"Writing":5,"Math":4,"Behavior":9,"WorkSkills":9},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":69,"firstName":"Calvin","lastName":"Morris","gender":"MALE","teacherId":3,"scores":{"Reading":7,"Writing":6,"Math":7,"Behavior":7,"WorkSkills":7},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":70,"firstName":"Scott","lastName":"Parker","gender":"MALE","teacherId":3,"scores":{"Reading":4,"Writing":4,"Math":3,"Behavior":9,"WorkSkills":9},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":1,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":71,"firstName":"Nora","lastName":"King","gender":"FEMALE","teacherId":3,"scores":{"Reading":3,"Writing":3,"Math":3,"Behavior":9,"WorkSkills":9},"tags":{"GT":0,"GPV":0,"IEP":1,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[22],"separatedStudentIds":[]},
    {"id":72,"firstName":"Brock","lastName":"Phillips","gender":"MALE","teacherId":3,"scores":{"Reading":2,"Writing":2,"Math":2,"Behavior":8,"WorkSkills":8},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":5,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":73,"firstName":"Jaime","lastName":"Wilkins","gender":"MALE","teacherId":3,"scores":{"Reading":7,"Writing":5,"Math":6,"Behavior":6,"WorkSkills":5},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":74,"firstName":"Carly","lastName":"Adams","gender":"FEMALE","teacherId":3,"scores":{"Reading":7,"Writing":8,"Math":6,"Behavior":9,"WorkSkills":9},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":75,"firstName":"Brett","lastName":"Cooper","gender":"MALE","teacherId":3,"scores":{"Reading":7,"Writing":3,"Math":6,"Behavior":4,"WorkSkills":2},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":76,"firstName":"Joanna","lastName":"Baker","gender":"FEMALE","teacherId":3,"scores":{"Reading":7,"Writing":7,"Math":7,"Behavior":8,"WorkSkills":8},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":77,"firstName":"Dennis","lastName":"Campbell","gender":"MALE","teacherId":3,"scores":{"Reading":9,"Writing":9,"Math":9,"Behavior":9,"WorkSkills":9},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":78,"firstName":"Heidi","lastName":"Gonzalez","gender":"FEMALE","teacherId":3,"scores":{"Reading":7,"Writing":5,"Math":5,"Behavior":7,"WorkSkills":6},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":79,"firstName":"Dominic","lastName":"Ross","gender":"MALE","teacherId":3,"scores":{"Reading":7,"Writing":7,"Math":7,"Behavior":8,"WorkSkills":8},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":80,"firstName":"Skylar","lastName":"Collins","gender":"FEMALE","teacherId":3,"scores":{"Reading":7,"Writing":7,"Math":7,"Behavior":9,"WorkSkills":9},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":81,"firstName":"Eric","lastName":"Barnes","gender":"MALE","teacherId":3,"scores":{"Reading":6,"Writing":5,"Math":6,"Behavior":8,"WorkSkills":7},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":82,"firstName":"Carson","lastName":"Howard","gender":"MALE","teacherId":3,"scores":{"Reading":7,"Writing":7,"Math":7,"Behavior":9,"WorkSkills":9},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":83,"firstName":"Emilio","lastName":"Medina","gender":"MALE","teacherId":4,"scores":{"Reading":4,"Writing":3,"Math":3,"Behavior":3,"WorkSkills":4},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":1,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":8,"combinedStudentIds":[],"separatedStudentIds":[101,94]},
    {"id":84,"firstName":"Travis","lastName":"Wheeler","gender":"MALE","teacherId":4,"scores":{"Reading":1,"Writing":1,"Math":1,"Behavior":5,"WorkSkills":3},"tags":{"GT":0,"GPV":0,"IEP":1,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":1,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":8,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":85,"firstName":"Lucy","lastName":"Moy","gender":"FEMALE","teacherId":4,"scores":{"Reading":3,"Writing":2,"Math":2,"Behavior":3,"WorkSkills":3},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":1,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":8,"combinedStudentIds":[],"separatedStudentIds":[109,93,98,88]},
    {"id":86,"firstName":"Alex","lastName":"Vang","gender":"MALE","teacherId":4,"scores":{"Reading":5,"Writing":3,"Math":4,"Behavior":9,"WorkSkills":9},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":1,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":7,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":87,"firstName":"Daniel","lastName":"Xiong","gender":"MALE","teacherId":4,"scores":{"Reading":8,"Writing":3,"Math":8,"Behavior":9,"WorkSkills":9},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":1,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":7,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":88,"firstName":"Alyssa","lastName":"Boyd","gender":"FEMALE","teacherId":4,"scores":{"Reading":3,"Writing":2,"Math":2,"Behavior":2,"WorkSkills":3},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[85,98,93,89,96]},
    {"id":89,"firstName":"Miguel","lastName":"Nunez","gender":"MALE","teacherId":4,"scores":{"Reading":5,"Writing":4,"Math":3,"Behavior":3,"WorkSkills":4},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":1,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[88,96,99]},
    {"id":90,"firstName":"Grace","lastName":"Robertson","gender":"FEMALE","teacherId":4,"scores":{"Reading":9,"Writing":6,"Math":8,"Behavior":9,"WorkSkills":9},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":91,"firstName":"Jason","lastName":"Meyer","gender":"MALE","teacherId":4,"scores":{"Reading":8,"Writing":5,"Math":8,"Behavior":9,"WorkSkills":9},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":92,"firstName":"Abigail","lastName":"Black","gender":"FEMALE","teacherId":4,"scores":{"Reading":7,"Writing":2,"Math":4,"Behavior":8,"WorkSkills":9},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":93,"firstName":"Katherine","lastName":"Nichols","gender":"FEMALE","teacherId":4,"scores":{"Reading":5,"Writing":4,"Math":3,"Behavior":4,"WorkSkills":5},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[85,98,88]},
    {"id":94,"firstName":"Adrian","lastName":"Bishop","gender":"MALE","teacherId":4,"scores":{"Reading":7,"Writing":6,"Math":8,"Behavior":3,"WorkSkills":4},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[83,96,108]},
    {"id":95,"firstName":"Brooke","lastName":"Mills","gender":"FEMALE","teacherId":4,"scores":{"Reading":6,"Writing":6,"Math":4,"Behavior":9,"WorkSkills":9},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":96,"firstName":"Peter","lastName":"Nguyen","gender":"MALE","teacherId":4,"scores":{"Reading":5,"Writing":3,"Math":4,"Behavior":2,"WorkSkills":3},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":1,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":1},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[89,102,108,94,88,109]},
    {"id":97,"firstName":"Makayla","lastName":"Watkins","gender":"FEMALE","teacherId":4,"scores":{"Reading":8,"Writing":6,"Math":8,"Behavior":5,"WorkSkills":5},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":98,"firstName":"Zoey","lastName":"Harris","gender":"FEMALE","teacherId":4,"scores":{"Reading":4,"Writing":3,"Math":4,"Behavior":4,"WorkSkills":5},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[85,93,88]},
    {"id":99,"firstName":"Jonah","lastName":"Harvey","gender":"MALE","teacherId":4,"scores":{"Reading":4,"Writing":2,"Math":3,"Behavior":3,"WorkSkills":3},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[89]},
    {"id":100,"firstName":"Riley","lastName":"Olson","gender":"FEMALE","teacherId":4,"scores":{"Reading":2,"Writing":3,"Math":2,"Behavior":9,"WorkSkills":9},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":1,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":101,"firstName":"Nicole","lastName":"Weaver","gender":"FEMALE","teacherId":4,"scores":{"Reading":7,"Writing":5,"Math":8,"Behavior":6,"WorkSkills":6},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[83]},
    {"id":102,"firstName":"Spencer","lastName":"Fuller","gender":"MALE","teacherId":4,"scores":{"Reading":9,"Writing":1,"Math":3,"Behavior":1,"WorkSkills":1},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[96,108,109]},
    {"id":103,"firstName":"Raymond","lastName":"Hansen","gender":"MALE","teacherId":4,"scores":{"Reading":8,"Writing":5,"Math":8,"Behavior":9,"WorkSkills":5},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":104,"firstName":"Landon","lastName":"Carlson","gender":"MALE","teacherId":4,"scores":{"Reading":4,"Writing":3,"Math":8,"Behavior":6,"WorkSkills":5},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":105,"firstName":"Isaac","lastName":"Jacobs","gender":"MALE","teacherId":4,"scores":{"Reading":8,"Writing":6,"Math":8,"Behavior":7,"WorkSkills":9},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":106,"firstName":"Hunter","lastName":"Graham","gender":"MALE","teacherId":4,"scores":{"Reading":6,"Writing":3,"Math":8,"Behavior":6,"WorkSkills":6},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":1,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":107,"firstName":"Amelia","lastName":"Chavez","gender":"FEMALE","teacherId":4,"scores":{"Reading":8,"Writing":2,"Math":8,"Behavior":5,"WorkSkills":3},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[]},
    {"id":108,"firstName":"Noah","lastName":"Myers","gender":"MALE","teacherId":4,"scores":{"Reading":8,"Writing":5,"Math":8,"Behavior":3,"WorkSkills":6},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":0,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[102,96,94]},
    {"id":109,"firstName":"Jacob","lastName":"Middleton","gender":"MALE","teacherId":4,"scores":{"Reading":6,"Writing":2,"Math":4,"Behavior":3,"WorkSkills":3},"tags":{"GT":0,"GPV":0,"IEP":0,"BPL":0,"ELL":0,"RCC":0,"RT":0,"SPE":0,"FOF":1,"PT":0,"KLG":0,"BEN":0},"targetTeacherId":null,"combinedStudentIds":[],"separatedStudentIds":[85,102,96]},
]

    
        var studentFactoryList = []
        // @param id                    number
        // @param firstName             String
        // @param lastName              String
        // @param gender                String
        // @param teacherID             Number
        // @param scores                Object
        // @param tags                  Object
        // @param targetTeacherId       Number
        // @param combinedStudentIds    Array
        // @param seperatedStudentIds   Array


        //academicAvg
        //lifeSkillsAvg
        //ranking
        var Student = function(id, firstName, lastName, gender, teacherId, scores, tags, targetTeacherId, combinedStudentIds,separatedStudentIds){
            this.id = id
            this.firstName   = firstName
            this.lastName  = lastName
            this.gender   = gender
            this.teacherId = teacherId
            this.scores    = scores
            this.tags    = tags 
            this.targetTeacherId = targetTeacherId
            this.combinedStudentIds = combinedStudentIds
            this.separatedStudentIds =separatedStudentIds

            //calculated property values
            this.academicAvg = Math.round( ( (scores['Reading'] + scores['Writing'] + scores['Math']) /3 ) , -1)
            this.lifeSkillsAvg = Math.round( ( (scores['Behavior'] + scores['WorkSkills'])/2 ), -1)

            var rankCalculator = function (aAvg, lAvg) {
                var rank = 0
                var rankColor = ''
                if (lAvg <=2) {
                    rank = lAvg
                    rankColor = 'Red'
                } else if (lAvg === 3){
                    rank = lAvg
                    rankColor = 'Yellow'
                } else if (aAvg <= 3) {
                    rank = aAvg + 3
                    rankColor = 'Orange'
                } else if (aAvg <= 6) {
                    rank = aAvg + 3
                    rankColor = 'Green'
                } else if (aAvg <= 9) {
                    rank = aAvg + 3
                    rankColor = 'Purple'
                }

                    
                return {
                    rank : rank,
                    rankColor: rankColor,
                }

            }
            this.ranking = rankCalculator(this.academicAvg, this.lifeSkillsAvg)
            
            // Push our new student object into our list of students
            studentFactoryList.push(this)
        }

        rawStudentObjectList.forEach(function(rawStudentObject){
            new Student (rawStudentObject.id,
                            rawStudentObject.firstName,
                            rawStudentObject.lastName,
                            rawStudentObject.gender,
                            rawStudentObject.teacherId,     
                            rawStudentObject.scores,
                            rawStudentObject.tags,
                            rawStudentObject.targetTeacherId,
                            rawStudentObject.combinedStudentIds,
                            rawStudentObject.seperatedStudentIds
                        )
        })// created roaster of students for this grade
        
        
        

        // //verify the teacher IDs
        // var teacherIdList = studentFactoryList.map(function(element){
        //     return element.teacherId
        // })
        //     console.log( _.unique(teacherIdList))

        // //Boys and Girls
        // var gradeLevelMaleStudents = studentFactoryList.filter(function(element){
        //     return element.gender === 'MALE'
        // })
        // var gradeLevelFemaleStudents = studentFactoryList.filter(function(element){
        //     return element.gender === 'FEMALE'
        // })
        // console.log('Male count:', gradeLevelMaleStudents.length)
        // console.log('Female count:', gradeLevelFemaleStudents.length)


        
        var studentBlockFactoryList = []       //Array of 2 student Block objects
        // @param label                 String: "Boys" or "Girls"
        // @param allowedGender         Array: [ 'boy'] or ['girl']
        // @param studentList           Array: of student objects
        var StudentBlock = function (label, allowedGender, studentList) {
            this.label = label
            this.allowedGender = allowedGender
            this.studentList = studentList
            console.log('studentList length from Block Factory:', studentList.length)
            
            //push our new studentBlock object into our list of Blocks
            studentBlockFactoryList.push(this)
        }

        var classRoomFactoryList = []
        //@param id             //Number
        //@param teacher        //string
        //@param expand         //boolean
        //@param list           //the full grade level array of students
        
        //@param studentBlock   //array of studentList objects
        //@param academic       //object academic scores {academicAvg: ,read: ,math: , writing: ,}
        //@param lifeSkills     //object of life skills scores {lifeSkillsAvg: , behavior: , workSkills: ,}
        //@param tags                  //array of NotDefinedYet
        //@param lastTeacher           //array of NotDeinedYet
        var ClassRoom = function (id, teacher, expand, list) {
            this.id             = id
            this.teacher        = teacher
            this.expand         = expand 
            
                    
                    
                    var students = list.filter(function(element){
                                        return element.teacherId === id
                                        })

                    var maleBlock = new StudentBlock('Boys', 'MALE', list.filter(function(element){
                                        return (element.teacherId  === id && element.gender === 'MALE')
                                        }))

                    var femaleBlock = new StudentBlock('Girls', 'FEMALE', list.filter(function(element){
                                        return (element.teacherId  === id && element.gender === 'FEMALE')
                                        }) )


            this.studentBlocks = [maleBlock, femaleBlock]
            
            var AcademicCalculator = function () {
                var academicAvg = 0
                var read = 0
                var math = 0
                var writing = 0

                students.forEach(function(element){
                            read    += element.scores['Reading']
                            math    += element.scores['Writing']
                            writing += element.scores['Math']
                        })
                academicAvg = Math.round( (read + math + writing)/ (3 * students.length) )

                return {
                        academicAvg : academicAvg,
                        read : read/students.length,
                        math : math/students.length,
                        writing : writing/students.length,
                        }
            }

            this.academic       = AcademicCalculator()

            var lifeSkillsCalculator     = function () {
                var lifeSkillsAvg = 0
                var behavior = 0
                var workSkills = 0
                students.forEach(function(element){
                    behavior    += element.scores['Behavior']
                    workSkills    += element.scores['WorkSkills']
                    
                })
                lifeSkillsAvg = Math.round( (behavior + workSkills)/ (2 * students.length) )

                return {
                            lifeSkillsAvg : lifeSkillsAvg,
                            behavior : behavior/students.length,
                            workSkills : workSkills/students.length,
                        }

            }
            
            this.lifeSkills      = lifeSkillsCalculator()

            this.tags          = []
            
            this.lastTeacher    = [] 

            //push our new classRoom object into our list of classRooms 
            classRoomFactoryList.push(this)

        } 

        //compose classRooms based on teacher IDs
        var classRoom1 = new ClassRoom(1, 'Jessica', true, studentFactoryList)
        var classRoom2 = new ClassRoom(2, 'Gordon', true, studentFactoryList)
        var classRoom3 = new ClassRoom(3, 'Gabriel',true, studentFactoryList)
        var classRoom4 = new ClassRoom(4, 'Marie', true, studentFactoryList)


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

        SchoolGrade('Grade3', 3, classRoomFactoryList)




		return {
				Student     : Student,
				studentFactoryList :studentFactoryList,
                schoolGradeFactoryList : schoolGradeFactoryList,
				}
}])







                // function studentProfileGenerator () {
                //     studentFactoryList.forEach(function(element){
                //         console.log(element.id)
                //         // console.log(element.firstName)
                //         // console.log(element.lastName)
                //         // console.log(element.gender)
                //         // console.log(element.teacherId)
                //         // console.log(element.scores)
                //         //     for (var key in element.scores) {
                //         //         console.log('key:', key)
                //         //         console.log('value:', element.scores[key])
                //         //     }
                //         //     console.log(element.scores['Reading'])
                //         //     console.log(element.scores['Writing'])
                //         //     console.log(element.scores['Math'])
                //         //     console.log(element.scores['Behavior'])
                //         //     console.log(element.scores['WorkSkills'])
                //         // console.log('Tags:', element.tags)
                //         //     for (var key in element.tags) {
                //         //         console.log('key:', key)
                //         //         console.log('value:', element.tags[key])
                //         //     }

                //         // console.log(element.targetTeacherId)
                //         // console.log(element.combinedStudentIds)
                //         // console.log(element.separatedStudentIds)
                //         //     element.separatedStudentIds.forEach(function(seperatedId){
                //         //         console.log(seperatedId)
                //         //     })
                //         console.log('**********************')
                //         var academicAvg = Math.round( ( (element.scores['Reading'] + element.scores['Writing'] + element.scores['Math']) /3 ) , -1)
                //         console.log('Academic Avg:' , academicAvg)
                //         var lifeSkillsAvg = Math.round( ( (element.scores['Behavior'] + element.scores['WorkSkills'])/2 ), -1)
                //         console.log('lifeSkillsAvg:', lifeSkillsAvg)

                //         console.log('**********************')
                //         console.log('**********************')
                //         console.log('**********************')



                //     })
                //     // return (element.score.Reading + element.score.Writing + element.scores.Math) /3
                //      console.log('Total Number of Students in this Grade:', studentFactoryList.length)
                    
                     
                // }


                // studentProfileGenerator()