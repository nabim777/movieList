Feature: login
    As a user
    I want to login to the system
    So that I can choose a movie to watch


    Background:
        Given the user has browsed to the login page


    Scenario: login with valid username and valid password
        When user logs in with username "nabinale" and password "123456"
        Then user should redirect to the homepage


    Scenario Outline: login with invalid username and invalid password
        When user logs in with username "<username>" and password "<password>"
        Then user should see the error message "<message>"
        Examples:
            | username      | password  | message                      |
            | nabinale      | 1234567   | Login failed. wrong password |
            | nabinalemagar | 123456789 | Login failed. no such user   |
            | nabinalemagar | 12345678  | Login failed. no such user   |
