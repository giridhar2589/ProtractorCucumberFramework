Feature: automating the basic cucumber Framework
@Calculator
Scenario: Test case  for add functionality 
Given  I will nagivate to the calc website
When  adding two numbers "4" and "6"
Then the output displayed should be "10"

@Calculator
Scenario: Test case  for add functionality 
#Given  I will nagivate to the calc website
When  adding two numbers "6" and "6"
Then the output displayed should be "12"

@Calculator
Scenario: Test case  for add functionality 
#Given  I will nagivate to the calc website
When  adding two numbers "6" and "3"
Then the output displayed should be "11"