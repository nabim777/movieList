Feature: sign up
    As a user
    I want to create my account
    So that I can use the system


    Scenario: sign up sucessfully
        Given user browsed to sign up page
        When user enters the following details
            | username         | nabinale1        |
            | email            | nabin1@gmail.com |
            | sex              | male            |
            | password         | 123456          |
            | confirm password | 123456          |
            | Date of Birth    | 10/10/1999      |
        Then user should see the message "You have been successfuly registered"