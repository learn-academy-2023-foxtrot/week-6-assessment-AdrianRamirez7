# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: AR

1. As a Rails developer, I am creating an application with a model called Cohort and a model called Student. The relationship between these models is that a cohort has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: 
It’s important to note that Rails migration do not automatically create an index on the foreign key column or create a foreign key at all, Updating the database with generating a rails model and migrating it to a schema would add the missing foreign key. It is possible to consider adding one manually using method add_foreign_key inside the active records of Cohort model. This will make sure foreign key's join tables. 

Researched answer:
The foreign key would be on the student model. This is because each student belongs to a single cohort. the name of the foreign key would be cohort_id. To fix the mistake, you would need to add a column called cohort_id to the students table. You would also need to add a foreign key constraint to the column, which would ensure that the value in the column references a valid cohort. The syntax in the active records would look like  add_column :students, :cohort_id, and add_foreign_key :students, :cohorts, column: :cohort_id. 

Researched answer:

2. Which RESTful routes must always be passed params?

Your answer:
Some of the most common RESTful routes passed into params are GET index route to sort out results, POST for creating new resources or to send a request of data, and PUT to update and existing resource.   
Researched answer:
Route parameters are vital for defining a route and are mandatory, whereas query parameters are not obligatory. Route parameters pertain to the dynamic components of a URL segment. For instance, if an application has a route called "greet" that requires a string parameter, users can access the "greet" route using a URL like "/greet/". To illustrate, certain scenarios necessitate the use of route parameters in a RESTful route:
When the second segment of the URL signifies a city or a location, it must always denote a city or location. For instance, "/client/clientId/department/departmentId/employees".

3. Name three rails generator commands. What is created by each?

Your answer: The three rail commands are Model, Resource, and Controller. Model is code typically reflects real-world things. This code can hold raw data, or it will define the essential components of your app. Resource is a collection of similar objects, such as articles, users, or products. It can also be thought of as a basic object or model. Controller code acts as a liaison between the Model and the View, receiving user input and deciding what to do with it. It’s the brains of the application, and ties together the model and the view.

Researched answer:
Rails provides a set of commands mainly Model, Resource, and Controller. The Model is created along with its associated files. In Rails, models define the structure of data and manage interactions with the application's database. The Resource serves to generate not only a controller but also related views and resource-specific routes for a specific entity within your application. It becomes especially handy when you intend to establish standard CRUD (Create, Read, Update, Delete) functionality for a particular resource. and lastly the controller generator allows you to craft a controller file designed to manage HTTP requests associated with a specific resource. Optionally, you can create specific actions (methods) within the controller to handle diverse operations. 


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
The method name would be 'index'. Normally and instance variable is defined to help access and display all lists of students.
action: "POST" location: /students
Method name: 'create', this will make a new student record and save the data to the record database.
action: "GET" location: /students/new
Method name: 'new', used to create a new student form.
action: "GET" location: /students/2
Method name: 'show', This url with the id of 2 will display specifc details about the student with this id.
action: "GET" location: /students/2/edit
Method name: 'edit', displays edited details of the specifc student with the id of 2.
action: "PATCH" location: /students/2
Method name: 'Update', updates the forms data and student record.
action: "DELETE" location: /students/2
Method name: 'destroy', grabs the student with the id of 2 and removes this student from the database.
5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

1. As a user, I want to create a personal account with a unique username and a secure password.

2. I want to add new tasks to my to-do list, so I can keep track of what I need to do.

3. I want to mark tasks as completed when I finish them, so I can see my progress.

4. I want to organize my tasks into different categories or lists, like "Work," "Home," or "Personal," to help me stay organized.

5. I want to set due dates for my tasks, so I know when they need to be completed.

6. I want to be able to add additional notes or details to my tasks, so I can remember important information.

7. I want to search for specific tasks and sort them by due date or priority, so I can find what I need quickly.

8. I want to receive reminders or notifications for upcoming tasks, so I don't forget important deadlines.

9. I want to edit or update my tasks in case I make a mistake or need to change something.

10. I want to access my to-do list on my phone, tablet, or computer, so I can manage my tasks from anywhere.