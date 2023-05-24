Feature: logout
    As a user
    I want to logout from my account
    So that I can prevent my account from unauthorized actions


    Scenario: logout from system
        Given the user has browsed to the login page
        And the user has sucessfully logged in with username "nabinale" and password "123456"
        When user logouts from his account
        Then the user should redirected to login page 