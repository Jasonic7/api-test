$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\features\\Viva_TA_Exercise_API.feature");
formatter.feature({
  "name": "VivaWallet - Test Automation exercise - API",
  "description": "  As a user\n  I want to retrieve book information based on ISBN code.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Book Author\u0027s name based on ISBN - API",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Book API service",
  "keyword": "Given "
});
formatter.step({
  "name": "I request ISBN\u0027s code \"\u003ccode\u003e\" from server",
  "keyword": "When "
});
formatter.step({
  "name": "Server response contains author\u0027s \"\u003cauthor\u003e\" name",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "code",
        "author"
      ]
    },
    {
      "cells": [
        "1742203426",
        "Korina Miller"
      ]
    },
    {
      "cells": [
        "1438105061",
        "Zoran Failure"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Book Author\u0027s name based on ISBN - API",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Book API service",
  "keyword": "Given "
});
formatter.match({
  "location": "testBookInfoModules.add_current_api_service()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request ISBN\u0027s code \"1742203426\" from server",
  "keyword": "When "
});
formatter.match({
  "location": "testBookInfoModules.i_request_ISBN_s_code_from_server(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Server response contains author\u0027s \"Korina Miller\" name",
  "keyword": "Then "
});
formatter.match({
  "location": "testBookInfoModules.server_response_contains_author_s_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Book Author\u0027s name based on ISBN - API",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Book API service",
  "keyword": "Given "
});
formatter.match({
  "location": "testBookInfoModules.add_current_api_service()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request ISBN\u0027s code \"1438105061\" from server",
  "keyword": "When "
});
formatter.match({
  "location": "testBookInfoModules.i_request_ISBN_s_code_from_server(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Server response contains author\u0027s \"Zoran Failure\" name",
  "keyword": "Then "
});
formatter.match({
  "location": "testBookInfoModules.server_response_contains_author_s_name(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Step failed: org.junit.ComparisonFailure: expected:\u003cZoran [Failure]\u003e but was:\u003cZoran [Pavlovic]\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat modules.testBookInfoModules.server_response_contains_author_s_name(testBookInfoModules.java:45)\r\n\tat ✽.Server response contains author\u0027s \"Zoran Failure\" name(src\\test\\features\\Viva_TA_Exercise_API.feature:8)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": ": Verify e-Book availability based on ISBN - API",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Book API service",
  "keyword": "Given "
});
formatter.step({
  "name": "I request ISBN\u0027s code \"\u003ccode\u003e\" from server",
  "keyword": "When "
});
formatter.step({
  "name": "Server response contains ebook \"\u003cstatus\u003e\" availability",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "code",
        "status"
      ]
    },
    {
      "cells": [
        "1742203426",
        "false"
      ]
    },
    {
      "cells": [
        "1438105061",
        "false"
      ]
    }
  ]
});
formatter.scenario({
  "name": ": Verify e-Book availability based on ISBN - API",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Book API service",
  "keyword": "Given "
});
formatter.match({
  "location": "testBookInfoModules.add_current_api_service()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request ISBN\u0027s code \"1742203426\" from server",
  "keyword": "When "
});
formatter.match({
  "location": "testBookInfoModules.i_request_ISBN_s_code_from_server(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Server response contains ebook \"false\" availability",
  "keyword": "Then "
});
formatter.match({
  "location": "testBookInfoModules.server_response_contains_ebook_availability(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": ": Verify e-Book availability based on ISBN - API",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Book API service",
  "keyword": "Given "
});
formatter.match({
  "location": "testBookInfoModules.add_current_api_service()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request ISBN\u0027s code \"1438105061\" from server",
  "keyword": "When "
});
formatter.match({
  "location": "testBookInfoModules.i_request_ISBN_s_code_from_server(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Server response contains ebook \"false\" availability",
  "keyword": "Then "
});
formatter.match({
  "location": "testBookInfoModules.server_response_contains_ebook_availability(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": ": Verify pdf availability based on ISBN - API",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Book API service",
  "keyword": "Given "
});
formatter.step({
  "name": "I request ISBN\u0027s code \"\u003ccode\u003e\" from server",
  "keyword": "When "
});
formatter.step({
  "name": "Server response contains pdf access \"\u003cstatus\u003e\" availability",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "code",
        "status"
      ]
    },
    {
      "cells": [
        "1742203426",
        "true"
      ]
    },
    {
      "cells": [
        "1438105061",
        "true"
      ]
    }
  ]
});
formatter.scenario({
  "name": ": Verify pdf availability based on ISBN - API",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Book API service",
  "keyword": "Given "
});
formatter.match({
  "location": "testBookInfoModules.add_current_api_service()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request ISBN\u0027s code \"1742203426\" from server",
  "keyword": "When "
});
formatter.match({
  "location": "testBookInfoModules.i_request_ISBN_s_code_from_server(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Server response contains pdf access \"true\" availability",
  "keyword": "Then "
});
formatter.match({
  "location": "testBookInfoModules.server_response_contains_pdf_access_availability(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": ": Verify pdf availability based on ISBN - API",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Book API service",
  "keyword": "Given "
});
formatter.match({
  "location": "testBookInfoModules.add_current_api_service()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request ISBN\u0027s code \"1438105061\" from server",
  "keyword": "When "
});
formatter.match({
  "location": "testBookInfoModules.i_request_ISBN_s_code_from_server(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Server response contains pdf access \"true\" availability",
  "keyword": "Then "
});
formatter.match({
  "location": "testBookInfoModules.server_response_contains_pdf_access_availability(String)"
});
formatter.result({
  "status": "passed"
});
});