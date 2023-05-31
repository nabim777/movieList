Feature: add to list
    As a user
    I want to add the movie in list
    So that I can keep track of movies


    Background:
        Given the user has browsed to the login page
        And the user has sucessfully logged in with username "nabinale" and password "123456"


    Scenario: add the movie to the list
        Given the user has searched movie "Jhola"
        And the user has redirect to detail page of movie "Jhola"
        When user clicks on add to list
        Then the user should see the movie "Jhola" in the list


    Scenario Outline: edit the add to list
        Given the user has added the movie "Jhola" to the list
        When the user updates the movie status to "Completed"
        Then the user should see the movie "Jhola" in the completed movie list tab



