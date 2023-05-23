Feature: search movie
    As a user
    I want to search movie
    So that I can view details of movie


    Scenario: search movie by name
        Given user has browsed the homepage
        When user searches for movie "Jhola"
        Then user should see the movie "Jhola" in the search list