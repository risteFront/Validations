angular.module('myApp')
.controller('ValidationCtrl',['$scope',function($scope){
  this.tab = 1;
  this.selectTab = function(setTab){
    this.tab = setTab;
  }
  this.isSelected = function(checkTab){
    return this.tab === checkTab;
  }
  this.procced = function(index){
    if(index <= $scope.tabs.length){
        return this.tab = index
    
           $scope.$watch('tab',function(){
            if(this.tab === $scope.tabs.length){
            $scope.buttonLabel = "Finish";    
             }else{
                $scope.buttonLabel = "Next";
             }
         })

         }
    }
    this.back = function(index){
        if(index > 0){
            return this.tab = index
        }
    }
  
 
  $scope.tabIndex = 0;
  $scope.showme= false;
  $scope.buttonLabel = "Next";
  $scope.tabs = [
    {
     heading:"#1: Problem to Solve or Goal to Achieve",
     content:"State the problem you wish to solve in terms of a goal you want to achieve. Describe how lives will be changed or improved. Talk about why it is worth it to solve this problem. What makes this a goal worth trying to achieve.", 
     active: true },
    {
     heading:"#2 Proposed Small Test Solution (MVP)",
     content:"Define the smallest possible solution (Minimal Viable Product, MVP) that can be used to see the start of your goals realized or the problem solved. Is there a small step that could be tested to see if this idea has any viability.",
     active: true  },
    {
     heading:'#3 Unique Value Proposition: A "mini-business plan"',
     content:"Define the smallest possible solution (Minimal Viable Product, MVP) that can be used to see the start of your goals realized or the problem solved. Is there a small step that could be tested to see if this idea has any viability." },
    {
     heading:"#4 Measurements: To see in a small way if this can expand.",
     content:"Identify some specific ways in which you can measure if you MVP is working. Use both small scale measurements (to test feasibility) and then identify large scale measurements (can this expand)."
    },
    { 
    heading:"#5 Personas: Who is the audience or beneficiary.",
    content:"Who are the people who will most benefit from the development of this project. Describe a few of these people using some standardized persona approaches. Identify who some of the “early adopters” would be."
    },
    {
    heading:"#6 Pathways: Connecting with your audience/users",
    content:"What are some identified pathways in which we can get to our target personas. Identify multiple channels. Rank the channels in terms of what makes this unique."
    },
    {
    heading:"#7 Uniqueness: What make's this different.",
    content:"In what way is what we’re doing different than anything else that is out there. Is this needed or do we just need to adapt something else. This is a summary paragraph as to why this is so important."
    },
    {
    heading:"#8 Human Resources: People we can count on.",
    content:"Who are the people that are needed to pull this off. A brief summary of the various roles and the type of people needed for this role"
    },
    {
    heading:"#9 Financial/Asset Resources: What do you have on hand or need.",
    content:"What will it take to pull this together. How much money or other types of resources (space, product, etc) to accomplish the MVP."
    },
    {
    heading:"#10 Timeline: What do you see the next few weeks/months looking like.",
    content:"Put together a simple timeline to get us to the point where we can fully evaluate the MVP against the designated measurements."
    }
    
  ];
  $scope.nameBtn= [
  {
    name:"Problem"
  },
  {name:"Small Test"},
  {name:"Unique Value Prop"},
  {name:"Measurements"},
  {name:"Personas"},
  {name:"Pathways"},
  {name:"Uniqueness"},
  {name:"Human Resource"},
  {name:"Finance/Asset"},
  {name:"Timeline"}
  ]

 

}])