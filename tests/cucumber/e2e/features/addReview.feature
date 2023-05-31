Feature: add reviews
    As a user
    I want to write a review for a movie
    So that other user can view my review


    Scenario: add reviews for a  movie
        Given the user has browsed to the login page
        And the user has sucessfully logged in with username "nabinale" and password "123456"
        And the user has browsed to the details page of "Jhola"
        When the user adds a review with the content "thikaii"
        Then review "thikaii" should be displayed at reviews list