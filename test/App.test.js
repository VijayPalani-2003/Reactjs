module.exports = {

  "Testing Signin Page for Applicant": function (browser) {
    browser.url(browser.launch_url)
    .waitForElementVisible('body')
    .click("#signupLink")
    .setValue("#email","john@gmail.com")
    .setValue("#password","John@123")
    .click("#submitButton")
    .assert.textContains("#errorMessage","Please fill all the input fields")
    .setValue("#confirmpassword","Jonn@123")
    .setValue("#name","John Doe")
    .setValue("#age", 22)
    .setValue("#mobile", 9876543210)
    .setValue("#address", "no: 10, mg road, chennai")
    .setValue("#markPercentage",95)
    .click("#submitButton")
    .assert.textContains("#errorMessage","Confirm Password does not match")
    .setValue("#confirmpassword","John@123")
    .click("#submitButton")
    .pause(500)

  },

    "Testing Login Page for Applicant": function (browser) {
      browser.url(browser.launch_url)
      .waitForElementVisible('body')
      .assert.textContains("nav > h3","Student Admission Portal")  
      .assert.textContains("#loginHeader","Applicant Login")
      
      .setValue("#userEmail","random@gmail.com") //Unregistered email
      .setValue("#userPassword","random@123")
      .click("#loginButton")
      .assert.textContains("#errorMessage","Email not registered")
      
      .setValue("#userEmail","john@gmail.com")
      .setValue("#userPassword","random@123") //Incorrect password
      .click("#loginButton")
      .assert.textContains("#errorMessage","Password is incorrect")
      
      .setValue("#userEmail","john@gmail.com") //Valid credentials
      .setValue("#userPassword","John@123")
      .click("#loginButton") 
      .assert.urlEquals('http://localhost:8000/apply')
    },

    "Testing Navbar in applicant page": function (browser) {
      browser
      .assert.textContains("nav > ul > li:nth-of-type(1) > a","Apply Course")
      .assert.attributeContains("nav > ul > li:nth-of-type(1) > a","href","/apply")
      .assert.textContains("nav > ul > li:nth-of-type(2) > a","Application Status")
      .assert.attributeContains("nav > ul > li:nth-of-type(2) > a","href","/status")
      .assert.textContains("nav > ul > li:nth-of-type(3)","User: John Doe")
      .assert.textContains("nav > ul > li:nth-of-type(4) > button","Logout")
    },

    "Testing Apply page of applicants": function (browser) {
      const courseDetails=[
        ["1","Civil Engineering","2"],
        ["2","Information Technology","40"],
        ["3","Mechanical Engineering","53"],
        ["4","Electrical Engineering","35"],
        ["5","Automobile Engineering","24"]
      ]
      for(let i=1;i<=3;i++){
        for(let j=1;j<=3;j++){
          browser.assert.textContains('tbody > tr:nth-of-type('+i+') > td:nth-of-type('+j+')',courseDetails[i-1][j-1])
        }
      }

      browser
      .click("tbody > tr:nth-of-type(1) > td:nth-of-type(4) > button") //Applying course 1
      .pause(1000)
      .acceptAlert()
     
      .click("tbody > tr:nth-of-type(2) > td:nth-of-type(4) > button")  //Applying course 2
      .pause(1000)
      .acceptAlert();
    },

    "Testing Status page of applicants": function (browser) {
      browser.click("nav > ul > li:nth-of-type(2) > a")
      .assert.urlEquals('http://localhost:8000/status')
      const courseDetails=[
        ["1","Civil Engineering","Pending"],
        ["2","Information Technology","Pending"]
      ]
      for(let i=1;i<=2;i++){
        for(let j=2;j<=4;j++){
          browser.assert.textContains('tbody > tr:nth-of-type('+i+') > td:nth-of-type('+j+')',courseDetails[i-1][j-2])
        }
      }
      browser
      .click("nav > ul > li:nth-of-type(4) > button") //Logout
      .assert.urlEquals('http://localhost:8000/')
    },

    "Testing Login Page for Admin": function (browser) {
      browser.url(browser.launch_url)
      .waitForElementVisible('#userType')
      .click("#userType")
      .assert.textContains("#loginHeader","Admin Login")
            
      .setValue("#userEmail","john@gmail.com") //Invalid credentials
      .setValue("#userPassword","John@123")
      .click("#loginButton") 
      .assert.textContains("#errorMessage","Email not registered")

      .setValue("#userEmail","admin@abz.com") //Valid credentials
      .setValue("#userPassword","Admin@123")
      .click("#loginButton") 
      .assert.urlEquals('http://localhost:8000/applications')
    },

    "Testing Navbar in admin page": function (browser) {
      browser
      .assert.textContains("nav > ul > li:nth-of-type(1) > a","Applications")
      .assert.attributeContains("nav > ul > li:nth-of-type(1) > a","href","/applications")
      .assert.textContains("nav > ul > li:nth-of-type(2) > a","Add Seats")
      .assert.attributeContains("nav > ul > li:nth-of-type(2) > a","href","/addseats")
      .assert.textContains("nav > ul > li:nth-of-type(3)","User: Admin")
      .assert.textContains("nav > ul > li:nth-of-type(4) > button","Logout")

    },

    "Testing Applications page of admin": function (browser) {
      const courseDetails=[
        ["1","Civil Engineering","John Doe","john@gmail.com","95"],
        ["2","Information Technology","John Doe","john@gmail.com","95"],
      ]
      for(let i=1;i<=2;i++){
        for(let j=2;j<=6;j++){
          browser.assert.textContains('#newApplicationsTable > tbody > tr:nth-of-type('+i+') > td:nth-of-type('+j+')',courseDetails[i-1][j-2])
        }
      }

      browser
      .assert.not.elementPresent("#approvedApplicationsTable")
      //Rejecting course 2
      .click("#newApplicationsTable > tbody > tr:nth-of-type(2) > td:nth-of-type(7) > button:nth-of-type(2)")
      //Approving course 1
      .click("#newApplicationsTable > tbody > tr:nth-of-type(1) > td:nth-of-type(7) > button:nth-of-type(1)")
      .pause(1200)
      .waitForElementVisible("#approvedApplicationsTable")
      const approvedCourses=[
        ["1","Civil Engineering","John Doe","john@gmail.com","95"],
      ]
      for(let i=1;i<=1;i++){
        for(let j=2;j<=6;j++){
          browser.assert.textContains('#approvedApplicationsTable > tbody > tr:nth-of-type('+i+') > td:nth-of-type('+j+')',approvedCourses[i-1][j-2])
        }
      }
    },

    "Testing AddSeats page of admin": function (browser) {
      browser.click("nav > ul > li:nth-of-type(2) > a")
      .assert.urlEquals('http://localhost:8000/addseats')
      .waitForElementVisible("#courseSelect")
      .pause(1000)
      .assert.textContains("#courseSelect > option:nth-of-type(2)","Civil Engineering (Id: 1)")
      .assert.textContains("#courseSelect > option:nth-of-type(3)","Information Technology (Id: 2)")
      .assert.textContains("#courseSelect > option:nth-of-type(4)","Mechanical Engineering (Id: 3)")
      .assert.textContains("#courseSelect > option:nth-of-type(5)","Electrical Engineering (Id: 4)")
      .assert.textContains("#courseSelect > option:nth-of-type(6)","Automobile Engineering (Id: 5)")
      .setValue("#courseSelect","1")
      .setValue("#newSeatCount",10)
      .click("#submitButton")
      .pause(1000)
      .acceptAlert()
    }
}