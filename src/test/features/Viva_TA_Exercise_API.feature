Feature: Test Automation exercise - API
  As a user
  I want to retrieve book information based on ISBN code.

  Scenario Outline: Verify Book Author's name based on ISBN - API
    Given Book API service
    When I request ISBN's code "<code>" from server
    Then Server response contains author's "<author>" name

    Examples:
    | code      | author |
    | 1742203426| Korina Miller |
    | 1438105061| Zoran Failure |


  Scenario Outline: : Verify e-Book availability based on ISBN - API
    Given Book API service
    When I request ISBN's code "<code>" from server
    Then Server response contains ebook "<status>" availability

    Examples:
      | code      | status |
      | 1742203426| false |
      | 1438105061| false |


  Scenario Outline: : Verify pdf availability based on ISBN - API
    Given Book API service
    When I request ISBN's code "<code>" from server
    Then Server response contains pdf access "<status>" availability

    Examples:
      | code      | status |
      | 1742203426| true |
      | 1438105061| true |
