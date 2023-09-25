# startup
startup for the cs 260 Fall2023 

## Introduction (Elevator Pitch)

We envision a future where 3D printing becomes a driving force, transforming numerous industries and everyday facets of our lives. Whether it's crafting prototypes for groundbreaking innovations or crafting tailor-made components, the potential of 3D printing is limitless, offering innovative solutions to both common challenges and intricate problems.

Picture a world where the power of 3D printing is accessible to all, irrespective of their background or resources. This vision is at the heart of **Innovations Made Possible**, a company dedicated to democratizing 3D printing and ensuring its availability to everyone.

Yet, the world of 3D printing can appear daunting and costly, often presenting a steep learning curve for those lacking specialized expertise. This is precisely where our expertise shines.

At Innovations Made Possible, we provide an extensive array of 3D printing services, encompassing FDM, SLS, and SLA technologies. Moreover, our team comprises seasoned 3D designers ready to assist you in realizing your vision, be it through prototyping or full-scale manufacturing.

## Web Structure 

![First Website Layout](https://startup/images/Innovations_made_possible-Possible_web-design.jpg) 

### Technology specifications
This following section provides a more detailed and accurate description of the implementation of authentication, database data handling, and WebSocket data updates in a web application using aws for the domain "innovation-made-possible.com"

#### Authentication:
To implement authentication, we can use a simple form to allow users to create an account and log in. The form should include fields for the user's username and password. When the user submits the form, we should securely hash and compare the password with the stored hash in our database to validate the login. If the credentials are valid, we can create a session token or use modern authentication methods like JWT (JSON Web Tokens) for user sessions.

To display the user's username in the header of the web page, we should maintain user sessions using secure methods, such as cookies or tokens. If a valid session exists, we can retrieve the user's information and display their username. If not, we can provide a link to the login page.

#### Database Data:
To implement database data, we can use a relational database to store user's order history, production progress and the 3d model specifications. We use structured query language (SQL) to interact with the database. For example, we can use SQL queries to SELECT, INSERT, UPDATE, or DELETE records in the database.

To retrieve data from the database, we can execute SQL queries that fetch the required records based on specific criteria. Then we process the query results and dynamically render the data on the web page, typically using server-side scripting languages like PHP, Python, or Node.js. This ensures that the data displayed is always up-to-date.

#### WebSocket Data:
To implement WebSocket data, we utilize the WebSocket API. The WebSocket API enables real-time bidirectional communication between the web browser and the server, facilitating instant updates.

To establish this WebSocket connection, we use the WebSocket constructor by providing the WebSocket server's URL. This connection remains open, allowing for efficient communication without the overhead of repeated HTTP requests.

Once a WebSocket connection is established, we can send and receive messages over it. To send a message, we use the send() method. When receiving a message through the onmessage event, we process it accordingly. For example, if we receive a message indicating that another user has submited a request, we can update the requests table on the web page in real-time by appending a new row or making other relevant modifications.

#### Key features
- User authentication and secured login over https
- Database data handling
- WebSocket data updates
- 3D model viewer
- 3D model customization
- 3D model ordering
- 3D model production progress tracking.
- Transaction history.

### Technology stack
- **Frontend: HTML, CSS, JavaScript, WebGL, Three.js**
    I will use the frontend stack to create the 3D model viewer and the 3D model customization interface. The 3D model viewer is implemented using WebGL and Three.js. The 3D model customization interface is implemented using HTML, CSS, and JavaScript. The 3D model viewer and the 3D model customization interface are integrated into the web page using the HTML `<iframe>` element.
- **Backend: Node.js, Express.js, MySQL**
    I will use backend stack to implement the user authentication, database data handling, and WebSocket data updates. The user authentication is implemented using Node.js and Express.js. The database data handling is implemented using Node.js and MySQL. The WebSocket data updates are implemented using Node.js and Express.js.
- **Deployment: AWS, Docker**
    I will use this deployment stack to deploy the web application to the cloud. The web application is deployed to AWS using Docker if needed.
- **Domain: innovations-made-possible.com**
    I will use this domain to host the web application. The domain is registered on AWS Route 53 and managed by AWS Certificate Manager.
- **SSL: AWS Certificate Manager**
    I will create a SSL to secure the web application. The SSL is registered on AWS Certificate Manager and managed by AWS Route 53.I am planning to use the (AWS) Certificate Manager (ACM) for SSL registration
- **DNS: AWS Route 53**
    I will configure the DNS to manage the domain and SSL. The DNS is registered on AWS Route 53 and managed by AWS Certificate Manager.

# Roadmap (Milestones) (Possible Features)
- [x]  AWS account setup 09/23/2023
- [x]  Domain registration 09/23/2023
- [ ]  SSL registration
- [ ]  DNS setup
- [ ]  Web application setup
- [ ]  User authentication
- [ ]  Database data handling
- [ ]  WebSocket data updates
- [ ]  3D model viewer
- [ ]  3D model customization
- [ ]  3D model ordering
- [ ]  3D model production progress tracking
- [ ]  Transaction history



